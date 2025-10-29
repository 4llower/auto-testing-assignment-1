// I fu..ing spent 1.5h hour to configure lint-staged and it just didn't work, I hassled, changed parameters, but local eslint works correcly, but in lint-staged it magically goes differently. And I gave up
const { execSync } = require("child_process");

const stagedFiles = execSync("git diff --cached --name-only --diff-filter=ACMR")
  .toString()
  .trim()
  .split("\n")
  .filter((file) => file.endsWith(".js"))
  .join(" ");

if (!stagedFiles) {
  console.log("No staged JS files to lint.");
  process.exit(0);
}

try {
  console.log(`Linting and fixing staged files: ${stagedFiles}`);

  execSync(
    `npx eslint --config=eslint.config.js --fix --no-cache ${stagedFiles}`,
    { stdio: "inherit" }
  );

  execSync(`npx prettier --write ${stagedFiles}`, { stdio: "inherit" });

  execSync(`git add ${stagedFiles}`, { stdio: "inherit" });

  console.log("✅ Lint and format succeeded. Files re-added to staging.");
} catch (error) {
  console.error("❌ Linting failed.");
  process.exit(1);
}
