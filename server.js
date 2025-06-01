const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

mongoose.connection.on("connected", () =>
  console.log("Mongoose connected to DB")
);
mongoose.connection.on("error", (err) =>
  console.log("Mongoose connection error:", err)
);
mongoose.connection.on("disconnected", () =>
  console.log("Mongoose disconnected")
);

app.use("/api/users", require("./routes/users"));
app.use("/api/plants", require("./routes/plants"));
app.use("/api/levels", require("./routes/levels"));
app.use("/api/achievements", require("./routes/achievements"));
app.use("/api/zombies", require("./routes/zombies"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
