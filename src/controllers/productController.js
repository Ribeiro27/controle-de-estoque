import Product from '../models/productModel.js'

class ProductController {

  constructor() {
    this.product = new Product();
  }

  all = async (req, res) => {
    const products = await this.product.all();
    res.status(200).json(products);
  }

  show = async (req, res) => {
    const product = await this.product.show(req.params.id);
    res.status(200).json(product);
  };

  create = async (req, res) => {
    const product = await this.product.create(req.body);
    res.status(201).json(product);
  };

  update = async (req, res) => {
    const product = await this.product.update(req.params.id, req.body);
    res.status(200).json(product);
  };

  delete = async (req, res) => {
    const product = await this.product.delete(req.params.id);
    res.status(200).json(product);
  };

}
export default new ProductController ();