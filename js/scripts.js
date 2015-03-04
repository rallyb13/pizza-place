var Pizza = {
  diameter: 0,
  topping: "Cheese",
  slices: function() {
    var factor;
    if (this.topping === "Pepperoni") {
      factor = .7
    } else {
      factor = .625
    }
    var howMany = Math.round(this.diameter * factor)
    return howMany;
  },
  size: function() {
    var category;
    if (this.diameter <= 8) {
      category = "personal pan";
    } else if (this.diameter <= 16) {
      category = "medium";
    } else if (this.diameter <= 24) {
      category = "large";
    } else {
      category = "jumbo";
    }
    return category;
  },
  cost: function() {
    var total;
    var area = .8 * this.diameter * this.diameter;
    var extra = 0;
    if (this.topping === "Pepperoni" && this.size() === "medium") {
      extra = 1;
    } else if (this.topping === "Pepperoni" && this.size() === "large") {
      extra = 2;
    } else if (this.topping === "Pepperoni" && this.size() === "jumbo") {
      extra = 4; //which is really not bad, considering the size of this monster!
    }

    if (this.diameter <= 0) {
      total = 0
    } else if (this.size() === "personal pan") {
      total = 5.99;
    } else if (this.size() === "medium") {
      total = 5 + (area * .05);
    } else if (this.size() === "large") {
      total = 7.5 + (area * .05);
    } else {
      total = 3 + (area * .045);
    }
    total = total + extra;
    var newTotal = (total).toFixed(2)
    return parseFloat(newTotal);
  }
};

$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();

    var inputtedTopping = $('select#topping').val();
    var inputtedDiameter = parseInt($('input#diameter').val());

    var nextPizza = Object.create(Pizza);
    nextPizza.diameter = inputtedDiameter;
    nextPizza.topping = inputtedTopping;

    inputtedDiameter = $('input#diameter').val("");

    $(".taxWA").show();
    $(".response").hide();
    $(".response").css("color", "black");
    if (nextPizza.diameter > 48) {
      $("#ovenDisclaimer1").show();
    } else if (nextPizza.diameter < 0) {
      $("#ovenDisclaimer2").show();
    } else if (isNaN(nextPizza.diameter)){
      $("#numberPlease").show();
    } else {
      $(".sliceNumber").text(nextPizza.slices());
      $(".pizzaPrice").text(nextPizza.cost());
      $(".pizzaSize").text(nextPizza.size());
      $("#orderInfo").show();
      if (nextPizza.topping === "Pepperoni") {
        $(".response").css("color", "red");
      }
    }

    $('.taxWA').click(function() {
      var plusTax = (nextPizza.cost() * 1.065).toFixed(2);
      $(".pizzaPrice").text(plusTax + " (with Washington sales tax)");
      $('.taxWA').hide();
    });

  });
});
