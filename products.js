const express = require('express')
const {Router} = express;
const fs = require('fs');
const Contenedor = require("./container");
const constructor = new Contenedor("./productos.txt")


const router = Router();


const Products = [];
//  devuelve todos los productos.
router.get('/products', (req, res) => {
  try {
    res.send(constructor.getAll());
  } catch (err) {
    res.status(404).send(err);
  }
});

  
//  -> devuelve un producto según su id. 
router.get('/products/:id',(req, res) => {
  try {
    const { id } = req.params;
    res.send(constructor.getById(parseInt(id)));
  } catch (err) {
    res.status(404).send(err);
  }
});

// agrega productos 
router.post('/products',(req, res)=>{
  const {title, price, tumbnail} = req.body;
  const id = Products.length+1
  Products.push({title, price, tumbnail, id})
  res.send({added:{title, price, tumbnail, id} })
  return Products;
})


// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id. 
router.put('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const prodNuevo = req.body;
    const idInt = parseInt(id);
    res.send(constructor.updateById(idInt, prodNuevo));
  } catch (err) {
    res.status(404).send(err.msg);
  }
});


// DELETE '/api/productos/:id' -> elimina un producto según su id.
router.delete('/products/:id', (req,res)=>{
  try {
    const { id } = req.params;
    res.send(constructor.deleteById(parseInt(id)));
  } catch (err) {
    res.status(404).send(err.msg);
  }
});

module.exports = router;

