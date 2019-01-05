import React from 'react'
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'

export default class IndecisionApp extends React.Component {
  state = {
    options: []
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState(prevState => ({
      options: prevState.options.filter(x => x !== optionToRemove)
    }))
  }

  handleOnPick = () => {
    const selectedChoice = this.state.options[
      Math.floor(Math.random() * this.state.options.length)
    ]
    alert(selectedChoice)
  }

  handleAddOption = (choice) => {
    if (choice && !this.state.options.includes(choice)) {
      this.setState((prevState) => ({
        options: prevState.options.concat(choice)
      }))
    } else {
      alert("Enter a non duplicate value")
    }
  }

  componentDidMount(){
    try {
      const json = localStorage.getItem("options")
      const options = JSON.parse(json)

      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (error) {
      console.log(`localstorage ${error}`)
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem("options", json)
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
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}
