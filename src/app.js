let app = {
  header: "Indecision App",
  paragraph: "An app to help make decisions",
  list: ["Dog", "Cat"]
}

//JSX is javascript HTML
let template = (
  <div>
    <h1>{app.header}</h1>
    <p>{app.paragraph}</p>
    <ol>
      <li>{app.list[0]}</li>
      <li>{app.list[1]}</li>
    </ol>
  </div>
)

let user = {
  name: "Cody",
  age: 25,
  location: "Texas"
}
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>
  } 
}
let templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age > 18 && <p>{`Age: ${user.age}`}</p>}
    {getLocation(user.location)}
  </div>
)

let appRoot = document.getElementById("app")
ReactDOM.render(templateTwo, appRoot)
