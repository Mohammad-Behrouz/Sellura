import React from 'react'

const Header = (props) => {
  return (
    <h2 className='header-of-dash'><i className={props.icon}></i> {props.title}</h2>
  )
}

export default Header