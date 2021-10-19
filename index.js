//Packages and modules needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {type: 'input',
        message: 'What is the title of the project?',
        name: 'title'},

        {type: 'input',
        message: 'Describe your project:',
        name: 'description'
        },
        {name: 'Built With',
        type: 'checkbox',
        message:'what did you use to build the application',
        choices: ["HTML","CSS","JAVASCRIPT","APIs","NODE.js",]
        },
        {type: 'input',
        message: 'what do you need for your project to function?',
        name: 'install'
        },

        {type: 'input',
        message: 'How is your project used?',
        name: 'usage'
        },

        {type: 'input',
        message: 'What tests run with your project?',
        name: 'tests'
        },

        {type: 'input',
        message: 'How can people contribute to your project?',
        name: 'contribute'
        },

        {type: 'input',
        message: 'What is your GitHub user name?',
        name: 'github'
        },

        {type: 'input',
        message: 'What is your email address?',
        name: 'email'
        },
        
        {
        name: "license",
        type: "list",
        message: "Choose your license:",
        choices: ["MIT", "Apache", "GPL", "BSD3"],
        },


    ]);
};


// Function to intialize the app
const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();