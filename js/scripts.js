
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
