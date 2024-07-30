import Joi from "joi";

const signUpVal = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  email: Joi.string().pattern(/^[a-zA-Z0-9_.]{3,200}@(gmail|yahoo)\.com$/),
  password: Joi.string()
    .pattern(/^[A-Z][A-Za-z0-9]{8,40}$/)
    .required(),
  rePassword: Joi.valid(Joi.ref("password")).required(),
  age: Joi.number().min(4).max(80).messages({
    "number.min": `Should be more than 4`,
    "number.max": `Should be less than 80`,
  }),
});

const signInVal = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string()
    .pattern(/^[A-Z][A-Za-z0-9]{8,40}$/)
    .required(),
});

export { signUpVal, signInVal };
