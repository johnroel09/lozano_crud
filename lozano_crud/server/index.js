const express = require("express");
const cors = require("cors");
const app = express();

const UserRouter = require("./routes");
app.use(cors());
app.use(express.json());
app.use("/3b", UserRouter);
app.listen(5000, () => console.log("PORT 5000 IS RUNNING"));
