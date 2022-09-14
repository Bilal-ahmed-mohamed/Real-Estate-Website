import Navbar from "./components/Navbar";
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import  Home  from "./pages/Home";
import Agent from "./pages/Agent";
import Sales from "./pages/Sales";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Agent" element={<Agent/>} />
        <Route path="/Sales" element={<Sales/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
       </Routes>
       
       <Footer/>
       </BrowserRouter>

      
       

    </div>
  );
}

export default App;
