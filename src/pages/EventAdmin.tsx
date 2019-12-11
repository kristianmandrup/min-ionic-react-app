import {
  IonContent,
  IonHeader,
  IonPage,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonItem,
  IonInput,
  IonLabel,
  IonText
} from "@ionic/react";
import React, { useReducer, useState } from "react";
import { reducer } from "../store";
import { createNewEnergyTransferEvent } from "../store";
import { useEffect } from "react"; // using hooks
import { getCustomerDataByEmail } from "../api-calls";
import { OneToolbar } from "../components";

// const isEmpty = (str: string) => str && str.length === 0;

const initialState = {};

export const EventAdmin: React.FC<any> = (props: any) => {
  let { user } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [eventMetaData, setEventMetaData] = useState("{}");
  const [eventCreated, setEventCreated] = useState({} as any);

  let { customer } = state;

  const customerEnergyTransferId = customer && customer.energyTransfer.id;

  // subscribes to list of transfer events
  // makes dispatch to reducer to add incoming events
  useEffect(() => {
    if (!user || customer) return;
    // to avoid multiple calls
    getCustomerDataByEmail(dispatch, { user });
  }, [user, customer]);

  const submitEventType = (eventType: string) => async () => {
    if (!customerEnergyTransferId) {
      console.error("missing customerEnergyTransferId", { customer });
      return;
    }
    if (!eventType) {
      console.error("missing eventType", { eventType });
      return;
    }

    await createNewEnergyTransferEvent(customerEnergyTransferId, {
      eventType,
      eventMetaData
    });
    setEventCreated({ eventType });
  };

  const eventLabelMap: any = {
    SWITCH_STARTED: "Switch started",
    SWITCH_DATE_AGREED: "Switch date agreed",
    SWITCH_COMPLETE: "Switch completed",
    OBJECTION: "Objection",
    OBJECTION_RESOLVED: "Objection resolved",
    METER_READING_REQUESTED: "Meter reading requested",
    METER_READING_SUBMITTED: "Meter reading submitted"
  };

  const eventTypes = Object.keys(eventLabelMap);

  const createdEventType = eventCreated.eventType;

  const notifyText =
    createdEventType && createdEventType.length > 0
      ? `Created event: ${createdEventType}`
      : "";

  return (
    <IonPage>
      <IonHeader>
        <OneToolbar />
      </IonHeader>

      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size-md="6" offset-md="3">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Trigger Event</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonText>{notifyText}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Meta data</IonLabel>
                    <IonInput
                      name="eventMetaData"
                      type="text"
                      value={eventMetaData}
                      onInput={(e: any) => {
                        setEventMetaData(e.target.value);
                      }}
                    />
                  </IonItem>

                  {eventTypes.map((eventType, i) => {
                    const label = eventLabelMap[eventType];
                    return (
                      <IonItem key={"x" + i}>
                        <IonButton
                          className="eventAdminBtn"
                          color="secondary"
                          onClick={submitEventType(eventType)}
                        >
                          {label}
                        </IonButton>
                      </IonItem>
                    );
                  })}
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
