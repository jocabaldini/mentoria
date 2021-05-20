/**
 * @typedef {import('../domain/model').IProduct} Product
 * @typedef {import('..').IDependencies} Dependencies
 */

/**
 *
 * @param {Dependencies} dependencies All dependencies needed by this module
 */
module.exports = (dependencies) => ({
  /**
   * Register a new student.
   * @param {Product} product The product to be
   * processed
   * @return {import('..').IAPIReturn} Process results.
   */
  createProduct: (product) => {
    const validProduct = dependencies.domain.validateProductCreation(product);
    if (validProduct === false) {
      return dependencies.helpers.makeReturn(400, { message: 'Product is not valid' });
    }
    if (dependencies.domain.hasAvailableSpace(product)) {
      dependencies.infrastructure.productRepository.addProduct(product);
    } else {
      return dependencies.helpers.makeReturn(400, { message: 'No more available spaces in the warehouse' });
    }
    return dependencies.helpers.makeReturn(201, { message: 'Product was successfully created' });
  },
  getProducts: (params) => {
    const products = dependencies.infrastructure.productRepository.getProducts(params.warehouse);
    return dependencies.helpers.makeReturn(200, { message: 'Products was listed', data: products});
  }
});
