// function to generate the md file
function generateMD(data){
    return `#${data.title}\n
[![GPLv3 license](https://img.shields.io/badge/License-${data.license}-blue.svg)](http://perso.crans.org/besson/LICENSE.html)

## Description
${data.description}
        
## Table of Contents
- [Installation](#installation)\n
- [Usage](#usage)\n
- [License](#license)\n
- [Test](#test)\n
- [Contributors](#contributors)\n
- [Questions](#questions)\n
    
## Installation
${data.install}

## Usage
${data.usage}
        
## License
This project uses ${data.license}

## Test
${data.test}

## Contributors
${data.contributor}

## Questions
View my other projects!\n
https://github.com/${data.github}\n
Have any questions?\n
Email me at: ${data.email}`
    
}

// exports function to index.js
module.exports = generateMD;