import { app } from "./app.js";
import { connectToDb } from "./config/dbConnection.js";

import dotenv from "dotenv";

dotenv.config();

connectToDb()
  .then(() => {
    const port = process.env.PORT || 5001;
    app.listen(port, () => {
      console.log(`listening the server on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
