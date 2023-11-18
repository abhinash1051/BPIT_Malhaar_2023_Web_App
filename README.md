# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Making a pr and forking the repo

`1. Fork the Repository`

Start by visiting the GitHub page of the repository you wish to contribute to.
In the top-right corner of the page, click the “Fork” button. This will create a copy of the repository under your GitHub account.

`2. Clone Your Forked Repository`
On your forked repository’s main page, click the green “Code” button. Copy the URL provided.
Open your terminal or command prompt and navigate to the directory where you want to clone the repository. Enter:
git clone [URL you copied]
This will create a local copy of your forked repository on your machine.

`3. Navigate to the Repository’s Directory`
Enter:

## `cd [repository-name]`

`4. Set Upstream Remote`
   
To keep track of the original repository (often called the “upstream”), enter:
## `git remote add upstream [original repository's URL]`

`5. Create a New Branch`
   
Always make changes in a new branch instead of directly on main or master. To create and switch to a new branch, enter:

## `git checkout -b [branch-name]`
Choose a descriptive branch name related to the changes you’re planning to make.

`6. Make Your Changes`
Edit, add, or remove files as needed using your preferred text editor or IDE.

`7. Stage and Commit Changes`
   
Stage your changes with:

## `git add .`
Commit your changes with a descriptive message:

## `git commit -m "Brief description of changes made"`

`8. Push Changes to Your Fork`
   
Push your changes to your forked repository on GitHub:

## `git push origin [branch-name]`

`9. Open a Pull Request (PR)`

Go back to your forked repository on GitHub.
Click the “New pull request” button (often GitHub will also present a quick link to create a PR from your recently pushed branch).
Ensure the base repository is the original repository you want to contribute to, and the head repository is your fork. Also, make sure the branch shown for your fork is the one you just pushed.
Fill in the PR title and description, detailing your changes and the reason for them.
Click “Create pull request”.
