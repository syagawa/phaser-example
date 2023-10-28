const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("./public"));
app.use((req, res, next) => {
  console.log(req.url);
});

app.listen(port, () => {
  console.log("app started!!");
})