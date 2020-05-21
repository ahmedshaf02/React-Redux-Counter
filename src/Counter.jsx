
import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { addCounter, reduceCounter } from "./Redux/actionCreators";

 function Counter(props){
  const { handleDecrement, handleIncrement, count } = props;
  console.log(props)
  return (
    <>
      <div className="App">
          <h1>react Redux</h1>
        <h1>Counter: {count}</h1>
        <div>
          <button onClick={handleIncrement}> Increment</button>
          <button onClick={handleDecrement}> Decrement</button>
        </div>
      </div>
    </>
  );

}
  const mapStateToProps = state => ({
    count: state.count
  });
  
  const mapDispatchToProps = dispatch => ({
    handleIncrement: () => dispatch(addCounter(1)),
    handleDecrement: () => dispatch(reduceCounter(1))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Counter);


