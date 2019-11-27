import { LocalNotifications } from "@ionic-native/local-notifications";

const localNotifications = LocalNotifications;

export const addLocalNotification = (opts: any = {}) => {
  console.log("addLocalNotification", { message: opts.message });
  localNotifications.schedule({
    title: "My first notification",
    text: "Thats pretty easy...",
    foreground: true,
    ...opts
  });
};
