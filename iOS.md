# iOS

- [Ionic iOS installation docs](https://ionicframework.com/docs/installation/ios)
- [iOS environment setup and development workflow](https://github.com/TransformCore/eon-ionic-enduser-client-app/blob/master/docs/iOS.md)

Run `npm run ios:prepare`

This will

- build the project `npm run build`
- add ios project `ionic capacitor add ios`
- copy web assets to ios project `ionic capacitor copy ios`
- open ios `ionic capacitor open ios`

You should then be able to run the Ionic app on the simulator.

![iOS simulator](./doc-images/ios/ios-simulator.png)
