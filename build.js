const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

const handle = "HormCodes";

const text = `Matěj 'Horm' Horák / @${handle}
Backend Developer at Airthings

https://horm.codes

twitter.com/${handle}
github.com/${handle}
linkedin.com/in/${handle}`;

const output = boxen(text, {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "#F26C4F",
});

const cli = `#!/usr/bin/env node
console.log(\`${output}\`);`;

const outputDirectoryName = "bin";
const buildOutputDirectory = path.join(__dirname, outputDirectoryName);

if (fs.existsSync(buildOutputDirectory)) {
  fs.rmSync(buildOutputDirectory, { recursive: true });
}
fs.mkdirSync(buildOutputDirectory);

fs.writeFileSync(path.join(__dirname, outputDirectoryName + "/index.js"), cli);
