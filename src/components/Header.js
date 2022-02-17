import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({text, onAdd, onShow}) => {
  return (
    <header className='header'>
        <h1>{text}</h1>
        <Button color={onShow?'red':'green'} text={onShow?'Close':'Add'} onAdd={onAdd} />
    </header>
  )
}
Header.defaultProps={
    text:'Task Manager'
}
Header.propTypes={
    text: PropTypes.string.isRequired,
}

export default Header