# Configurable Currency Converter CLI

## Introduction

As part of this exercise you will create a configurable command-line based currency conversion tool. This tool will allow users to register new currencies, view a list of supported currencies, and convert from one currency to another. You will also be required to test the program's behaviour to ensure that it works as expected (and of course to prevent the introduction of future defects).

The program itself will have two main components: the command-line interface; and the underlying converter logic. The command line interface (which must be defined within the `index.js` file) is responsible for receiving user input, interacting with the underlying converter, and displaying information to the user. The converter is responsible for storing currency information, converting between supported currencies, and generating warning and error messages. The command-line interface will be tested manually (ie. through user interaction) and the converter will be tested programmatically (ie. using Jest-based unit tests).

The exercise contains a small amount of 'starter code'. It has also made a number of decisions that must be incorporated into your submission:

1. The value of each currency must be expressed in relation to US Dollars (USD). Although this may seem confusing it will actually simplify the process of registering new currencies and converting between them.
2. The program is 'pre-loaded' with the following currencies: USD; CAD; and GBP. You can see how this data has been modeled within `src/converter.js` file.
3. Aside from the 'pre-loaded' currencies, the program does not _save_ the currency data.

That's all for now. Please read the sections below closely _before_ you begin this exercise.

## Prerequisites

- Familiarity with the command line (ie. navigating the file system, executing programs from the command line).
- Familiarity with Git (ie. cloning repositories, staging and committing updates, including descriptive commit messages).
- Familiarity with GitHub (ie. forking repositories, pushing and pulling commits).
- Familiarity with JavaScript (ie. variables, data types and data structures, functions and methods, classes, control flow).
- Familiarity with Node (ie. executing a Node-based programs from the command line, capturing user input, printing messages to the console).
- Familiarity with npm (ie. how to run tests).
- Familiarity with Jest (ie. how to define Jest-based unit tests, how to make assertions).

## Learning Objectives

The learning objectives for this exercise are as follows:

- To demonstrate and deepen your knowledge of JavaScript in general, and Node in particular.
- To demonstrate and continue to build your familiarity with testing in general, and Jest in particular.
- To demonstrate and exercise your knowledge of version control (Git) techniques and best practices.

## Requirements

### Functional Requirements

The following list describes the minimum requirements for this exercise, which all submission MUST meet. Students are free to include additional features and functionality as long as they don't conflict with the minimum requirements.

- The program must display a list of the supported currencies in response to following command: `node ./index.js list`.
- The program must register a new currency in response to the following command: `node ./src/index.js add <CURRENCY> <VALUE>`.
  - `<CURRENCY>` must be replaced with a currency code (such as CAD, EUR, GBP, etc.).
  - `<VALUE>` must be replaced with the value of the currency, relative to USD.
  - For example: `node ./src/index.js add EUR 2`
- The program must display the following message if the user attempts to register a currency that already exists: `Whoops, the following currency already exists: <CURRENCY>`.
  - For example, assuming that a user attempts to register CAD multiple times: `Whoops, the following currency already exists: CAD`.
- The program must allow users to convert an amount between two supported currencies using the following command: `node ./src/index.js convert <BASE CURRENCY> <TARGET CURRENCY> <AMOUNT>`.
  - `<BASE CURRENCY>` must be replaced with the currency that the user is converting _from_.
  - `<TARGET CURRENCY>` must be replaced with the currency that the user is converting _to_.
  - `<AMOUNT>` must be replaced with the amount that the user wishes to convert.
  - For example: assuming that the user previously registered both CAD and EUR: `node ./src/index.js convert CAD EUR 20`
  - This command must return and display the result to the user. You may display _just_ the resulting number or embed it within a larger message.
- The program must display the following message if the user attempts to convert between currencies and one (or both) currencies are not supported: `Whoops, one or both of the currencies are unsupported`.
  - For example, assuming that either CAD or EUR have not been registered: `node ./src/index.js convert CAD EUR 20`.
- The program must display the following message if the user enters an unknown command: `Whoops, the following command is unknown: <COMMAND>`.
  - For example, this message would be display if the user attempted to use the program like so: `node ./src/index.js hello`.

### Non-Functional Requirements

- All tests defined within the `converter.spec.js` must be implement.
- All tests must be in a passing state.
- All updates must be under version control (ie. committed).
- Commits must be accompanied by descriptive messages.

### Not In Scope

The following features and functionality ARE NOT required for this exercise. However, students who have complete the minimum requirements outline above may chose to include one or more of the following:

- The program does not need to support the removal of currencies.
- The program does not need to ensure that the user-supplied currency codes are valid.
- The program does not need to ensure that the currency values are correct.

## Getting Started

### Set-up and Workflow
- Fork this repository to your personal GitHub account.
- Implement the functional and non-functional requirements outlined above.
- Commit your work.

### Tools
- Git
  - This exercise requires Git.
  - If you do not already have Git installed you can download it here: https://git-scm.com/downloads
- Node and `npm`.
  - This exercise requires Node and `npm` (which is typically installed alongside Node).
  - If you do not already have Node installed, or if you are using a version of Node that is no longer supported, you can download the latest version here: https://nodejs.org/en/
- Jest
  - This exercise depends on the Jest testing library. To install Jest complete the following steps:
    - Open a new terminal window.
    - Navigate to the room of the repository.
    - Run the following command: `npm install`.

### Approach

The following is a _suggested_ approach, although you are of course free to tackle the exercise however you see fit.

- Begin by reviewing the 'starter files' within the `src/` directory. These files include a small amount of starter code, as well as helpful comments.
- Ensure that you can run the command line portion of the exercise (ie. `src/index.js`). You will be required to make various changes within this file.
- Ensure that you can run the tests (ie. `src/converter.spec.js`). You will be required to implement the test cases within this file.
- Identify the exercise's major sub-problems (eg. capturing user input, validating the user input, passing information from the command line interface to the converter logic).
- Ensure that you can solve each sub-problem _in isolation_.
- Bring your sub-problem solutions together to 'build up' the program functionality.
- Make sure to test and commit your work often.

## Success Criteria

This exercise will be assessed using the following criteria:

- Use of version control:
  - Does the submission include multiple, descriptive commits?
  - Are the contents of the commits closely related?
  - Are the commits small?
- Command line interface and converter functionality
  - Does the submission satisfy the minimum functional requirements outline above?
  - Does the command line interface (`src/index.js`) correctly capture the user input?
  - Does the converter correctly implement the `list`, `add`, and `convert` operations?
- Tests:
  - Have all of the tests been implemented?
  - Are all of the tests passing?
  - Do the tests correctly cover the converter behaviour?
- Legibility and maintainability:
  - Is the code well organized and easy to reason about?
  - Are variables and methods well named?
  - Does the code include supporting comments?
