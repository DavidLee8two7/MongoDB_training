const mongoose = require("mongoose");

const [major, minor] = process.versions.node.split(".").map(parseFloat);
if (major < 7 || (major === 7 && minor <= 5)) {
  console.log(
    "You're on an older version of node that doesn't support many new features. Please go to nodejs.org and download version 7.6 or newer."
  );
  process.exit();
}

require("dotenv").config({ path: "variables.env" });

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on("error", err => {
  console.error(`${err.message}`);
});

const app = require("./app");
app.set("port", process.env.PORT || 5555);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
