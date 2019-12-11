import * as contentful from "contentful";
import { contentfulConfig } from "./settings";
const config = {
  space: contentfulConfig.space,
  accessToken:
    contentfulConfig.accessToken ||
    "_J5VHx6tOU4SeuUQjZSjwbTRLlxYOQKaLSuLMeoMtKQ"
};
const contentFulClient: any = contentful.createClient(config);

export const getContentEntryById = async (id: string | number) => {
  return await contentFulClient.getEntry("" + id);
};

export const getContentEntries = async (props: any = {}) => {
  return await contentFulClient.getEntries(props);
};
