import React, { PropTypes } from 'react'

const Textarea = ({
  labelText,
  textareaName,
  textareaPlaceholder,
  textareaValue,
  onChange
}) => (
  <div className='textarea'>
    <label
      className='textarea-label'
      htmlFor={textareaName}
    >
      {labelText}
    </label>
    <textarea
      className='textarea-textarea'
      name={textareaName}
      placeholder={textareaPlaceholder}
      value={textareaValue}
      onChange={onChange}
    />
  </div>
)

Textarea.propTypes = {
  labelText: PropTypes.string,
  textareaName: PropTypes.string,
  textareaPlaceholder: PropTypes.string,
  textareaValue: PropTypes.string,
  onChange: PropTypes.func
}

export default Textarea
