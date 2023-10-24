import React from 'react';
import Task from './Task';
import Button from './Button';
// import './Task.css'


const Tasks = ({tasks, onDelete, onToggle, onEdit}) => {
  return (
    <div className='tasks-container'>

      {
        tasks.map((task) => (

            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}  onEdit={onEdit}/>
        ))
      }

    </div>
  )
}

export default Tasks
