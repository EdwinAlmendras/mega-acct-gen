import axios from 'axios'




async function getEmailId(pathEmail) {
  try {
    const response = await
    axios.get('https://www.fakemailgenerator.net/api/v1/mailbox/'
      + pathEmail);
    const emails = response.data

    console.log(emails)
    return emails[0].id
  } catch (error) {
    console.error(error);
  }
}



const confirmEmail = async (pageEmail, pathEmail, id)
=> {


  const id = await getEmailId(pathEmail)

  const emailLink =
  `https://www.fakemailgenerator.net/mailbox/${pathEmail}/${id}`
  console.log(`going to url of email...`)
  await pageEmail.goto(emailLink,
    {
      waitUntil: "networkidle0",
    });
  const link = await
  pageEmail.$eval('#bottom-button',
    el => el.getAttribute('href'))
  await pageEmail.goto(link,
    {
      waitUntil: "networkidle0",
    });


}


export default confirmEmail;