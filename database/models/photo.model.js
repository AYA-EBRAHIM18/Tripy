import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    title: String,
    imgUrl: String,
  },
  {
    timestamps: { updatedAt: false },
    versionKey: false,
  }
);

export const Photo = model("Photo ", schema);
