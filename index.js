const inquirer = require("inquirer");

const employeeInfo = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name",
    },
    {
      type: "input",
      name: "id",
      message: "what is your ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your prefered email address?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your github address?",
    },
    {
      type: "list",
      name: "role",
      message: "What is your role in the company?",
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      type: "input",
      name: "name",
      message: "What is your prefered email address?",
    },
  ]);
};
