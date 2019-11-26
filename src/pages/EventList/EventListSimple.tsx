import React, {
  useReducer
  // useState
} from "react";
import { reducer } from "../../store";
import {
  IonGrid,
  IonContent,
  IonPage,
  IonHeader
  // IonText
} from "@ionic/react";
// import { EventItem } from "./EventItem";
import { OneToolbar } from "../../components/OneToolbar";
// import {
//   createTransferEventSubscription,
//   getContentItemForEventType
// } from "../../api-calls";
// import * as _ from "lodash";
import { useEffect } from "react"; // using hooks
import { getCustomerDataByEmail } from "../../api-calls";
import { DisplayEventListNumber } from "./display";

const initialState = { energyTransferEvents: [] };

export const EventListSimple: React.FC<any> = (props: any) => {
  let { user } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [counter, setCounter] = useState(0);
  // const [eventTypeMap, setEventTypeMap] = useState({});
  // const [eventTypesToDisplay, setEventTypesToDisplay] = useState(
  //   [] as string[]
  // );

  // get transferEvents and customer from reducer store
  // customer is managed/updated by App component on Auth signin
  let {
    // energyTransferEvents,
    customer
  } = state;
  // subscribes to list of transfer events
  // makes dispatch to reducer to add incoming events
  useEffect(() => {
    if (customer) return;
    console.log("getCustomerDataByEmail", { user });

    // to avoid multiple calls
    getCustomerDataByEmail(dispatch, { user });
  }, [user, customer]);

  const eventsToDisplay = [{ type: "event" }];

  console.log({ eventsToDisplay });

  return (
    <IonPage>
      <IonHeader>
        <OneToolbar />
      </IonHeader>

      <IonContent>
        <IonGrid size-md="6" offset-md="3">
          <DisplayEventListNumber eventsToDisplay={eventsToDisplay} />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
