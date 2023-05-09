import React from 'react'

function Card({url,id,name}) {
  return (
    <div className='card'>
        <img src={url} alt={id} />
        <span>{name}</span>
    </div>
  )
}

export default Card