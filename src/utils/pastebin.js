import PastebinAPI from 'pastebin-js'


const API_KEY = '66797adb0b23b070bb4019851a1b1122'
const USER = 'gxldxm689171'
const PSW = 'bea54436fabf243c24b767289fbdf05f'

let pastebin = new PastebinAPI({
  'api_dev_key': API_KEY,
  'api_user_name': USER,
  'api_user_password': PSW

});


function createPaste(data, title) {
  //data, title
  pastebin
  .createPaste(data,
    title,
    null,
    2)
  .then(function (data) {
    console.log('sucessfully create paste')
  })
  .fail(function (err) {
    // Something went wrong
    console.log(err);
  })
}


export default createPaste;