import puppeteer from 'puppeteer'

import megaRegister from './megaRegister'
import getEmailAndUser from './getEmailAndUser'
import confirmEmail from './confirmEmail'


async function createMegaAccount(haveHash) {


  const browser = await puppeteer.launch();

  const pageEmail = await browser.newPage();


  const user = await getEmailAndUser(pageEmail, haveHash)

  await megaRegister(browser, user)


  await pageEmail.bringToFront();
  await pageEmail.waitFor(2000)

  await confirmEmail(pageEmail, user.pathEmail)


  if (prop) {
    return email+":"+password
  }
  if (!prop) {
    return email
  }
  await browser.close();
}


export default createMegaAccount;