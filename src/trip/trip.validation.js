import Joi from "joi";

const tripVal = Joi.object({
  destination: Joi.string().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  price: Joi.number().positive().required(),
});

export { tripVal };
