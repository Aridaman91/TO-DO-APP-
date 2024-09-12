import React, { useState } from 'react';
import TodoList from './Components/TodoList.jsx';
import TodoForm from './Components/TodoForm.jsx';
import './App.css';
import logo from './Components/images/g.png';  // Import the logo
import motivationalImage from './Components/images/download.jpeg';  // Import the motivational image

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="App Logo" className="logo" />  {/* Use imported logo */}
        <h1>To-Do App</h1>
      </header>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      <footer className="footer">
        <p>Get things done, one task at a time!</p>
        <img src={motivationalImage} alt="Stay Motivated" className="motivational-image" />  {/* Use imported image */}
      </footer>
    </div>
  );
}

export default App;
