const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() =>
      console.log(
        "==============Mongodb Database Connected Successfully=============="
      )
    )
    .catch((err) => console.log("Database Not Connected !!!", err));
};
