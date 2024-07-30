import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    destination: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    price: { type: Number, required: true },
  },
  {
    timestamps: { updatedAt: false },
    versionKey: false,
  }
);

export const Trip = model("Trip", schema);
