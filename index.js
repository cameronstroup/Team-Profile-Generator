const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");

let employeeQuestionArray = [];
const whatEmployee = [
  {
    type: "list",
    name: "type",
    message: "What is thier role in the company?",
    choices: ["Intern", "Manager", "Engineer"],
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
    name: "office",
    message: "What is their office number?",
  },
  {
    type: "list",
    name: "last",
    message: "Have you input all employees?",
    choices: ["Yes", "No"],
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
    name: "InputAll",
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
    name: "last",
    message: "Have you input all employees?",
    choices: ["Yes", "No"],
  },
];
