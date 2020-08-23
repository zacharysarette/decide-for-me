import React from 'react'
import content from '../const/Content'

const Action = ({onClick, hasOptions}) => (
  <button
    className='button button--jumbo'
    onClick={onClick}
    disabled={!hasOptions}
  >
    {content.decide}
  </button>
)

export default Action
