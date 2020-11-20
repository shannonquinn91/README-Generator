const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown.js")

// array of questions for user

const questions = [
  {
      type: "input",
      name: "name",
      message: "What is the title of your project?"
  },
  {
      type: "input",
      name: "description",
      message: "Describe your project in 2-3 sentences."
  },
  {
      type: "input",
      name: "installation",
      message: "How would a user install your project?"
  },
  {
      type: "input",
      name: "contribution",
      message: "Who are the contributors of this project?"
  },
  {
      type: "input",
      name: "test",
      message: "What command line is required to test this project?"
  },
  {
      type: "list",
      name: "license",
      message: "What license was this project created under?",
      choices: ["ISC", "ODbL", "MIT",]
  },
  {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
  },
  {
      type: "input",
      name: "email",
      message: "What is your email address?",
  }
];


// function to write README file
function writeToFile(fileName, data) {
    //const fileName = `${data.name.split(" ").join("-")}.md`;
    return fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.log(err) : console.log("Success!")
    });   
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("generatedMD.md", generateMarkdown({...data}))
    })
}

// function call to initialize program
init();

