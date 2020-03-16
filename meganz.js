const puppeteer = require('puppeteer');
const fs = require('fs');


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = 'https://mega.nz/register';

  await page.goto(url, {
    waitUntil: 'networkidle0',
  });

  // Get the "viewport" of the page, as reported by the page.
  /* const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });

  console.log('Dimensions:', dimensions);*/

  //  await page.type('#mytextarea', 'Hello')
  //const html = await page.content()
  /*
  const elem = await page.$eval("input", (element) => {
    return element.innerHTML
  })*/
  const inputs = await page.evaluate(() => Array.from(document.querySelectorAll('form'), element => element.innerHTML));
  inputs.forEach(el => {
    console.log(el)})

  fs.writeFile("mega.html", inputs, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });


  await browser.close();
})();