import JoiImp from "joi";
import DateExtension from '@joi/date';

const Joi = JoiImp.extend(DateExtension);

export const postRequestSchema = Joi.object({
    userId: Joi.number().required(),
    userName: Joi.string().required(),
    userApiKey: Joi.string().required()
});

export const asteroidsSchema = Joi.object({
    date: Joi.date().format('YYYY-MM-DD').optional(),
    count: Joi.boolean().sensitive().optional(),
    were_dangerous_meteors: Joi.boolean().sensitive().optional(),
});

export const validateRequest = (schema, source) => {
    return (req, res, next) => {
        const { error } = schema.validate(req[source]);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        next();
    }
}