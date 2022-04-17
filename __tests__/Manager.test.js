const Manager = require("../lib/Manager");

test("Testing for name", () => {
  const Manager1 = new Manager("cameron", 123, "cameron@email.com");
  expect(Manager1.getName()).toBe("cameron");
});

test("Testing for id", () => {
  const Manager1 = new Manager("cameron", 123, "cameron@email.com");
  expect(Manager1.getId()).toBe(123);
});

test("Testing for email", () => {
  const Manager1 = new Manager("cameron", 123, "cameron@email.com");
  expect(Manager1.getEmail()).toBe("cameron@email.com");
});

test("Testing Office number", () => {
  const Manager1 = new Manager("cameron", 123, "cameron@email.com", 10);
  expect(Manager1.getOfficeNumber()).toBe(10);
});

test("Testing role", () => {
  const Manager1 = new Manager("cameron", 123, "cameron@email.com", 10);
  expect(Manager1.getRole()).toBe("Manager");
});
