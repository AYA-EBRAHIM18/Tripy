import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    trip: {
      type: Schema.Types.ObjectId,
      ref: "Trip",
      required: true,
    },
    bookingDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: { updatedAt: false },
    versionKey: false,
  }
);

export const Booking = model("Booking", schema);
