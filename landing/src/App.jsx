import React from 'react'
import './App.css'
import Header from '../src/components/header/Header'
import Link from '../src/components/links/Link'
import Touch from '../src/components/touch/Touch'
import Partbox from './components/partbox/Partbox'
import Footer from './components/footer/Footer'
function App() {
  return (
    <>
      <div className='whole flex justify-center text-center h-auto w-full'>
        <div div className='big-div w-1/4 my-10 pt-10 rounded-lg mx-auto h-auto max-xl:w-auto max-xl:mx-4'>
          <Header />
          <div className='flex justify-center'>
            <Link name="instagram" fb="https://www.instagram.com/dipxnjxn_/" />
            <Link name="facebook" fb="https://www.facebook.com/profile.php?id=100014218954756" />
            <Link name="github" fb="https://github.com/dipxnjxn" />
            <Link name="linkedin" fb="https://www.linkedin.com/in/dipanjan-saha-24884b221/" />
          </div>
          <div className=''>
            <Partbox title="My Portfolio" link="/lost" ></Partbox>
            <Partbox title="New video here" link="https://www.youtube.com/@Animoxx07/videos" />
            <Partbox title="Check my blog here" link="/lost" />
            <Partbox title="Buy me a coffee" link="/lost" />
          </div>
          <Touch />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
