var Pizza = {
  diameter: 0,
  topping: "cheese",
  slices: function() {
    var factor;
    if (this.diameter > 48) {
      alert("Sorry, how about ordering multiple pies instead.");
    } else if (this.topping === "pepperoni") {
      factor = .7
    } else {
      factor = .625
    }
    var howMany = Math.round(this.diameter * factor)
    return howMany;
  }
};
