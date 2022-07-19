import React from 'react';
import './styles.css';

export const ToDoItem = ({
    title
}) => {
    return (
        <div>
            {title}
            <button>
                ✓
            </button>
            <button>
                X
            </button>
        </div>
    );
}