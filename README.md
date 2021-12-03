# ExpenseTracker
Total time taken: ~11 hours (https://github.com/thechaudharysab/ExpenseTracker/commits/main)

## How to run this project

After you clone the project and open the project folder, you'll have see two folders:
- ExpTrackerApp
- exptracker-api

Both are required in order to successfully run the project and here is a step by step guide on how:
1. Open `exptracker-api` folder in VSCode and in the terminal run `npm install`.
2. Then after that the same bash terminal inside VSCode run `node .` command and it should open show you a **Web server listening at** link as highlighted in the image below:

![step 1](https://raw.githubusercontent.com/thechaudharysab/ExpenseTracker/main/readme-assets/1.png)

2. Open the `http://localhost:3000/` in your browser just to make sure that the server is running.

![step 2](https://raw.githubusercontent.com/thechaudharysab/ExpenseTracker/main/readme-assets/1a.png)

3. Next open a new instance of VSCode and open `ExpTrackerApp` in it.
4. From terminal in the newly opened VSCode, run `npm install`
5. Only required for iOS: From the same terminal run `cd ios` the `pod install` then `cd ..`
6. Then run the app `npx reac-native run-ios` or `npx reac-native run-android`

### Possible Errors:
If you face any issues with the Android Build try the following from the terminal inside VSCode that has the `ExpTrackerApp` folder opened. In the terminal write `cd android` and then run these commands one after the other:
- `rm -rf ./app/src/main/res/drawable-*`
- `rm -rf ./app/src/main/res/raw`
- `./gradlew clean`

Then try `npx reac-native run-android` again.
