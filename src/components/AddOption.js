import React from 'react'
import TextInput from './TextInput'
import AddButton from './AddButton'
import content from '../const/Content'

export default class AddOption extends React.Component {
  state = { error: undefined }
  handleOnSubmit = (e) => {
    e.preventDefault()
    const inputValue = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(inputValue)
    this.setState(() => ({ error }))

    if (!error) {
      e.target.elements.option.value = ''
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
        <form
          className='add-option'
          onSubmit={this.handleOnSubmit}
        >
          <TextInput 
            className='add-option__input'
            name='option'
          />
          <AddButton
            text={content.addButton}
          />
        </form>
      </div>
    ) 
  }
}