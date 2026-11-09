export const site = {
  name: "Writivia",
  tagline: "Write better application essays.",
  url: "https://writivia.com",
  email: "hello@writivia.com",
};

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
