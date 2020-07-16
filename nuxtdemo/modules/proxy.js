export default function Proxy(moduleOptions) {
  this.nuxt.hook("listen", (server, {host, port}) => {
    server.addListener("request", (req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
    });
  });
}
