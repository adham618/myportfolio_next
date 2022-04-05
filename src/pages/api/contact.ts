import sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as never);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = req.body;
  const msg = {
    to: 'adhamtarek291@gmail.com', // Change to your recipient
    from: 'adhamtarek291@gmail.com', // Change to your verified sender
    subject: 'Contact',
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${name}, their email is: ✉️${email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${message}</p>
              <br>
              </div>
              <img src="https://adhamtarek.vercel.app/logo.png" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Manu Arora<br>Software Developer<br>+91 9587738861</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://adhamtarek.vercel.app" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Blog</a>
                <a href="https://github.com/adham618/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="https://linkedin.com/in/adham-tarek/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>

              </div>
              </div>
      </body>
      </html>`,
  };
  await sgMail.send(msg);
  res.status(200).json({ success: true });
}
