import { Message } from "../../interfaces";
import { TextMessage } from "./TextMessage";
import { ReadingMessage } from "./ReadingMessage";

const messageTypeMap: any = {
  info: TextMessage,
  reading: ReadingMessage
};

export const TypedMessage = (message: Message) => {
  let { type } = message;
  type = type || "info";
  const component = messageTypeMap[type];
  if (!component) throw Error(`No such message type supported ${type}`);
  if (typeof component !== "function")
    throw Error(`${type} must map to a function, was ${typeof type}`);
  return component(message);
};
