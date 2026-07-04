import express from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";

import routes from "./routes/index.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());

app.use(express.json());

app.use(
  morgan(":method :url :status :response-time ms")
);

app.get("/", (_req, res) => {
  res.json({
    app: "A5E Dashboard API",
    version: "0.1.0",
    status: "running",
  });
});
app.use("/api", routes);

export default app;
