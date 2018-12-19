const app = {
  header: "Indecision App",
  subtitle: "An app to help make decisions",
  options: ["Dog", "Cat"]
}

//JSX is javascript HTML
const template = (
  <div>
    <h1>{app.header}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options.length > 0) ? "Here are your options" : "No options"}</p>
    <ol>
      <li>{app.options[0]}</li>
      <li>{app.options[1]}</li>
    </ol>
  </div>
)

const user = {
  name: "Cody",
  age: 25,
  location: "Texas"
}



function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>
  } 
}
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {(user.age > 18 && user.age) && <p>{`Age: ${user.age}`}</p>}
    {getLocation(user.location)}
  </div>
)

const appRoot = document.getElementById("app")
ReactDOM.render(template, appRoot)
