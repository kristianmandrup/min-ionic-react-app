import React from "react";
// import { EventListCard, SlideCard } from "../../components";

// const eventDisplayMap: any = {
//   slides: SlideCard,
//   list: EventListCard
// };

export const TypedEventCard: React.FC<any> = (event: any) => {
  const { displayType } = event;
  const type = displayType || "list";
  // const component: any = eventDisplayMap[type];
  // if (!component) throw Error(`No such message type supported ${type}`);
  // if (typeof component !== "function")
  //   throw Error(`${type} must map to a function, was ${typeof type}`);
  // return component(event);
  return <>{JSON.stringify(event)}</>;
};
