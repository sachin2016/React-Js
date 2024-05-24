
import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [count,setvalue]=useState(0);
  const addVal=()=>{
    console.log(count);
    setvalue(count+1);
  }
  const delVal=()=>{
    if(count==0){
      alert("negative value not accepted");
      
    }
    setvalue(count-1);
  }



  return (
  
    <>
      <h1>Chai Aur React</h1>
      <h2>counter value {count}</h2>

      <button 
      onClick={addVal} >add value</button>
      <br />
      <button onClick={delVal}>Remove value</button>
    </>
  )
}

export default App
