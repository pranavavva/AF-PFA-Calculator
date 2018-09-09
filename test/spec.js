const Application = require("spectron").Application;
const assert = require("assert");
const electronPath = require("electron"); // Require Electron from the binaries included in node_modules.
const path = require("path");

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

let appPath = path.join(__dirname, "..");

const timeout = 20000;

chai.should();
chai.use(chaiAsPromised);

describe("Application launch", function () {
  this.timeout(timeout);

  this.beforeAll(function () {
    this.app = new Application({
      path: electronPath,
      args: [appPath]
    });
    return this.app.start();
  });

  beforeEach(function () {
    chaiAsPromised.transferPromiseness = this.app.transferPromiseness;
  });

  this.afterAll(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop();
    }
  });

  // Test Cases

  it("opens one initial window", function () {
    return this.app.client.waitUntilWindowLoaded()
      .getWindowCount().should.eventually.have.at.least(1)
      .browserWindow.isMinimized().should.eventually.be.false
      .browserWindow.isVisible().should.eventually.be.true
      .browserWindow.isFocused().should.eventually.be.true
      .browserWindow.getBounds().should.eventually.have.property('width').and.be.above(0)
      .browserWindow.getBounds().should.eventually.have.property('height').and.be.above(0);
  });

  it("has correct title", function () {
    return this.app.client.waitUntilWindowLoaded().getTitle().should.eventually.equal("Air Force PFA Calculator");
  });
});

describe("DOM Structure", function () {
  this.timeout(timeout);

  this.beforeAll(function() {
    this.app = new Application({
      path: electronPath,
      args: [appPath]
    });
    return this.app.start();
  });

  beforeEach(function () {
    chaiAsPromised.transferPromiseness = this.app.transferPromiseness;
  });

  this.afterAll(function() {
    if (this.app && this.app.isRunning()) {
      return this.app.stop();
    }
  });

  // Test Cases

  it("has two <link>s in <head>", function() {
    return this.app.client.getHTML("head link").should.eventually.have.property("length").and.equal(2);
  });

  it("first <link> is stylesheet", function() {
    return this.app.client.getAttribute("//HEAD/LINK[1]", "rel").should.eventually.equal("stylesheet");
  });

  it("second <link> is stylesheet", function() {
    return this.app.client.getAttribute("//HEAD/LINK[2]", "rel").should.eventually.equal("stylesheet");
  });

  it("has 7 <select> or <input> in total", function() {
    return this.app.client.getHTML("form select, form input").should.eventually.have.property("length").and.equal(7);
  });
});

describe("Calculator Logic", function() {
  this.timeout(timeout);

  beforeEach(function() {
    this.app = new Application({
      path: electronPath,
      args: [appPath]
    });
    return this.app.start();
  });

  beforeEach(function() {
    chaiAsPromised.transferPromiseness = this.app.transferPromiseness;
  });

  afterEach(function() {
    if (this.app && this.app.isRunning()) {
      return this.app.stop();
    }
  });

  let gender, age, minutes, seconds, ac, pushups, crunches;

  it("Male, age = 30, Run Time = 9:12, AC = 31, Pushups = 67, crunches = 58; composite score = 100; rating = Excellent", function(){
    gender = "male";
    age = 30;
    minutes = 9;
    seconds = 12;
    ac = 31;
    pushups = 67;
    crunches = 58;
    return this.app.client
      .selectByVisibleText("#gender", "Male").getValue("option:checked").should.eventually.equal(gender)
      .setValue("#age", age).getValue("#age").should.eventually.equal(age.toString())
      .setValue("#minutes", minutes).getValue("#minutes").should.eventually.equal(minutes.toString())
      .setValue("#seconds", seconds).getValue("#seconds").should.eventually.equal(seconds.toString())
      .setValue("#ac", ac).getValue("#ac").should.eventually.equal(ac.toString())
      .setValue("#pushups", pushups).getValue("#pushups").should.eventually.equal(pushups.toString())
      .setValue("#crunches", crunches).getValue("#crunches").should.eventually.equal(crunches.toString())
      .click("#submit")
      .getText("#total").should.eventually.equal("100 / 100")
      .getAttribute("#total", "class").should.eventually.contain("text-success")
      .getText("#rating").should.eventually.equal("Excellent")
      .getAttribute("#rating", "class").should.eventually.contain("text-success");
  });

  it("Male, age = 30, Run Time = 12:16, AC = 36.0, Pushups = 51, crunches = 46; composite score = 84.9; rating = Satisfactory", function(){
    gender = "male";
    age = 30;
    minutes = 12;
    seconds = 16;
    ac = 36;
    pushups = 51;
    crunches = 46;
    return this.app.client
      .selectByVisibleText("#gender", "Male").getValue("option:checked").should.eventually.equal(gender.toString())
      .setValue("#age", age).getValue("#age").should.eventually.equal(age.toString())
      .setValue("#minutes", minutes).getValue("#minutes").should.eventually.equal(minutes.toString())
      .setValue("#seconds", seconds).getValue("#seconds").should.eventually.equal(seconds.toString())
      .setValue("#ac", ac).getValue("#ac").should.eventually.equal(ac.toString())
      .setValue("#pushups", pushups).getValue("#pushups").should.eventually.equal(pushups.toString())
      .setValue("#crunches", crunches).getValue("#crunches").should.eventually.equal(crunches.toString())
      .click("#submit")
      .getText("#total").should.eventually.equal("84.9 / 100")
      .getAttribute("#total", "class").should.eventually.contain("text-success")
      .getText("#rating").should.eventually.equal("Satisfactory")
      .getAttribute("#rating", "class").should.eventually.contain("text-success");
  });

});