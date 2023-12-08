import React, {useState} from "react";
import Items from "./Items";

const App = () => {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  const listItem = (event) => {
    setItem(event.target.value);
    
  }

  const addItem = (event) => {
    event.preventDefault();
    setItems((prev) => {
      return [
        ...prev,
        item
      ]
    });
    setItem("");
  }

  const deleteItem = (id) => {
     setItems((prev) => {
      return prev.filter((arr, index) =>{
        return index !== id;
      })
     })   
  }

  return (<>
  <div className="card">
    <h1>TODO List</h1>
    <input type="text" placeholder="Enter the things" id="input"  value={item} onChange={listItem} />
    <button  className="submit" type="submit" onClick={addItem}>+</button>
    <ul>
    {items.map((val, index) =>
      {
        return (
          <Items
            key={index}
            text={val}
            id={index}
            onSelect={deleteItem}
          />
        )
    })}
    </ul>
  </div>
  </>);
}

export default App;
