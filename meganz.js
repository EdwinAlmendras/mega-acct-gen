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
  await page.waitForNavigation({
    waitUntil: 'networkidle0',
  });
  const html = await page.content()

  console.log(html)

  await browser.close();
})();