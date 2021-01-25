import logo from './logo.svg';
import './App.css';
import Demo from "./components/Demo";
import UseMemo from "./components/UseMemo";
import React from "react";


function App() {
  return (
    <div className="App">
      <Demo />
      <div style={{marginRight:"30%", marginLeft:"30%"}}>
          <div style={{float:"left", width:"100%", padding:"0 10px"}}>
              <div style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",padding: "30px 10px",textAlign: "center",backgroundColor:"lightblue"}}>
      <UseMemo />
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
