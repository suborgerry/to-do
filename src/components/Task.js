import React from 'react';

const Task = ({ task, ...props }) => {

    const ActionBtn = () => (
        <div className="btn-bolock">
            {!task.done ? (
                <p aria-label="done" onClick={props.doneTask}>✔</p>
            ) : (
                <p aria-label="delete" onClick={props.deleteTask}>✘</p>
            )}
        </div>
    );

    const toggleDone = 'task ' + (task.done ? 'task-done': '');

    return (
        <div className={toggleDone}>
            <p>{task.title}</p>
            <ActionBtn />
        </div>
    );
};

export default Task;