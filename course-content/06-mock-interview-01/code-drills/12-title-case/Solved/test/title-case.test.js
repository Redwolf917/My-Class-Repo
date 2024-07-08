let expect = chai.expect;

describe("titleCase", function() {
  it("should return `The Quick Brown Fox Jumped Over The Lazy Dog` when given `the quick brown fox jumped over the lazy dog`", function() {
    let str = "the quick brown fox jumped over the lazy dog";

    let result = titleCase(str);

    expect(result).to.eql("The Quick Brown Fox Jumped Over The Lazy Dog");
  });

  it("should return `A Christmas Carol` when given `a christmas carol`", function() {
    let str = "a christmas carol";

    let result = titleCase(str);

    expect(result).to.eql("A Christmas Carol");
  });
});
