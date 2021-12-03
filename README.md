# ExpenseTracker
Total time taken: ~12 hours (https://github.com/thechaudharysab/ExpenseTracker/commits/main)

*Spelling mistakes expected in the ReadMe file.*

## What does the app does?
The App has a total of three screens:
1. Login Screen
2. Dashboard
3. Add Transaction

#### Login Screen
The login screen is just design. There is no authentication implemented in the project. This screen was created to demonstrate the front-end side of the react-natve experience. Althought there is a simple if-else check if you add `test@domain.com` and `12345678` as password and press Login will take you to Dashboard or you can simply tap on Skip Login.

![Login Screen](https://raw.githubusercontent.com/thechaudharysab/ExpenseTracker/main/readme-assets/s1.png)

#### Dashboard Screen
On Dashboard you can see the total balance that is calculated by adding all the income and subtracting all the expenses amounts (in float). It also shows all the transactions sorted from latest date to the oldest date and you can also delete a transaction, edit and search functionalities are not implemented in this version. You can navigate towards adding a transaction as well as you can see the menu card from where you can logout, add new transaction ad go to github and read me links.

![Dashboard](https://raw.githubusercontent.com/thechaudharysab/ExpenseTracker/main/readme-assets/s2.png)
![Menu](https://raw.githubusercontent.com/thechaudharysab/ExpenseTracker/main/readme-assets/s3.png)

#### Add Transaction
The add transaction screen is a form in which you can select the expense type, title, description (optional) and date of when that transaction occured (by default today's date will be selected).

![Add Transaction](https://raw.githubusercontent.com/thechaudharysab/ExpenseTracker/main/readme-assets/s4.png)

<hr />

## What is not covered
As the timeline was limited so I tried to cover as much as possible. I have installed packages where needed (keepig the time constraint in consideration) but I have also created custom components.

I have't used Redux or [Context API](https://ibjects.medium.com/the-simplest-implementation-of-context-api-in-react-native-94f749187873) as the app structure doesn't required as this is a small app and maybe in futurre if I work on it then I'll use.

For the API side I have implemented three GET, POST, and DELETE. But I wanted to implelemt all these APIs that I have created using LoopBack (A node module) but the implemented ones show that all of these APIs can be implemented in the same manner as I did the others. If you want to see the full list of APIs you can goto http://localhost:3000/explorer/ after you run the server it'll show you something similar to the screenshot below:

![step 1](https://raw.githubusercontent.com/thechaudharysab/ExpenseTracker/main/readme-assets/apis.png)

## How to run the App

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
5. For iOS: From the same terminal run `cd ios` the `pod install` then `cd ..` then to run the app `npx reac-native run-ios`
6. For Android: (If you are running it in a simulator) In `ExpTrackerApp` goto `src/utils/constants.js` and change `localhost` to you local IP address for example change from `http://localhost:3000/api` to `http://YOUR_LOCAL_IP:3000/api` and save the file to run again.

### Possible Errors:
If you run into Network error on android or ios first make sure the api is running. If it is then for android you need to replace localhost with your local IP address.

If you face any other issues than Network Error issues with the Android try the following from the terminal inside VSCode that has the `ExpTrackerApp` folder opened. In the terminal write `cd android` and then run these commands one after the other:
- `rm -rf ./app/src/main/res/drawable-*`
- `rm -rf ./app/src/main/res/raw`
- `./gradlew clean`

Then try `npx reac-native run-android` again.
