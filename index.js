const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
const questions = [
    {
        type: 'input',
        message: 'What is the GitHub user name?',
        name: 'username'
        },
        {
        type: 'input',
        message: 'test question two',
        name: 'username2'
        }  
]


inquirer
    .prompt(questions)
    .then( userQuestionObj => {
        const queryUrl = `https://api.github.com/users/${ userQuestionObj.username }`;
        axios
        .get(queryUrl, {headers: { Authorization: 'token ecac3dcf2dbdebbff5774794b8e5cf7e2edb9f5f' }})
        .then(res => {
            let userData = {
                userimg: res.data.avatar_url,
                userEmail: res.data.email,
            }
            console.log(userData)
        })
    })
    .catch(error => {
        if(error) {
          console.log(error)
        }
    })



// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
