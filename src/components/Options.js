import React from 'react'
import content from '../const/Content'
import Option from './Option'
import RemoveAllButton from './RemoveAllButton'

const Options = ({options, handleDeleteOption, handleDeleteOptions}) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options:</h3>
        <RemoveAllButton onClick={handleDeleteOptions} />
      </div>
      {options.length === 0 && <p className='widget-message'>{content.getStartedText}</p>}
      {
        options.map(
          (option, index) => (
            <Option
              key={index}
              index={index}
              text={option}
              handleDeleteOption={handleDeleteOption}
            />
          )
        )
      }
    </div>
  ) 
}

export default Options
