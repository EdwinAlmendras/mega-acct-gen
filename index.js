const puppeteer = require('puppeteer');

(async()=> {
  try {

    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto('http://dl.free.fr/bVrfLXHub');


    //console.log(await page.content());
    //await page.screenshot({path: 'screenshot.png'})

    page.click('input')
    response.headers()['location']
    // After

    const chain = response.request().redirectChain();
    console.log(chain.length); // Return 1
    console.log(chain[0].url())

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