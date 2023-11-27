 inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project? ",
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter description of project",
    },
    {
        type: "input",
        name: "projectDescription",
        message: "Enter description of project",
    },
    {
        type: "input",
        name: "installationInstructions",
        message: "Enter installation instructions",
    },
    {
        type: "input",
        name: "projectInformation",
        message: "Enter information of project",
    },
    {
        type: "input",
        name: "contributionGuidelines",
        message: "Enter contribution guidelines",
    },
    {
        type: "input",
        name: "testInstructions",
        message: "Enter test instructions",
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Successfully created README.md!');
        }
    });
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            // Generate README content based on user input
            const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Project Description
${answers.projectDescription}

## Installation Instructions
${answers.installationInstructions}

## Project Information
${answers.projectInformation}

## Contribution Guidelines
${answers.contributionGuidelines}

## Test Instructions
${answers.testInstructions}
`;

            // Write README file
            writeToFile('README.md', readmeContent);
        });
}

// Function call to initialize app
init();
