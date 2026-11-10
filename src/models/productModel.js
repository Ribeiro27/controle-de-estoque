import { prisma } from '../config/prisma.js';

export default class Product {


  all() {
    const products = prisma.product.findMany();
    
    return products;
  }

  show(id) {
    const product = prisma.product.findUnique({
      where: {
        id: parseInt(id)
      }
    });

    return product;
  }

  create(body) {
    const product = prisma.product.create({
      data: {
        name: body.name,
       description: body.description,
        value: parseFloat(body.value)
      }
    });

    return product;
  }

  update(id, body) {
    const product = prisma.product.update({
      where: {
        id: parseInt(id)
      },
      data: {
        name: body.name,
        description: body.description,
        value: parseFloat(body.value)
      },
    });

    return product;
  }

  delete(id) {
    const product = prisma.product.delete({
      where: {
        id: parseInt(id)
      }
    });

    return product;
  }
  

    
}
