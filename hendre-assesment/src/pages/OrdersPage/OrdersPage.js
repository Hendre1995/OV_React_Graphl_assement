import { useQuery } from "graphql-hooks";
import React from "react";
import NavButtons from "../../components/NavButtons/NavButtons";

const ORDERS_QUERY = `query orders($where:OrderWhereInput) {
  orders(where:$where) {
    id
    createdAt
    deliveryNote
    status
    products{
      id
      name
    }
  }
}`

const Order = (props) => {
  const { id, status, createdAt, deliveryNote, products } = props
  return (
    <div className={"container1"}>
      <div>
        <h2> Id: {id}</h2>
        <br />
        <span><b>Status: {status}</b></span>
        <br />
        <span> Order Date: {createdAt} </span>
        <br />
        <p> Notes: {deliveryNote || 'no Notes added'} </p>
        <h3>Products</h3>
        {products.length === 0 ? "there are no products to show" : <ul> {products.map((product) => (<li key={product.id}>{product.name}</li>))} </ul>}

      </div>
    </div>)
}

const OrdersPage = () => {
  const { loading, error, data } = useQuery(ORDERS_QUERY, {
    variables: {
      "where": { "status": "RECEIVED" }
    }
  })
  const userId = window.localStorage.getItem("userId");
  if (loading) return 'Loading...'
  if (error) return 'Something Bad Happened'

  return (<div>
    <NavButtons />
    <h1> Welcome to the Orders page {userId}</h1>
    {data.orders.map((order) => (
      <Order
        key={order.id}
        id={order.id}
        status={order.status}
        createdAt={order.createdAt}
        deliveryNote={order.deliveryNote}
        products={order.products}
      />
    ))}
  </div>)
}

export default OrdersPage;