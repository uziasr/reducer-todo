import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from './components/TodoList'
import {TodoForm} from './components/TodoForm'

function App() {
  return (
    <div className="App">
      {/* <TodoForm/> */}
      <TodoList/>
    </div>
  );
}

export default App;
