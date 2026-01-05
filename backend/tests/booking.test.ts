import request from "supertest";
import mongoose from "mongoose";
import app from "../src/app";
import dotenv from "dotenv";

dotenv.config();

describe("Booking API", () => {
  // Connect to DB before tests
  beforeAll(async () => {
    const mongoUri = process.env.MONGO_URI as string;
    await mongoose.connect(mongoUri);
  });

  // Close DB connection after tests
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it(
    "should create a booking successfully",
    async () => {
      const response = await request(app)
        .post("/api/bookings")
        .send({
          name: "Test User",
          email: "test@example.com",
          date: "2026-01-10",
          slot: "10:00 AM - 11:00 AM",
        });

      expect(response.body.success).toBe(true);
      expect(response.body.booking).toHaveProperty("_id");
      expect(response.body.booking.name).toBe("Test User");
    },
    10000
  );
});
