import { Router } from "express";
import { createABooking, getBookings } from "./booking.controllers.js";
import { verifyToken } from "../../middleware/verifyToken.js";
import { validate } from "../../middleware/validate.js";
import { bookingVal } from "./booking.validation.js";

const bookingRouter = Router();
bookingRouter.use(verifyToken);
bookingRouter.post("/", validate(bookingVal), createABooking);
bookingRouter.get("/", getBookings);

export default bookingRouter;
