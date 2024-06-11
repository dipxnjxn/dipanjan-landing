import { useState } from 'react'
import Pfp from '../../assets/pfp.jpg'
function App() {
  return (
    <>
    <div className='flex justify-center'>
      <img className='w-1/4 h-auto rounded-full' src={Pfp} alt="" />
    </div>
      <h1 className='pt-5 text-2xl'>Dipanjan Saha</h1>
      <p className='pt-4 flex justify-center' >
        <li className='marker:text-black'>He/him</li><li className=' pl-5 marker:text-black'>Kolkata</li>
      </p>
      <p className='pt-1' >Trying to be Full stack Developer to create 
      pixel-perfect web experiences </p>
    </>
  )
}

export default App
