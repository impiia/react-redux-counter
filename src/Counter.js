import React from "react";
import { connect } from "react-redux";
import style from './Counter.module.css';

// Определяем типы действий
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const DOUBLE = "DOUBLE"; 

// Определяем функции действий
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const double = () => ({ type: DOUBLE }); 

// Определяем функцию mapStateToProps
const mapStateToProps = (state) => ({
  count: state.count
});

// Определяем функцию mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  double: () => dispatch(double()) 
});

// Определяем компонент Counter
const Counter = ({ count, increment, decrement, square, double }) => {
  return (
    <div className={style.counter}>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={double}>Double</button> 
    </div>
  );
};

// Подключаем компонент к Redux Store
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
