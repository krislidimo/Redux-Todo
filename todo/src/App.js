import React from 'react';
import Title from './components/Title.js';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
