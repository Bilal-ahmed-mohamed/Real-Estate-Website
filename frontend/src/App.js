import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import  Home  from "./pages/Home";
import Agent from "./pages/Agent";
import Sales from "./pages/Sales";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ContactUs from "./pages/ContactUs";
import IndivualPropery from "./pages//IndivualPropery";
import Footer from "./components/Footer";
import AddProperty from "./pages/AddProperty";
import UseFetch from "./hooks/UseFetch";
import Card from "./components/Card";


function App() { 
    const [properties , setProperties] = useState([])
 
 
   
    const {data , isLoading , error } = UseFetch('http://localhost:4000/api/realEstate')

    useEffect(()=> {
     setProperties(data)
    
    },[])
  
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Agent" element={<Agent/>} />
        <Route path="/Sales" element={<Sales/>}/>
        <Route path="/AddProperty" element={<AddProperty/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Card" element={<Card/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/IndivualPropery/:id" element={<IndivualPropery properties ={properties} setProperties={setProperties}    />  }  />
        
       
       </Routes>
       
       
       <Footer/>
       </BrowserRouter>
       

      
       

    </div>
  );
}

export default App;
