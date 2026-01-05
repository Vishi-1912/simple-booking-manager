import express from "express";
import cors from "cors";
import bookingRoutes from "./routes/booking.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/bookings", bookingRoutes);

export default app;