import React from 'react';
import TodoList from './TodoList';
function App() {
  const todoItems = ['Finish assignment', 'Study React', 'Walk the dog'];
  return (
    <div>
      <TodoList todos={todoItems} />
    </div>
  );
}
export default App;
