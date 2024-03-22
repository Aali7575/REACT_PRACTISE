// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import Start from './components/hello'; 
// import Todos from './components/todos';

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todos from "./components/todos";
import Start from "./components/hello";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
