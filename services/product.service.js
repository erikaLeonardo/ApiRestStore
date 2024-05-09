const { faker } = require('@faker-js/faker');

class ProductService {

  // Necesitamos un constructor
  constructor(){
    // array que inica con 0 productos
    this.products = [];
    // Cada vez que genere una instancia del servicio empezara a crear los 100 registros
    this.generate();
  }

  // Metodo para generar
  generate(){
    // Pasamos esta logica de negocio
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        // Creamos un id para los productso
        id: faker.datatype.uunid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
      });
    }
  }

  // Crear las funcionalidades para products
  // Manejo transaccional
  create(){

  }

  find(){
    // hacer return del array de products
    return this.products;
  }

  //usamos ese id
  findOne(id){
    return this.products.find(item => item.id === id)
  }

  update(){

  }

  delete(){

  }

}

module.exports = ProductService;
