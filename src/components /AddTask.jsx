import { useState, useEffect } from 'react'


const AddTask = ({onAdd, selectedTask, tasks, setTasks, setSelectedTask}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    useEffect(() => {
        if (selectedTask) {
          setText(selectedTask.text);
          setDay(selectedTask.day);
          setReminder(selectedTask.reminder);
        }
      }, [selectedTask]);
      
    const onSubmit = (e) => {
        e.preventDefault()

    if(!text) {
        alert('please enter the Text fields')
        return
    }

    if(selectedTask) {
        const updatedTask = {...selectedTask, text, day, reminder}
        const updatedTasks = tasks.map((task) => 
          task.id === updatedTask.id ? updatedTask: task
        )
        setTasks(updatedTasks);
        setSelectedTask(null);
    } else {
        onAdd({text, day, reminder})
    }

    setText('');
    setDay('');
    setReminder(false);

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task Title</label>
                <input type='text' placeholder='Add task Title'  value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add task Time'   value={day} onChange={(e) => setDay(e.target.value)}/>
            </div> 
            <div className='form-control form-control-check'>
                <label>set Reminder</label>
                <input type='checkbox'  checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>   

            <input type="submit" value='Save Task' className='btn btn-block'/>
        </form>
        
    )
}

export default AddTask
