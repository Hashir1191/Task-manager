import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ProgressBar from './components/ProgressBar'; // Import the ProgressBar
import './index.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', status: 'incomplete' },
    { id: 2, title: 'Task 2', status: 'completed' },
    { id: 3, title: 'Task 3', status: 'pending' },
  ]);

  const [newTask, setNewTask] = useState('');
  const [currentView, setCurrentView] = useState('all');

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim() === '') return;
    const newTaskObj = { id: tasks.length + 1, title: newTask, status: 'pending' };
    setTasks([...tasks, newTaskObj]);
    setNewTask(''); // Clear input
    setCurrentView('all');
  };

  // Function to toggle task status between completed, incomplete, and pending
  const toggleTaskStatus = (taskId) => {
    setTasks(
      tasks.map(task => {
        if (task.id === taskId) {
          const nextStatus = task.status === 'incomplete' ? 'completed' : task.status === 'completed' ? 'pending' : 'incomplete';
          return { ...task, status: nextStatus };
        }
        return task;
      })
    );
  };

  // Calculate the number of completed tasks and total tasks
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const totalTasks = tasks.length;

  // Filter tasks based on the current view
  const filteredTasks =
    currentView === 'completed'
      ? tasks.filter(task => task.status === 'completed')
      : currentView === 'incomplete'
      ? tasks.filter(task => task.status === 'incomplete')
      : tasks;

  return (
    <div className="app-container">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="main-content">
        <h1>Task Management Dashboard</h1>

        {/* ProgressBar Component */}
        <ProgressBar completedTasks={completedTasks} totalTasks={totalTasks} />

        {currentView === 'add' ? (
          <div className="task-input">
            <input
              type="text"
              placeholder="Add a new task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
          </div>
        ) : (
          <div className="task-list">
            <h2>{currentView === 'completed' ? 'Completed Tasks' : currentView === 'incomplete' ? 'Incomplete Tasks' : 'All Tasks'}</h2>
            <ul>
              {filteredTasks.map(task => (
                <li key={task.id} className={`task-item ${task.status}`}>
                  <span>{task.title}</span>
                  <button
                    className={task.status}
                    onClick={() => toggleTaskStatus(task.id)}
                  >
                    {task.status === 'completed'
                      ? 'Mark Pending'
                      : task.status === 'pending'
                      ? 'Mark Incomplete'
                      : 'Mark Complete'}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
