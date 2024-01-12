import React, { Component } from "react";
import logo from "./assets/logo.svg";
import "./css/App.css";
import TableTop from "./components/TableTop";
import Robot from "./components/Robot";
import Report from "./components/Report";
import PlaceRobot from "./components/PlaceRobot";
import Directions from "./components/Directions";
import Message from "./components/Message";
import MessageTypes from "./components/Message/MessageTypes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      X: 0,
      Y: 0,
      F: 0,
      isPlaced: false,
      type: "",
    };

    this.handlePlaceRobot = this.handlePlaceRobot.bind(this);
    this.handleMoveCommand = this.handleMoveCommand.bind(this);
    this.handleLeftCommand = this.handleLeftCommand.bind(this);
    this.handleRightCommand = this.handleRightCommand.bind(this);
  }

  handlePlaceRobot(x, y, f) {
    if (x < 0 || x > 4 || y < 0 || y > 4) {
      this.setState({
        type: MessageTypes.INVALID_POSITION,
      });
      return;
    } else {
      this.setState({
        X: x,
        Y: y,
        F: f,
        isPlaced: true,
        type: "",
      });
    }
  }

  handleLeftCommand() {
    if (!this.state.isPlaced) {
      this.setState({
        type: MessageTypes.ROBOT_NOT_PLACED,
      });
      return false;
    }
    const nextDirection = this.state.F - 90;
    this.setState({
      F: nextDirection,
      type: "",
    });
    return true;
  }

  handleRightCommand() {
    if (!this.state.isPlaced) {
      this.setState({
        type: MessageTypes.ROBOT_NOT_PLACED,
      });
      return false;
    }
    const nextDirection = this.state.F + 90;
    this.setState({
      F: nextDirection,
      type: "",
    });
    return true;
  }

  handleMoveCommand() {
    if (!this.state.isPlaced) {
      this.setState({
        type: MessageTypes.ROBOT_NOT_PLACED,
      });
      return false;
    }
    const currentDirection = this.state.F % 360;
    let xPos = this.state.X;
    let yPos = this.state.Y;

    if (
      currentDirection === 0 ||
      currentDirection === 1 ||
      currentDirection === -1
    ) {
      yPos--;
    } else if (currentDirection === 90 || currentDirection === -270) {
      xPos++;
    } else if (currentDirection === 180 || currentDirection === -180) {
      yPos++;
    } else if (currentDirection === 270 || currentDirection === -90) {
      xPos--;
    }

    if (xPos < 0 || xPos > 4 || yPos < 0 || yPos > 4) {
      this.setState({
        type: MessageTypes.MOVE_NOT_ALLOWED,
      });
      return false;
    } else {
      this.setState({
        X: xPos,
        Y: yPos,
        type: "",
      });
    }
    return true;
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Welcome to Robot Simulation</h1>
        </header>
        <div className="app-content">
          <div className="table-top">
            <TableTop />
            <Robot
              xPosition={this.state.X}
              yPosition={this.state.Y}
              facePosition={this.state.F}
              isPlaced={this.state.isPlaced}
            />
          </div>
          <div className="commands-container">
            <Message mtype={this.state.type} />
            <PlaceRobot placeRobotPos={this.handlePlaceRobot} />
            <Directions
              move={this.handleMoveCommand}
              left={this.handleLeftCommand}
              right={this.handleRightCommand}
            />
            <Report
              xPosition={this.state.X}
              yPosition={this.state.Y}
              facePosition={this.state.F}
              isPlaced={this.state.isPlaced}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
