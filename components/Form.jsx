import React, { PropTypes } from 'react'

const Form = ({
  children,
  formClassName,
  buttonClassName,
  submitValue,
  onSubmit
}) => (
  <form
    className={formClassName}
    onSubmit={onSubmit}
  >
    {children}
    <input
      className={buttonClassName}
      type='submit'
      value={submitValue}
    />
  </form>
)

Form.propTypes = {
  children: PropTypes.any,
  formClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  submitValue: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
}

Form.defaultProps = {
  formClassName: 'form',
  buttonClassName: 'btn',
  submitValue: 'Submit'
}

export default Form
