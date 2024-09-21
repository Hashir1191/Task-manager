import React from 'react';
import './Sidebar.css';

const Sidebar = ({ currentView, setCurrentView }) => {
  return (
    <div className="sidebar">
      <h2>Task Manager</h2>
      <ul>
        <li
          className={currentView === 'all' ? 'active' : ''}
          onClick={() => setCurrentView('all')}
        >
          All Tasks
        </li>
        <li
          className={currentView === 'completed' ? 'active' : ''}
          onClick={() => setCurrentView('completed')}
        >
          Completed Tasks
        </li>
        <li
          className={currentView === 'incomplete' ? 'active' : ''}
          onClick={() => setCurrentView('incomplete')}
        >
          Incomplete Tasks
        </li>
        <li
          className={currentView === 'add' ? 'active' : ''}
          onClick={() => setCurrentView('add')}
        >
          Add Task
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
