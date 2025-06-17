import React from 'react';
const TodoList = ({ todos }) => {
  return (
    <div>
      <h2>My Todos</h2>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
