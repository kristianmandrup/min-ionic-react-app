import API, { graphqlOperation } from "@aws-amplify/api";
import { onCreateEnergyTransferEvent } from "../graphql/subscriptions";
import { showNotification } from "../notifications";
import { getContentItemForEventType } from "./content";
import humanize from "humanize-string";

export const createTransferEventSubscription = (dispatch: any) =>
  (API.graphql(graphqlOperation(onCreateEnergyTransferEvent)) as any).subscribe(
    {
      next: async (eventData: any) => {
        const energyTransferEvent =
          eventData.value.data.onCreateEnergyTransferEvent;
        const { eventType } = energyTransferEvent;
        const contentItem = await getContentItemForEventType(eventType);
        const { fields } = contentItem;
        const { title, microDescription } = fields;
        const notificationMsg =
          title || microDescription || humanize(eventType);
        console.log("new transfer event received", notificationMsg);
        showNotification(notificationMsg);
        dispatch({
          type: "ENERGY_TRANSFER_EVENT_CREATED",
          energyTransferEvent
        });
      }
    }
  );
