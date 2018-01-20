import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import all pathfinding functions!

// Paths:
// /pathfinding

class Pathfinding extends Component {
  constructor () {
    super(props)

    // If nothing ends up here, turn into functional
    //  stateless component.
    this.state = {
      intervalId: null,
      isPaused: false,
      algorithmPtr: null
    }
  }

  handleChangeAlgorithm(newAlgorithm) {

  }

  startPathfinding(algorithm) {
    // Interval will be paused
    // when playing, calls algorithmPtr
    // SEND PATH ONLY BACK TO STATE!  REDUX?

    // var t = window.setInterval(function() {
    //   if(!isPaused) {
    //     time++;
    //     output.text("Seconds: " + time);
    //   }
    // }, 1000);
  }

  pausePathfinding() {
    this.setState({...this.state}, {isPaused: !this.state.isPaused});
  }

  stopPathfinding() {
    // Kill the interval with intervalId
    // clear the intervalId from state
  }



  render() {

    // Render the selection form, start button etc.
    // Start will receive either a special function or function with
    //  parameter bound to algorithm type ().bind(this, this.props.match.params)
    // Stop must kill the interval...interval controlled?!
    return(
      <div>

      </div>
    );
  };
}

export default Pathfinding;
