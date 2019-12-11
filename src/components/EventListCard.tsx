import React from "react";
import { MessageList } from "./MessageList";

export const EventListCard: React.FC<any> = (event: any) => {
  const { messages } = event;
  const eventMessages = (messages || []).map((message: string) => ({
    text: message,
    data: {
      ...event,
      ...(event.eventMetaData || {})
    }
  }));
  // const prettyEventDate = moment(eventDateTime).format("MMM D YYYY - hh:mm:ss");

  return <MessageList messages={eventMessages} />;
};
