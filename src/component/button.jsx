import React from 'react'

const Button = (props) => {
  return (
    <button className='border-b-4 border-blue px-2 hover:border-yellow active:border-yellow focus:border-yellow'>
      {props.children}
    </button>
  )
}

export default Button