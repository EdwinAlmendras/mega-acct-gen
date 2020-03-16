const puppeteer = require("puppeteer");
const fs = require("fs");
const QRCode = require('qrcode');
var Jimp = require("jimp");
var QrCode = require('qrcode-reader');

(async () => {
  const browser = await puppeteer.launch();

  const pageEmail = await browser.newPage(); // open new tab

  const urlEmail = 'https://temp-mail.org/en'
  await pageEmail.goto(urlEmail, {
    waitUntil: "networkidle0",
  });

  pageEmail.click('button[data-base-url="https://temp-mail.org/en"]')


  const qrImageBuffer = await pageEmail.screenshot()

  console.log(qrImageBuffer)
  await Jimp.read(qrImageBuffer, async function(err, image) {
    if (err) {
      console.error(err);
      // TODO handle error
    }
    var qr = new QrCode();
    console.log(image)
    qr.callback = function(err, value) {
      if (err) {
        console.error(err);
        // TODO handle error
      }
      console.log(value);
      console.log(value);
    };
    qr.decode(image.bitmap);
  });


  /*

  const page = await browser.newPage();
  const url = "https://mega.nz/register";

  await page.goto(url, {
    waitUntil: "networkidle0",
  });


  await page.bringToFront();

  //name email password

  await page.type("input[name='register-name2']", name)
  await page.type("input[name='register-familyname2']", lastName)
  await page.type("input[name='register-email2']", email)
  await page.type("input[name='register-passwor2']", password)
  await page.type("input[name='register-password3']", password)

  await page.click("div[class='understand-check checkboxOff checkbox'] input")
  await page.click("div[class='register-check checkboxOff checkbox'] input")
  /*
await page.click("input class=[big-red-button height-48 register-button right button active]")
*/
  //sucess register



  // Get the "viewport" of the page, as reported by the page.


  /*
  console.log("Dimensions:", dimensions);*/

  //  await page.type("#mytextarea", "Hello")
  //const html = await page.content()
  /*
  const elem = await page.$eval("input", (element) => {
    return element.innerHTML
  })
  const inputs = await page.evaluate(() => Array.from(document.querySelectorAll("form"), element => element.innerHTML));
  inputs.forEach(el => {
    console.log(el)})

  fs.writeFile("mega.html", inputs, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });

*/
  await browser.close();
})();