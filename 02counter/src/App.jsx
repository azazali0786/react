import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, azazCounter] = useState(0);

  // let counter = 0

  const addValue = () =>{
    console.log("value added",counter, Math.random());
    if(counter<10){
      azazCounter(prevCounter => prevCounter+1)
      azazCounter(prevCounter => prevCounter+1)
      azazCounter(prevCounter => prevCounter+1)
      azazCounter(prevCounter => prevCounter+1)
    }
  }
  const removeValue = () =>{
    if(counter>0){
      azazCounter(counter-1);
    }
  }

  return (
    <>
      <h1>This is counter app</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >remove value</button>
    </>
  )
}

export default App
