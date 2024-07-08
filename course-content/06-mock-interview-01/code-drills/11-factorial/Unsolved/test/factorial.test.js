let expect = chai.expect;

describe("factorial", function() {
  it("should return 24 when given 4", function() {
    let num = 4;

    let result = factorial(num);

    expect(result).to.eql(24);
  });

  it("should return 6 when given 3", function() {
    let num = 3;

    let result = factorial(num);

    expect(result).to.eql(6);
  });

  it("should return 1 when given 0", function() {
    let num = 0;

    let result = factorial(num);

    expect(result).to.eql(1);
  });

  it("should return 1 when given 1", function() {
    let num = 1;

    let result = factorial(num);

    expect(result).to.eql(1);
  });
});
