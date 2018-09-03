const Application = require("spectron").Application;
const assert = require("assert");
const electronPath = require("electron"); // Require Electron from the binaries included in node_modules.
const path = require("path");

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

let appPath = path.join(__dirname, "..");

const timeout = 20000;

global.before(function () {
  chai.should();
  chai.use(chaiAsPromised);
});


describe("Application launch", function () {
  this.timeout(timeout);

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
});