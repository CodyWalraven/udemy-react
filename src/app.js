import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))


class OldSyntax {
  constructor() {
    this.name = "Cody"
  }
  getGreeting() {
    return `Hi my name is ${this.name}`
  }
}

const oldSyntax = new OldSyntax()


// --------

class NewSyntax {
  name = 'Jenny'
  getGreeting = () => {
    return `Hi my name is ${this.name}`
  }
}

const newSyntax = new NewSyntax()
const getGreeting = newSyntax.getGreeting
console.log(getGreeting());