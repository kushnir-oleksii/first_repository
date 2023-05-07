// describe("validateEmail", function() {
//     it('not an empty string', function() {
  
//     });
//   })
  

// let assert = chai.assert;
// let expect = chai.expect;
// let sould = chai.should();

// describe("validateEmail", function() {
//   it('not an empty string', function() {
//     assert.equal(validateEmail(''), false);
//     expect(validateEmail('')).to.be.false
//     validateEmail('').should.be.false
//   });
// }
// )

// let assert = chai.assert;
// let expect = chai.expect;
// let sould = chai.should();

// describe("validateEmail", function() {
//   it('not an empty string', function() {
//     assert.equal(validateEmail(''), false);
//     expect(validateEmail('')).to.be.false
//     validateEmail('').should.be.false
//   });
// }
// )

// let assert = chai.assert;
// describe("validateEmail", function () {
//   it("not an empty string", function () {
//     assert.equal(validateEmail(""), false);
//   });
//   it("typeof string", function () {
//     assert.equal(validateEmail(222), false, "number error");
//     assert.equal(validateEmail(true), false, "boolean error");
//     assert.equal(validateEmail({}), false, "object error");
//   });
//   it("not an empty string", function () {
//     assert.equal(validateEmail("     "), false);
//   });
// })
// //   it("Not more than one @", function () {
// //     assert.equal(validateEmail("emailgmai@l.com"),false, "one @ ");
// //   });


//   describe ('valid data', function(){
//     it("Don't have the @ or @ the first character", function () {
//         assert.isFalse(validateEmail("emailgmail.com"), "Don't have the @");
//         assert.isFalse(validateEmail("@emailgmail.com"), "@ the first character");
//   })
// //   it("Don't have the @ or @ the first character", function () {
// //     assert.isFalse(validateEmail("emailgmail.com"), "Don't have the @");
// //     assert.isFalse(validateEmail("@emailgmail.com"), "@ the first character");
// //   });
//   it("Lenth of email more than 5 characters", function(){
//     assert.isFalse(validateEmail("l.ua"), false)
//   })
 
// });

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
  it("not an empty string", function () {
    assert.equal(validateEmail("     "), false);
  });
    it("Lenth of email more than 5 characters", function(){
    assert.isFalse(validateEmail("l.ua"), false)
  })
  // it("Not more than one @", function () {
  //   assert.equal(validateEmail("emalgma@il.com"),true, "one @ ");
  // })

  
})
describe("validateEmail", function () {
  it("Not more than one @", function () {
    assert.equal(validateEmail1("emalgma@il.com"),true, "one @ ");
  })
})

describe("validateEmail", function () {
  it("There is no dot directly before @ and you need a dot after @ in emails", function () {
    assert.equal(validateEmail2("ema.lgma@il.com"), true, "one @ ");
  })
})

//   describe ('valid data', function(){
//     it("Don't have the @ or @ the first character", function () {
//         assert.isFalse(validateEmail("emailgmail.com"), "Don't have the @");
//         assert.isFalse(validateEmail("@emailgmail.com"), "@ the first character");
//   })
// })
