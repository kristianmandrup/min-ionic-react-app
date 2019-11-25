import { getContentEntryById } from "../contentful";
import { typeIdMap, eventTypeIdMap } from "./content-maps";

export const getContentItemForType = async (type: string) => {
  const contentId = typeIdMap[type];
  if (!contentId) {
    throw new Error(`Unknown eventType ${type} - no contentful mapping exists`);
  }
  return await getContentEntryById(contentId);
};

export const getContentItemForEventType = async (eventType: string) => {
  const contentId = eventTypeIdMap[eventType];
  if (!contentId) {
    throw new Error(
      `Unknown eventType ${eventType} - no contentful mapping exists`
    );
  }
  return await getContentEntryById(contentId);
};
