
import React from 'react'
import content from '../const/Content'

const RemoveAllButton = ({onClick}) => (
  <button
    className='button button--link'
    onClick={onClick}
  >
    {content.removeAll}
  </button>
)

export default RemoveAllButton
