// arguments object - NO LONGER BOUND!! :)
// this keyword - NO LONGER BOUND HELL YES

// const add = (a, b) => {
//   console.log(arguments)
//   return a + b
// }
// console.log(add(55,1, 1001))

const user = {
  name: "Cody",
  city: ["Mckinney", "Van Alstyne", "Sherman"],
  printPlacesLived: function() {
    console.log(this.name)
    console.log(this.city)

    this.city.forEach((cities) => {
      console.log(`${this.name} has lived in ${cities}`)
    })
  }
}

user.printPlacesLived()