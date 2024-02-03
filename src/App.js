
import { useState } from 'react';
import './App.css';


function App() {

  const [list,setList] = useState(['Apple', 'Banana','Orange']);

  const [dropin, setDropin] = useState(null);
  const ondragstart = (e) => {
    e.target.classList.add("dragfruits");
  };
  const ondragend = (e) => {
    e.target.classList.remove("dragfruits");
    const new_list = [...list];
    new_list.splice(e.target.id, 1);
    new_list.splice(dropin, 0, e.target.innerText);
    setList(new_list);
  };
  const ondragover = (e) => {
    e.preventDefault();
    setDropin(e.target.id);
  };

  return(
  <div className='app'>
    <h2>Fruits</h2>
      <div className='input-group'>
        <input type="text" name="" id="" placeholder='fruits'/>
        <button className='btn'>Click me</button>
      </div>


      <div className='list-container'>
        {
          list.map((v,i)=>(
            <div key ={i} id={i} className='listitem' 
            draggable onDragStart={ondragstart} 
             onDragEnd={ondragend}
             onDragOver={ondragover}
             
             >
              {v}
              
            </div>

          ))
        }
        
        
      </div>
  </div>
  );
}

export default App;
