const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const fs = require("fs");
const path = require("path");
const DIS_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIS_DIR, "Team.html");
const render = require("./src/generatefile.js");

let employeeArray = [];
const roleInCompany = [
  {
    type: "list",
    name: "type",
    message: "What is thier role in the company?",
    choices: ["Intern", "Manager", "Engineer"],
  },
];
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    messsage: "What is the name of the engineer?",
  },
  {
    type: "input",
    name: "id",
    message: "What is their ID number?",
  },
  {
    type: "input",
    name: "email",
    mesage: "What is their email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is their github username?",
  },
  {
    type: "list",
    name: "inputAll",
    message: "Have you input all employees?",
    choices: ["Yes", "No"],
  },
];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    messsage: "What is the name of the Manager?",
  },
  {
    type: "input",
    name: "id",
    message: "What is their ID Number?",
  },
  {
    type: "input",
    name: "email",
    mesage: "What is their email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is their office number?",
  },
  {
    type: "list",
    name: "inputAll",
    message: "Have you input all employees?",
    choices: ["Yes", "No"],
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    messsage: "What is the name of the intern?",
  },
  {
    type: "input",
    name: "id",
    message: "What is thier ID number?",
  },
  {
    type: "input",
    name: "email",
    mesage: "What is thier email?",
  },
  {
    type: "input",
    name: "school",
    message: "Whitch school does this intern go to?",
  },
  {
    type: "list",
    name: "inputAll",
    message: "Have you input all employees?",
    choices: ["Yes", "No"],
  },
];

function managerArray(input) {
  let newArray = new Manager(
    input.name,
    input.id,
    input.email,
    input.officeNumber
  );
  employeeArray.push(newArray);
  if (input.inputAll == "Yes") {
    fs.mkdirSync(DIS_DIR);
    fs.writeFileSync(distPath, render(employeeArray), "utf-8");
  } else {
    init();
  }
}

function engineerArray(input) {
  let newArray = new Engineer(input.name, input.id, input.email, input.github);
  employeeArray.push(newArray);
  if (input.inputAll == "Yes") {
    fs.mkdirSync(DIS_DIR);
    fs.writeFileSync(distPath, render(employeeArray), "utf-8");
  } else {
    init();
  }
}

function internArray(input) {
  let newArray = new Intern(input.name, input.id, input.email, input.school);
  employeeArray.push(newArray);
  if (input.inputAll == "Yes") {
    fs.mkdirSync(DIS_DIR);
    fs.writeFileSync(distPath, render(employeeArray), "utf-8");
  } else {
    init();
  }
}

function init() {
  inquirer.prompt(roleInCompany).then((input) => {
    if (input.type == "Manager") {
      inquirer.prompt(managerQuestions).then((input) => managerArray(input));
    } else if (input.type == "Engineer") {
      console.log("Engineer");
      inquirer.prompt(engineerQuestions).then((input) => engineerArray(input));
    } else {
      console.log("Intern");
      inquirer.prompt(internQuestions).then((input) => internArray(input));
    }
  });
}

init();
