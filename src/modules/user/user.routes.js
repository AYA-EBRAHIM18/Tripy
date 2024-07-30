import { Router } from "express";
import { signIn, signUp } from "./user.controllers.js";
import { checkEmail } from "./../../middleware/checkEmail.js";
import { validate } from "../../middleware/validate.js";
import { signInVal, signUpVal } from "./user.validation.js";

const userRouter = Router();

userRouter.post("/signUp", validate(signUpVal), checkEmail, signUp);
userRouter.post("/signIn", validate(signInVal), signIn);
export default userRouter;
