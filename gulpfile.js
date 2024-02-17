const { src, dest, series } = require("gulp");

function server() {
  const srcPath = "./src/**/*.js";
  const destPath = "./release/src";

  return src(srcPath).pipe(dest(destPath));
}

function main() {
  const srcPath = [
    "./app.js",
    "./package.json",
    "./.env",
    './web.config'
  ];
  const destPath = "./release";

  return src(srcPath).pipe(dest(destPath));
}

exports.default = series(server, main);
