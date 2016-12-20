import React, { PropTypes } from 'react'

const Input = ({
  labelText,
  inputType,
  inputName,
  inputPlaceholder,
  inputValue,
  onChange
}) => (
  <div className='input'>
    <label
      className='input-label'
      htmlFor={inputName}
    >
      {labelText}
    </label>
    <input
      className='input-input'
      type={inputType}
      name={inputName}
      placeholder={inputPlaceholder}
      value={inputValue}
      onChange={onChange}
    />
  </div>
)

Input.propTypes = {
  labelText: PropTypes.string,
  inputType: PropTypes.string,
  inputName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputValue: PropTypes.any,
  onChange: PropTypes.func
}

export default Input
