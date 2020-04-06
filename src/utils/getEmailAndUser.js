import faker from 'faker'
import md5 from 'md5'


const getEmailAndUser = async(pageEmail, haveHash) => {


  let email,
  password,
  name,
  lastName;


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


  name = faker.name.firstName()
  lastName = faker.name.lastName()


  if (haveHash) {
    password = md5(email)

  } else {
    password = email

  }


  //search => //email//@some.com
  let pathEmail = email.replace(/\@(.*)/g,
    "")

  return {
    name,
    lastName,
    email,
    password,
    pathEmail,

  }

}



export default getEmailAndUser