import "./App.css";
import './components/Header';
import {useState} from 'react'
import Header from "./components/Header";
import Items from './components/Items';
import Additem from './components/Additem';
function App() {
  const[items, setItems] = useState([
    {
      id: 1,
      title: "Goku vs Freezer",
      day: "lun",
      time: "18:00",
    },
    {
      id: 2,
      title: "Goku vs Cell",  
      day: "mar",
      time: "17:00",
    },
    {
      id: 3,
      title: "Goku vs Majin Boo",
      day: "lun",
      time: "16:00",
    },
    {
      id: 4,
      title: "Goku vs Giren",
      day: "lun",
      time: "19:00",
    },
  ]);
  const addItem= (item)=>{
    const id = Math.floor(Math.random()*1000)+1;
    const newItem= {id, ...item}
    setItems([...items,newItem])
    console.log(items)
  }
  const deleteItem = (id)=>{
    setItems(items.filter((item)=>item.id!==id))
  }
  
  
  return (
    <div className='container'> 
    <div className ='row justify-content-center'>
    <Header/>
    <Additem addItem={addItem}/>
    <Items items={items} deleteItem={deleteItem}/>
    </div>
      {
        

        /*
      items.map(function(item){
        return (
          <li key={item.id}>
            {item.title}-{item.time}
          </li>
          items.map((item) => (
          <li key={item.id}>
            {item.title}-{item.time}
          </li>
        ))
        )
      */
        
      }
    </div>
  );
}

export default App;
