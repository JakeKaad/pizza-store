
function Pizza (size) {
  this.size = size;
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.calculatePrice = function(menu) {
  if(this.size === "large") {
    this.price += 22;
  } else if(this.size === "medium") {
    this.price += 18;
  } else if(this.size === "small") {
    this.price += 12;
  }

  for(var i = 0; i < this.toppings.length; i++) {
    for(var j = 0; j < menu.toppings.length; j++) {
      if(this.toppings[i] === menu.toppings[j].name) {
        this.price += menu.toppings[j].price;
        break;
      }
    }
  }
}

function Order() {
  this.totalPrice = 0;
  this.pizzas = [];
  this.drinks = [];
  this.desserts = [];
  this.extras = [];
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
  this.totalPrice += pizza.price;
}

Order.prototype.addDrink = function(drink) {
  this.drinks.push(drink);
}

Order.prototype.addDessert = function(dessert) {
  this.dessserts.push(dessert);
}

Order.prototype.addExtra= function(extra) {
  this.extras.push(extra);
}
