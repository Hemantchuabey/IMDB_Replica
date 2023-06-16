const mongoose = require("mongoose");

const dbConnect = () => {
  const connnectionParams = { useNewUrlParser: true };
  mongoose.connect(process.env.DB, connnectionParams);

  mongoose.connection.on("connected", () => {
    console.log("connected to database...");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Error while connecting database...", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected to database...");
  });
};

module.exports = dbConnect;
