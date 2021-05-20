const productRepository = require('./product-repository');

module.exports = () => ({
  productRepository: {
    getAvailableSpaces: productRepository().getAvailableSpaces,
    addProduct: productRepository().addProduct,
    getProducts: productRepository().getProducts,
  },
});
