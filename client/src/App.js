import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import Customers from "./Customers";
import CreateCustomer from "./CreateCustomer"
import EditCustomer from "./EditCustomer"
import Items from "./Items";
import CreateItem from "./CreateItem";
import EditItem from "./EditItem";
import Sales from "./Sales"
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
            <Route path = '/customers/edit' element = {<EditCustomer />} />
            <Route path = '/items' element = {<Items />} />
            <Route path = '/items/edit/:id' element = {<EditItem />} />
            <Route path = '/items/create' element = {<CreateItem />} />
            <Route path = '/sales' element = {<Sales />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;
