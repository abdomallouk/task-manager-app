import React from 'react'
import Button from "./Button";


const Header = ({onAdd, showAdd}) => {
  return (
    <div>
       <h1>Tasks Manager</h1>
       <button onClick={onAdd} style={{color:'white', backgroundColor:'green', borderRadius:'10px' ,padding:'7px 10px'} }>
            {showAdd? "Close" : "Add"}
        </button>

    </div>
  )
}

export default Header
