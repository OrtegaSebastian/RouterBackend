const express = require('express')
const app = express()
const port = 8080
const {Router} = express;

const router = Router();

const Products = [];

router.get('/', (req, res) => {
    res.send(Products)
  })
router.post('/',(res,send)=>{
    const {title, price, tumbnail} = req.body;
    Products.push({title, price, tumbnail})
    res.send({added:{title, price, tumbnail} })
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

exports.module = router;