let expect = chai.expect;

describe("isPalindrome", function() {
  it("takes a string and returns true if the string is a palindrome", function() {
    let str = "radar";

    let result = isPalindrome(str);

    expect(result).to.eql(true);
  });

  it("takes a string and returns false if the string is not a palindrome", function() {
    let str = "engage";

    let result = isPalindrome(str);

    expect(result).to.eql(false);
  });
});
