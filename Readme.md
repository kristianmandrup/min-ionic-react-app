# Minimal Ionic React app

Minimal application for exploring how to work with Ionic for Android and iOS native mobile development.

## Native mobile device development

### Scripts

Scripts to facilitate development can be found in `/scripts`
To create your own script and grant execute permission use `chmod a+x`

```sh
chmod a+x scripts/*/*.sh
chmod a+x scripts/*.sh
```

### Initialize

```sh
npm run _init
```

### Prepare platform

Creates and initialises app for particular platform

```sh
npm run android:prepare
```

### Sync to platform app

Sync to all platforms

```sh
npm run _sync
```

Sync to particular platform

```sh
npm run android:sync
```

### Platform development

- [iOS development guide](./docs/ios/iOS.md)
- [Android development guide](./docs/android/Android.md)

## Plugins

[use Ionic Native / Cordova Plugins with Ionic React and Capacitor](https://stackoverflow.com/questions/57787916/what-is-the-right-way-to-use-ionic-native-cordova-plugins-with-ionic-react)

```sh
$ npm install @ionic-native/javascript-package-name
# ...
$ npm install cordova-plugin-name
# ...
$ npx cap sync
# ...
```

## Example local notifications

```sh
$ npm install @ionic-native/local-notifications
# ...
$ npm i cordova-plugin-local-notification
# ...
$ npm i @ionic-native/core
# ...
$ cordova-plugin-badge
# ...
$ npx cap sync
# ...
```

The code

```ts
import { LocalNotifications } from "@ionic-native/local-notifications";

export const addLocalNotification = (opts: any = {}) => {
  console.log("addLocalNotification", { message: opts.message });
  const defaultOpts = {
    title: "Transfer event",
    text: "A new transfer event",
    foreground: true
  }
  LocalNotifications.schedule(
    ...defaultOpts,
    ...opts
  });
};
```

## Debugging Hybrid javascript apps

See [Remote Debugging videos](https://jsconsole.com/remote-debugging.html)

- Go to [jsconsole.com](https://jsconsole.com/)
- Type `:listen`

This should give you something like

```txt
Connected to "4e0f5be6-e7eb-486b-8d4a-db50f6af6e35"

<script src="https://jsconsole.com/js/remote.js?4e0f5be6-e7eb-486b-8d4a-db50f6af6e35"></script>
```

You can also use your own unique id of preferenxe

`:listen eon-ionic-demo`

Then use `<script src="https://jsconsole.com/js/remote.js?eon-ionic-demo"></script>`

Add the `<script>` tag to your `public/index.html` file

Note: This script with the `eon-ionic-demo` id has already been added to the `public/index.html` of this project.

Now `console.log` statements will be printed in your `jsconsole.com` session window as well.

Didn't succeed to make it work however...

A better, more mature solution would be to use [console.io](https://nkashyap.github.io/console.io/)
