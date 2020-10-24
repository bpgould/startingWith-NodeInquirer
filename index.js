var inquirer = require("inquirer");
var methodsOfCom = ['text','email','video chat'];
var langauges = ['Spanish', 'English', 'French', 'Russian']; 

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },
    {
      type: "checkbox",
      message: "What languages do you know?",
      name: "password",
      choices: ['Spanish', 'English', 'French', 'Russian']
    },
    {
      type: "input",
      message: "What is your preferred method of communication",
      name: "confirm"
    }
  ])
  .then(function(response) {

    if (response.confirm === response.password) {
      console.log("Success!");
    }
    else {
      console.log("You forgot your password already?!");
    }
  });