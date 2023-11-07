const inquirer = require('inquirer');
const fs = require('fs');
var userInfo = [];

// prompts user for info on project
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
        name: 'license',
        message: 'What is the license of the project?',
        choices: ['MIT', 'Apache 2.0', 'Unlicense', 'Mozilla Public'],
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
.then((data) => { // converts data and calls function
    userInfo = data
    writeToFile(userInfo)
})
.then(() => console.log("README Created"))
.catch((err) => console.log(err))

// creates a new README file and adds user info
function writeToFile(userInfo) {
    fs.promises.writeFile("../README.md", `# ${userInfo.title} \n \n`);
    if (userInfo.license == 'MIT') { // appends badge based off user's license 
        fs.promises.appendFile("../README.md", `[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/Apache-2.0) \n \n`);
    } else if (userInfo.license == 'Apache 2.0') {
        fs.promises.appendFile("../README.md", `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) \n \n`);
    } else if (userInfo.license == 'Unlicense') {
        fs.promises.appendFile("../README.md", `[![License](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://opensource.org/licenses/Apache-2.0) \n \n`);
    } else if (userInfo.license == 'Mozilla Public') {
        fs.promises.appendFile("../README.md", `[![License](https://img.shields.io/badge/License-Mozilla_Public-blue.svg)](https://opensource.org/licenses/Apache-2.0) \n \n`);
    }
    fs.promises.appendFile("../README.md", `## Table of Contents \n \n[Description](#description) | [Installation](#installation) | [Usage](#usage) | [Contributions](#contributions) | [Testing](#testing) | [Questions](#questions) | [License](#license) \n \n`);
    fs.promises.appendFile("../README.md", `## Description \n \n${userInfo.description} \n \n`);
    fs.promises.appendFile("../README.md", `## Installation \n \n${userInfo.installation} \n \n`);
    fs.promises.appendFile("../README.md",`## Usage \n \n${userInfo.usage} \n \n`);
    fs.promises.appendFile("../README.md", `## Contributions \n \n${userInfo.contributions} \n \n`);
    fs.promises.appendFile("../README.md",`## Testing \n \n${userInfo.tests} \n \n`);
    fs.promises.appendFile("../README.md",`## Questions \n \nGitHub Profile: https://github.com/${userInfo.githubUsername} \n \nEmail: ${userInfo.email} \n \n`);
    fs.promises.appendFile("../README.md",`## License \n \nThis application is covered under the ${userInfo.license} License \n \n`);
}
