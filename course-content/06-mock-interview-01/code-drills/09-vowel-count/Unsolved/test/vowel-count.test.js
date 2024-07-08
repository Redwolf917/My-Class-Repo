let expect = chai.expect;

describe("vowelCount", function() {
  it('should return the number 3 when given the string "programmer"', function() {
    let str = "programmer";

    let result = vowelCount(str);

    expect(result).to.eql(3);
  });

  it('should return the number 8 when given the string "I think, therefore I am."', function() {
    let str = "I think, therefore I am.";

    let result = vowelCount(str);

    expect(result).to.eql(8);
  });

  it("should return the number 0 when given an empty string.", function() {
    let str = "";

    let result = vowelCount(str);

    expect(result).to.eql(0);
  });
});
