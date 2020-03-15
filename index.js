const puppeteer = require('puppeteer');

(async()=> {
  try {

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']});

    const page = await browser.newPage();
    await page.goto('http://dl.free.fr/bVrfLXHub');


    //console.log(await page.content());
    //await page.screenshot({path: 'screenshot.png'})

    await page.click('input')

    console.log(await page.url())


    const [response] = await Promise.all([
      page.waitForNavigation(waitOptions),
      page.click(selector, clickOptions),
    ]);


    //  console.log(await response.url())


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