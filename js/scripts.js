var Pizza = {
  diameter: 0,
  topping: "Cheese",
  slices: function() {
    var factor;
    if (this.diameter > 48) {
      alert("Sorry, how about ordering multiple pies instead.");
    } else if (this.topping === "Pepperoni") {
      factor = .7
    } else {
      factor = .625
    }
    var howMany = Math.round(this.diameter * factor)
    return howMany;
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
    if (isNaN(nextPizza.slices())) {
      $("#ovenDisclaimer1").show();
    } else if (nextPizza.diameter < 0) {
      $("#ovenDisclaimer2").show();
    } else {
      $(".sliceNumber").text(nextPizza.slices());
      $("#orderInfo").show();
    }




  });
});
