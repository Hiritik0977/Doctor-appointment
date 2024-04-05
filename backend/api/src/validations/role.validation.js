const Joi = require("joi");
const roleSchema = Joi.object({
  role: Joi.string().required(),
  description: Joi.string().optional(),
});

module.exports = roleSchema;
