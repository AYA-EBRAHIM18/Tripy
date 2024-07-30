import { catchError } from "../../middleware/catchError.js";
import { sendEmails } from "../email/email.js";
import { User } from "./../../../database/models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppError } from "./../../utilities/appError.js";

const addMinutesToDate = (date, n) => {
  date.setTime(date.getTime() + n * 60_000);
  return date;
};

const signUp = catchError(async (req, res) => {
  req.body.otpCode = Math.floor(100000 + Math.random() * 900000);
  req.body.otpExpire = addMinutesToDate(new Date(), 1);
  let user = await User.insertMany(req.body);
  sendEmails(req.body.email);
  user[0].password = undefined;
  res.status(201).json({ message: "Success", user });
});

const signIn = catchError(async (req, res, next) => {
  let user = await User.findOne({ email: req.body.email });

  if (!user || !bcrypt.compareSync(req.body.password, user.password))
    return next(new AppError("Incorrect password or email.", 404));

  jwt.sign(
    { userId: user._id, name: user.name, role: user.role },
    "myNameIsAya",
    (err, token) => {
      res.json({ message: "success", token });
    }
  );
});
export { signUp, signIn };
