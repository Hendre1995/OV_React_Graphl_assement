import React from "react";
import { useNavigate } from "react-router-dom";

const NavButtons = () => {
  const navigate = useNavigate()
  const navProduct = () => {
    navigate('/product')
  }
  const navOrders = () => {
    navigate('/orders')
  }
  return (<div className="container1 stickyButtons">
    <button onClick={navProduct}>products</button>
    <button onClick={navOrders}> orders</button>
  </div>)
}

export default NavButtons;