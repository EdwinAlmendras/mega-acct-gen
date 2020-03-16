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
    const url = await page.url()
    const file = await page.$eval('input', el => el.value);


    const data = {
      "file": file
    }
    const postRequest = url + "getfile.pl"

    console.log(`post request to url${postRequest} with data of form input ${data.file}`)
    axios
    .post(postRequest + postRequest, querystring.stringify(data))
    .then((response) => {
      const fetchedUrl = response.request.res.responseUrl;
      console.log(fetchedUrl)
      console.log(response.data)
    })
    .catch((error) => console.log(error))


    await browser.close();
  }
  catch (err) {
    console.log(err)
  }


})()