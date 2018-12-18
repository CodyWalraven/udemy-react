console.log("App.js is running, yeah son! huh")

//JSX is javascript HTML
let template = (
  <div>
    <h1>Cody</h1>
    <p>This is some text</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
)

let templateTwo = (
  <div>
    <h1>Cody Walraven</h1>
    <p> Age: 25</p>
    <p> Location Texas</p>
  </div>
)
let appRoot = document.getElementById("app")

ReactDOM.render(templateTwo, appRoot)
