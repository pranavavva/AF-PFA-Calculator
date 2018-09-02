"use strict";

const Application = require("spectron").Application;
const assert = require("assert");
const electronPath = require("electron"); // Require Electron from the binaries included in node_modules.
const path = require("path");

const timeout = 5000;

describe("Application launch", function () {
  this.timeout(timeout);

  this.beforeAll(function () {
    this.app = new Application({
      path: electronPath,
      args: [path.join(__dirname, "..")]
    });
    return this.app.start();
  });

  this.afterAll(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop();
    }
  });

  it("shows an initial window", function () {
    return this.app.client.getWindowCount().then(function (count) {
      assert.equal(count, 1);
    });
  });

  it("has correct title", function () {
    return this.app.client.getTitle().then(function (title) {
      assert.equal(title, "Air Force PFA Calculator");
    });
  });
});

describe("DOM Structure", function () {
  this.timeout(timeout);

  this.beforeAll(function () {
    this.app = new Application({
      path: electronPath,
      args: [path.join(__dirname, "..")]
    });
    return this.app.start();
  });

  this.afterAll(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop();
    }
  });

  it("has two <link>s in <head>", function () {
    return this.app.client.getHTML("head link").then(function (elements) {
      assert.equal(elements.length, 2);
    });
  });
});