var expect = require("chai").expect;
var hexTo64Int = require("./index");

describe("hexToDec", function() {
  it("should be 1152922200808489093 when 100000a218da0085 is passed", function() {
    var value = hexTo64Int.convert("100000a218da0085", false);
    expect(value).to.equal("1152922200808489093");
  });
});
