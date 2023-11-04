const inquirer = require('inquirer');
const fs = require('fs');

let readInfo
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?',
    },
    {
        type: 'input',
        name: 'table of contents',
        message: 'What is the table of contents of the project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process of the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of the project?',
    },
    {
        type: 'list',
        name: 'License',
        message: 'What is the license of the project?',
        choices: ['MIT', 'Apache License 2.0', 'Unlicense', 'Mozilla Public License'],
    },
    {
        type: 'input',
        name: "contributions",
        message: 'What are the contribution guidelines of the project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test guidelines of the project?',
    },
])
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
