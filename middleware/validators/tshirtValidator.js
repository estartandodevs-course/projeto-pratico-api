const Joi = require('joi');

const tshirtBySizeQuerySchema = Joi.object({
    size: Joi.string().required(),
});

const tshirtQuerySchema = Joi.object({
    id: Joi.string().required(),
})


module.exports = {
    tshirtBySizeQuerySchema,
    tshirtQuerySchema
}