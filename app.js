const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
// const html = require("html-template-tag");
// const db = require('./models');
const models = require("./models")
const userRouter = require("./routes/user")
const wikiRouter = require("./routes/wiki")
const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));
app.get ("/",(req, res, next) =>{
  res.redirect ( "/wiki");
})
app.use("/wiki", wikiRouter);

app.use("/user", userRouter);




// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })
// app.get("/", (req, res) => {
//     const message = html `<!DOCTYPE html>
//     <html>
//     <link rel="stylesheet" href="/style.css" />
//     <body>This is a Blue Heading</body>
//     </html>`;
//     res.send(message);
// });

const init = async ( )=>{
  await models.User.sync()
  await models.Page.sync()
  app.listen(1338);

}

init();
