import PastebinAPI from 'pastebin-js'
import chalk from 'chalk'

const API_KEY = '66797adb0b23b070bb4019851a1b1122'
const USER = 'gxldxm689171'
const PSW = 'bea54436fabf243c24b767289fbdf05f'

let pastebin = new PastebinAPI({
  'api_dev_key': API_KEY,
  'api_user_name': USER,
  'api_user_password': PSW

});


const createPaste = async (data, title) => {
 
 
 let link;
  
 try {
 link = await pastebin.createPaste(data, title, null, 2)
 }
 
 catch(err){
   console.log(chalk.red('something wrong with pastebin'))
 }
 
 
 return link;
 
}


export default createPaste;