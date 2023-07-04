import './App.css'
import { Routes,Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Base from './Components/Base';
import AddTopping from './Components/AddTopping';
import Order from './Components/Order';
import { useState } from 'react';
function App() {
  const [pizza ,setPizza] = useState({base:"" ,toppings:[]});
  const addBase = (base)=>{
    setPizza({...pizza,base})
  }
  const  addtopping=(topping)=>{
    let newtoppings;
    console.log(pizza.toppings.includes(topping))
    if(!pizza.toppings.includes(topping)){
      newtoppings= [...pizza.toppings,topping]
    }else{
      newtoppings = pizza.toppings.filter(item=>item!==topping);
    }
    setPizza({...pizza,toppings:newtoppings});
  }
 return(
  <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Base'  element={<Base
      addBase={addBase} pizza={pizza} />} />
      <Route path='/Topping' element={<AddTopping
        addtopping={addtopping} pizza={pizza}/>}/>
      <Route path='/Order' element={<Order pizza={pizza} />}/>
    </Routes>
  </>
 )
}

export default App
