import React from 'react'

const AddButton = ({handleOnClick, text}) => (
  <button
    className='button'
    onClick={handleOnClick}
  >
    {text}
  </button>
)

export default AddButton
