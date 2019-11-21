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
