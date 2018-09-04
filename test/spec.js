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
    return this.app.client.getAttribute("head link:nth-child(4)", "rel").should.eventually.equal("stylesheet");
  });

  it("second <link> is stylesheet", function() {
    return this.app.client.getAttribute("head link:nth-child(5)", "rel").should.eventually.equal("stylesheet");
  });

  it("has 7 <select> or <input> in total", function() {
    return this.app.client.getHTML("form select, form input").should.eventually.have.property("length").and.equal(7);
  });
});

describe("Calculator Logic", function() {
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

});