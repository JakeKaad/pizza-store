
var displayMenuItems = function(menuType) {
  $("#add-items").removeClass();
  $("#add-items").show();
  $("#add-items").addClass(menuType);
  $("#pizza-size").hide();
  $("#display-items").empty();
  $("#add-items").addClass("pizza-menu");

  (menu[menuType]).forEach(function(item) {
    $("#display-items").append("<li><input type='checkbox' name="
            + "\"" + menuType + "\""
            + "value=" + "\"" + item.name + "\" "
            + "id=" + "\"" +item.name + "\" "
            + "class=" + "\"" + menuType + "\""
            + " >" + item.name +  " " + item.price + "</li>")
  });
}


$(document).ready(function() {
  var order = new Order;
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
          if(menuCatergory === "drinks") {
            order.addDrink(item);
          } else if(menuCatergory === "sides") {
            order.addSide(item);
          } else if(menuCatergory === "extras") {
            order.addExtra(item);
          } else if(menuCatergory === "desserts") {
            order.addDessert(item);
          }
          $("#cart-items").append("<li>" + item + "</li>");
          $("#total-cost").text(order.totalPrice);
        });
      } else if(menuCatergory === "toppings") {
          var size = $("#pizza-size").val();
          var pizza = new Pizza(size);

          selected_items.forEach(function(item) {
            pizza.addTopping(item);
          });
          pizza.calculatePrice(menu);
          order.addPizza(pizza);
          $("#cart-items").append("<li>" + pizza.size + " with" + selected_items +  "</li>");
          $("#total-cost").text(order.totalPrice);
      }
  });
});
