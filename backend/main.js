import app from "./server.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

import RegisterDAO from "./dao/UserDAO.js";

dotenv.config();

async function main() {
  const PORT = process.env.PORT || 5000;

  try {
    const client = mongoose.createConnection(process.env.MONGO_URI, {
      dbName: "login-system",
    });

    await RegisterDAO.injectDB(client).then(
      console.log("Connected to database"),
    );

    app.listen(PORT, () => {
      console.log(`Server is listening on port: ${PORT}`);
    });
  } catch (err) {
    console.error(`Server could not start on port: ${PORT}`);
  }
}
main();
