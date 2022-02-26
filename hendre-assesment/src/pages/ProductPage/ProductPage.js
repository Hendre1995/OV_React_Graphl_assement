import React from 'react';
import '../../App.css'
import { useState } from "react";
import NavButtons from '../../components/NavButtons/NavButtons';




const products = [
  {
    id: "19",
    imageUrl: "http://tineye.com/images/widgets/mona.jpg",
    description: "this is my test product number2",
    name: "product test number2"
  },
  {
    id: "1987",
    imageUrl: "http://tineye.com/images/widgets/mona.jpg",
    description: "this is my test product",
    name: "product test"
  },
  {
    id: "30",
    imageUrl: "http://tineye.com/images/widgets/mona.jpg",
    description: "this is my test product number2",
    name: "product test number2"
  },
  {
    id: "ck7c0i843abxu09504vb0ukyx",
    imageUrl: "http://tineye.com/images/widgets/mona.jpg",
    description: "test 3",
    name: "test 3"
  },
  {
    id: "ck7c0m7fu4df80986r53997c0",
    imageUrl: "http://tineye.com/images/widgets/mona.jpg",
    description: "Test 4",
    name: "Test 4"
  },
];

const ProductsList = (props) => {
  const { onClick, imageUrl, name, description, added } = props;
  return (<div className="container1" >
    <div className="Product-box">
      <img src={imageUrl} alt="product" />
      <h1 className="text">{name}</h1>
      <h2>{description}</h2>
      <button className="button-disply"
        onClick={onClick}
      > {added ? "Added" : "Add"} </button>
    </div>
  </div>
  )
}


const ProductPage = () => {
  const [inCart, setInCart] = useState([]);
  const addToCart = (productId) => {
    setInCart((prevInCart) => [...prevInCart, productId]);
  }


  return (
    <>
      <NavButtons />
      {products.map((product) => (
        <ProductsList
          onClick={() => addToCart(product.id)}
          added={inCart.includes(product.id)}
          imageUrl={product.imageUrl}
          name={product.name}
          description={product.description}
        />
      ))}
    </>);
}


export default ProductPage;