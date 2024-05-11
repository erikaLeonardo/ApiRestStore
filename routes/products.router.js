
const express = require('express');
const ProductsService = require('./../services/product.service');
const router = express.Router();
const service = new ProductsService();

router.get('/', async (req,res)=>{
  const products = await service.find();
  // Aqui lo que sucede es que se regresan los products de forma asincrono
  // con un tiempo de 5 seg
  res.json(products);
});

router.get('/filter',(req,res)=>{
  res.send('Yo soy un filter');
});

router.get('/:id', async (req, res, next) => {
  try {
    const{id} = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req,res)=>{
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res, next)=>{
  // Como esta de forma asincrona lo enserramos en un try catch
  try {
    const{ id } = req.params;
    const body = req.body;
    const product = await service.update(id,body);
    res.json(product);
  } catch(error) {
    next(error);
  }
});

router.delete('/:id', async (req,res)=>{
  const{id} = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports=router;
