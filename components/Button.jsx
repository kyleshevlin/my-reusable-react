import React, { PropTypes } from 'react'

const Button = ({
  btnClassName,
  btnText,
  onClick
}) => (
  <button
    className={btnClassName}
    onClick={onClick}
  >
    {btnText}
  </button>
)

Button.propTypes = {
  btnClassName: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  btnClassName: 'btn'
}

export default Button
