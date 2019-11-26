import { useState, useEffect } from "react";
import { asyncReduce } from "./utils";
import { getContentItemForEventType } from "../../api-calls";

export const useEventTypes = ({ eventTypesToDisplay, hash }: any) => {
  const [counter, setCounter] = useState(0);
  const [eventTypeMap, setEventTypeMap] = useState({});

  useEffect(() => {
    const fetchEventTypeContentItems = async () => {
      const reducer = async (etMap: any, eventType: string) => {
        const eventTypeContentItem = await getContentItemForEventType(
          eventType
        );
        etMap[eventType] = eventTypeContentItem;
        return etMap;
      };

      const eventTypeMapPromises = asyncReduce(
        eventTypesToDisplay,
        reducer,
        {}
      );

      const $eventTypeMap = await Promise.resolve(eventTypeMapPromises);
      setEventTypeMap($eventTypeMap);
    };

    fetchEventTypeContentItems();
  }, [counter, eventTypesToDisplay, hash]);

  setTimeout(() => {
    setCounter(counter + 1);
  }, 8000);

  return eventTypeMap;
};
