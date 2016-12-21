import React from 'react'
import Button from '../../components/Button'
import { mount } from 'enzyme'

describe('Button', () => {

  it('should render the btnText prop', () => {
    const btnText = 'foo'
    const btn = mount(<Button btnText={btnText} onClick={() => {}} />)
    expect(btn.text()).toBe(btnText)
  })
})
