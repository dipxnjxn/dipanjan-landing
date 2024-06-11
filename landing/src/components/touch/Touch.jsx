import React from 'react'
import { Link } from 'react-router-dom'
function Touch() {
  return (    
    <div className=' p-4 mt-5 mb-7 mx-3 rounded-lg bg-white'>
    <p className='text-red-900 text-2xl flex justify-start font-extrabold'>Drop me an Email</p>
    <Link to="mailto:saha93049@gmail.com"><span className='text-red-900 font-extrabold flex justify-start'>saha93049@gmail.com</span></Link>
    </div>
  )
}

export default Touch