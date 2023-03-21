import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {

  const[input,updateInput] = useState('')
  const changeHandler = e =>{
      updateInput(e.target.value)
      console.log(e.key)
      e.key==='Enter'&&fetch()
  }
  function fetch(){
      console.log(input)
  }
  return (
    <div className="App">
      <input type='text'
             // onChange={changeHandler}
             // onKeyDown={changeHandler}

             onKeyUp={changeHandler}
             // onInput={changeHandler}
      />
        <button >click</button>
        <p>{input}</p>

    </div>
  );
}

export default App;
