import { useState } from "react"
import './App.css';
import Userapp from './user/Userapp';
import AdminApp from './admin/adminapp';
import {Cartcontext,Usecart} from "./user/component/cartNotify";



function App() {
  let [cart,setCart]=useState(0)
  let name = localStorage.getItem("name")

  if (name == "adminDeekshith") {
    return (<AdminApp></AdminApp>);
  } else {
    return (
     <Cartcontext.Provider value={{cart,setCart}}>
        <Userapp></Userapp>
      </Cartcontext.Provider>
      
    );
  }

}

export default App;
/**
 user=>(all file =>userapp.js)=>app.js
 admin=>(all file =>adminapp.js)=>app.js
 */