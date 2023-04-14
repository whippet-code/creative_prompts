var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// set up cors for cross origin requests
var cors = require("cors");

// set up mongoose
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const promptsRouter = require("./routes/prompts");

var app = express();
// set up PORT
var PORT = 8080 || process.env.PORT;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/prompts", promptsRouter);

// link mongodb using mongoose and use the photomooch database
const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mark:Password@hyperiondevtask.qkcy9dp.mongodb.net/photomooch?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();

module.exports = app;
