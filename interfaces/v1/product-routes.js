/**
 * @typedef {import('../../domain/model').IProduct} Product
 * @typedef {import('../..').IDependencies} Dependencies
 */

const productSchemas = require('./product-schemas');

/**
 *
 * @param {Dependencies} dependencies All dependencies needed by this module
 */
module.exports = (application) => [
  {
    path: '/v1/product',
    method: 'POST',
    config: {
      description: 'Create a new product',
      notes: 'No extra notes',
      tags: ['product', 'create', 'api'],
      handler: (req, res) => {
        try {
          const ret = application.createProduct(req.payload);
          return res.response(ret.data).code(ret.statusCode);
        } catch (error) {
          return res.response('Internal error').code(500);
        }
      },
      validate: {
        options: {
          allowUnknown: true,
        },
        payload: productSchemas.post.payload,
      },
    },
  },
];

