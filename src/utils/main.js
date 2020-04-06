import inquirer from 'inquirer'

import createPaste from './createPaste'
import createMegaAccount from './createMegaAccount'


const main = async () => {

  const answers = await inquirer.prompt(questions)

  const numberOfAccounts = answers.accts
  const res = answers.question
  let megaAccounts = '';
  let accountMega;

  console.log('creating mega accounts.. please wait')


  for (i = 0; i < numberOfAccounts; i++) {

    if (res) {
      accountMega = await
      createMegaAccount(true)
    } else {
      accountMega = await
      createMegaAccount(false)

    }

    megaAccounts += accountMega + '\n'
  }
  const date = await moment().format('MMMM Do
    YYYY, h: mm: ss a')

    await createPaste(megaAccounts, date)


    console.log('sucess')
  }


  export default main;