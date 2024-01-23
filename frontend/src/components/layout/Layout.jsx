import React from 'react'
import { Header , Footer , MainContent , CompilerType, CompilerDetails } from "../index";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="dark:bg-black">
            <Outlet/>
    </div>
  )
}

export default Layout