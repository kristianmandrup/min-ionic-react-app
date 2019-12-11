import API, { graphqlOperation } from "@aws-amplify/api";
import {
  createEnergyTransferEvent,
  energyTransferEventType
} from "../../graphql";

export const eventMap: any = {
  SWITCH_STARTED: energyTransferEventType.SWITCH_STARTED,
  OBJECTION: energyTransferEventType.OBJECTION,
  OBJECTION_RESOLVED: energyTransferEventType.OBJECTION_RESOLVED,
  SWITCH_DATE_AGREED: energyTransferEventType.SWITCH_DATE_AGREED,
  SWITCH: energyTransferEventType.SWITCH
};

export async function createNewEnergyTransferEvent(
  energyTransferId: string,
  values: any
) {
  const { eventType, eventMetaData } = values;

  if (!energyTransferId) {
    console.error("createNewEnergyTransferEvent: missing energyTransferId");
    return;
  }
  if (!eventType) {
    console.error("createNewEnergyTransferEvent: missing eventType", {
      eventType
    });
    return;
  }

  const energyTransferEventInput = {
    eventDateTime: new Date().toISOString(),
    eventType: eventType,
    eventMetaData: eventMetaData,
    energyTransferEventEnergyTransferId: energyTransferId
  };

  await API.graphql(
    graphqlOperation(createEnergyTransferEvent, {
      input: energyTransferEventInput
    })
  );
}
