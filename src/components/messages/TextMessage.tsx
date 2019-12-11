import React from "react";
import { IonText } from "@ionic/react";
import { render } from "./render";

export const TextMessage = (message: any) => {
  let { text, data } = message;
  if (data.customer) {
    data = {
      reading: 120,
      ...data,
      ...data.customer
    };
  }

  const $text = (text || "").replace(/\./, "");
  return <IonText>{render($text, data)}</IonText>;
};
