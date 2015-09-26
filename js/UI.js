
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
      var selected-items = [];

      var selected-items = $("input:checkbox:checked." + menuCatergory).map(function(){
        searchIDs.push($(this).val());
      });

  });
});
