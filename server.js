const express = require('express')
const app = express();

function delay(duration){
     const start = new Date();
     while (Date.now() - start < duration) {

     }
}

app.get('/', (req, res) => {
    res.send("perfomance Example")
});


app.get('/timer', (req, res) => {
    delay(9000)
    res.send("Ding Dong")
})
app.listen(3000 , ()=> {
  console.log("working on port 3000");
})