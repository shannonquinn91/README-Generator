// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
    ## Table of Contents
    [License Type](#license-type)
    [Description](#description)
    [Installation](#installation)
    [Contributors](#contributors)
    [Test Instructions](#test-instructions)
    [Contact Me](#contact-me)

    ## License Type
    [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-green.svg)](https://opensource.org/licenses/${data.license})
    This project was created under the ${data.license} license.
    
    ## Description
    ${data.description}    
    
    ## Installation
    A user can install this package using the following command:
    \`\`\`
    ${data.installation}
    \`\`\`
    
    ## Contributors
    ${data.contribution}
    
    ## Test Instructions
    A user can test this package using the following command:
    \`\`\`
    ${data.test}
    \`\`\`
    ## Contact Me
    You can check out my GitHub profile at (https://www.github.com/${data.github} or email me at ${data.email}.
    `;
    

}

module.exports = generateMarkdown(data);
