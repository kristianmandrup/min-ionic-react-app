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