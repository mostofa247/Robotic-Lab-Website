# Robot simulator

A robot simulator written in React which works offline as well

## Installation & usage

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `CI=true npm test`

Launches the test runner and runs all tests in the application.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Instruction format

Find the simulator commands definition below:

- **PLACE X, Y, DIRECTION (PLACE 0,1,0):** Place the robot on the table.
- **MOVE:** Move the robot one unit in the direction it is facing
- **LEFT:** Turn the robot left
- **RIGHT:** Turn the robot right
- **REPORT:** Report the current position and direction of the robot (0,0,NORTH)

## PS: Try going offline. Woohoo it still works. 

The table is a 5x5 grid, and any command that would result in the robot being off the table *will be ignored*.


