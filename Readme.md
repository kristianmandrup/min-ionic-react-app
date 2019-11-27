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

## More docs

- [Local Notifications](./docs/Local-Notifications.md)
- [Logging and Debugging](./docs/Logging-Debugging.md)

## Future improvements

Currently the subscription to transfer events is made only when the events page is activated.
This should instead be moved to the `SignedIn` component to be triggered as soon as the user successfully signs in and the main page is displayed.
