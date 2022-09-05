const express = require('express')
const {Router} = express;

const router = Router();


// para pruebas => "title":"prod1", "price": 50, "tumbnail":"blablabla.com",

const Products = [];
//  devuelve todos los productos.
router.get('/products', (req, res) => {
    res.send({Products})
  })

  
//  -> devuelve un producto según su id. 
router.get('/products/:id',(req, res) => {
  const { id }  = req.params;
  const productSearch = Products.find((productSearch) => productSearch.id === id);
  console.log(productSearch);
  if (productSearch.length !== 0) {
    res.send({productSearch}) ;
  } else {
    return console.log("Cannot find the product");
  }
})

// agrega productos 
router.post('/products',(req, res)=>{
  const {title, price, tumbnail} = req.body;
  const id = Products.length+1
  Products.push({title, price, tumbnail, id})
  res.send({added:{title, price, tumbnail, id} })
  return Products;
})

// !!!PENDIENTE ARREGLAR!!
// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id. 
router.put('/:id', (req, res) => {
  const { title, price, tumbnail } = req.body;
  const { id } = req.params;
  const productSearch = Products.find((productSearch) => productSearch.id = id);
  console.log(productSearch);
  if (productSearch.length === 0) {
    res.send({Products: "Product not found"}) ;
  }
  else{

  }
  // ACA DEBERIA IR ALGO PARA REEMPLAZAR EL ITEM CON LOS NUEVOS.
  // Products.push({title, price, tumnbail, id})
  res.send({Products: "Product has been updated"})
  return Products;
})


// DELETE '/api/productos/:id' -> elimina un producto según su id.
router.delete('/products/:id', (req,res)=>{
  const { id } = req.params;
  const resultProducts = Products.filter((product) => product.id != id);
  if (resultProducts.length !== 0) {
    Products = resultProducts;
  }
  res.send({message: "Product has been deleted"});
});

module.exports = router;


// Crear un espacio público de servidor que contenga un documento index.html con un formulario de ingreso de productos con los datos apropiados.
