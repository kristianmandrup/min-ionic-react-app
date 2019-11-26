import React, { useReducer, useState } from "react";
import { reducer } from "../../store";
import { IonGrid, IonContent, IonPage, IonHeader, IonText } from "@ionic/react";
import moment from "moment";
import { EventItem } from "./EventItem";
import { OneToolbar } from "../../components/OneToolbar";
import {
  createTransferEventSubscription,
  getContentItemForEventType
} from "../../api-calls";
import * as _ from "lodash";
import { useEffect } from "react"; // using hooks
import { getCustomerDataByEmail } from "../../api-calls";
// import { createContainer } from "unstated-next";

const initialState = { energyTransferEvents: [] };

const populateEventWithCustomer = (event: any, customer: any) => {
  event.customer = customer;
  return event;
};

const toMilliSec = (event: any) => moment(event.eventDateTime).unix();

const byDate = (a: any, b: any) => {
  const ma = toMilliSec(a);
  const mb = toMilliSec(b);
  return ma - mb;
};

const sortByDate = (items: any) => items.sort(byDate);

const orderEventsByCreatedDate = (events: any[]) => sortByDate(events);

export const DisplayEventList = ({
  eventsToDisplay,
  eventTypeMap,
  customer
}: any) => (
  <>
    {eventsToDisplay.map((event: any, i: number) => {
      event = populateEventWithCustomer(event, customer);
      const key = event.id || i;
      return <EventItem key={key} event={event} eventTypeMap={eventTypeMap} />;
    })}
  </>
);

const NoEventsToDisplay = () => <IonText>No events</IonText>;

export const DisplayEvents = (props: any) => {
  const { eventsToDisplay } = props;
  return eventsToDisplay.length === 0 ? (
    <NoEventsToDisplay />
  ) : (
    <DisplayEventList {...props} />
  );
};

async function asyncReduce(array: any[], handler: any, startingValue: any) {
  let result = startingValue;

  for (let value of array) {
    // `await` will transform result of the function to the promise,
    // even it is a synchronous call
    result = await handler(result, value);
  }
  return result;
}

export const EventList: React.FC<any> = (props: any) => {
  let { user } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [counter, setCounter] = useState(0);
  const [eventTypeMap, setEventTypeMap] = useState({});
  const [eventTypesToDisplay, setEventTypesToDisplay] = useState(
    [] as string[]
  );

  // get transferEvents and customer from reducer store
  // customer is managed/updated by App component on Auth signin
  let { energyTransferEvents, customer } = state;
  // subscribes to list of transfer events
  // makes dispatch to reducer to add incoming events
  useEffect(() => {
    if (customer) return;
    // to avoid multiple calls
    getCustomerDataByEmail(dispatch, { user });
  }, [user, customer]);

  useEffect(() => {
    if (!customer) return;
    // @ts-ignore
    const subscription = createTransferEventSubscription(dispatch);
    return () => subscription.unsubscribe();
  }, [customer]);

  setTimeout(() => {
    setCounter(counter + 1);
  }, 5000);

  const orderedEvents = orderEventsByCreatedDate(energyTransferEvents);
  // show latest two events (index: 0, 1)
  const eventsToDisplay = orderedEvents.slice(0, 5);

  const $eventTypes = eventsToDisplay.reduce(($set: any, event: any) => {
    $set.add(event.eventType);
    return $set;
  }, new Set<string>());

  const eventTypesDisplayed: string[] = Array.from<any>($eventTypes);

  useEffect(() => {
    const fetchEventTypeContentItems = async () => {
      const reducer = async (etMap: any, eventType: string) => {
        const eventTypeContentItem = await getContentItemForEventType(
          eventType
        );
        etMap[eventType] = eventTypeContentItem;
        return etMap;
      };

      const eventTypeMapPromises = asyncReduce(
        eventTypesDisplayed,
        reducer,
        {}
      );

      setEventTypeMap(await Promise.resolve(eventTypeMapPromises));
    };

    fetchEventTypeContentItems();
  }, [counter, eventTypesDisplayed]);

  const sameEventTypes = _.isEqual(eventTypesToDisplay, eventTypesDisplayed);

  if (!sameEventTypes) {
    setEventTypesToDisplay(eventTypesDisplayed);
  }

  if (!customer) {
    return <IonText></IonText>;
  }

  return (
    <IonPage>
      <IonHeader>
        <OneToolbar />
      </IonHeader>

      <IonContent>
        <IonGrid size-md="6" offset-md="3">
          <DisplayEvents
            eventsToDisplay={eventsToDisplay}
            eventTypeMap={eventTypeMap}
            customer={customer}
          />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
