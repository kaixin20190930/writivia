import { existsSync, readFileSync } from "node:fs";

const autoLoadedEnvFiles = [
  ".env",
  ".env.local",
  ".env.production",
  ".env.production.local",
];

const unsafeFiles = autoLoadedEnvFiles.filter((file) => {
  if (!existsSync(file)) return false;
  const contents = readFileSync(file, "utf8");
  return /(?:pk|sk)_test_/.test(contents);
});

if (unsafeFiles.length > 0) {
  throw new Error(
    `Production build blocked: test Clerk credentials found in ${unsafeFiles.join(
      ", ",
    )}. Keep local Clerk credentials in .env.local.dev and load them explicitly for development.`,
  );
}

