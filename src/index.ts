import dotenv from "dotenv";

import checkUrl from "./checkUrl";
import sendText from "./sendText";

dotenv.config({ path: ".env.local" });

const urls = (process.env.URLS_SEPARATED_BY_A_SPACE || "").split(" ");

async function checkUrls(): Promise<void> {
  const results = await Promise.all(
    urls.map(async (url) => await checkUrl(url))
  );

  const errors = results.filter(Boolean) as string[];

  if (!errors.length) {
    sendText("😎 All websites are online.");
    return;
  }

  await Promise.all(
    errors.map((error) => {
      sendText(error);
    })
  );
}

checkUrls();
