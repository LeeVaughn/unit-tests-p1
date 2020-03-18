const expect = require("chai").expect;

// test suite
describe("Mocha", function() {
  // test spec
  it("should run our tests using npm", function() {
    expect(true).to.be.ok;
  });
});

describe("Array of Objects", function() {
  // is named quotes
  // contains at least five quotes
  // is free of errors
});

describe("Object Properties", function() {
  // all objects have quote and source properties
  // at least one object has citation property
  // at least one object has a year property
  // (EXCEED) at least one object has an additional property
});

describe("getRandomQuote Function", function() {
  // is named getRandomQuote
  // returns a random object from the quotes array
});

describe("printQuote Function", function() {
  // is named printQuote
  // calls getRandomQuote function
  // prints quote and source properties with every quote
  // prints citation property with at least one quote
  // prints year property with at least one quote
  // printed quotes match template layout
  // (EXCEEDS) quotes automatically refresh at regular intervals
  // (EXCEEDS) background color changes each time a new quote is displayed
});

describe("Code Comments", function() {
  // code includes comments
});
