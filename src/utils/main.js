import inquirer from 'inquirer'
import moment from 'moment'
import chalk from 'chalk'


import createPaste from './pastebin'
import createMegaAccount from './createMegaAccount'



let questions = [{
  type: "number",
  name: "accts",
  message: "Which accounts can you create?",
  default: 1
  },
  {
    type: "confirm",
    name: "question",
    message: "You can hash password(email)?"
  }]


  const main = async () => {

    const answers = await inquirer.prompt(questions)


    //Answers
    let numberOfAccounts = answers.accts
    let res = answers.question


    let megaAccounts = '';
    let accountMega;

    console.log('creating mega accounts.. please wait')


    for (let i = 0; i < numberOfAccounts; i++) {

      if (res) {
        accountMega = await
        createMegaAccount(true)
      } else {
        accountMega = await
        createMegaAccount(false)
      }

      megaAccounts += accountMega + '\n'
    }

    let dateFormat = await moment().format('MMMM Do YYYY, h: mm: ss a')

    try {
      await createPaste(megaAccounts, dateFormat)
    }
    catch(err) {
      console.log(chalk.red('something wrong saving to pastebin'))
    }

    console.log(chalk.green('sucess saved'))
  }

  export default main;