
var displayMenuItems = function(menuType) {
  $("#intro-page").hide();
  $("#add-items").removeClass();
  $("#add-items").show();
  $("#add-items").addClass(menuType);
  $("#pizza-size").hide();
  $("#display-items").empty();
  $("#add-items").addClass("pizza-menu");
  $("#page-description").empty();
  $("#page-description").text(menuType + ":");

  (menu[menuType]).forEach(function(item) {
    $("#display-items").append("<li><input type='checkbox' name="
            + "\"" + menuType + "\""
            + "value=" + "\"" + item.name + "\" "
            + "id=" + "\"" +item.name + "\" "
            + "class=" + "\"" + menuType + "\""
            + " >" + item.name +  " " + item.price + "</li>")
  });
}
var getPrice = function(category, item) {
    for(var j = 0; j < menu[category].length; j++) {
      if( menu[category][j].name === item) {
        return menu[category][j].price;
      }
    }
  }

var showCategory = function() {
  $("#pizza-menu").click(function() {
    displayMenuItems("toppings");
    $("#pizza-size").show();
  });
  $("#sides-menu").click(function() {
    displayMenuItems("sides");
  });
  $("#drinks-menu").click(function() {
    displayMenuItems("drinks");
  });
  $("#desserts-menu").click(function() {
    displayMenuItems("desserts");
  });
  $("#extras-menu").click(function() {
    displayMenuItems("extras");
  });
}

var returnStringToppings = function(addedToppings) {
  var toppingsString = "";
  addedToppings.forEach(function(item) {
    toppingsString += item + ", ";
  });
  toppingsString = toppingsString.substring(0, toppingsString.length - 2);
  return toppingsString;
}

var clearOrder = function() {
  $("#intro-page").show();
  $("#add-items").removeClass();
  $("#add-items").show();
  $("#pizza-size").hide();
  $("#display-items").empty();
  $("#cart-items").empty();
  $("#total-cost").empty();
  $("#total-cost").text("$ 0.00");
  $("#add-items").addClass("pizza-menu");
  $("#page-description").empty();
  $("#page-description").text(menuType + ":");
}
$(document).ready(function() {
  var order = new Order;
  showCategory();

  $("#add-items").click(function() {
    var classes = $(this).attr("class");
    var menuCatergory = classes.substr(0, classes.indexOf(" "));

    event.preventDefault();

    var selected_items = [];
     $("input:checkbox:checked." + menuCatergory).map(function(){
      selected_items.push($(this).val());
    });
      if(menuCatergory !== "toppings") {
        selected_items.forEach(function(item) {
          var price = getPrice (menuCatergory, item);

          console.log(price);
          if(menuCatergory === "drinks") {
            order.addDrink(item);
          } else if(menuCatergory === "sides") {
            order.addSide(item);
          } else if(menuCatergory === "extras") {
            order.addExtra(item);
          } else if(menuCatergory === "desserts") {
            order.addDessert(item);
          }
          $("#cart-items").append("<li>" + item + " $" + price +  "</li><hr>");
          $("#total-cost").text("Total Cost: $" + order.totalPrice);
        });
      } else if(menuCatergory === "toppings") {
          var size = $("#pizza-size").val();
          var pizza = new Pizza(size);

          selected_items.forEach(function(item) {
            pizza.addTopping(item);
          });

          pizza.calculatePrice(menu);
          order.addPizza(pizza);
          $("#cart-items").append("<li>" + pizza.size + " pizza with " + returnStringToppings(selected_items)  + " $" + pizza.price +  "</li><hr>");
          $("#total-cost").text("Total Cost: $" + order.totalPrice);
      }
          $("." + menuCatergory).attr('checked', false);
  });

  $("#checkout").click(function() {
    order.destroy;
    clearOrder();
  });
});
