import React from "react";
import { Reading } from "../../interfaces";
import { IonText } from "@ionic/react";

export const ReadingMessage = ({ id, reading }: any) => {
  const { label, value, unit } = reading as Reading;
  return (
    <IonText key={id}>
      {label}: {value} {unit}
    </IonText>
  );
};
