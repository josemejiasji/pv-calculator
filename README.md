# Payvision calculator

In this exercise you are given the legacy code of Payvision Calculator web app. Maintainance and new features development is your responsability.

## Your tasks

1. Code review: please list all good/bad practices you find in this application.
2. It seems the app is buggy... Could you fix it?
3. Add divide and multiply operations.
4. How would do you test this app?
5. Can you improve the UI/UX?

You are allowed to change as much code as you consider.

**Bonus:**

1. Configure the application to allow use of keyboard numpad.

### 1. Code review

Are you a good code reviewer? This would be one of your daily basis tasks.

- Help our team, list good and bad practices you find, identify bugs or defects and suggest improvements. How would you refactorize it?

Please add code inline comments or include them into your readme file.

### 2. Testing and bug fixing

Product quality, testing and finding bugs is really important at Payvision. This application seems it does not work fine...

Test it and fix any potential bug you find. Feel free to document your findings in readme file or help yourself with commit messages.

Defects found:
- You can select multiple decimal separators (.) breaking the calculator
- Plus operator does a subtracting operation
- Minus operator does a adding operation
- Clicking more than once in a operator breaks the calculator

### 3. New features implementation

Our product owner required us new features for this application. We would like the application new version to support multiplications and divisions.

- Could you implement these new features?
- Bear in mind usage of git-flow to track your changes.
- Current version is 1.2.2 (see package.json version). Should we increase the version? How? Why?
To increase the version the of app I would use SemVer convention (X.Y.Z) where:

#### Answer:
- I would use X (MAYOR) for breaking changes or "radical" changes, like new UI or implementing a framework for the view
- I would use Y (MINOR) for adding new features, like multiplications and divisions
- I would use Z (PATCH) for bugfixing or feature tweaks (clean code or performance) 

### 4. Test automation

We would like to automate testing of this application.

- What kind of tests would you implement? Why?

#### Answer:
I would implement unit tests to cover all methods of the calculator, following [the testing pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) from more granular to less granular tests.

**Bonus**: Implement the tests.

### 5. UI/UX design

Do you consider yourself a good designer or UI/UX developer?

- Improve the UI/UX to be more user friendly.

Feel free to do any changes. Show us what you are capable to!

## How to run the application using local server

To run the project, open a terminal and execute the following command from project root path:

- Install depencencies:

> yarn

- Run the application

> yarn serve

This command will run a local web server in port 8082:
[http://localhost:8082/src/index.html](http://localhost:8082/src/index.html)
