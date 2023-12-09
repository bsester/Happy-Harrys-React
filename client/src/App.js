import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import Customers from "./Customers";
import CreateCustomer from "./CreateCustomer"
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";



function App() {
  return (
      <div className="app">
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/customers' element = {<Customers />} />
            <Route path = '/customers/create' element = {<CreateCustomer />} />
            <Route path = '/read/:id' element = {<Home />} />
            <Route path = '/edit/:id' element = {<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;
