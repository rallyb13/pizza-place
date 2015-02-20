describe("Pizza", function() {
  describe("slices", function() {
    it("will recognize that there can be no slices for a 0-diameter pizza", function() {
      var newPizza = Object.create(Pizza);
      newPizza.diameter = 0;
      expect(newPizza.slices()).to.equal(0);
    });

    it("will return the number of (perfect) slices with 5-inch long crusts", function() {
      var newPizza = Object.create(Pizza);
      newPizza.diameter = 8;
      expect(newPizza.slices()).to.equal(5);
    });

    it("will return the number of slices when the pizza won't divide perfectly into slices with 5-inch crusts", function() {
      var newPizza = Object.create(Pizza);
      newPizza.diameter = 12;
      expect(newPizza.slices()).to.equal(8);
    });

    it("will reject a pizza order of a pizza larger than our 48-inch oven", function() {
      var newPizza = Object.create(Pizza);
      newPizza.diameter = 50;
      expect(newPizza.slices()).to.eql(NaN);
    });

    it("will return the number of smaller slices for a denser pepperoni pizza", function() {
      var newPizza = Object.create(Pizza);
      newPizza.diameter = 20;
      newPizza.topping = "Pepperoni";
      expect(newPizza.slices()).to.equal(14);
    });
  });
});
