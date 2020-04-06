const megaRegister = async (browser, name, lastName, email, password)=>{
    const page = await browser.newPage();
    const url = "https://mega.nz/register";

    await page.goto(url,
      {
        waitUntil: "networkidle0",
      });


    await page.bringToFront();

    console.log(`starting writting data to mega.nz/register`)

    await page.type("input[name='register-name2']",
      name)
    await page.type("input[name='register-familyname2']",
      lastName)
    await page.type("input[name='register-email2']",
      email)
    await page.type("input[name='register-password2']",
      password)
    await page.type("input[name='register-password3']",
      password)

    await page.click("div[class='understand-check checkboxOff checkbox'] input")
    await page.click("div[class='register-check checkboxOff checkbox'] input")


    await page.click("div[class='big-red-button height-48 register-button right button active']")

    console.log(`registering ... => MEGA.nz`)
    
    
  }
  
  
  export default megaRegister;