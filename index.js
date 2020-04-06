const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
require('dotenv').config()
let generateMarkdown = require('./utils/generateMarkdown')
let { questions } = require('./utils/questions')

let userData
let projectData
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
    .catch(error => console.log(error))