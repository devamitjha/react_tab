import React, {useState} from 'react';
import './App.scss';
import products from './Data';

function App() {
  const [currentId, setCurrentId] = useState('1');

  const filterItem = products.filter((item)=>item.id==currentId).map((item)=>{
    return(
      <>
        <p key={item.id}>{item.description}</p>
      </>
    );
  });
  const handleItemClick = (e) => {
    setCurrentId(e.target.id);
  }
  const productTitle = products.map((item)=>{
    return(
      <li className={item.id == currentId ? ' item active' : 'item'} key={item.id} id={item.id} onClick={handleItemClick}>{item.title}</li>
    )
  })
  return (
    <div className="container">
      <div className="tab_header">
        <ul>
         {productTitle}
        </ul>
      </div>
      <div className="tab_body">
        {filterItem}
      </div>
    </div>
  );
}

export default App;
