import React from 'react';

const Todo = ({ todo, onDelete }) => {
    return (
        <div className="todo">
            <p>{todo.text}</p>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    );
};

export default Todo;
