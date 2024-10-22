# Android

[Ionic Android installation docs](https://ionicframework.com/docs/installation/android)

Ensure you have Java 8 installed

If you don't have Java installed, install it via brew or a similar package manager for your OS.

## Install Java 8

Recipe from Nov 2019

```sh
brew tap adoptopenjdk/openjdk
brew cask install adoptopenjdk8
```

Alternatively `brew cask install adoptopenjdk/openjdk/adoptopenjdk8`

### Check that Java was installed

```sh
$ java -version
openjdk version "1.8.0_232"
OpenJDK Runtime Environment (AdoptOpenJDK)(build 1.8.0_232-b09)
```

## Install Gradle

See [Gradle install docs](https://gradle.org/install/)

```sh
brew install gradle
```

## Install Android Studio

Install from [Android developer studio](https://developer.android.com/studio/)

Launch Android Studio

![Android Studio start screen](./images/as-start-screen.png)

Click the `configure` menu and select `SDK manager`

![Select SDK manager](./images/as-menu-sdk-manager.png)

Make sure that an SDK for the latest Android is installed

![SDK manager](./images/as-sdk-manager.png)

On a Mac, the SDK should be installed/located in `$HOME/Library/Android/sdk`

## Update Android Studio

In the Android top level menu, select `Check for updates`

![Check for updates](./images/as-menu-check-updates.png)

On the SDK updates screen select `Update now` to install the updates. Otherwise select `Remind me later` to do it later when you have more time and patience (may take up to 10-15 minutes).

![SDK updates screen](./images/as-menu-check-updates.png)

Agree to terms and agreements

## Add SDK to \$PATH

Open `~/.bash_profile` in an editor such as VS Code `$ code ~/.bash_profile`

Set the `ANDROID_SDK_ROOT` environment variable. This path should be the Android SDK Location

Add the following to the end of the `~/.bash_profile` file

```sh
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk

# avdmanager, sdkmanager
export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin

# adb, logcat
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools

# emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
```

Open a new terminal and test that `PATH` and `ANDROID_SDK_ROOT` environment variables have been set.

```sh
$ echo $ANDROID_SDK_ROOT
/users/<username>/Library/Android/sdk
$ echo $PATH
# ...
```

## Creating an Android Virtual Device

Android Virtual Devices (AVDs) are blueprints that the Android emulator uses to run the Android OS. For more detailed instructions see the [Android documentation](https://developer.android.com/studio/run/managing-avds)

An AVD contains a hardware profile, system image, storage area, skin, and other properties.

In the Android Studio welcome screen, click `Configure » AVD Manager`

![Virtual devices manager](./images/virtual-devices.png)

Click `+ Create Virtual Device` and select a suitable device definition. If unsure, choose `Pixel 2`. If you have a suitable device like in this screenshot you can move on.

Once the AVD is created, launch the AVD into the Android emulator.

See [Run apps on the Android Emulator](https://developer.android.com/studio/run/emulator) (with video)

Note: Watch the video on the Android Emulator if you haven't used the Android Emulator before.

See [launch the Android emulator from the command line](https://developer.android.com/studio/run/emulator-commandline)

For an Ionic project, use the `ionic` CLI to create an `android` project for the Ionic app. Then start up Android Studio with the Ionic android project using the CLI. Then run the emulator from Android Studio (see steps below)

This is the same procedure as for iOS, where you would start up XCode for an Ionic `ios` project. Then you would run the Ionic ios app on an iOS simulator from within XCode.

### Create ionic anroid project

See [building and running Ionic Android app](https://ionicframework.com/docs/building/android)

```sh
$ ionic capacitor add android
> capacitor add android
✔ Installing android dependencies in 15.03s
✔ Adding native android project in: /Users/kristianmandrup/repos/ionic-projects/minimal-ionic-react-app/android in 55.38ms
✔ Syncing Gradle in 32.30s
✔ add in 47.38s
✔ Copying web assets from build to android/app/src/main/assets/public in 752.98ms
✔ Copying native bridge in 1.96ms
✔ Copying capacitor.config.json in 2.69ms
✔ copy in 843.75ms
✔ Updating Android plugins in 22.84ms
  Found 0 Capacitor plugins for android:
✔ update android in 67.39ms

Now you can run npx cap open android to launch Android Studio
```

### Edit capacitor config file

Open the `capacitor.config.json` file and modify the `appId` property

Before:

```json
{
  "appId": "io.ionic.starter",
  "appName": "my-react-app",
  "bundledWebRuntime": false,
  "npmClient": "npm",
  "webDir": "build",
  "cordova": {}
}
```

After:

```json
{
  "appId": "io.enginetransformation.ionicreactapp",
  "appName": "ionic-react-app",
  "bundledWebRuntime": false,
  "npmClient": "npm",
  "webDir": "build",
  "cordova": {}
}
```

### Open and launch android app in Android Studio

Now launch Ionic Android app in Android Studio

```sh
$ npx cap open android
[info] Opening Android project at /Users/<username>/ionic-projects/minimal-ionic-react-app/android
```

Wait for Android Studio to finish indexing (see bottom spinner) and for Gradle to do its magic (ie. install dependencies, link and build the project)

### Troubleshooting

#### Accept SDK license agreements

```sh
$ ls /Users/kristianmandrup/Library/Android/sdk/tools/bin
apkanalyzer       archquery         avdmanager        jobb              lint              monkeyrunner      screenshot2       sdkmanager        uiautomatorviewer
```

Make sure you have `Users/kristianmandrup/Library/Android/sdk/tools/bin` in your `$PATH`
If not, source `~/.bash_profile` explicitly

```sh
$ source ~/.bash_profile
/usr/local/opt/python/libexec/bin:/Users/kristianmandrup/Library/Python/3.7/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/kristianmandrup/Library/Android/sdk/tools/bin:/Users/kristianmandrup/Library/Android/sdk/platform-tools:/Users/kristianmandrup/Library/Android/sdk/emulator
```

Now `$PATH` should be set correctly

```sh
$  minimal-ionic-react-app git:(master) $ echo $PATH
/Users/kristianmandrup/.nvm/versions/node/v12.10.0/bin:/usr/local/opt/python/libexec/bin:/Users/kristianmandrup/Library/Python/3.7/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/kristianmandrup/Library/Android/sdk/tools/bin:/Users/kristianmandrup/Library/Android/sdk/platform-tools:/Users/kristianmandrup/Library/Android/sdk/emulator
```

Run the `sdkmanager` CLI tool with `--licenses` piping `yes` as the default answer.
This will accept all license agreements.

```sh
$  minimal-ionic-react-app git:(master) ✗ yes | sdkmanager --licenses
Warning: File /Users/kristianmandrup/.android/repositories.cfg could not be loaded.
7 of 7 SDK package licenses not accepted. 100% Computing updates...
# ....
```

## Develop the Ionic app and sync it to android project

Enable capacitor

`$ ionic integrations enable capacitor`

Initialise project

`$ npx cap init`

Build project

`$ ionic build`

With each meaningful change, Ionic apps must be built into web assets before the change can appear on Android simulators and devices. The web assets then must be copied into the native project.

```sh
$ ionic capacitor copy android
> capacitor copy android
✔ Copying web assets from build to android/app/src/main/assets/public in 1.07s
✔ Copying native bridge in 3.62ms
✔ Copying capacitor.config.json in 1.01ms
✔ copy in 1.11s
```

You can also do either:

- `npx cap sync` sync for all platforms added
- `npx cap sync android` sync only for android

Open android project in Android Studio

`$ npx cap open android`

Select the target device, such as `Pixel 2` and select `Run` (green arrow)

![Android simulator](./images/android-simulator-works.png)

### Run with live reload

[ionic cordova run](https://ionicframework.com/docs/cli/commands/cordova-run)

```sh
$ ionic cordova run [<platform>] [options]
# ..
```

Run on android with live reload:

```sh
$ ionic cordova run android -l
# ..
```

## Live debug android app

See [Live Debug Your Cordova/ionic app with Visual Stuido Code](https://geeklearning.io/live-debug-your-cordova-ionic-application-with-visual-studio-code/)

- install the `Cordova Tools` extension for Visual Studio Code (reload VS Code)
- click the `debug` icon on the left-hand side
- click the `gear` icon at the top of the `Debug` panel
- select `Cordova` in the dropdown at the top

Install Cordova Tools VS Code extension

![Install Cordova Tools extension](./images/cordova-tools.png)

### Setup Cordova Debug

Select the Cordova environment in the Debug Panel

![Setup Cordova Debug](./images/cordova-debug.png)

### Cordova Android Launch configuration

This will create a `launch.json file` inside the `.vscode` folder in the project directory. You will now have several debug options at the top of the debug panel, such as `Run Android on device` or `Attach to running Android on device`.

![Cordova Android Launch configuration](./images/cordova-android-launch-config.png)

### Run VSC Cordova debug session

If you run `Serve to the browser (ionic serve)`, a new browser window will launch and you'll already be able to debug step by step within VS Code your app running in the browser.

![VSC Cordova debug session](./images/vsc-cordova-debug-session.png)

Now run the `Run Android on emulator` and of course, set the `ionicLiveReload` parameter to `true` if you want to be able to make live changes to your app.

You will also need to enable the `developer` mode on your Android device if you want to run the app on a real device. To do so, you can take a look at my post explaining [how to debug a Cordova application on Android with Chrome](https://geeklearning.io/apache-cordova-and-remote-debugging-on-android/).

```json
{
  "name": "Run Android on emulator",
  "type": "cordova",
  "request": "launch",
  "platform": "android",
  "target": "emulator",
  "port": 9222,
  "sourceMaps": true,
  "cwd": "${workspaceRoot}",
  "ionicLiveReload": true
}
```

Simply use the Android Studion logcat with a filter

![Android Studio log filter](./images/android-studio-log-filter.png)

### More resources

- [Android Studio Troubleshooting](./Android-troubleshooting.md)
- [Android styling](./Android-styling.md)
