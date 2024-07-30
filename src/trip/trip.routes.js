import { Router } from "express";
import { createTrip, getTrips } from "./trip.controllers.js";
import { validate } from "../middleware/validate.js";
import { tripVal } from "./trip.validation.js";

const tripRouter = Router();

tripRouter.post("/", validate(tripVal), createTrip);
tripRouter.get("/", getTrips);

export default tripRouter;
