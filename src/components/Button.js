import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <button className='btn' onClick={props.onAdd} style={{backgroundColor: props.color}}>{props.text}</button>
  )
}
Button.defaultProps={
    color:'blue'
}
Button.propTypes={
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button