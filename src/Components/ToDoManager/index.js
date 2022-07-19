import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './styles.css';
import { ToDoItem } from '../ToDoItem';

export const ToDoManager = () => {
    const [inputValue, setInputValue] = useState('');
    const [toDos, setToDos] = useState([{ id: nanoid(), title: 'First To Do' }]);
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const addToDo = (e) => {};

    return (
        <div>
            <div>
                <form onSubmit={addToDo}>
                    <h3>Create a new task</h3>
                    <input value={inputValue} onChange={handleInputChange} />
                    <button type="submit">Add Task</button>
                </form>
            </div>
            <div>
                <h3>Tasks</h3>
                {toDos.map((toDo, index) => (
                    <ToDoItem key={toDo.id} {...toDo} />
                ))}
            </div>
        </div>
    );
};
