import React from 'react';
import '../../App.css'
import { useState } from "react";
import NavButtons from '../../components/NavButtons/NavButtons';
import { useQuery } from 'graphql-hooks';

const PRODUCT_QUERY = `query products{
  products{
    id
    name
    imageUrl
    description
  }
}`

const Product = (props) => {
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
    if (inCart.includes(productId)) {
      setInCart(inCart.filter(item => item !== productId))
      return null
    }
    setInCart((prevInCart) => [...prevInCart, productId])
  }
  const handleCart = () => {
    setInCart([])
  }
  const { loading, error, data } = useQuery(PRODUCT_QUERY, {
    variables: {
      limit: 10
    }
  })
  if (loading) return 'Loading...'
  if (error) return 'Something Bad Happened'

  return (
    <>
      <button onClick={handleCart} className={"fixedOderButton"}>{inCart.length} Place Order</button>
      <NavButtons />
      {data.products.map((product) => (
        <Product
          key={product.id}
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