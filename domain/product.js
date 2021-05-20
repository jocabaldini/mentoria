/**
 * @typedef {import('./model').IProduct} Product
 * @typedef {import('..').IDependencies} Dependencies
 */

/**
 *
 * @param {Dependencies} dependencies All dependencies needed by this module
 */
module.exports = (dependencies) => ({
  /**
   * Validate a product
   * @param {Product} product The product to be
   * validated
   */
  validateProductCreation: (product) => {
    if (product.name.length === 0) {
      return false;
    }
    if (product.description.length === 0) {
      return false
    }
    if (product.price <= 0) {
      return false;
    }
    if ([1,2,3,4,5,6].indexOf(product.warehouse) === -1) {
      return false;
    }
    return true;
  },

  /**
   * Checks whether there is at least one available space in product's warehouse
   * @param {Product} product
   */
   hasAvailableSpace: (product) => {
    // We are going to accept all students with life threatening conditions
    const availableSpaces = dependencies.infrastructure.productRepository.getAvailableSpaces(product.warehouse);
    
    return availableSpaces > 0;
  },
});
