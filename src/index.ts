import dotenv from "dotenv";

import checkUrl from "./checkUrl";
import sendEmail from "./sendEmail";

dotenv.config({ path: ".env.local" });

async function checkUrls(urls: string[]): Promise<void> {
  const failures = await getConnectionFailures(urls);

  reportFailures(failures);
}

async function getConnectionFailures(urls: string[]): Promise<string[]> {
  const results = await Promise.all(
    urls.map(async (url) => await checkUrl(url))
  );

  return results.filter(Boolean) as string[];
}

async function reportFailures(failures: string[]) {
  if (failures.length) {
    await Promise.all(
      failures.map((error) => {
        sendEmail(error);
      })
    );
  } else {
    sendEmail("All sites are online 😎");
  }
}

const urls = (process.env.URLS_SEPARATED_BY_A_SPACE || "").split(" ");

checkUrls(urls);
