import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, toggleTodo }) {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: '20px' }}> </th>
          <th style={{ width: '100px' }}>Name</th>
          <th style={{ width: '10px' }}>Visitor ID</th>
          <th style={{ width: '150px' }}>Phone Number</th>
          <th style={{ width: '0px' }}>Email</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => toggleTodo(todo.id)}
              />
            </td>
            <td>{todo.name}</td>
            <td>{todo.visitorId}</td>
            <td>{todo.phoneNumber}</td>
            <td>{todo.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}