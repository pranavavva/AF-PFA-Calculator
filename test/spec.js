const Application = require("spectron").Application;
const assert = require("assert");
const electronPath = require("electron"); // Require Electron from the binaries included in node_modules.
const path = require("path");

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

let appPath = path.join(__dirname, "..");

global.before(function () {
  chai.should();
  chai.use(chaiAsPromised);
});


describe("Application launch", function () {
  this.timeout(10000);

  this.beforeAll(function () {
    this.app = new Application({
      path: electronPath,
      args: [appPath]
    });
    return this.app.start();
  });

  this.afterAll(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop();
    }
  });

  // Test Cases

  it("shows one initial window", function () {
    return this.app.client.waitUntilWindowLoaded().getWindowCount().should.eventually.equal(1);
  });

  it("has correct title", function () {
    return this.app.client.waitUntilWindowLoaded().getTitle().should.eventually.equal("Air Force PFA Calculator");
  });

  it("first <link> is stylesheet", function () {
    return this.app.client.getAttribute("head link:nth-child(4)", "rel").then(function (attr) {
      assert.equal(attr, "stylesheet");
    });
  });

  it("second <link> is stylesheet", function () {
    return this.app.client.getAttribute("head link:nth-child(5)", "rel").then(function (attr) {
      assert.equal(attr, "stylesheet");
    });
  });
});