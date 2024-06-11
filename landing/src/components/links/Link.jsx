import React from 'react'
import { Link } from 'react-router-dom'

function Links(props) {
  return (
    <div className='px-2 pt-4'>
      <Link to={props.fb} target='blank' >{props.name}</Link>
    </div>
  )
}

export default Links