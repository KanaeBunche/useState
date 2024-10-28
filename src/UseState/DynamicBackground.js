import React, {useState} from 'react'


const DynamicBackground = () => {
    const [backgroundColor, setBackgroundColor] = useState(false);
  
  const handleToggle = () =>{
  setBackgroundColor(prev =>!prev);
  };


const currentColor = backgroundColor ? 'blue' : 'green';

    return (
    <div style={{ backgroundColor: currentColor, height: '100vh' }} >
<button onClick={handleToggle}>Change Color</button>

    </div>
  )
}

export default DynamicBackground