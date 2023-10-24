import React from 'react'

const Button = () => {

  const clicked = (e) => {
    console.log(e.target)
  }  
  return (
    <div>
        <button onClick={clicked} style={{color:'white', backgroundColor:'green', borderRadius:'10px' ,padding:'7px 10px'} }>Add Task</button>

    </div>
  )
}

export default Button
