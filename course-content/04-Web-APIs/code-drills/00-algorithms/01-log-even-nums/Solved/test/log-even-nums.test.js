const expect = chai.expect;

before(function() {
  window._temp = {};
  window._temp.log = console.log;
  window.console.log = (function(...args) {
    const values = [];

    const log = function(args) {
      values.push(args);
      window._temp.log(args);
    };

    log.calledWith = function() {
      return values;
    };

    return log;
  })();
});

describe("logEvenNums", function() {
  it("should log even numbers 0 through `num`", function() {
    const num = 13;

    logEvenNums(num);

    expect(console.log.calledWith()).to.eql([0, 2, 4, 6, 8, 10, 12]);
  });
});

after(function() {
  console.log = window._temp.log;
  delete window._temp;
});
