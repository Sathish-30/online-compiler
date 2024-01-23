import React from 'react'
import ReactDOM from 'react-dom/client'
import {Layout, MainContent, CompilerType, CompilerDetails , Header , Footer ,  LoginHeader } from './components/index'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<>
            <Header/>
            <MainContent/>
            <CompilerType/>
            <CompilerDetails/>
            <Footer/>
      </>}></Route>
      <Route path='about' element={
        <>
          <Header/>
          <CompilerDetails/>
          <Footer/>
        </>
      }></Route>
      <Route path='login' element={
        <>
          <LoginHeader/>
        </>
      }></Route>
    </Route>
  
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
