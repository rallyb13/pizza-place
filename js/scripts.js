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
  cost: function() {
    var total;
    var area = .8 * this.diameter * this.diameter;
    var extra = 0;
    if (this.topping === "Pepperoni") {
      extra = 1
    }

    if (this.diameter <= 0) {
      total = 0
    } else if (this.diameter <= 8) {
      total = 5.99;
    } else if (this.diameter <= 16) {
      total = 5 + (area * .05);
    } else if (this.diameter <= 24) {
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

    $(".response").hide();
    if (nextPizza.diameter > 48) {
      $("#ovenDisclaimer1").show();
    } else if (nextPizza.diameter < 0) {
      $("#ovenDisclaimer2").show();
    } else {
      $(".sliceNumber").text(nextPizza.slices());
      $("#orderInfo").show();
    }




  });
});
