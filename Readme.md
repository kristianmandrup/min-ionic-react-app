# Minimal Ionic React app

For exploring how to work with Ionic for Android and iOS native mobile development.

## Native mobile device development

### Scripts

Scripts to facilitate development can be found in `/scripts`
To create your own script and grant execute permission use `chmod a+x`

### iOS

Also see more details on [iOS environment setup and development workflow](https://github.com/TransformCore/eon-ionic-enduser-client-app/blob/master/docs/iOS.md)

Run `npm run ios:prepare`

This will

- build the project `npm run build`
- add ios project `ionic capacitor add ios`
- copy web assets to ios project `ionic capacitor copy ios`
- open ios `ionic capacitor open ios`

You should then be able to run the Ionic app on the simulator.