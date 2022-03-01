import React from 'react';
import '../../App.css'
import { useState } from "react";
import NavButtons from '../../components/NavButtons/NavButtons';
import { useMutation, useQuery } from 'graphql-hooks';

const PRODUCT_QUERY = `query products{
  products{
    id
    name
    imageUrl
    description
  }
}`

const CREATE_ORDER = `mutation createOder(
  $orderer: UserCreateOneWithoutOrdersInput
  $products: ProductCreateManyInput
) {
  createOrder(data: { orderer: $orderer, products: $products }) {
    id
    deliveryNote
    status
    createdAt
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

  const userId = window.localStorage.getItem("userId");

  const { loading, error, data } = useQuery(PRODUCT_QUERY, {
    variables: {
      limit: 10
    }
  })

  const [createOder] = useMutation(CREATE_ORDER)
  const handleCart = () => {
    createOder({
      variables: {
        "orderer": { "connect": { "id": userId } },
        "products": { "connect": inCart.map(product => ({ id: product })) }
      }
    }).then(() => {
      setInCart([])
    })

  }

  if (loading) return 'Loading...'
  if (error) return 'Something Bad Happened'

  return (
    <>
      <h1> Welcome to the Product page {userId}</h1>
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