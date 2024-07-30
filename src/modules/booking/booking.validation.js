import Joi from "joi";

const bookingVal = Joi.object({
  user: Joi.string().hex().length(24).required(),
  trip: Joi.string().hex().length(24).required(),
});

export { bookingVal };
