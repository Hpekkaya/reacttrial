
import JSX from "./1-JSX/JSX"

// import './index.css';


function App() {
   const name = "ahmet"
    
    return (
       <div className="App"> 
         
          <h1>Hello  {name}</h1>
          <h2>{10+10} </h2>
          <h2>{name.toUpperCase()}</h2>
          {/* <JSX/>  */}
          
       </div>
      );
    }
    
    export default App;


