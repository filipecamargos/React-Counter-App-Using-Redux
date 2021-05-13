import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  //Get access to the data manager in the store
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  //Handle increment btn
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  //Handle decreement btn
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  //Handle decreement btn
  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 10 });
  };

  //Handle the Toggle counter btn
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By Five</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
