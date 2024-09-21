import React from 'react';
import './ProgressBar.css';

function ProgressBar({ completedTasks, totalTasks }) {
  const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      <span className="progress-text">{percentage}% Completed</span>
    </div>
  );
}

export default ProgressBar;
