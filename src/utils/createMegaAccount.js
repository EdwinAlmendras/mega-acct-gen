import puppeteer from 'puppeteer'

import megaRegister from './megaRegister'
import getEmailAndUser from './getEmailAndUser'
import confirmEmail from './confirmEmail'


const createMegaAccount = async(haveHash) => {

  const browser = await puppeteer.launch();
  const pageEmail = await browser.newPage();

  let user = await getEmailAndUser(pageEmail, haveHash)

  await megaRegister(browser, user)


  await pageEmail.bringToFront();
  await pageEmail.waitFor(2000)

  await confirmEmail(pageEmail, user.pathEmail)

  if (haveHash) {
    return user.email+":"+user.password
  }
  return user.email
}


export default createMegaAccount;