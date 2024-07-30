import { model, Schema } from "mongoose";
import { type } from "os";

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "admin"],
    },
    otpCode: String,
    otpExpire: {
      type: Date,
      default: Date.now,
    },
    confirmEmail: {
      type: Boolean,
      default: false,
    },
    age: Number,
  },

  {
    timestamps: { updatedAt: false },
    versionKey: false,
  }
);

export const User = model("User", schema);
