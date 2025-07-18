import React from "react";
import {Routes, Route} from "react-router-dom";
import Brand from "./page/Brand";
import Cart from "./page/Cart";
import Community from "./page/Community";
import Global from "./page/Global";
import Login from "./page/Login";
import Offline from "./page/Offline";
import Store from "./page/Store";
import Join from "./page/Join";
import Home from "./page/Home";
import Header from "./components/Header";
import FreshDetail from './components/FreshDetail.jsx';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<Login />} />
        <Route path="/offline" element={<Offline />} />
        <Route path="/global" element={<Global />} />
        <Route path="/community" element={<Community />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/join" element={<Join />} />
        <Route path="/fresh/:id" element={<FreshDetail />} />
      </Routes>
    </div>
  );
}

export default App;
