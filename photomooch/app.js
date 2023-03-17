var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// set up cors
var cors = require("cors");

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

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
