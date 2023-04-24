let assert = chai.assert;
describe("validateEmail", function () {
  it("not an empty string", function () {
    assert.equal(validateEmail(""), false);
  });
  it("typeof string", function () {
    assert.equal(validateEmail(222), false, "number error");
    assert.equal(validateEmail(true), false, "boolean error");
    assert.equal(validateEmail({}), false, "object error");
  });
  it("not all spaces", function () {
    assert.equal(validateEmail("     "), false);
  });
  it("Don't have the @ or @ the first character", function () {
    assert.isFalse(validateEmail("emailgmail.com"), "Don't have the @");
    assert.isFalse(validateEmail("@emailgmail.com"), "@ the first character");
  });
});
