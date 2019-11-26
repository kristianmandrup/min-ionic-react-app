interface Obj {
  [key: string]: any;
}

interface Identifiable {
  id: string | number;
  index: number;
  timestamp: number;
}

interface Typed extends Identifiable {
  type: string;
}

export interface Event extends Typed {
  title: string;
  subTitle: string;
  displayType: string; // either slides or list
  eventType: string;
  utility: string;
  messages?: string;
}

export interface Slide extends Typed {
  text?: string; // for TextMessage
  reading?: Reading; // for ReadingMessage
}

export interface Reading extends Identifiable {
  label: string;
  value: string;
  unit: string;
}

export interface Message extends Typed {
  data?: Obj;
  text?: string; // for TextMessage
  reading?: Reading; // for ReadingMessage
}
