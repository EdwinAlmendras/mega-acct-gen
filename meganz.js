const puppeteer = require('puppeteer');

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

  const elem = await page.$eval("input", (element) => {
    // return element.innerHTML
    console.log(element)
  })


  await browser.close();
})();