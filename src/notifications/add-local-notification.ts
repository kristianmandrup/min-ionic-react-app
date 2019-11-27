import { LocalNotifications } from "@ionic-native/local-notifications";

export const addLocalNotification = (opts: any = {}) => {
  console.log("addLocalNotification", { message: opts.message });
  LocalNotifications.on({
    title: "My first notification",
    text: "Thats pretty easy...",
    foreground: true,
    ...opts
  });
};
