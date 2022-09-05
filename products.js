const express = require('express')
const {Router} = express;

const router = Router();

const Products = [];
// GET '/api/productos' -> devuelve todos los productos.
router.get('/products', (req, res) => {
    res.send({Products})
  })
// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
router.put('/:id', (req, res) => {
  res.send({Products: "actualizar"})

})

// !!*agrega productos  cambiar para que el id se incremente solo.!!
router.post('/products',(req, res)=>{
    const {title, price, tumnail, id} = req.body;
    Products.push({title, price, tumnail, id})
    res.send({added:{title, price, tumnail, id} })
})

module.exports = router;


// Consigna: Realizar un proyecto de servidor basado en node.js y express que ofrezca una API RESTful de productos. En detalle, que incorpore las siguientes rutas:

// GET '/api/productos/:id' -> devuelve un producto según su id.

// DELETE '/api/productos/:id' -> elimina un producto según su id.
// Cada producto estará representado por un objeto con el siguiente formato:

// Cada ítem almacenado dispondrá de un id numérico proporcionado por el backend, comenzando en 1, y que se irá incrementando a medida de que se incorporen productos. Ese id será utilizado para identificar un producto que va a ser listado en forma individual.
// Para el caso de que un producto no exista, se devolverá el objeto:
// { error : 'producto no encontrado' }
// Implementar la API en una clase separada, utilizando un array como soporte de persistencia en memoria.
// Incorporar el Router de express en la url base '/api/productos' y configurar todas las subrutas en base a este.
// Crear un espacio público de servidor que contenga un documento index.html con un formulario de ingreso de productos con los datos apropiados.
// El servidor debe estar basado en express y debe implementar los mensajes de conexión al puerto 8080 y en caso de error, representar la descripción del mismo.
// Las respuestas del servidor serán en formato JSON. La funcionalidad será probada a través de Postman y del formulario de ingreso.
