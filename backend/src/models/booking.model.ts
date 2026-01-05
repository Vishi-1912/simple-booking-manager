import { Schema, model, Document } from "mongoose";

export interface IBooking extends Document {
  name: string;
  email: string;
  date: string;
  slot: string;
  createdAt: Date;
}

const bookingSchema = new Schema<IBooking>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    slot: { type: String, required: true }
  },
  { timestamps: true }
);

export default model<IBooking>("Booking", bookingSchema);
