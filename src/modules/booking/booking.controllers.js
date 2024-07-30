import { catchError } from "../../middleware/catchError.js";
import { Booking } from "./../../../database/models/booking.model.js";

const createABooking = catchError(async (req, res) => {
  let booking = await Booking.insertMany(req.body);
  res.status(201).json({ message: "Success", booking });
});

const getBookings = catchError(async (req, res) => {
  let bookings = await Booking.find({ user: req.user.userId })
    .populate("user", "name -_id")
    .populate("trip");
  res.json({ message: "success", bookings });
});
export { createABooking, getBookings };
