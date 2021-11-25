import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config({ path: ".env.local" });

sgMail.setApiKey(String(process.env.SENDGRID_API_KEY));

export default async function sendEmail(message: string) {
  const msg = {
    to: "michaeluloth@gmail.com", // Change to your recipient
    from: "hello@michaeluloth.com", // Change to your verified sender
    subject: message,
    text: "...",
    html: "<p>...</p>",
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error("SendGrid error:", error);
    });
}
