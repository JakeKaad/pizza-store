

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
