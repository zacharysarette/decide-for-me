
const content = {
  title: 'Decide 4 Me',
  subtitle: 'What should I do now?',
  main: 'Log in choices and have the app decide.',
  options: [] 
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    content.options.push(option)
    e.target.elements.option.value = '';
    render()
  }
} 

const onClickRemoveAll = () => {
  content.options = []
  render()
}

const onClickDecide = () => {
  const randomNum = Math.floor(Math.random() * content.options.length);
  const option = content.options[randomNum]
  alert(option);
}

const isContentsEmpty = () => content.options.length === 0

const appRoot = document.getElementById('app')

const render = () => {
  const template = (
    <div>
      <h1>{content.title}</h1>
      <h2>{content.subtitle ? content.subtitle : null}</h2>
      <p>{content.main}</p>
      <button 
        disabled={isContentsEmpty()}
        onClick={onClickDecide}
      >
        Decide!
      </button>
      <button
        onClick={onClickRemoveAll}
        disabled={isContentsEmpty()}
      >
        Remove All
      </button>
      <p>{content.options && content.options.length > 0 ? 'Here are your options:' : 'No options left.' }</p>
      <ol>
        {
          content.options.map((option, index) => <li key={index}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

render()