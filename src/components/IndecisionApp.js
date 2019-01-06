import React from 'react'
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'


export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
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
    const randomNumber = Math.floor(Math.random() * this.state.options.length)
    const selectedOption = this.state.options[randomNumber]
    this.setState(() => ({selectedOption}))
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

  clearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
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

        <OptionModal
          selectedOption={this.state.selectedOption}
          clearSelectedOption={this.clearSelectedOption}
        />
      </div>
    )
  }
}
