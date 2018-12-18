console.log("App.js is running, yeah son!")

//let template = <p>This is JSX from app.js!</p>
var template = React.createElement("h1", { id: "something" }, "Hi person");

let appRoot = document.getElementById("app")

ReactDOM.render(template, appRoot)
