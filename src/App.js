
import { useState, useEffect } from "react";
import Tasks from "./components /Tasks";
import AddTask from "./components /AddTask";
import Header from "./components /Header";

import './App.css'


function App() {
  const [selectedTask, setSelectedTask] = useState(null)
  const [showAddTask, setshowAddTask] = useState(true)
  const [tasks, setTasks] = useState ([
    {
      "id": 1,
      "text": "Making HomeWork",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },
    {
      "id": 3,
      "text": "Going to the gym ",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }

  ]);

 
  
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);



  


  //ADD task 
  const addTask = (task) => {
    console.log(task)
    const id = Math.floor(Math.random() * 1000) + 1

    const newTask = {id, ...task}

    setTasks([...tasks, newTask])
    localStorage.setItem('tasks', JSON.stringify(tasks));

  }



  //DELETE TASk 
  const deleteTask = (id) => {
    // console.log('delete', id)
    const updated = tasks.filter((task) => task.id !== id)
    setTasks(updated)
    localStorage.setItem('tasks', JSON.stringify(updated));


  }



  //Toggle Completed 
  const toggleReminder = (id) => {
    // console.log("toggled btn", id)
    const toogled = tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task )
    setTasks(toogled)
    localStorage.setItem('tasks', JSON.stringify(toogled));

  }



  // EditTask 
  const editTask = (task) => {
    console.log("edited task", task)
    setSelectedTask(task)
  }



  return (
    <div className="container">
      <Header onAdd={() => setshowAddTask(!showAddTask)} showAdd={showAddTask}/>
      
      {
        showAddTask ? (

          <AddTask 
            onAdd={addTask} 
            selectedTask={selectedTask}
            tasks={tasks} 
            setTasks={setTasks} 
            setSelectedTask={setSelectedTask} 
          
          />
            
        ) : null

      
      }

      {tasks.length ? 

          <Tasks 
              tasks={tasks} 
              onDelete={deleteTask} 
              onToggle={toggleReminder} 
              onEdit={editTask}/> 
              
              : <h3 className="Notask">No task to show</h3>
              
      }
      
    </div>
  );
}

export default App;
