import { useContext, useEffect, useState } from "react";

import "./App.css";
import Card from "./Components/Cards/Card";
import Navbar from "./Components/Navbar/Navbar";
import {MovieContext} from "./Context/context.jsx";



function App() {
  
  const {search, setMovie} = useContext(MovieContext)

  console.log(search)



  return (
    <>
      
        <div className="main">
          <Navbar />
          <Card />
        </div>
    
    </>
  );
}

export default App;
