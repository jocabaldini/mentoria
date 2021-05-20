const product = require('./product');

module.exports = (dependencies) => ({
  validateProductCreation: product(dependencies).validateProductCreation,
  hasAvailableSpace: product(dependencies).hasAvailableSpace,
});
