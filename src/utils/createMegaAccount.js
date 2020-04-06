async function createMegaAccount(prop) {
    
    
    const browser = await puppeteer.launch();
    
    const pageEmail = await browser.newPage();
    
    
    const { name, lastName, email, password, 
pathEmail, id}= await 
getEmailAndFakeData(pageEmail)
    
    await signupInputMegaHandler(browser)
    
    await pageEmail.bringToFront();
    await pageEmail.waitFor(2000)
    
    await confirmEmail(pageEmail, pathEmail, id)
      
      
    if (prop) {return email+":"+password}
    if (!prop) {return email}
    await browser.close();
  }


export default createMegaAccount;