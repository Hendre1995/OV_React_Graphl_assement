import React from 'react';
import './App.css';
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import Login from './pages/LoginPage/LoginPage';
import { Route, Routes } from 'react-router-dom';
import AdminPage from './AdminPage';
import ProductPage from './pages/ProductPage/ProductPage';
import OrdersPage from './pages/OrdersPage/OrdersPage';


const client = new GraphQLClient({
  url: 'https://eu1.prisma.sh/frikan-erwee/ov-assesment-shop-prisma/dev'
})

function App() {
  return (
    <ClientContext.Provider value={client}>
      <Routes>
       <Route path='orders' element={<OrdersPage />} />
        <Route path='product' element={<ProductPage />} />
        <Route path='login' element={<Login />} />
        <Route path='admin' element={<AdminPage />} />
      </Routes>
    </ClientContext.Provider>
  )
}

export default App;
