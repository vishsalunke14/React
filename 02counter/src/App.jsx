import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    if (counter < 20) {

      console.log("clicked", counter);
      // counter = counter + 1
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)

      // setCounter(counter + 1)
      
    }
    else {
      console.log("go back");
    }
  }
  const removeValue = () => {
    if(counter > 0){

      setCounter(counter - 1)
    }
    else{
      console.log("go back");
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>

      <p>footer:{counter}</p>
    </>
  )
}

export default App
