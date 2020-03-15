const puppeteer = require('puppeteer');

(async()=> {
  try {

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']});

    const page = await browser.newPage();
    await page.goto('http://dl.free.fr/bVrfLXHub');


    //console.log(await page.content());
    //await page.screenshot({path: 'screenshot.png'})





    const [response] = await Promise.all([
      page.click('input'), // Clicking the
    ]);

    const chain = page.request().redirectChain();
    console.log(chain.length); // Return 1
    console.log(chain[0].url()); // Return string 'http://example.com


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