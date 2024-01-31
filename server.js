require("dotenv").config();
const expresss = require("express");
const { sequelize, initModels } = require("./models");
const cors = require("cors");
const routes = require("./routes");

const app = expresss();

const PORT = process.env.PORT || 5600;

app.use(expresss.json());
//app.use(cookieParser());
//app.use(helmet());
app.use(cors({ origin: "*", credentials: true }));

app.use("/v1/", routes);

try {
  app.listen(PORT, async () => {
    await sequelize.authenticate();
    console.log("DB connected", PORT);
  });
} catch (error) {
  console.log("Error", error);
}
