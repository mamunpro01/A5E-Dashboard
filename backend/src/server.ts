import app from "./app.js";
import { config } from "./config/index.js";

app.listen(config.port, () => {
  console.log("");
  console.log("==================================");
  console.log(`🚀 ${config.appName}`);
  console.log(`Version : ${config.version}`);
  console.log(`Port    : ${config.port}`);
  console.log(`URL     : http://localhost:${config.port}`);
  console.log("==================================");
});
