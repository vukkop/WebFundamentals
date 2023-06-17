function pizzaOven(crusType, sauceType, cheeses, toppings) {
  var pizza = {};
  pizza.crusType = crusType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;

  return pizza
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
// console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
// console.log(p2)

var p3 = pizzaOven("thin crust", "tomato", ["mozzarella"], ["mushrooms", "olives", "pepers", "basil"])
// console.log(p3)

var p4 = pizzaOven("hand tossed", "tomato", ["mozzarella"], ["mushrooms", "olives", "onions","zucchini"])
// console.log(p4)


function randomPizza() {
  var random = Math.floor(Math.random() * 4 + 1);
  console.log(random);
  if (random === 1) {
    console.log(p1);
  } else if (random === 2) {
    console.log(p2);
  } else if (random === 3) {
    console.log(p3);
  } else {
    console.log(p4);
  }
}

randomPizza()
