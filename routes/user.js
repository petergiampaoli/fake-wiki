
const userRouter = require( "express").Router();

// const whateverName = {
  userRouter.get("/", (req, res, next)=>{
    res.send( "you made it to the wiki site")
  });
  userRouter.post('/' , (req, res, next)=>{
  res.send("post post post")
  });
  userRouter.get("/add", (req, res, next)=>{
    res.send ("got to get get get")
  })


module.exports = userRouter;
