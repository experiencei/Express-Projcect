const express = require('express')
const cluster = require('cluster')

const app = express();

function delay(duration){
     const start = new Date();
     while (Date.now() - start < duration) {

     }
}

app.get('/', (req, res) => {
    res.send(`perfomance Example ${process.pid}`)
});


app.get('/timer', (req, res) => {
    delay(9000)
    res.send(`Ding Dong ${process.pid}`)
})

if(cluster.isMaster){
   cluster.fork()
   cluster.fork()
}else{
    app.listen(3000 , ()=> {
        console.log("working on port 3000");
      })
}
