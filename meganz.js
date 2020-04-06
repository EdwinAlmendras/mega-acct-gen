const puppeteer = require("puppeteer");
const fs = require("fs");
const axios = require("axios");
const md5 = require('md5');
const randomstring = require("randomstring");
const  PastebinAPI = require ('pastebin-js');
const  moment = require ('moment');
const  inquirer = require ('inquirer');
const faker = require('faker')
//PASTEBIN SETTINGS


const API_KEY = '66797adb0b23b070bb4019851a1b1122'
const USER = 'gxldxm689171'
const PSW = 'bea54436fabf243c24b767289fbdf05f'


let pastebin = new PastebinAPI({
  'api_dev_key': API_KEY,
  'api_user_name': USER,
  'api_user_password': PSW

});


let email, password, name, lastName;


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
  
  
const run = async () => {
  
  const answers = await inquirer.prompt(questions)
  
  
  
  const numberOfAccounts = answers.accts
  const res = answers.question

  let megaAccounts = '';
  let accountMega;
  
  console.log('creating mega accounts.. please wait')
  
  
  for (i = 0; i < numberOfAccounts; i++) {
    
      if (res) {  
        accountMega = await createMegaAccount(true)
      }
      else {  
        accountMega = await createMegaAccount(false)  
        
      }
      
      megaAccounts += accountMega + '\n'
  }

    const date = await moment().format('MMMM Do YYYY, h:mm:ss a')
    
    await createPaste(megaAccounts, date)
    
    
    console.log('sucess')
}

run()

  //IF TRUE CREATE HASH PASSWORDS


  async function createMegaAccount(prop) {
    
    const browser = await puppeteer.launch();

    const pageEmail = await browser.newPage();
    
    //Geeting FAKE EMAIL

    const urlEmail = 'https://www.fakemailgenerator.net/'
    await pageEmail.goto(urlEmail,
      {
        waitUntil: "networkidle0",
      });


    email = await pageEmail.$eval('#active-mail',
      el => el.getAttribute('data-clipboard-text'))
    
    //Conditional props
    
    if (prop){
     password = md5(email)
     name = faker.name.firstName()
     lastName = faker.name.lastName()
    }
    else{
     password = email
     name = faker.name.firstName()
     lastName = faker.name.lastName()
    }
    
    
    //search => //email//@some.com

    const pathEmail = email.replace(/\@(.*)/g,
      "")
    
    //Sneding data to mega
    await signupInputMegaHandler(browser)
    
    await pageEmail.bringToFront();

    await pageEmail.waitFor(2000)
    
    
    //id of email fake

    const id = await getEmailId(pathEmail)
    
    
    //going url of api
    const emailLink = `https://www.fakemailgenerator.net/mailbox/${pathEmail}/${id}`
    console.log(`going to url of email...`)

    await pageEmail.goto(emailLink,
      {
        waitUntil: "networkidle0",
      });

    console.log(`Getting confirm link`)

    const link = await pageEmail.$eval('#bottom-button',
      el => el.getAttribute('href'))

    await pageEmail.goto(link,
      {
        waitUntil: "networkidle0",
      });
      
      
      
    if (prop) {return email+":"+password}
    if (!prop) {return email}
    await browser.close();
  }


  function createPaste(data, title) {
    //data, title
    pastebin
    .createPaste(data,
      title,
      null,
      2)
    .then(function (data) {
      console.log('sucessfully create paste')
    })
    .fail(function (err) {
      // Something went wrong
      console.log(err);
    })
  }
  
  
  async function getEmailId(pathEmail) {
      try {
        const response = await axios.get('https://www.fakemailgenerator.net/api/v1/mailbox/' + pathEmail);
        const emails = response.data
        return emails[0].id

      } catch (error) {
        console.error(error);
      }
    }
  
  
  const signupInputMegaHandler = async (browser)=>{
    const page = await browser.newPage();
    const url = "https://mega.nz/register";

    await page.goto(url,
      {
        waitUntil: "networkidle0",
      });


    await page.bringToFront();

    console.log(`starting writting data to mega.nz/register`)

    await page.type("input[name='register-name2']",
      name)
    await page.type("input[name='register-familyname2']",
      lastName)
    await page.type("input[name='register-email2']",
      email)
    await page.type("input[name='register-password2']",
      password)
    await page.type("input[name='register-password3']",
      password)

    await page.click("div[class='understand-check checkboxOff checkbox'] input")
    await page.click("div[class='register-check checkboxOff checkbox'] input")


    await page.click("div[class='big-red-button height-48 register-button right button active']")

    console.log(`sending all data to MEGA.nz`)
    
    
  }