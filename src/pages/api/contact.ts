// /* eslint-disable @typescript-eslint/no-explicit-any */
// import sendgrid from '@sendgrid/mail';
// import { NextApiRequest, NextApiResponse } from 'next';

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY as never);

// async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     await sendgrid.send({
//       to: 'adhamtarek291@gmail.com', // Your email where you'll receive emails
//       from: 'adhamtarek291@gmail.com', // your website email address here
//       html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
//       <html lang="en">
//       <head>
//         <meta charset="utf-8">

//         <title>The HTML5 Herald</title>
//         <meta name="description" content="The HTML5 Herald">
//         <meta name="author" content="SitePoint">
//       <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

//         <link rel="stylesheet" href="css/styles.css?v=1.0">

//       </head>

//       <body>
//         <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
//               </div>
//               <div class="container" style="margin-left: 20px;margin-right: 20px;">
//               <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
//               <div style="font-size: 16px;">
//               <p>Message:</p>
//               <p>${req.body.message}</p>
//               <br>
//               </div>
//               <img src="https://adhamtarek.vercel.app/logo.png" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
//               <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Manu Arora<br>Software Developer<br>+91 9587738861</p>
//               <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
//                 <a href="https://adhamtarek.vercel.app" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Blog</a>
//                 <a href="https://github.com/adham618/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
//                 <a href="https://linkedin.com/in/adham-tarek/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>

//               </div>
//               </div>
//       </body>
//       </html>`,
//     });
//   } catch (error: any) {
//     // console.log(error);
//     return res.status(error.statusCode || 500).json({ error: error.message });
//   }

//   return res.status(200).json({ error: '' });
// }

// export default sendEmail;

// // import { NextApiRequest, NextApiResponse } from 'next';

// // import { sendEmail } from '../../utils/sendEmail';

// // // eslint-disable-next-line import/no-anonymous-default-export
// // export default async (req: NextApiRequest, res: NextApiResponse) => {
// //   if (req.method === 'POST') {
// //     const { name, email, message } = req.body;
// //     await sendEmail({ name, email, message });
// //     return res.status(200).end();
// //   }
// //   return res.status(404).json({
// //     error: {
// //       code: 'not_found',
// //       messgae:
// //         "The requested endpoint was not found or doesn't support this method.",
// //     },
// //   });
// // };
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
    html: `<p><strong>name: </strong>${name}</p>
    <p><strong>email: </strong>${email}</p>    
    <p><strong>message: </strong>${message}</p>`,
  };
  await sgMail.send(msg);
  // eslint-disable-next-line no-console
  console.log('email sent');
  res.status(200).json({ success: true });
}
