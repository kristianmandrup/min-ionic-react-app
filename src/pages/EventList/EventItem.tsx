import React, { useState, useEffect } from "react";
import { IonRow, IonCol } from "@ionic/react";
import { TypedEventCard } from "./TypedEventCard";

const eventTypeFor = (event: any) => event.eventType;

export const enrichEventWithContentForEventType = async (
  eventTypeContentItem: any,
  event: any
) => {
  const { fields, sys } = eventTypeContentItem;
  const eventTypeObject: any = {
    ...event,
    title: fields.title,
    notification: fields.microDescription,
    ...sys
  };

  const { microDescriptions } = fields;
  // use microDescriptions as initial list of event messages
  eventTypeObject.messages = Array.isArray(microDescriptions)
    ? microDescriptions
    : [];

  return eventTypeObject;
};

export const EventItem: React.FC<any> = ({ event, eventTypeMap }: any) => {
  const [enrichedEvent, setEnrichedEvent] = useState();
  const eventType = eventTypeFor(event);
  const contentItemForEvent = eventTypeMap[eventType];
  useEffect(() => {
    if (!contentItemForEvent) {
      return;
    }

    const createEnrichedEvent = async () => {
      const $enrichedEvent = await enrichEventWithContentForEventType(
        contentItemForEvent,
        event
      );
      setEnrichedEvent($enrichedEvent);
    };
    createEnrichedEvent();
  }, [contentItemForEvent, event]);

  if (!contentItemForEvent) {
    // console.warn(`No content item for ${eventType}`, { event, eventTypeMap });
    return null;
  }

  return (
    <IonRow>
      <IonCol size-md="6" offset-md="3">
        <TypedEventCard {...enrichedEvent} />
      </IonCol>
    </IonRow>
  );
};
