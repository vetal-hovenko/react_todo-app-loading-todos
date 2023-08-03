import React from 'react';
import { Todo } from '../types/Todo';

interface Props {
  filteredTodos: Todo[];
}

export const TodoList: React.FC<Props> = ({ filteredTodos }) => {
  return (
    <section className="todoapp__main">
      {filteredTodos.map((todo) => (
        <div
          key={todo.id}
          className={`todo ${todo.completed ? 'completed' : ''}`}
        >
          <label className="todo__status-label">
            <input type="checkbox" className="todo__status" />
          </label>

          <span className="todo__title">{todo.title}</span>

          <button type="button" className="todo__remove">
            ×
          </button>

          <div className="modal overlay">
            <div className="modal-background has-background-white-ter" />
            <div className="loader" />
          </div>
        </div>
      ))}
    </section>
  );
};