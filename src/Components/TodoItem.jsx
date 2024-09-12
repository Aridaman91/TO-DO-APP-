import React from 'react';

function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={toggleTodo}
      >
        {todo.text}
      </span>
      <button onClick={removeTodo}>Delete</button>
    </li>
  );
}

export default TodoItem;
