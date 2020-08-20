import React from "react";

const ActionBtn = ({ task, doneTask, deleteTask }) => (
  <div className="btn-bolock">
    {!task.done ? (
      <p aria-label="done" onClick={doneTask}>
        ✔
      </p>
    ) : (
      <p aria-label="delete" onClick={deleteTask}>
        ✘
      </p>
    )}
  </div>
);

const Task = (props) => {
  const { task } = props;
  const toggleDone = "task " + (task.done ? "task-done" : "");

  return (
    <div className={toggleDone}>
      <p>{task.title}</p>
      <ActionBtn {...props} />
    </div>
  );
};

export default Task;
