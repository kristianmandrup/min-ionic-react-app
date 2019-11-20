# Minimal Ionic React app

For exploring how to work with Ionic for Android and iOS native mobile development.

## Native mobile device development

### Scripts

Scripts to facilitate development can be found in `/scripts`
To create your own script and grant execute permission use `chmod a+x`

### iOS development

Run `npm run ios:prepare`

This will

- build the project `npm run build`
- add ios project `ionic capacitor add ios`
- copy web assets to ios project `ionic capacitor copy ios`
- open ios `ionic capacitor open ios`

You should then be able to run the Ionic app on the simulator.
