import React from 'react'
import ReactDOM from 'react-dom/client'
import {Layout, MainContent, CompilerType, CompilerDetails } from './components/index'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<>
            <MainContent/>
            <CompilerType/>
            <CompilerDetails/>
      </>}></Route>
      <Route path='about/' element={<CompilerDetails/>}>
        <Route path='' element={<CompilerDetails/>}></Route>
      </Route>
    </Route>
  
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
