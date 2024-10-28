import React, {useState} from 'react';
import "./ToggleVisibility.css"

export default function ToggleVisibility () {
const [visible, setVisible] = useState(false);

const ToggleVisibility = ()=>{
    setVisible(!visible);
}


  return (
    <div className='toggle'>
          <button onClick={ToggleVisibility}>
            {visible ? 'Hide':'Show' }
            </button>
            {visible && ( // Only render the h1 if visible is true
        <h1>
          <span className='now'>Now</span> 
          <span className='you'> You</span> 
          <span className='see'> See</span> 
          <span className="me"> Me</span>
        </h1>
      )}
            
    </div>
  )
}
