const express = require("express");
const { Nuxt, Builder } = require("nuxt");

const app = express();

const port = process.env.PORT || 3000;

const server = app.listen(port, function() {});

const config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");
const nuxt = new Nuxt(config);

if (config.dev) {
  const builder = new Builder(nuxt);
  builder.build();
}

app.use(nuxt.render);

module.exports = app;
