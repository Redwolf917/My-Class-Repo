let expect = chai.expect;

before(function() {
  window._temp = {};
  window._temp.log = console.log;
  window.console.log = (function(...args) {
    let values = [];

    let log = function(args) {
      values.push(args);
      window._temp.log(args);
    };

    log.calledWith = function() {
      return values;
    };

    return log;
  })();
});

describe("logNums", function() {
  it("log numbers 1 through `num`", function() {
    let num = 10;

    logNums(num);

    expect(console.log.calledWith()).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});

after(function() {
  console.log = window._temp.log;
  delete window._temp;
});
