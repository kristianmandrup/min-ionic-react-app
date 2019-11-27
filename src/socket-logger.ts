import io from "socket.io-client";

type onMsg = (msg: string, type: string) => any;

const socket = io();
export const createSender = (onAfterSend: onMsg, type: string) => (
  message: string,
  msgType = "log"
) => {
  type = type || msgType;
  socket.emit(type, message);
  onAfterSend && onAfterSend(message, type);
};

// to additionally log every message to the client console
export const onMsgSent = (msg: string, type: string = "log") => {
  const c: any = console;
  const fn = c[type];
  fn(msg);
};
