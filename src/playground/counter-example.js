class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handlePlusOne = this.handlePlusOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: 0 
    }
  }
  componentDidMount() {
    try {
      const count = parseInt(localStorage.getItem('count'), 10)
      if (!isNaN(count)) {
        this.setState(() => ({ count }))
      }
    } catch(e) {
      // Do NAAAFINGU
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count)
    }
  }
  handlePlusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handlePlusOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>* 0</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter count={-99}/>, document.getElementById('app'))

//let count = 0;
//const addOne = () => calcAndRender(1)
//const minusOne = () => calcAndRender(-1)
//const reset = () => calcAndRender(-count)

//const calcAndRender = (delta) => {
//  count += delta
//  return renderCounterApp()
//}

//const appRoot = document.getElementById('app')

//const renderCounterApp = () => {
//  const templateTwo = (
//    <div>
//      <h1>Count: {count}</h1>
//      <button onClick={addOne}>+1</button>
//      <button onClick={minusOne}>-1</button>
//      <button onClick={reset}>reset</button>
//    </div>
//  )

//  ReactDOM.render(templateTwo, appRoot)
//}

// renderCounterApp();
