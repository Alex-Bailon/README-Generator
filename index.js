const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
require('dotenv').config()
let generateMarkdown = require('./utils/generateMarkdown')
let userData
let projectData
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the description of the project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What is the installation of the project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is the usage of the project?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What is the license of the project?',
        name: 'license'
    },
    {
        type: 'input',
        message: 'What are the name contributors to the project?',
        name: 'contributors'
    },
    {
        type: 'input',
        message: 'What are the test done for the project?',
        name: 'test'
    }
]
const key = process.env.AUTHORIZATION

inquirer
    .prompt(questions)
    .then( userQuestionObj => {
        projectData = userQuestionObj
        const queryUrl = `https://api.github.com/users/${ userQuestionObj.username }`;
        axios
        .get(queryUrl, {headers: { Authorization: key }})
        .then(res => {
            userData = {
                userImg: res.data.avatar_url,
                userEmail: res.data.email
            }
            fs.writeFile('readmeTest.md', generateMarkdown.generateMarkdown(projectData, userData), function(err) {
                if (err) {
                  return console.log(err);
                }
            })
                        
        })
    })
    .catch(error => {
        if(error) {
          console.log(error)
        }
    })