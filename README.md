# CLI RPN Calculator

## About
This is a command-line reverse polish notation calculator built in Node.js and it's third-party library free solution in order to require the minimum storage space possible.

It's using the built-in readline node package for handling standard input and output.

The operators were put inside a `calculator` object where the key is the operator and the value is a function that actually does the operation related to that operator. This way is easier and faster to access those functions based on the operator user enters.

In order to add more operators to the project in the future, the `calculator` object is the only place where it needs to be added, the rest of the code stays intact and works well with the new operators.

When program is executed, it runs a `main` function recursively in order to ask input from user until s/he enters `q` or presses `CTRL + C`. On each iteration, it takes the user's input and passes it to a dedicated function outside for calculating the result, which is returned to the main function and printed on screen; this way we keep the calculation logic and the feedback logic separated.

## To-do
If additional time would be spent on the project, an autoformat feature would be nice to add in case user enters inputs like `1 1 1++` so the program separates the operators using spaces.

## How to run
On your terminal, simply go to the project's folder and run:
```
npm start
```