// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `License Badge(https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "GNU") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "Apache") {
    return "https://www.apache.org/licenses/LICENSE-2.0";
  } else if (license === "Mozilla") {
    return "https://www.mozilla.org/en-US/MPL/2.0/";
  } else if (license === "Boost") {
    return "https://www.boost.org/LICENSE_1_0.txt";
  } else if (license === "Unlicense") {
    return "http://unlicense.org/";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license. For more information, please visit (${renderLicenseLink(license)}).`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.test}

## Questions
If you have any questions, you can contact me through my email [${data.email}](mailto:${data.email})!
Here is my GitHub where you can check out my other work [${data.github}](https://github.com/${data.github})!

${renderLicenseSection(data.license)}
`;
}

export default generateMarkdown;
