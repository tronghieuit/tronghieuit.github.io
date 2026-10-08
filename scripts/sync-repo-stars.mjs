import { readFile, writeFile } from "node:fs/promises";

const starsFile = new URL("../src/repo-stars.json", import.meta.url);
const repositories = ["v-tts", "tiny-tts"];
const stars = JSON.parse(await readFile(starsFile, "utf8"));

const results = await Promise.allSettled(
  repositories.map(async (repository) => {
    const response = await fetch(
      `https://api.github.com/repos/tronghieuit/${repository}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "tronghieuit-portfolio",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        signal: AbortSignal.timeout(10000),
      },
    );

    if (!response.ok) {
      throw new Error(`GitHub returned ${response.status} for ${repository}`);
    }

    const repositoryData = await response.json();
    if (!Number.isInteger(repositoryData.stargazers_count)) {
      throw new Error(`GitHub returned an invalid star count for ${repository}`);
    }

    return [repository, repositoryData.stargazers_count];
  }),
);

let refreshed = 0;
for (let index = 0; index < results.length; index += 1) {
  const result = results[index];
  if (result.status === "fulfilled") {
    const [repository, count] = result.value;
    stars[repository] = count;
    refreshed += 1;
  } else {
    console.warn(
      `Could not refresh ${repositories[index]} stars; using the last saved count.`,
    );
  }
}

await writeFile(starsFile, `${JSON.stringify(stars, null, 2)}\n`);
console.log(
  `GitHub stars: v-tts ${stars["v-tts"]}, tiny-tts ${stars["tiny-tts"]}${refreshed ? " (refreshed)" : " (saved values)"}`,
);
