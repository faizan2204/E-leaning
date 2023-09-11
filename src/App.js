import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";

import Header from "./components/frontend/Header";
import Footer from "./components/frontend/Footer";
import Main from "./components/frontend/Main";
import Admin from "./components/backend/Admin";
import InnerMain from "./components/frontend/InnerMain";
import InnerNav from "./components/frontend/InnerNav";
import Java from "./components/frontend/Java";
import Home from "./components/frontend/Home";



function App(){
  return (
    <> 
    <Routes>
      {/* for Frontend */}
      <Route path="/" element={<Main />}>
        
      
      </Route>
      <Route>
      <Route path="/InnerMain" element={< InnerMain />}/>
      <Route path="/home" element={<Home />}/>
         <Route path="/java" element={<Java />}/>
      </Route>


        {/* for Backend */}
      <Route path="/admin" element={<Admin />}>
      
      </Route>
    </Routes>
    </>

  )
}

export default App;