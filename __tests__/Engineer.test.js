const Engineer = require("../lib/Engineer");

test("Testing for name", () => {
  const Engineer1 = new Engineer("cameron", 123, "cameron@email.com");
  expect(Engineer1.getName()).toBe("cameron");
});

test("Testing for id", () => {
  const Engineer1 = new Engineer("cameron", 123, "cameron@email.com");
  expect(Engineer1.getId()).toBe(123);
});

test("Testing for email", () => {
  const Engineer1 = new Engineer("cameron", 123, "cameron@email.com");
  expect(Engineer1.getEmail()).toBe("cameron@email.com");
});

test("Testing Github", () => {
  const Engineer1 = new Engineer(
    "cameron",
    123,
    "cameron@email.com",
    "cameronstroup"
  );
  expect(Engineer1.getGithub()).toBe("cameronstroup");
});

test("Testing role", () => {
  const Engineer1 = new Engineer(
    "cameron",
    123,
    "cameron@email.com",
    "cameronstroup"
  );
  expect(Engineer1.getRole()).toBe("Engineer");
});
