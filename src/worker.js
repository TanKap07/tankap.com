// Sends www.tankap.com/* to tankap.com/* and serves the static site for everything else.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.tankap.com") {
      url.hostname = "tankap.com";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
