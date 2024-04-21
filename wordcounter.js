#! /usr/bin/env node
import inquirer from "inquirer";
let user_answer = await inquirer.prompt({
    type: "input",
    name: "words",
    message: "Please enter your sentence:"
});
let word_count = user_answer.words.trim().split(" ").length; //teim method will remove white spaces and split will  bring words in array form
console.log(` Your sentence contains ${word_count} words.`);
