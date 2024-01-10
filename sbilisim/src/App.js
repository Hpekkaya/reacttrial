import React, { useState } from 'react';
import './App.css';
import Navbar1, {AltNavbar} from './0-Components/Navbar1';
import Body from './0-Components/Body';





function App() {
     
  const [value, setValue] = useState(0);

  // function Decrase() {setValue(value-1)}
  const Decrase=()=> setValue(value-1)
  
    
    return (
       <div className='App'> 
         {/* <Navbar1/>
         <AltNavbar/>
         <Body/> */}
         <p><button onClick={()=>{setValue(value+1)}}>Increase</button></p>
         <p>{value}</p>
         {/* <p><button onClick={()=>{setValue(value-1)}}>Decrease</button></p> */}
         <p><button onClick={Decrase}>Decrease</button></p>

       </div>
      );
    }


    
    export default App;


