import React from "react";
import { IonText } from "@ionic/react";
import { populateEventWithCustomer } from "./utils";
import { EventItem } from "./EventItem";

export const DisplayEventListNumber = ({ eventsToDisplay }: any) => (
  <>{eventsToDisplay.length}</>
);

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

export const NoEventsToDisplay = () => <IonText>No events</IonText>;

export const DisplayEvents = (props: any) => {
  const { eventsToDisplay } = props;
  return eventsToDisplay.length === 0 ? (
    <NoEventsToDisplay />
  ) : (
    <DisplayEventListNumber {...props} />
  );
};
