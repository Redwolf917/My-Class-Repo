let expect = chai.expect;

describe("sumArray", function() {
  it("returns the total of all the numbers in `arr`", function() {
    let arr = [4, 8, 15, 16, 23, 42];

    let result = sumArray(arr);

    expect(result).to.eql(108);
  });
});
