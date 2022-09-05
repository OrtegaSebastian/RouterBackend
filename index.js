const express = require('express');
const res = require('express/lib/response');
const app = express()
const port = 8080;
const productsRouter = require('./products')



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req,res)=>{
    res.send("Main page")
})

app.use('/api/', productsRouter);





app.listen(port, () => console.log(`Example app listening on port ${port}!`))


