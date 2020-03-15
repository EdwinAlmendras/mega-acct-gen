const puppeteer = require('puppeteer');

(async()=> {
  try {

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']});

    const page = await browser.newPage();
    await page.goto('http://dl.free.fr/bVrfLXHub');

    const file = await page.$eval('input').getProperty('value')



    //http://dl.free.fr/getfile.pl

    // const fetchedUrl = response.request.res.responseUrl;

    await browser.close();
  }
  catch (err) {
    console.log(err)
  }


})()