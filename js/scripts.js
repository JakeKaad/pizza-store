
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
  this.sides = [];
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
  this.totalPrice += pizza.price;
}

Order.prototype.addDrink = function(drink) {
  this.drinks.push(drink);
  for(var j = 0; j < menu.drinks.length; j++) {
    if(drink === menu.drinks[j].name) {
      this.totalPrice += menu.drinks[j].price;
    }
  }
}

Order.prototype.addSide = function(side) {
  this.sides.push(side);
  for(var j = 0; j < menu.sides.length; j++) {
    if(side === menu.sides[j].name) {
      this.totalPrice += menu.sides[j].price;
    }
  }
}

Order.prototype.addDessert = function(dessert) {
  this.desserts.push(dessert);

  for(var j = 0; j < menu.desserts.length; j++) {
    if(dessert === menu.desserts[j].name) {
      this.totalPrice += menu.desserts[j].price;
    }
  }
}

Order.prototype.addExtra = function(extra) {
  this.extras.push(extra);
  for(var j = 0; j < menu.extras.length; j++) {
    if(extra === menu.extras[j].name) {
      this.totalPrice += menu.extras[j].price;
    }
  }
}
