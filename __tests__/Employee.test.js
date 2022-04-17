const Employee = require("../lib/Employee");

test("test for employee name", () => {
  const Employee1 = new Employee("Cameron", 123, "cameron@email.com");
  expect(Employee1.getName()).toBe("Cameron");
});

test("test for employee id", () => {
  const Employee1 = new Employee("Cameron", 123, "cameron@email.com");
  expect(Employee1.getId()).toBe(123);
});

test("test for email", () => {
  const Employee1 = new Employee("Cameron", 123, "cameron@email.com");
  expect(Employee1.getEmail()).toBe("cameron@email.com");
});
