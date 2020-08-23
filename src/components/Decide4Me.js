import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import OptionModal from './OptionModal'
import Header from './Header'
import Action from './Action'
import { randomElement, contains } from '../utils/utils'
import content from '../const/Content'

export default class DecideForMe extends React.Component {
  state = { options: [], selectedOption: undefined }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({options}))
      }
    } catch (e) {
      // Do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }
  handleDeleteOptions = () => this.setState(() => ({options: []}))
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => (
      {options: prevState.options.filter(
        option => optionToRemove !== option)}
      )
    )
    return
  }
  hasOptions = () => this.state.options.length > 0
  handlePick = () => this.setState(() => ({selectedOption: randomElement(this.state.options)}))
  handleCloseOptionModal = () => this.setState(() => ({selectedOption: undefined}))
  handleAddOption = option => {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (contains(this.state.options, option)) {
      return 'This option already exists'
    }
    this.setState((prevState) => ({options: prevState.options.concat(option)}))
    return
  }
  render() {
    return(
      <div>
        <Header
          subTitle={content.subTitle}
        />
        <div className='container'>
          <Action
            hasOptions={this.hasOptions()}
            onClick={this.handlePick}
          />
          <div className='widget'>
            <Options
              options={this.state.options}
              handleDeleteOption={this.handleDeleteOption}
              handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption handleAddOption={this.handleAddOption}/>
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleClose={this.handleCloseOptionModal}
          />
        </div>
      </div>
    )
  }
}