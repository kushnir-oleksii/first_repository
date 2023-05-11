const expect = require("chai").expect;
const sum = require("../index");

it("calc positive numb", function () {
  expect(sum(5, 7)).to.equal(12);
});
describe("Negative", () => {
  it("calc negative numb", function () {
    expect(sum(-5, -7)).to.equal(-12);
  });
});
