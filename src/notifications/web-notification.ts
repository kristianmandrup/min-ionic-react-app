export function showWebNotification(message: string) {
  console.log("showWebNotification", message);
  if (!browserSupported()) return;
  notifyIfGranted(message);
  permissionDenied(message);
}

function alertBrowserNotSupported() {
  console.log("This browser does not support system notifications");
}

function browserSupported() {
  if (!("Notification" in window)) {
    alertBrowserNotSupported();
    return false;
  }
  return true;
}

function notifyIfGranted(msg: string) {
  if (Notification.permission === "granted") {
    // console.log("notify", msg);
    new Notification(msg);
  }
}

function permissionDenied(msg: string) {
  Notification.permission !== "denied" &&
    Notification.requestPermission(permission => {
      notifyIfGranted(msg);
    });
}
