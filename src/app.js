class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleOnPick = this.handleOnPick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: props.options
    }
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handleOnPick() {
    const selectedChoice = this.state.options[
      Math.floor(Math.random() * this.state.options.length)
    ]
    alert(selectedChoice)
  }

  handleAddOption(choice) {
    if (choice && !this.state.options.includes(choice)) {
      this.setState(prevState => {
        return {
          options: prevState.options.concat(choice)
        }
      })
    } else {
      alert("Enter a non duplicate value")
    }
  }

  render() {
    const subTitle = ""
    return (
      <div>
        <Header subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handleOnPick={this.handleOnPick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subTitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: "Indecision Udemy App"
}

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handleOnPick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.map(val => (
        <Option key={val} option={val} />
      ))}
    </div>
  )
}

const Option = (props) => {
  return <div>{props.option}</div>
}

class AddOption extends React.Component {
  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
  }
  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    e.target.elements.option.value = ""
    if (option) this.props.handleAddOption(option)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add New Item</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp options={["Option one", "Option two"]} />, document.getElementById("app"))
