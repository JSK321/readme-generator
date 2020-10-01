const inquirer = require("inquirer");
const fs = require("fs");
// const generateMD = require("./generateMD")

// create an array of questions

// writing a README in a markdown file as a template

// function that will generate my readme template

// use inquirer to prompt users with questions

// use answers that come back from inquirer - pass those into my generate readme function

// write file using template generated from readme function

inquirer.prompt([
    {
        type: "input",
        message: "What is github username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        type: "input",
        message: "Please describe your project.",
        name: "description",
    },
    {
        type: "input",
        message: "Which packages must be installed to run your application?",
        name: "install",
    },
    {
        type: "input",
        message: "Please explain how your application is used.",
        name: "usage",
    },
    {
        type: "input",
        message: "Who contritubted in the creation of your application?",
        name: "contributor",
    },
    {
        type: "input",
        message: "What command is needed to run a test?",
        name: "test",
    },
    {
        type: "list",
        message: "Which licenses were used in the project?",
        choices: ["MIT", "GPL", "Apache", "BSD", "N/A"],
        name: "license"
    },
]).then(function(data){
    // console.log(data)
    const mdString = generateMD(data);
    fs.writeFile("README.md", mdString, function(err){
        if (err){
            console.log(err)
        }
    })

})

function generateMD(data){
    return `
        # ${data.title}

        ## Description
            ${data.description}
        
        ## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#license)
        * [Test](#test)
        * [Contributors](#contributors)
        * [Questions](#questions)
        
        ## Installation
            ${data.install}

        ## Usage
            ${data.usage}
        
        ## License
            ${data.license}

        ## Test
            ${data.test}

        ## Contributors
            ${data.contributor}

        ## Questions
            ${data.github}
            ${data.email}
        `
        
}

// // array of questions for user
// const questions = [
 
// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
