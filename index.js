// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const githuburl = "https://github.com";
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
   {
      type: 'input',
      name: 'title',
      message: "What is the name of your project (Required)",
      validate: nameInput => {
         if(nameInput){
            return true;
         }else{
            console.log("Please enter the name of your project: ");
            return false;
         }
      }
   },
   {
   type: 'confirm',
   name: 'confirmContactQuestion',
   message: 'Would you like to enter your contact infomation?',
   default: true
   },
   {
      type: 'input',
      name: 'username',
      message: 'What is your Github Username? ',
      when: ({ confirmContactQuestion }) => {
        if (confirmContactQuestion) {
          return true;
        } else {
          return false;
        }
      }
      
   },
   {
      type: 'input',
      name: 'email',
      message: 'What is your email address? ',
      when: ({ confirmContactQuestion }) => {
        if (confirmContactQuestion) {
          return true;
        } else {
          return false;
        }
      }
      
   },
   /////////////// Sections Questionnaire:  //////////////////////
   {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required): ',
      validate: nameInput => {
         if(nameInput){
            return true;
         }else{
            console.log("Please provide a description of your project: ");
            return false;
         }
      }
   },
   {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions (Required): ',
      validate: nameInput => {
         if(nameInput){
            return true;
         }else{
            console.log("Please provide installation instructions: ");
            return false;
         }
      }
   },
   {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use: (Required): ',
      validate: nameInput => {
         if(nameInput){
            return true;
         }else{
            console.log("Please provide instructions and examples for use: ");
            return false;
         }
      }
   },
   {
      type: 'checkbox',
      name: 'licenses',
      message: 'What is the applicable license for your project? ',
      choices: ['Apache License 2.0', 'Boost Software License 1.0', 'Creative Commons Attribution 4.0',
                'ISC License', 'MIT License', 'GNU AGPLv3', 'GNU LGPLv3', 'GNU GPLv3', 'GNU GPLv2']
   },
   {
      type: 'input',
      name: 'contributing',
      message: 'List any of collaborator(s) or attribution(s) you would like to credit: ',
   },
   {
      type: 'input',
      name: 'testing',
      message: 'Provide test instruction(s) or example(s) on how to run them (Required): ',
      validate: nameInput => {
         if(nameInput){
            return true;
         }else{
            console.log("Please provide test instruction(s) or example(s) on how to run them: ");
            return false;
         }
      }
   },
   {
      type: 'input',
      name: 'repository',
      message: 'Finally, what is the link to your application repository? (Required) ',
      validate: nameInput => {
         if(nameInput){
            return true;
         }else{
            console.log("Please provide an application repository: ");
            return false;
         }
      }
   }
];

const promptSectionEssentials = () => { 
   console.log(`
   ===========================================================================================
                                    README File Generator
   ===========================================================================================
   `);
   return inquirer
     .prompt([
         questions[0],
         questions[1],
         questions[2],
         questions[3],   
         questions[4],
         questions[5],
         questions[6],
         questions[7],
         questions[8],
         questions[9],
         questions[10]
         
      ])     
     
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
   promptSectionEssentials()  
  .then(readmeData => {
    console.log(readmeData);
     
    const pageREADME = generateMarkdown(readmeData);
    console.log(pageREADME);
    fs.writeFile('dist/README.md', pageREADME, err => {
      if (err) throw new Error(err);
      console.log('File created! ');
    });
  })
}

// Function call to initialize app
init();


