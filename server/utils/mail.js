import nodemailer from "nodemailer";
import config from "config";

let { HOST, AUTH, PORT } = config.get("EMAIL_SMTP");

async function sendEmail() {
    try {
        let transporter = nodemailer.createTransport({
            host:HOST,
            port: PORT,
            auth: {
              user: AUTH.USER, 
              pass: AUTH.PASSWORD, 
            },
          });
        
          let info = await transporter.sendMail({
            from: `"GUESTHUB" <${AUTH.USER}>`, // sender address
            to: "aimanfatimaahmed@gmail.com, kubravk18@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            // text: "Hello world?", // plain text body
            html: "<b>booking confirmation</b>", // html body
          });

          console.log("Message sent: %s", info.messageId);

        } catch (error) {
        console.error(error);
    }
}

// sendEmail();
export default sendEmail