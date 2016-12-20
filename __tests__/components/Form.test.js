import React from 'react'
import Form from '../../components/Form'
import { mount } from 'enzyme'

describe('Form', () => {

  it('should have a submit button', () => {
    const form = mount(<Form onSubmit={() => {}} />)
    expect(form.find('input[type="submit"]')).toBeTruthy()
  })
})
