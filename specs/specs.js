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

    it("will return the number of smaller slices for a denser pepperoni pizza", function() {
      var newPizza = Object.create(Pizza);
      newPizza.diameter = 20;
      newPizza.topping = "Pepperoni";
      expect(newPizza.slices()).to.equal(14);
    });
  });

  describe("size", function() {
    it("will recognize a personal pan pizza (8 inches or less)", function() {
      var newPizza = Object.create(Pizza);
      newPizza.diameter = 7;
      expect(newPizza.size()).to.equal("personal pan");
    });
    it("will recognize a medium pizza (up to 16 inches)", function() {
      var newPizza = Object.create(Pizza);
      newPizza.diameter = 13;
      expect(newPizza.size()).to.equal("medium");
    });
    it("will recognize a large pizza (up to 24 inches)", function() {
      var newPizza = Object.create(Pizza);
      newPizza.diameter = 21;
      expect(newPizza.size()).to.equal("large");
    });
    it("will recognize (our best deal) a jumbo pizza (up to 48 inches!)", function() {
      var newPizza = Object.create(Pizza);
      newPizza.diameter = 40;
      expect(newPizza.size()).to.equal("jumbo");
    });
  });

  describe("cost", function() {
    it("will not charge you if your pizza does not exist", function() {
      var newPizza = Object.create(Pizza);
      newPizza.diameter = 0;
      expect(newPizza.cost()).to.equal(0.00);
    });
    it("will return the price of our personal pan special (any toppings!)", function() {
      var newPizza = Object.create(Pizza);
      newPizza.diameter = 6;
      expect(newPizza.cost()).to.equal(5.99);
    });
    it("will return the price of a medium pizza", function() {
      var newPizza = Object.create(Pizza);
      newPizza.diameter = 12;
      expect(newPizza.cost()).to.equal(10.76);
    })
    it("will return the price of a large pizza", function() {
      var newPizza = Object.create(Pizza);
      newPizza.diameter = 18;
      expect(newPizza.cost()).to.equal(20.46);
    });

    it("will return the price of our speciality, the jumbo pizza", function() {
      var newPizza = Object.create(Pizza);
      newPizza.diameter = 30;
      expect(newPizza.cost()).to.equal(35.40);
    });

    it("will return the price for a medium pepperoni pie", function() {
      var newPizza = Object.create(Pizza);
      newPizza.diameter = 10.5;
      newPizza.topping = "Pepperoni";
      expect(newPizza.cost()).to.equal(10.41);
    });

    it("will return the price of a large pepperoni pie", function() {
      var newPizza = Object.create(Pizza);
      newPizza.diameter = 18;
      newPizza.topping = "Pepperoni";
      expect(newPizza.cost()).to.equal(22.46);
    });

    it("will return the price of a jumbo pepperoni pie", function() {
      var newPizza = Object.create(Pizza);
      newPizza.diameter = 30;
      newPizza.topping = "Pepperoni";
      expect(newPizza.cost()).to.equal(39.40);
    });

  });
});
