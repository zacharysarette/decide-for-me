const content = {
  title: 'Decide 4 Me',
  subTitle: 'Let the app choose!',
  decide: 'Decide',
  removeAll: 'Remove All',
  remove: 'remove',
  addButton: 'Add',
  getStartedText: 'Please add an option to get started.'
}

const randomIndex = array => Math.floor(Math.random() * array.length)

const randomElement = array => array[randomIndex(array)]

const contains = (array, element) => array.indexOf(element) > -1

class DecideForMeApp extends React.Component {
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: [] 
    }
  }
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
  componentWillUnmount() {
    console.log('Component did unmounted, bitch!')
  }
  handleDeleteOptions() {
    this.setState(() => ({options: []}))
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => (
      {options: prevState.options.filter(
        option => optionToRemove !== option)}
      )
    )
  }
  hasOptions() {
    return this.state.options.length > 0
  }
  handlePick() {
    alert(randomElement(this.state.options))
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (contains(this.state.options, option)) {
      return 'This option already exists'
    }
    this.setState((prevState) => ({options: prevState.options.concat(option)}))
  }
  render() {
    return(
      <div>
        <Header
          subTitle={content.subTitle}
        />
        <Action
          hasOptions={this.hasOptions()}
          onClick={this.handlePick}
        />
        <RemoveAllButton onClick={this.handleDeleteOptions}/>
        <Options
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    )
  }
}

const Header = ({title, subTitle}) => {
  return (
    <div>
      <h1>{title}</h1>
      {subTitle && <h2>{subTitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: content.title 
}

const Action = ({onClick, hasOptions}) => {
  return (
      <button
        onClick={onClick}
        disabled={!hasOptions}
      >
        {content.decide}
      </button>
  )
}

const RemoveAllButton = ({onClick}) => <button onClick={onClick}>{content.removeAll}</button>

const Options = ({options, handleDeleteOption}) => {
  return (
    <div>
      {options.length === 0 && <p>{content.getStartedText}</p>}
      {
        options.map(
          (option, index) => (
            <Option
              key={index}
              text={option}
              handleDeleteOption={handleDeleteOption}
            />
          )
        )
      }
    </div>
  ) 
}

const Option = ({text, handleDeleteOption}) => (
  <div>
    <p>{text}</p>
    <button
      onClick={e => handleDeleteOption(text)}
    >
      {content.remove}
    </button>
  </div>
)

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleOnSubmit(e) {
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
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleOnSubmit}>
          <TextInput 
            name="option"
          />
          <AddButton />
        </form>
      </div>
    ) 
  }
}

const TextInput = ({name}) => <input type="text" name={name} />

const AddButton = ({handleOnClick}) => <button onClick={handleOnClick}>{content.addButton}</button>

//const User = ({name, age}) => {
//  return (
//    <div>
//      <p>Name: {name}</p>
//      <p>Age: {age}</p>
//    </div>
//  )
//}

const appRoot = document.getElementById('app')

ReactDOM.render(<DecideForMeApp />, appRoot)