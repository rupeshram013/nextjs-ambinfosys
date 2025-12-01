import React, { useState } from 'react';

function Button({ name }) {
  const colorOptions = ['red', 'blue', 'green', 'yellow'];
  const displayOptions = ['block', 'none'];

  const [defaultDisplay, setDisplay] = useState(displayOptions[0]);
  const [defaultColor, setColor] = useState(colorOptions[0]);

  function changeColor() {
    console.log('Button Clicked (Color Change)', name);
    setColor(colorOptions[2]);
  }

  function changeDisplay() {

    if(defaultDisplay === displayOptions[0]){
        console.log('Button Clicked (Display Change)', defaultDisplay);
        setDisplay(displayOptions[1]);
        
    }else {
        console.log('Button Clicked (Display Change)', defaultDisplay);
        setDisplay(displayOptions[0])
    }
  }

  return (
    <div>
      <button 
        style={{ backgroundColor: defaultColor, color: 'white', padding: '10px' }} 
        onClick={changeDisplay}
      >
        {name}
      </button>

      <p style={{ display: defaultDisplay, color: defaultColor }}>
        Current Color State: {defaultColor}
      </p>

      <button onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
}

export default Button;