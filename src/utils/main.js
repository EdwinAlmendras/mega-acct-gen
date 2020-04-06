import inquirer from 'inquirer'
import moment from 'moment'

import createPaste from './createPaste'
import createMegaAccount from './createMegaAccount'


const main = async () => {

  const answers = await inquirer.prompt(questions)


  //Answers
  let numberOfAccounts = answers.accts
  let res = answers.question


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


  let date = await moment().format('MMMM Do
    YYYY, h: mm: ss a')
    let link;

    try {
      link = await createPaste(megaAccounts, date)
    }
    catch(err) {
      console.log('something wrong saving to pastebin')}


    console.log('sucess saved\n link:', link)
  }


  export default main;