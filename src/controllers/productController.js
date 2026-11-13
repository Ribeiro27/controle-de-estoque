
import Product from '../models/productModel.js';

class ProductController {

  constructor() {
    this.product = new Product();
  }

  all = async (req, res) => {
    try {
      const products = await this.product.all();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({
        message: 'Erro ao buscar produtos',
        error: error.message
      });
    }
  };

  view = async (req, res) => {
    try {
      const products = await this.product.all();
      res.render('products', { products });
    } catch (error) {
      res.status(500).send('Erro ao carregar a página de produtos');
    }
  };
  
  show = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        message: 'Informe um ID válido.'
      });
    }

    const product = await this.product.show(id);

    if (!product) {
      return res.status(404).json({
        message: 'Produto não encontrado.'
      });
    }

    res.status(200).json(product);

  } catch (error) {
    res.status(500).json({
      message: 'Erro ao buscar produto',
      error: error.message
    });
  }
};

  create = async (req, res) => {
    try {
      const product = await this.product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({
        message: 'Erro ao cadastrar produto',
        error: error.message
      });
    }
  };

  update = async (req, res) => {
    try {
      const product = await this.product.update(req.params.id, req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({
        message: 'Erro ao atualizar produto',
        error: error.message
      });
    }
  };

  delete = async (req, res) => {
    try {
      const product = await this.product.delete(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({
        message: 'Erro ao excluir produto',
        error: error.message
      });
    }
  };

}

export default new ProductController();
