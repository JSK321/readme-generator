// constants
const inquirer = require("inquirer");
const fs = require("fs");
const generateMD = require("./generateMD.js")
const {questions} = require("./questions")

// function to write README file
inquirer.prompt(questions).then(function (data) {
    const mdString = generateMD(data);
    fs.writeFile("README.md", mdString, function (err) {
        if (err) {
            console.log(err)
        };
    });
});
