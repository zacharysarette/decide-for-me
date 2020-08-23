const content = {
  title: 'Visibility Toggle',
  hideDetails: 'hide details',
  showDetails: 'show details',
  details: 'There are the details we want to hide and show'
}

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
    this.getButtonText = this.getButtonText.bind(this)
    this.getDetails = this.getDetails.bind(this)
    this.state = {
      isVisible: false
    }
  }
  handleToggle() {
    this.setState((prevState) => ({isVisible: !prevState.isVisible}))
  }
  getButtonText() {
    return this.state.isVisible ? content.hideDetails : content.showDetails
  }
  getDetails() {
    return this.state.isVisible ? content.details : null
  }
  render() {
    return (
      <div>
        <h1>{content.title}</h1>
        <button
          onClick={this.handleToggle}
        >
          {this.getButtonText()}
        </button>
        <p>
          {this.getDetails()}
        </p>
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

/*
let isVisible = false

const handleShowHide = () => {
  isVisible = !isVisible
  render()
  return
}

const getButtonText = () => isVisible ? content.hideDetails : content.showDetails

const getDetails = () => isVisible ? content.details : null

const appRoot = document.getElementById('app')

const render = () => {
  const template = (
    <div>
      <h1>{content.title}</h1>
      <button
        onClick={handleShowHide}
      >
        {getButtonText()}
      </button>
      <p>
        {getDetails()}
      </p>

    </div>
  )

  ReactDOM.render(template, appRoot) 
}

render()
*/