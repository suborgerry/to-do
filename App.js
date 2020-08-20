import React from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput'
class App extends React.Component {
  constructor() {
    super(); 

    this.state = {
      tasks: [
        { id: 0, title: 'Create todo-react app', done: false },
        { id: 1, title: 'Change code', done: false },
        { id: 2, title: 'Be happy', done: false }
      ]
    };
  }

  addTask = task => {
    this.setState(state => {
      let { tasks } = state;
      tasks.push({
        id: tasks.length !== 0 ? task.length : 0,
        title: task,
        done: false
      });
      return tasks;
    });
  };

  doneTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].done = true;
      return tasks;
    });
  };

  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      delete tasks[index];
      return tasks;
    })
  };

  render() {
    const { tasks }   = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    const doneTasks   = tasks.filter(task => task.done);

    return(
      <div className="App">
        <TaskInput addTask={this.addTask}/>
        <h1 className="top-title">Active tasks: {activeTasks.length}</h1>
        {[...activeTasks, ...doneTasks].map(task => (
        <Task 
        doneTask={() => this.doneTask(task.id)}
        deleteTask={() => this.deleteTask(task.id)}
        task={task} 
        key={task.id}
        />
        ))}
      </div>
    );
  }
}

export default App;