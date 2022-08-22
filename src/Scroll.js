import React, {useState} from 'react';
import './Tabs.scss';
import tabs from './Tab';

function Scroll() {
  const [currentId, setCurrentId] = useState('1');


  const handleItemClick = (e) => {
    setCurrentId(e.target.id);
    let scrollLeft = currentId *90;
    let tab_header_2 = document.querySelector(".tab_header_2");
        tab_header_2.scrollLeft += scrollLeft
  }
  const tabTitle = tabs.map((item)=>{
    return(
      <li className={item.id == currentId ? ' item active' : 'item'} key={item.id} id={item.id} onClick={handleItemClick}>{item.title}</li>
    )
  })
  return (
    <div className="tab_header_2">
        <ul>
            {tabTitle}
        </ul>
    </div>
  );
}

export default Scroll;
