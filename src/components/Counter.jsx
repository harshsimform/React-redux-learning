// "useSelector" hook is used to extract the state of a component from the redux store using the selector function.
// "useDispatch" hook is used to update the state of the component and return a new state.

import { Component } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import classes from "./Counter.module.css";

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state.counter);

//   const incrementHandler = () => {
//     dispatch({ type: "increment" });
//   };

//   const decrementHandler = () => {
//     dispatch({ type: "decrement" });
//   };

//   const toggleCounterHandler = () => {};
// };

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }
  toggleCounterHandler() {}
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
