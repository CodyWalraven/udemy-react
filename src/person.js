export const isAdult = (age) => age >= 18

export const canDrink = (age) => age >= 21

const isSenior = (age) => {
  if (age >= 65) return `😊`
  else return "Nope not old enough"
}
export default isSenior



