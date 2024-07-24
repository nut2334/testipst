import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Drawerpage from "./drawerpage";
import Tabpage from "./tabpage";

function App() {
  return (
    <div className="App">
      <Drawerpage />
      <Tabpage />
    </div>
  );
}

export default App;
