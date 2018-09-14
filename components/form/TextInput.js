import React from 'react'

const TextArea = ({ label = '', name = '', type = 'text', ...rest }) => (
  <div className='field'>
    <label className='label'>{label}</label>
    <input type={type} name={name} className='input' {...rest} />
  </div>
)

export default TextArea
