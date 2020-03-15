const puppeteer = require('puppeteer');

(async()=> {
  try {

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']});

    const page = await browser.newPage();
    await page.goto('http://dl.free.fr/bVrfLXHub');


    //console.log(await page.content());
    //await page.screenshot({path: 'screenshot.png'})

    page.click('input')

    console.log(page.url())


    //get download file
    //like html constantly sending info

    /*
page.$eval('title', (element) => {
  return element.innerHTML
})
*/

    await browser.close();

  }
  catch (err) {
    console.log(err)
  }


})()