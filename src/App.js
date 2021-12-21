import './App.css';
import React, { useState } from 'react';

export default function App() {
  const defaultList = ['one'];
  const[input,setInput] = useState("");
  const [list, updateList] = useState(defaultList);

  const handleInputChange =(e) =>{
    setInput(e.target.value);
  }
  const handleUpdateItem = () =>{
    updateList([...list,input]);
  }
  const handleRemoveItem = (e) => {
   const name = e.target.getAttribute("name")
    updateList(list.filter(item => item !== name));
  };

  return (
    <div className='container mt-5 d-flex flex-column'>
      <div class="row">
      <div className='col-md-2'>
      <input type="text" onChange={handleInputChange}/>
      </div>
      <div class="col-md-1">
      <button className="btn btn-primary btn-sm" onClick={handleUpdateItem}>Add</button>
      </div>
      </div>
     
    
      <ul>
      {list.map(item => {
        return (
          <li>
            <div class="row">
            <div class="col-md-2">{item}</div>
            <button className="btn btn-primary btn-sm mt-1 col-md-1" name={item} onClick={handleRemoveItem}>
              x
            </button>
            </div>
           
            
          </li>
        );
      })}
      </ul>
    </div>
  );
}


