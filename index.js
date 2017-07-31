#!/usr/bin/env node

'use strict';

const chalk = require('chalk');
const prompt = require('prompt');
const cmd =  process.argv[2];

let responses = [
  "It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "Reply hazy try again", "Ask again later", "Don't count on it", "Outlook not so good", "Very doubtful"
];

let commands = {
  help: () => {
    console.log(chalk.green(`
      commands:
      ${chalk.white('help')} - enter: help
      ${chalk.white('predict')} - enter: predict, then follow the prompts
      `))
  },
  predict: () => {
    prompt.start();
    prompt.get([
      {
        name: 'question',
        description: chalk.green('Please ask a question'),
        type: 'string',
        required: true
      }
    ], (err, results) => {
      if (err) {
        console.log(chalk.red(err));
      } else {
        let randomNum = Math.floor(Math.random() * 10);
        console.log(chalk.gray(responses[randomNum]));
      }
    })
  }
};

if (commands.hasOwnProperty(cmd)) {
  commands[cmd]();
} else {
  console.log(chalk.red('invalid command'));
}
