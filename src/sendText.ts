import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config({ path: ".env.local" });

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = twilio(accountSid, authToken);

export default async function sendText(message: string) {
  twilioClient.messages
    .create({
      to: process.env.MY_PHONE_NUMBER || "",
      from: process.env.TWILIO_PHONE_NUMBER,
      body: message,
    })
    .catch((error) => console.error("Twilio error:", error));
}
