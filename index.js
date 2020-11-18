import inquirer from "inquirer";
import fs from "fs";

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
      choices: ["Apache 2.0", "Boost 1.0", "MIT", "MPL 2.0"]
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

inquirer
.prompt(questions).then((data) => {
    // function call to initialize program
    init(data);
})

// function to write README file
function writeToFile(fileName, data) {
    const template = `# ${data.name}
    ## Table of Contents
    
    ## License Type
    This project was created under the ${data.license} license.
    
    ## Description
    ${data.description}    
    
    ## Installation
    A user can install this package using the following command:
    
    ${data.installation}
    
    
    ## Contributors
    ${data.contribution}
    
    ## Test Instructions
    A user can test this package using the following command:
    
    ${data.test}
    

    ## Contact Me
    You can check out my GitHub profile at (https://www.github.com/${data.github} or email me at ${data.email}.
    `;
    
        
        fs.writeFile(fileName, template, (err) => {
            err ? console.log(err) : console.log("Success!")
        });
        
    }
    
    // function to initialize program
    function init(data) {
    const fileName = `${data.name.split(" ").join("-")}.md`;
    writeToFile(fileName, data)
}


