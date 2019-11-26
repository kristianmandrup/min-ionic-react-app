import React, { useReducer, useState } from "react";
import { reducer } from "../../store";
import { IonGrid, IonContent, IonPage, IonHeader, IonText } from "@ionic/react";
// import { EventItem } from "./EventItem";
import { OneToolbar } from "../../components/OneToolbar";
import {
  createTransferEventSubscription,
  getContentItemForEventType
} from "../../api-calls";
import * as _ from "lodash";
import { useEffect } from "react"; // using hooks
import { getCustomerDataByEmail } from "../../api-calls";
import { DisplayEventList } from "./display";
import { orderEventsByCreatedDate, asyncReduce, hashCode } from "./utils";

const initialState = { energyTransferEvents: [] };

export const EventListSimple: React.FC<any> = (props: any) => {
  let { user } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [counter, setCounter] = useState(0);
  const [eventTypeMap, setEventTypeMap] = useState({});
  const [eventTypesToDisplay, setEventTypesToDisplay] = useState(
    [] as string[]
  );
  const [hash, setHash] = useState({});

  // get transferEvents and customer from reducer store
  // customer is managed/updated by App component on Auth signin
  let { energyTransferEvents, customer } = state;
  // subscribes to list of transfer events
  // makes dispatch to reducer to add incoming events
  useEffect(() => {
    if (customer) return;
    console.log("getCustomerDataByEmail", { user });

    // to avoid multiple calls
    getCustomerDataByEmail(dispatch, { user });
  }, [user, customer]);

  useEffect(() => {
    if (!customer) return;
    console.log("create transfer event subscription");

    // @ts-ignore
    const subscription = createTransferEventSubscription(dispatch);
    return () => subscription.unsubscribe();
  }, [customer]);

  if (energyTransferEvents.length === 0) {
    console.log("No energyTransferEvents");
    // return <IonText>No events</IonText>;
  }

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
        eventTypesToDisplay,
        reducer,
        {}
      );

      const $eventTypeMap = await Promise.resolve(eventTypeMapPromises);
      setEventTypeMap($eventTypeMap);
    };

    console.log("fetchEventTypeContentItems", { counter, hash });

    fetchEventTypeContentItems();
  }, [counter, eventTypesToDisplay, hash]);

  setTimeout(() => {
    setCounter(counter + 1);
  }, 8000);

  const orderedEvents = orderEventsByCreatedDate(energyTransferEvents);

  console.log({ orderedEvents });

  const eventsToDisplay = orderedEvents.slice(0, 5);

  const $eventTypes = eventsToDisplay.reduce(($set: any, event: any) => {
    $set.add(event.eventType);
    return $set;
  }, new Set<string>());

  const $eventTypesDisplayed: string[] = Array.from<any>($eventTypes);

  const eventTypesDisplayedStr = $eventTypesDisplayed.join(":");
  const $hash = hashCode(eventTypesDisplayedStr);

  // const eventsToDisplay = [{ type: "event" }];

  const sameEventTypes = _.isEqual(eventTypesToDisplay, $eventTypesDisplayed);
  const sameHash = $hash === hash;

  console.log({
    sameEventTypes,
    sameHash,
    eventsToDisplay,
    eventTypesDisplayedStr,
    $hash,
    hash
  });

  if (!sameHash) {
    setHash($hash);
  }

  if (!sameEventTypes) {
    setEventTypesToDisplay($eventTypesDisplayed);
  }

  if (!customer) {
    return <IonText>No customer</IonText>;
  }

  return (
    <IonPage>
      <IonHeader>
        <OneToolbar />
      </IonHeader>

      <IonContent>
        <IonGrid size-md="6" offset-md="3">
          <DisplayEventList
            eventsToDisplay={eventsToDisplay}
            eventTypeMap={eventTypeMap}
            customer={customer}
          />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
