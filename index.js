const puppeteer = require('puppeteer');
const axios = require('axios');
var FormData = require('form-data');
const querystring = require('querystring')

var form = new FormData();


(async()=> {
  try {

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']});

    const page = await browser.newPage();
    await page.goto('http://dl.free.fr/bVrfLXHub');

    const file = await page.$eval('input', el => el.value);

    console.log(file)


    form.append('file', file);
    const formHeaders = form.getHeaders()



    const data = {
      "file" = file
    }
    const URL = "http://dl.free.fr/getfile.pl"


    axios
    .post(URL, querystring.stringify(data))
    .then((response) => const fetchedUrl = response.request.res.responseUrl;)
    .catch((error) => console.log(error))



    await browser.close();
  }
  catch (err) {
    console.log(err)
  }


})()