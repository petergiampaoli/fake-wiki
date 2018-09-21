

const wikiRouter = require( "express").Router();
const addPage = require ("../views/addPage");

// const whateverName = {
  wikiRouter.get("/", (req, res, next)=>{
    res.send( "you made it to the wiki site")
  });
  wikiRouter.post('/' , (req, res, next)=>{
  res.send("post post post")
  });
  wikiRouter.get("/add", (req, res, next)=>{
    res.send (addPage())
  });


module.exports = wikiRouter;
