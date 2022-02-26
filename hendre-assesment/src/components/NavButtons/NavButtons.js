import React from "react";
import { useNavigate } from "react-router-dom";

const NavButtons = () => {
  const navigate = useNavigate()
  const navProduct = () => {
    navigate('/product')
  }
  return (<div className="container1">
    <button onClick={navProduct}>products</button>
    <button>orders</button>
  </div>)
}

export default NavButtons;