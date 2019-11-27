import { addLocalNotification } from "./add-local-notification";
import { showWebNotification } from "./web-notification";

export function showNotification(message: string) {
  showWebNotification(message);
  addLocalNotification({ message });
}
