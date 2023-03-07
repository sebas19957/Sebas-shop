import mongoose, { Schema, model, Model } from "mongoose";
import { IUser } from "../interfaces";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: [
      {
        type: String,
        enum: {
          values: ["admin", "client", "super-user", "SEO"],
          message: "{VALUE} no es un rol válido",
          default: "client",
          required: true,
        },
      },
    ],
    phone: { type: String, default: "" },
    gender: [
      {
        type: String,
        enum: {
          values: ["admin", "client", "super-user", "SEO"],
          message: "{VALUE} no es un rol válido",
          default: "client",
          required: true,
        },
      },
    ],
    civilDtatus: { type: String, default: "" },
    country: { type: String, default: "" },
    city: { type: String, default: "" },
    zip: { type: String, default: "" },
    address: { type: String, default: "" },
    addressDesciption: { type: String, default: "" },
    occupation: { type: String, default: "" },
    studyLevel: { type: String, default: "" },
    workActivity: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

const User: Model<IUser> = mongoose.models.User || model("User", userSchema);

export default User;
