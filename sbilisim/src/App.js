import React, { useState } from 'react';
import './App.css';
import Navbar1, {AltNavbar} from './0-Components/Navbar1';
import Body from './0-Components/Body';





function App() {
     
  // const [value, setValue] = useState(0);
  // function Decrase() {setValue(value-1)}
  // const Decrase=()=> setValue(value-1)
  const [header, setHeader]=useState("I am learning React");
  const yoB = 1970;  
    
    return (
       <div className='App'> 
         {/* <Navbar1/>
         <AltNavbar/>
         <Body/> */}
         {/* <p><button onClick={()=>{setValue(value+1)}}>Increase</button></p>
         <p>{value}</p> */}
         {/* <p><button onClick={()=>{setValue(value-1)}}>Decrease</button></p> */}
         {/* <p><button onClick={Decrase}>Decrease</button></p> */}
         <Container title={header} number={yoB}/>
       </div>
      );
    }

    function Container(props){
      return(
        <div style={{width:"400px",height:"400px",border:"2px solid black", margin:"0px auto"}}>
          <p>{props.title}</p> - 
          <p>{props.number}</p>
        </div>
      );
    }


    
    export default App;


