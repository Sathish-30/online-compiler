import React from 'react'
import { Link } from 'react-router-dom'

const LoginHeader = () => {
  return (
    <div className='flex justify-between px-[7%] py-[2%]'>
        <div className="cursor-pointer ">
            <h4 className="font-semibold vsm:text-[17px] sm:text-lg md:text-2xl"><Link to="/">Coding - <span className='text-slate-400'>G</span></Link></h4>
        </div>
        <div>
            <Link to="/signup" className="transition-transform hover:translate-y-3 cursor-pointer vsm:text-[15px] sm:text-lg md:text-xl">Create Account</Link>
        </div>
    </div>
  )
}

export default LoginHeader