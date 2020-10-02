// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your github username?",
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
        message: "Please explain how to use your application.",
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
        choices: ["MIT", "GPLv3", "Apache 2.0", "BSD", "N/A"],
        name: "license"
    },

];

// exports question array to index.js
module.exports = {
    questions:questions
}