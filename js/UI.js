
var displayMenuItems = function(menuType) {
  $("#add-items").show();
  $("#pizza-size").hide();
  $("#display-items").empty();
  (menu[menuType]).forEach(function(item) {
    $("#display-items").append("<li><input type='checkbox' name=" + menuType + "\"" + "value=" + item.name + "\"" + ">" + item.name +  " " + item.price + "</li>")
  });
}


$(document).ready(function() {
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
});
