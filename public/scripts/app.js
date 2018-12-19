"use strict";

// arguments object - NO LONGER BOUND!! :)
// this keyword - NO LONGER BOUND HELL YES

// const add = (a, b) => {
//   console.log(arguments)
//   return a + b
// }
// console.log(add(55,1, 1001))

var user = {
  name: "Cody",
  city: ["Mckinney", "Van Alstyne", "Sherman"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    console.log(this.name);
    console.log(this.city);

    this.city.forEach(function (cities) {
      console.log(_this.name + " has lived in " + cities);
    });
  }
};

user.printPlacesLived();
