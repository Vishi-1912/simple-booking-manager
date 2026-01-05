import { Request, Response } from "express";
import Booking from "../models/booking.model";

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { name, email, date, slot } = req.body;

    if (!name || !email || !date || !slot) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const booking = await Booking.create({ name, email, date, slot });
    res.status(201).json({ success: true, booking });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create booking" });
  }
};

export const getBookings = async (_: Request, res: Response) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch bookings" });
  }
};
