import React from "react";
import NavButtons from "../../components/NavButtons/NavButtons";

const orders = [
  {
    "products": [
      {
        "id": "1987",
        "name": "product test"
      }
    ],
    "id": "ck7ap45jtslby09866lesyuyi",
    "status": "RECEIVED",
    "createdAt": "2020-03-02T16:46:44.249Z",
    "deliveryNote": "test"
  },
  {
    "products": [
      {
        "id": "1987",
        "name": "product test"
      }
    ],
    "id": "ck7ap7f7wxoqr0950080cmqom",
    "status": "RECEIVED",
    "createdAt": "2020-03-02T16:49:16.748Z",
    "deliveryNote": "This is a test"
  },
  {
    "products": [
      {
        "id": "1987",
        "name": "product test"
      },
      {
        "id": "30",
        "name": "product test number2"
      }
    ],
    "id": "ck7cvjgmqjck40950zqh0k5bd",
    "status": "RECEIVED",
    "createdAt": "2020-03-04T05:22:08.498Z",
    "deliveryNote": ""
  },
  {
    "products": [
      {
        "id": "19",
        "name": "product test number2"
      }
    ],
    "id": "cksq4m2ygq7cg0965ntym9dqd",
    "status": "RECEIVED",
    "createdAt": "2021-08-24T13:50:56.632Z",
    "deliveryNote": ""
  },
  {
    "products": [],
    "id": "ckyhl63wny5xo09784rbaof8x",
    "status": null,
    "createdAt": "2022-01-16T18:22:43.270Z",
    "deliveryNote": "test"
  },
  {
    "products": [],
    "id": "ckyhl6fnxy60409788ludi51v",
    "status": "PENDING",
    "createdAt": "2022-01-16T18:22:58.509Z",
    "deliveryNote": "test"
  },
  {
    "products": [
      {
        "id": "19",
        "name": "product test number2"
      }
    ],
    "id": "ckyhlg0ucy6mo097837y86hqu",
    "status": "PENDING",
    "createdAt": "2022-01-16T18:30:25.860Z",
    "deliveryNote": "test"
  },
  {
    "products": [
      {
        "id": "19",
        "name": "product test number2"
      }
    ],
    "id": "ckyhlggnpy6ny097857p4gc6g",
    "status": "PENDING",
    "createdAt": "2022-01-16T18:30:46.357Z",
    "deliveryNote": "test"
  },
  {
    "products": [
      {
        "id": "19",
        "name": "product test number2"
      },
      {
        "id": "30",
        "name": "product test number2"
      }
    ],
    "id": "ckyhm1rlvy8670978l6taqflj",
    "status": "PENDING",
    "createdAt": "2022-01-16T18:47:20.323Z",
    "deliveryNote": "test"
  },
  {
    "products": [
      {
        "id": "19",
        "name": "product test number2"
      },
      {
        "id": "30",
        "name": "product test number2"
      }
    ],
    "id": "ckyhmbppny8p20978urvjqrho",
    "status": "PENDING",
    "createdAt": "2022-01-16T18:55:04.426Z",
    "deliveryNote": "test"
  },
  {
    "products": [
      {
        "id": "19",
        "name": "product test number2"
      },
      {
        "id": "1987",
        "name": "product test"
      },
      {
        "id": "30",
        "name": "product test number2"
      }
    ],
    "id": "ckyhnkd6wydwl0978l2p4rhjf",
    "status": "PENDING",
    "createdAt": "2022-01-16T19:29:47.720Z",
    "deliveryNote": "test"
  }
]

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
        {products.length === 0 ? "there are no products to show" : <ul> {products.map((product) => (<li>{product.name}</li>))} </ul>}

      </div>
    </div>)
}

const OrdersPage = () => {
  return (<div>
    <NavButtons />
    <h1> Welcome to the Orders page </h1>
    {orders.map((order) => (
      <Order
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