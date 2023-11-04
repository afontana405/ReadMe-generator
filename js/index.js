const inquirer = require('inquirer');
const fs = require('fs');
var userInfo = [];

// // TODO: Create an array of questions for user input
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
        message: 'What are the contribution guidelines for the project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the testing instructions for the project?',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }

])
.then((data) => {
    userInfo = data
    writeToFile(userInfo)
})
.then(() => console.log("Job's done"))
.catch((err) => console.log(err))



// // TODO: Create a function to write README file
function writeToFile(userInfo) {
    fs.promises.writeFile("../README.md", `# ${userInfo.title} \n \n## Description \n \n${userInfo.description} \n \n`);
    fs.promises.appendFile("../README.md", `## Installation \n \n${userInfo.installation} \n \n`);
    fs.promises.appendFile("../README.md", `## Usage \n \n${userInfo.usage} \n \n## License \n \n${userInfo.license} \n \n`);
    fs.promises.appendFile("../README.md", `## Contributions \n \n${userInfo.contributors} \n \n## Testing \n \n${userInfo.tests} \n \n`);
    fs.promises.appendFile("../README.md", `## Questions \n \nGitHub Profile: https://github.com/${userInfo.githubUsername} \n \nEmail: ${userInfo.email} \n \n`);
}

// // TODO: Create a function to initialize app
// function init() {}
// ## Table of Contents \n \n${userInfo.tableOfContents} \n \n
// // Function call to initialize app
// init();
