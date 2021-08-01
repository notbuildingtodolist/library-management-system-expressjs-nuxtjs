const express = require("express");
const cors = require("cors");

const { routeLogger } = require("./middleware");
const { constants: { Environment: { PORT, HOST } }} = require("./config");
const router = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: false,
}));
app.use(cors());

app.use("/", routeLogger, router);

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
