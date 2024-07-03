

import './App.css';
import Box from '@mui/material/Box';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useState} from 'react'

function App() {
  
  const [counter, setCounter] = useState(0);
  
  const handleClick1 = () => {
    //for incremented
    setCounter(counter + 1)
  }
   
  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
 
    if(counter === 0)
    {
      return 0;
    }
     
    else {
    setCounter(counter - 1)
    }
  }

  return (
    

<div className="app">
        
<div className='container'>           
  <div className='total_amount_card' style={{ backgroundImage: `linear-gradient(to right,  rgba(253, 230, 90, 100%), rgba(204, 254, 87, 100%))`}}>
<div className='right'>

  </div> 
    <div className='card_text '>
    <h3 className='total_amount_heading'><span className='heading'>Counter is:</span> {counter}</h3>
    </div>
  </div>
  <form >
  <div className='button_collection'>
         
    <button   onClick={handleClick1}   className='btn_one'>+</button>
    
    <button   onClick={handleClick2}    className='btn_two'>-</button>
    
  </div>
  </form>

</div>      
</div>
  );
}

export default App;
