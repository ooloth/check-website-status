import nodeFetch from "node-fetch";

export default async function checkUrl(
  url: string
): Promise<string | undefined> {
  try {
    await nodeFetch(url);
  } catch (error) {
    return `😱 ${error.code}: ${url}`;
  }
}
