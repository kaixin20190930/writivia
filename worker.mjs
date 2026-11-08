import openNextWorker from "./.open-next/worker.js";

const redirectHosts = new Set(["writivia.com", "writivia.biz", "www.writivia.biz"]);

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (redirectHosts.has(url.hostname)) {
      url.protocol = "https:";
      url.hostname = "www.writivia.com";
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }

    globalThis.RATE_LIMIT = env.RATE_LIMIT;
    return openNextWorker.fetch(request, env, ctx);
  },
};
