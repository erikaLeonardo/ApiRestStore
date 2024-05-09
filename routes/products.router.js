const express = require('express');

//importamos el servicio de products
const ProductService = require('./../services/product.service')

const router = express.Router();
// Creamos una instancia de servicio
const service = new ProductService();

router.get('/', (req, res) => {

  const products = service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  //mandamos a llamar el servicio
  const product = service.findOne(id);
  // mandamos llamar el servicio con toda la logica
  res.json(product);
});

//Esta es la respuesta
router.post('/', (req, res) => {
  // Aqui se reciben los psrametros que se estan recibiendo de insomnia
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
