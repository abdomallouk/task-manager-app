// import { FaTimes, FontAwesomeIcon, faTrashCan} from 'react-icons/fa';
import { IoIosTrash } from 'react-icons/io';
import React from 'react'
import Button from './Button';

const Task = ({task, onDelete, onToggle, onEdit}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder': ''}`}> 
      <h1> 
        {task.text}      
      </h1>
      <h3> {task.day}</h3>
      <div className='cta-container'>
          <button className='complete' onClick={() => onToggle(task.id)}>Completed</button>
          <button className='edit'  onClick={() => onEdit(task)}>Edit Task</button>
          <IoIosTrash onClick={()=> onDelete(task.id)}  style={{color:'red', fontSize:'30px', cursor:'pointer'}} />
      </div>
      

    </div>
  ) 
}

export default Task
