import React, { useState } from 'react';
import Item1 from './Item1';



const App1 = () => {
  const [curInput, setInput] = useState("");
  const [curList, setCurList] = useState([]);

  const addList = (val) => {
      setInput(val.target.value);
  }

  const setList = (event) => {
    event.preventDefault();
      setCurList((prev) => {
        return [...prev,
        curInput
        ]
        
      }); 
    setInput("");
  }

  return (<>
  <div className="card">
    <h1>TODO List</h1>
    <input type="text" placeholder="Enter the things" id="input"  onChange={addList} value={curInput}/>
    <button  className="submit" type="submit" onClick={setList}>+</button>
    <ul>
      {curList.map((value, index) => {
        return (
        <Item1
          text= {value}
          key= {index}
          id = {index}
          />
        )
      })}
    </ul>
  </div>
  </>);
}

export default App1;
