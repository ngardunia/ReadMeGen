function init() {

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Description of your project?',
      name: 'description',
    },
    {
      type: 'list',
      message: 'What license should your project have?',
      name: 'license',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      default: 'npm i',
      message: 'What command should install dependancies?',
      name: 'install',
    },
    {
      default: 'npm test',
      message: 'What command should run tests?',
      name: 'test',
    },
    {
      type: 'input',
      message: 'What does the user need to know about using the repo?',
      name: 'repo',
    },
    {
      type: 'input',
      message: 'What does the user need to know about contributing to the repo?',
      name: 'contribute',
    },
  ]
  
    //const data = ({ username, email, title, description, license, install, test, repo, contribute })
    //fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
     // err ? console.log(err) : console.log('Success!')
        //const answers = ({username, email, title, description, license, install, test, repo, contribute});
        //.then((data) => {
          //const generate = generateMarkdown(data);

          inquirer
          .prompt(questions)

      function writeToFile(fileName, data) {
          fs.writeFile(fileName, data, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
          )};

        writeToFile(generateMarkdown, data);
      };

//const answers = ({name, lang, comm})  
// TODO: Create a function to write README file
//function writeToFile(name, data) {}
// TODO: Create a function to initialize app
// Function call to initialize app
init();