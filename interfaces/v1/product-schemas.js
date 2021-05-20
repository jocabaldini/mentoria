const joi = require('joi');

module.exports = {
  post: {
    payload: {
      name: joi.string().required(true),
      description: joi.string().required(true),
      price: joi.number().required(true),
      warehouse: joi.number().required(true),
    },
  },
};
