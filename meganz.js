const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://mega.nz/register');

  // Get the "viewport" of the page, as reported by the page.
  /* const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });

  console.log('Dimensions:', dimensions);*/

  const input = await page.$eval('input', el => el.value);

  console.log(input)

  await browser.close();
})();