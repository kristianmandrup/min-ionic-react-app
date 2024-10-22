import React, { useReducer, useState } from "react";
import { reducer } from "../../store";
import { IonGrid, IonContent, IonPage, IonHeader, IonText } from "@ionic/react";
import { OneToolbar } from "../../components/OneToolbar";
import { createTransferEventSubscription } from "../../api-calls";
import { useEffect } from "react"; // using hooks
import { getCustomerDataByEmail } from "../../api-calls";
import { DisplayEventList } from "./display";
import { eventAndTypesDisplayedFor, sameTypes } from "./utils";
import { useEventTypes } from "./use-event-types";

const initialState = { energyTransferEvents: [] };

export const EventListSimple: React.FC<any> = (props: any) => {
  let { user } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [eventTypesToDisplay, setEventTypesToDisplay] = useState(
    [] as string[]
  );
  const [hash, setHash] = useState(0);

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

  const eventTypeMap = useEventTypes({ eventTypesToDisplay, hash });
  const { events, eventTypes } = eventAndTypesDisplayedFor(
    energyTransferEvents
  );
  const { same, newHash } = sameTypes(eventTypes, hash);

  if (!same) {
    setHash(newHash);
    setEventTypesToDisplay(eventTypes);
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
            eventsToDisplay={events}
            eventTypeMap={eventTypeMap}
            customer={customer}
          />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
