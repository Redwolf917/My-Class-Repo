let expect = chai.expect;

describe("add", function () {
  it("should add two numbers", function () {
    let num1 = 10;
    let num2 = 24;

    let result = add(num1, num2);

    expect(result).to.eql(34);
  });
});

describe("subtract", function () {
  it("should subtract the second number from the first number", function () {
    let num1 = 100;
    let num2 = 91;

    let result = subtract(num1, num2);

    expect(result).to.eql(9);
  });
});

describe("multiply", function () {
  it("should multiply the two numbers", function () {
    let num1 = 7;
    let num2 = 70;

    let result = multiply(num1, num2);

    expect(result).to.eql(490);
  });
});

describe("divide", function () {
  it("should divide the first number by the second number", function () {
    let num1 = 33;
    let num2 = 11;

    let result = divide(num1, num2);

    expect(result).to.eql(3);
  });
});
