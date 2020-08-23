import React from 'react'
import content from '../const/Content'

const Option = ({index, text, handleDeleteOption}) => (
  <div className='option'>
    <p className='option__text'>{index + 1}. {text}</p>
    <button
      className='button button--link'
      onClick={e => handleDeleteOption(text)}
    >
      {content.remove}
    </button>
  </div>
)

export default Option
