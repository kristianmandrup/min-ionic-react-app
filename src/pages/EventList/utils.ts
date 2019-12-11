import moment from "moment";

export const populateEventWithCustomer = (event: any, customer: any) => {
  event.customer = customer;
  return event;
};

const toMilliSec = (event: any) => moment(event.eventDateTime).unix();

const byDate = (a: any, b: any) => {
  const ma = toMilliSec(a);
  const mb = toMilliSec(b);
  return ma - mb;
};

const sortByDate = (items: any) => items.sort(byDate);

export const orderEventsByCreatedDate = (events: any[]) => sortByDate(events);

export const eventAndTypesDisplayedFor = (energyTransferEvents: any[]) => {
  const orderedEvents = orderEventsByCreatedDate(energyTransferEvents);
  const eventsToDisplay = orderedEvents.slice(0, 5);
  const $eventTypes = eventsToDisplay.reduce(($set: any, event: any) => {
    $set.add(event.eventType);
    return $set;
  }, new Set<string>());

  const eventTypes = Array.from<any>($eventTypes);
  return { events: eventsToDisplay, eventTypes };
};

export const sameTypes = (eventTypes: any[], hash: number) => {
  const eventTypesDisplayedStr = eventTypes.join(":");
  const newHash = hashCode(eventTypesDisplayedStr);
  const same = newHash === hash;
  return { same, newHash };
};

export function hashCode(str: string) {
  return str
    .split("")
    .reduce(
      (prevHash: any, currVal: any) =>
        ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
      0
    );
}

export async function asyncReduce(
  array: any[],
  handler: any,
  startingValue: any
) {
  let result = startingValue;

  for (let value of array) {
    // `await` will transform result of the function to the promise,
    // even it is a synchronous call
    result = await handler(result, value);
  }
  return result;
}
