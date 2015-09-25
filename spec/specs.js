

describe('Pizza', function() {
    it("Instantiates pizza with size", function() {
      var newPizza = new Pizza("large");
      expect(newPizza.size).to.equal("large");
   });
});

describe('addTopping', function() {
    it("Adds a topping to the pizza toppings array", function() {
      var newPizza = new Pizza("large");
      newPizza.addTopping("jalapenos");
      newPizza.addTopping("garlic");
      expect(newPizza.toppings[1]).to.equal("garlic");
   });
});

describe('calculatePrice', function() {
    it("Calculates price based on size and toppings", function() {
      var newPizza = new Pizza("large");
      newPizza.addTopping("jalapenos");
      newPizza.addTopping("garlic");
      newPizza.addTopping("bacon");
      newPizza.calculatePrice(menu);
      expect(newPizza.price).to.equal(26);
   });
});

describe('Order', function() {
    it("Instantiates order with price 0", function() {
      var newOrder = new Order();
      expect(newOrder.totalPrice).to.equal(0);
   });
});

describe('addPizza', function() {
    it("Adds a pizza to the order", function() {
      var newPizza = new Pizza("large");
      var newOrder = new Order();
      newPizza.addTopping("jalapenos");
      newPizza.addTopping("garlic");
      newPizza.addTopping("bacon");
      newOrder.addPizza(newPizza);
      expect(newOrder.pizzas[0].toppings[1]).to.equal("garlic");
   });
   it("Updates the total price of order", function() {
     var newPizza = new Pizza("large");
     var newOrder = new Order();
     newPizza.addTopping("jalapenos");
     newPizza.addTopping("garlic");
     newPizza.addTopping("bacon");
     newPizza.calculatePrice(menu);
     newOrder.addPizza(newPizza);
     expect(newOrder.totalPrice).to.equal(26);
  });
});

describe('addDrink', function() {
  it("Adds a drink to the order", function() {
      var newOrder = new Order();
      newOrder.addDrink("Pepsi");
      newOrder.addDrink("Coke");
      expect(newOrder.drinks[1]).to.equal("Coke");
  });
  it("Updates totalPrice", function() {
      var newOrder = new Order();
      newOrder.addDrink("Pepsi");
      newOrder.addDrink("Coke");
      expect(newOrder.totalPrice).to.equal(4);
  });
});

describe('addDessert', function() {
  it("Adds a dessert to the order", function() {
      var newOrder = new Order();
      newOrder.addDessert("Cookies");
      newOrder.addDessert("Cinna Stix");
      expect(newOrder.desserts[1]).to.equal("Cinna Stix");
  });
  it("Updates total price of order", function() {
      var newOrder = new Order();
      newOrder.addDessert("Cookies");
      newOrder.addDessert("Cinna Stix");
      expect(newOrder.totalPrice).to.equal(10);
  });
});

describe('addExtra', function() {
  it("Adds extras to the order", function() {
      var newOrder = new Order();
      newOrder.addExtra("garlic butter");
      newOrder.addExtra("marinara");
      expect(newOrder.extras[0]).to.equal("garlic butter");
  });
  it("Updates totalPrice", function() {
      var newOrder = new Order();
      newOrder.addExtra("garlic butter");
      newOrder.addExtra("marinara");
      expect(newOrder.totalPrice).to.equal(2);
  });
});
