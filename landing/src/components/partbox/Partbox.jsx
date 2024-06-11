import React from 'react'
import { Link } from 'react-router-dom'

function Partbox(props) {
  return (
    <div className='flex flex-col rounded border-2 border-black m-3 p-1 hover:bg-sky-100 hover:text-red-900 font-bold'>
      <Link to={props.link} target='blank'>{props.title}</Link>
    </div>
  )
}

export default Partbox