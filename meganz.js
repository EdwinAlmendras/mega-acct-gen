const puppeteer = require("puppeteer");
const fs = require("fs");
const axios = require("axios");
var md5 = require('md5');
const randomstring = require("randomstring");

(async () => {
  const browser = await puppeteer.launch();

  const pageEmail = await browser.newPage(); // open new tab

  const urlEmail = 'https://www.fakemailgenerator.net/'
  await pageEmail.goto(urlEmail, {
    waitUntil: "networkidle0",
  });



  const email = await pageEmail.$eval('#active-mail', el => el.getAttribute('data-clipboard-text'))
  const password = md5(email)

  const name = randomstring.generate(5)
  const lastName = randomstring.generate(7)

  console.log(email)
  console.log(name)
  const pathEmail = email.replace(/\@(.*)/g, "")


  const page = await browser.newPage();
  const url = "https://mega.nz/register";

  await page.goto(url, {
    waitUntil: "networkidle0",
  });


  await page.bringToFront();

  //name email password

  console.log(`starting writting data to mega.nz/register`)

  await page.type("input[name='register-name2']", name)
  await page.type("input[name='register-familyname2']", lastName)
  await page.type("input[name='register-email2']", email)
  await page.type("input[name='register-password2']", password)
  await page.type("input[name='register-password3']", password)

  await page.click("div[class='understand-check checkboxOff checkbox'] input")
  await page.click("div[class='register-check checkboxOff checkbox'] input")

  await page.click("div[class='big-red-button height-48 register-button right button active']")

  console.log(`sending all data to MEGA.nz`)
  await pageEmail.bringToFront();

  await pageEmail.waitFor(3000)
  const id = await getEmailId()
  async function getEmailId() {
    try {
      const response = await axios.get('https://www.fakemailgenerator.net/api/v1/mailbox/' + pathEmail);

      console.log(`Getting the emails by fakeeamilgenerator API v1`)
      const emails = response.data
      console.log(email[0].id)
      return emails[0].id

    } catch (error) {
      console.error(error);
    }
  }




  const emailLink = `https://www.fakemailgenerator.net/mailbox/${pathEmail}/${id}`
  console.log(`going to url of email...`)

  await pageEmail.goto(emailLink, {
    waitUntil: "networkidle0",
  });


  const html = await pageEmail.content()

  console.log(`clicking verify email of MEGA.NZ`)

  await pageEmail.click('#bottom-button')

  console.log(`Wel'ome to page verify Mega.nz`)

  console.log(await pageEmail.url())
  //see the email

  // Get the "viewport" of the page, as reported by the page.
  await browser.close();
})();