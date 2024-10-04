// TODO: Include packages needed for this application
import inquirer from 'inquirer';
// TODO: Create an array of questions for user input
const questions = ['Title of your project', 'Description of your project', 'Installation instructions', 'Usage information', 'Contribution guidelines', 'Test instructions', 'GitHub username', 'Email address' , 'Table of contents', 'License'];

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: questions[0],
    },
    {
        type: 'input',
        name: 'description',
        message: questions[1],
    },
    {
        type: 'input',
        name: 'installation',
        message: questions[2],
    },
    {
        type: 'input',
        name: 'usage',
        message: questions[3],
    },
    {
        type: 'input',
        name: 'contribution',
        message: questions[4],
    },
    {
        type: 'input',
        name: 'test',
        message: questions[5],
    },
    {
        type: 'input',
        name: 'github',
        message: questions[6],
    },
    {
        type: 'input',
        name: 'email',
        message: questions[7],
    },
    {
        type: 'input',
        name: 'contents',
        message: questions[8],
    },
    {
        type: 'list',
        name: 'license',
        message: questions[9],
        choices: ['MIT', 'GNU', 'Apache', 'Mozilla', 'Boost', 'Unlicense'],
    },
]).then((data) => {
    const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
    err ? console.error(err) : console.log('Success!')
    );
});


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
