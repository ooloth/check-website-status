const fetch = require("node-fetch");

const { mySites, myCoffeeshopSites } = require("./sites");

async function checkUrl(url) {
  try {
    await fetch(url);
    return null;
  } catch (error) {
    console.log(`😱 ${error.code}: ${url}`);
    return url;
  }
}

async function checkUrls() {
  const brokenLinks = await Promise.all(
    [...mySites, ...myCoffeeshopSites].map(async url => await checkUrl(url))
  );

  if (brokenLinks.filter(Boolean).length > 1) {
    return null;
  }

  console.log(`😎 All websites are online.`);
}

checkUrls();
