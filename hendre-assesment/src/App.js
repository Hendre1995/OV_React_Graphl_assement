import React from 'react';
import './App.css';
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import Login from './pages/LoginPage/LoginPage';


const client = new GraphQLClient({
  url: 'https://eu1.prisma.sh/frikan-erwee/ov-assesment-shop-prisma/dev'
})

function App() {
  return (
    <ClientContext.Provider value={client}>
      <Login />
    </ClientContext.Provider>
  )
}


export default App;
