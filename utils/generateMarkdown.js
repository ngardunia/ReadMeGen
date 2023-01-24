// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseType = data.license[0];
  let licenseString = " "
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "APACHE 2.0") {
     licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    };
  if (licenseType === "GPL 3.0") {
      licenseString = `![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    };
  if (licenseType === "BSD 3") {
      licenseString = `![License: BSD 3](https://img.shields.io/badge/License-BSD-orange)`
    };
  return licenseString
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return  `# ${data.title}

  ## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#Installation)
  3. [Usage](#Usage)  
  4. [Contributing](#Contributing)
  5. [Tests](#Test)
  6. [License](#License)
  7. [GitHub](#GitHub)
  8. [E-mail](#E-mail)
## Description
${data.description} 
## Installation
${data.install}
## Usage
${data.repo}
## Contributing
${data.contribute}
## Tests
${data.test}
## License
${renderLicenseBadge(data.license)}
## GitHub
${data.username}
## E-mail
${data.email}`
}

module.exports = generateMarkdown;
