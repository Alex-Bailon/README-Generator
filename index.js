// all require files imported 
const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
require('dotenv').config()
let { generateMarkdown } = require('./utils/generateMarkdown')
let { questions } = require('./utils/questions')
// var for user and project data to be used to generate readme
let userData
let projectData
//key var for authorization key in .env file
const key = process.env.AUTHORIZATION
//call inquirer to ask user all questions in questions.js
inquirer
    .prompt(questions)
    .then( userQuestionObj => {
        projectData = userQuestionObj
        const queryUrl = `https://api.github.com/users/${ userQuestionObj.username }`;
        //took username and added it to URL to do an axios get from URL
        axios
        .get(queryUrl, {headers: { Authorization: key }})
        .then(res => {
            //add user image and email into userData. Have an or statement for emial incase user has email set to private.
            userData = {
                userImg: res.data.avatar_url,
                userEmail: res.data.email || 'my github page.'
            }
            //generates readme file will project and user data objects
            fs.writeFile('./utils/markdowns/README.md', generateMarkdown(projectData, userData), function(err) {
                if (err) {
                  return console.log(err);
                }
            })                       
        })
    })
    .catch(error => console.log(error))