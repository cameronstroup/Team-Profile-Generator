const Intern = require("../lib/Intern");

test("Test for name", () => {
  const Intern1 = new Intern("cameron", 2, "cameron@email.com");
  expect(Intern1.getName()).toBe("cameron");
});

test("Test for id", () => {
  const Intern1 = new Intern("cameron", 2, "cameron@email.com");
  expect(Intern1.getId()).toBe(2);
});

test("Test for email", () => {
  const Intern1 = new Intern("cameron", 2, "cameron@email.com");
  expect(Intern1.getEmail()).toBe("cameron@email.com");
});

test("Test School", () => {
  const Intern1 = new Intern("cameron", 2, "cameron@email.com", "TCU");
  expect(Intern1.getSchool()).toBe("TCU");
});

test("Test role", () => {
  const Intern1 = new Intern("cameron", 2, "cameron@email.com", "TCU");
  expect(Intern1.getRole()).toBe("Intern");
});
