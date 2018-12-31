class IndecisionApp extends React.Component {
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.state = {
      options: ["One", "Two", "Three", "Four"]
    }
  }
  handleDeleteOptions () {
    this.setState(() => {
      for (let x = 0; x < 5; x++){
        console.log("hi")
      }
      return {
        options: []
      }
    })
  }

  render() {
    const title = "Indecision App"
    const subTitle = "Put your life in the hands of a machine"
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action hasOptions={this.state.options.length > 0} />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.handlePick}
        disabled={!this.props.hasOptions}
      >
        What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map(val => (
          <Option key={val} option={val} />
        ))}
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.option}</div>
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    if (option) alert(option)
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

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))
