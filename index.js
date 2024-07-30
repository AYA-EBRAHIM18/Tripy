process.on("uncaughtException", (err) => {
  console.log("coding error", err);
});
import express from "express";
import dbConnection from "./database/dbConnection.js";
import userRouter from "./src/modules/user/user.routes.js";
import { User } from "./database/models/user.model.js";
import tripRouter from "./src/trip/trip.routes.js";
import bookingRouter from "./src/modules/booking/booking.routes.js";
import { AppError } from "./src/utilities/appError.js";
import errorHandler from "./src/middleware/globalErrorHandling.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

const app = express();
const port = 3000;
app.use(express.json());
app.post("/photos", upload.single("photo"), (req, res, next) => {
  console.log(req.file);
  console.log(req.body);
  res.json({ message: "success" });
});
app.use("/users", userRouter);
app.use("/trips", tripRouter);
app.use("/bookings", bookingRouter);
// app.use("/verifyOtp", async (req, res) => {
//   const user = await User.findOne({ otpCode: req.body.otpCode });
//   const date = new Date();
//   if (!user) {
//     res.status(401).json({ message: "OTP doesn't exist" });
//   } else if (user.otpExpire < date) {
//     res.status(401).json({ message: "OTP is expired" });
//   } else if (req.body.otpCode !== user.otpCode) {
//     res.status(401).json({ message: "OTP is incorrect" });
//   } else {
//     await User.findOneAndUpdate(
//       { otpCode: req.body.otpCode },
//       { confirmEmail: true }
//     );
//     res.status(201).json({ message: "Email is confirmed" });
//   }
// });
app.use("*", (req, res, next) => {
  next(new AppError(`Route Not Found ${req.originalUrl}`, 404));
});
app.use(errorHandler);
process.on("unhandledRejection", (err) => {
  console.log("error", err);
});
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
