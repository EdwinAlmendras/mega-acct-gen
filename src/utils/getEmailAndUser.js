const getEmailAndFakeData = (pageEmail) => {
    
    
     // open new getAttribute
    
    //Geeting FAKE EMAIL
    const urlEmail = 
'https://www.fakemailgenerator.net/'
    await pageEmail.goto(urlEmail,
      {
        waitUntil: "networkidle0",
      });
    email = await pageEmail.$eval('#active-mail',
      el => 
el.getAttribute('data-clipboard-text'))
    
    //Conditional props
    
    if (prop){
      password = md5(email)
      name = faker.name.firstName()
      lastName = faker.name.lastName()
    }
    else{
      password = email
      name = faker.name.firstName()
      lastName = faker.name.lastName()
    }
    
    
    //search => //email//@some.com
    const pathEmail = email.replace(/\@(.*)/g,
      "")
    
    const idEmail = await getEmailId(pathEmail)
    
    
    return {name, lastName, email, password, , , 
pathEmail, id}
    
  }



