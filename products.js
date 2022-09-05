const express = require('express')
const {Router} = express;

const router = Router();

const Products = [];
//  devuelve todos los productos.
router.get('/products', (req, res) => {
    res.send({Products})
  })
//  -> devuelve un producto según su id. VER
router.get('/productos/:id',(req, res) => {
  const {id} = req.body;
  const productSearch = Products.find((productSearch) => productSearch.id == id);
  if (productSearch) {
    return productSearch;
  } else {
    return "Cannot find the product";
  }
})
  

// agrega productos 
router.post('/products',(req, res)=>{
  const {title, price, tumnail} = req.body;
  const id = Products.length+1
  Products.push({title, price, tumnail, id})
  res.send({added:{title, price, tumnail, id} })
})

// !!!PENDIENTE ARREGLAR!!
// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id. 
router.put('/:id', (req, res) => {
  const {title, price, tumnail} = req.body;
  const {id} = req.body;
  Products.push({title, price, tumnail, id})
  res.send({Products: "Product has been updated"})
  return Products;
  

})


// DELETE '/api/productos/:id' -> elimina un producto según su id.
router.delete('/productos/:id', (req,res)=>{
  const {id} = req.body;
  Products.splice(Products.find(id))
})

module.exports = router;


// Crear un espacio público de servidor que contenga un documento index.html con un formulario de ingreso de productos con los datos apropiados.
