import React from "react";
import { IonCard, IonCardContent } from "@ionic/react";
import { Message } from "../interfaces";
import {
  TextMessage
  // TypedMessage
} from "./messages";

const compareIndex = (a: any, b: any) => a.index - b.index;
const orderMessagesByIndex = (messages: any[] = []) =>
  messages.sort(compareIndex);

export const MessageList = ({ messages }: { messages: Message[] }) => (
  <>
    {orderMessagesByIndex(messages).map((message: Message, i: number) => (
      <IonCard className="messageCard" key={message.id || i}>
        <IonCardContent>
          <TextMessage {...message} />
        </IonCardContent>
      </IonCard>
    ))}
  </>
);
