import React, { useState, useCallback, useMemo } from "react";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";

let taskid = 5;

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 0, title: "Create todo-react app", done: false },
    { id: 1, title: "Change code", done: false },
    { id: 2, title: "Be happy", done: false },
  ]);

  const addTask = useCallback((title) => {
    setTasks((t) => [...t, { id: taskid++, title, done: false }]);
  }, []);

  const setDone = useCallback((id) => {
    setTasks((tasks) =>
      tasks.map((t) => (t.id === id ? { ...t, done: true } : t))
    );
  }, []);

  const deleteTask = useCallback(
    (id) => setTasks((tasks) => tasks.filter((t) => t.id !== id)),
    []
  );

  const activeTasks = useMemo(() => tasks.filter(({ done }) => !done), [tasks]);
  const t = useMemo(() => tasks.sort(({ done }) => (done ? 1 : -1)), [tasks]);

  return (
    <div className="App">
      <TaskInput addTask={addTask} />
      <h1 className="top-title">Active tasks: {activeTasks.length}</h1>
      {t.map((task) => (
        <Task
          doneTask={() => setDone(task.id)}
          deleteTask={() => deleteTask(task.id)}
          task={task}
          key={task.id}
        />
      ))}
    </div>
  );
};

export default App;
