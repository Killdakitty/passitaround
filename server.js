const express = require("express");
const app = express();
const PORT = 3000;



app.get("/", (req, res) => {
  res.send(`99 Bottles of beer on the wall,
  <a href="/98"> take one down </a>
   , pass it around 
    `);
});

app.get('/:numbers_of_bottles',(req,res)=>{

    
    if (req.params.numbers_of_bottles>0){
    res.send(`${req.params.numbers_of_bottles} Bottles of beer on the wall,
    
    <a href="${req.params.numbers_of_bottles-1}"> take one down </a>
   , pass it around 
    `)}
    else {
        res.send(`${req.params.numbers_of_bottles} Bottles of beer on the wall,
        <a href="/"> Start OVER </a>
        
         `)}
})



app.listen(PORT, () => {
  console.log("port is running...");
});
