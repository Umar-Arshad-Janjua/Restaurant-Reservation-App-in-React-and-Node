import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minLength: [3, "First name must be at least 3 characters long"],
    maxLength: [30, "First name cannot exceed 30 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    minLength: [3, "Last name must be at least 3 characters long"],
    maxLength: [30, "Last name cannot exceed 30 characters"],
  },
  date: {
    type: String,
    required: [true, "Reservation date is required"],
  },
  time: {
    type: String,
    required: [true, "Reservation time is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Please provide a valid email address"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    validate: {
      validator: function(v) {
        return /^\d{11}$/.test(v);
      },
      message: "Phone number must be exactly 11 digits",
    },
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
