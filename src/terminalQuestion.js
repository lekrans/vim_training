const inquirer = require('inquirer');

module.exports = function ask(question, answers, defaultAnswer) {
  return new Promise((resolve, reject) => {
    inquirer.prompt([{
      type: "list",
      name: "answer",
      message: question,
      choices: [
        defaultAnswer,
        new inquirer.Separator(),
        ...answers
        ]
    }]).then( _answers => {
      resolve(_answers.answer);
    });
  })
}