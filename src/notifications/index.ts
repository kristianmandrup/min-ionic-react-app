export function showNotification(msg: string) {
  // console.log("showNotification", msg);
  if (!browserSupported()) return;
  notifyIfGranted(msg);
  permissionDenied(msg);
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
