const { add, divide, multiply, substract } = require("./index");

const describe = (desc, fn) => {
  console.log(desc);
  fn();
};

const it = (msg, fn) => describe("  " + msg, fn);

const matchers = exp => ({
  toBe: assertion => {
    if (exp === assertion) {
      console.log("pass");
      return true;
    } else {
      console.log("fail");
      return false;
    }
  }
});

const expect = exp => matchers(exp);

describe("add", () => {
  it("adds two numbers", () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });
});

describe("substract", () => {
  it("substract two numbers", () => {
    const result = substract(3, 2);
    expect(result).toBe(1);
  });
});

describe("multiply", () => {
  it("multiply two numbers", () => {
    const result = multiply(2, 2);
    expect(result).toBe(4);
  });
});

describe("divide", () => {
  it("divide two numbers", () => {
    const result = divide(4, 2);
    expect(result).toBe(2);
  });
});

module.exports = {
  describe,
  expect,
  it,
  matchers
};