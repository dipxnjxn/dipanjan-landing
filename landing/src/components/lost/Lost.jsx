import React from 'react'
import App from '../../App'
import { Link } from 'react-router-dom'
function Lost() {
  return (
    <div className='lost flex flex-col justify-center items-center text-center h-screen w-screen'>
      <div>
      <h1 className='text-black font-extrabold text-9xl'>COOMING SOON</h1>
      </div>
      <div className='text-black text-4xl'>
      <Link to="/">CLICK TO GO BACK</Link>
      </div>
    </div>


  )
}

export default Lost