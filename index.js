const puppeteer = require('puppeteer');
const axios = require('axios');
var FormData = require('form-data');


var bodyFormData = new FormData();


(async()=> {
  try {

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']});

    const page = await browser.newPage();
    await page.goto('http://dl.free.fr/bVrfLXHub');

    const file = await page.$eval('input', el => el.value);

    console.log(file)


    bodyFormData.append('file', file);

    axios({
      method: 'post',
      url: 'http://dl.free.fr/getfile.pl',
      data: bodyFormData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(function (response) {
      const fetchedUrl = response.request.res.responseUrl;
      console.log(fetchedUrl)

    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });


    await browser.close();
  }
  catch (err) {
    console.log(err)
  }


})()