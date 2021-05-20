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
  {
    path: '/v1/product',
    method: 'GET',
    config: {
      description: 'Get all products',
      notes: 'You can pass the warehouse ID if want only the products of that warehouse',
      tags: ['product', 'list', 'api'],
      handler: (req, res) => {
        try {
          const ret = application.getProducts(req.query);
          return res.response(ret.data).code(ret.statusCode);
        } catch (error) {
          console.log(error);
          return res.response('Internal error').code(500);
        }
      },
    }
  }
];

