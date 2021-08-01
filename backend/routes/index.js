const { Router  } = require("express");
const router = Router();

const authRoute = require("./auth-route");

router.use("/auth", authRoute);

module.exports = router;
