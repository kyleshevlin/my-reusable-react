import React from 'react'
import Textarea from '../../components/Textarea'
import { mount } from 'enzyme'

describe('Textarea', () => {

  it('should have a label', () => {
    const textareaProps = {
      labelText: 'Foo',
      textareaName: 'foo',
      textareaPlaceholder: '',
      textareaValue: '',
      onChange() {}
    }
    const textarea = mount(<Textarea {...textareaProps} />)

    expect(textarea.find('label')).toBeTruthy()
  })
})
