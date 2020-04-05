const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
require('dotenv').config()

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
const key = process.env.AUTHORIZATION

inquirer
    .prompt(questions)
    .then( userQuestionObj => {
        const queryUrl = `https://api.github.com/users/${ userQuestionObj.username }`;
        axios
        .get(queryUrl, {headers: { Authorization: key }})
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
