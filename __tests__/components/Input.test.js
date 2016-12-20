import React from 'react'
import Input from '../../components/Input'
import { mount } from 'enzyme'

describe('Input', () => {

  it('should have a label', () => {
    const inputProps = {
      labelFor: 'foo',
      labelText: 'Foo',
      inputType: 'text',
      inputName: 'foo',
      inputPlaceholder: '',
      inputValue: '',
      onChange() {}
    }
    const input = mount(<Input {...inputProps} />)

    expect(input.find('label')).toBeTruthy()
  })
})
