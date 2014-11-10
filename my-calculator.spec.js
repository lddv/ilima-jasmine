describe("My Calculator", function(){

  var MyCalculator = require('./my-calculator.js').MyCalculator;

  // SUM
  it("sum 2 + 2 should be 4", function(){
    expect(MyCalculator.sum(2, 2)).toEqual(4);
  });

  it("sum 2 + 2 + 3 + 1 should be 8", function(){
    expect(MyCalculator.sum(MyCalculator.sum(MyCalculator.sum(2, 2), 3), 1)).toEqual(8);
  });

  // SUBTRACTION
  it("subtraction between 2 and 2 should be 0", function(){
    expect(MyCalculator.subt(2, 2)).toEqual(0);
  });

  it("subtraction between 3 and 4 should be -1", function(){
    expect(MyCalculator.subt(3, 4)).toEqual(-1);
  });

  // MULTIPLICATION
  it("multiplication between 3 and 2 should be 6", function(){
    expect(MyCalculator.mult(3, 2)).toEqual(6);
  });

  it("multiplication between 3, 2 and 4 should be 24", function(){
    expect(MyCalculator.mult(MyCalculator.mult(3, 2), 4)).toEqual(24);
  });

  // DIVISION
  it("division between 2 and 2 should be 1", function(){
    expect(MyCalculator.division(2, 2)).toEqual(1);
  });

  it("division between 6 and 2 should be 3", function(){
    expect(MyCalculator.division(6, 2)).toEqual(3);
  });
});