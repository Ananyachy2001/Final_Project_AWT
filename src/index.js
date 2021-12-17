import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import Head from './Components/Head';
import Foot from './Components/Foot';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Userlist from './Components/Userlist';
import ProductList from './Components/ProductList';
import OrderDetailList from './Components/OrderDetailList';
import OrderList from './Components/OrderList';
import DeliveryList from './Components/DeliveryList';
import Createuser from './Components/Createuser';
import Login from './Components/Login';
import axios from "axios";

var token = null;
if(localStorage.getItem('user')){
  var obj = JSON.parse(localStorage.getItem('user'));
  token = obj.access_token;
}
axios.defaults.baseURL="http://127.0.0.1:8000/api/";
axios.defaults.headers.common["Authorization"] = token;

ReactDOM.render(
  <React.StrictMode>
<Router>
      <Head/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/userlist">
          <Userlist/>
        </Route>
        <Route exact path="/productlist">
          <ProductList/>
        </Route>
        <Route exact path="/orderlist">
          <OrderList/>
        </Route>
        <Route exact path="/deliverylist">
          <DeliveryList/>
        </Route>
        <Route exact path="/orderdetaillist">
          <OrderDetailList/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/createuser">
          <Createuser/>
        </Route>
        <Route exact path="/createproduct">
          <Createproduct/>
        </Route>
      </Switch>
      <Foot/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
