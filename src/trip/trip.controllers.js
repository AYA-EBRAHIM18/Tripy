import { catchError } from "../middleware/catchError.js";
import { Trip } from "./../../database/models/trips.model.js";
const createTrip = catchError(async (req, res) => {
  let trip = await Trip.insertMany(req.body);
  res.status(201).json({ message: "Success", trip });
});

const getTrips = catchError(async (req, res) => {
  let trips = await Trip.find();
  res.json({ message: "success", trips });
});
export { createTrip, getTrips };
