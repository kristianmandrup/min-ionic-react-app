import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonSlides,
  IonSlide
} from "@ionic/react";
import { Message } from "../interfaces";
import { TypedMessage } from "./messages/TypedMessage";

// Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 1,
  speed: 400
};

// TODO: sort slides by index
export const Slides: React.FC<any> = (props: any) => {
  return (
    <IonSlides pager={true} options={slideOpts}>
      {(props.messages || []).map((message: Message, i: number) => (
        <IonSlide key={message.id || i}>
          <IonCard class="ion-padding slideItem">
            <TypedMessage {...message} />
          </IonCard>
        </IonSlide>
      ))}
    </IonSlides>
  );
};

export const SlideCard: React.FC<any> = ({
  messages,
  title,
  subTitle
}: any) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>{subTitle}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <Slides messages={messages} />
      </IonCardContent>
    </IonCard>
  );
};
