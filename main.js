const express = require('express')
const app = express()
const port = 8080;
const productsRouter = require('./products')

app.use(expres.json());

app.use('api/mascotas', productsRouter)







app.listen(port, () => console.log(`Example app listening on port ${port}!`))