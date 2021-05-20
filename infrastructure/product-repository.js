/**
 * @typedef {import('../domain/model').IProduct} Product
 * @typedef {import('..').IDependencies} Dependencies
 */

/**
 *
 * @param {Dependencies} dependencies All dependencies needed by this module
 */
module.exports = () => {
  const availableSpaces = {
    1: 10,
    2: 20,
    3: 20,
    4: 25,
    5: 25,
    6: 10,
  };
  const products = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  };
  return {
    getAvailableSpaces: (warehouse) => {
      return availableSpaces[warehouse] - products[warehouse].length;
    },
    addProduct: (product) => {
      products[product.warehouse].push(product);
    },
  };
};
