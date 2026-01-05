import { useEffect, useState } from "react";

type Booking = {
  _id: string;
  name: string;
  email: string;
  date: string;
  slot: string;
};

export default function BookingList() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    setBookings([
      {
        _id: "1",
        name: "John Doe",
        email: "john@example.com",
        date: "2023-01-01",
        slot: "10AM - 11AM",
      },
    ]);
  }, []);

  return (
    <div className="card">
      <h2>All Bookings</h2>
      <p className="subtitle">View all created bookings</p>

      {bookings.length === 0 ? (
        <div className="empty">No bookings found 🌱</div>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Slot</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b._id}>
                  <td>{b.name}</td>
                  <td>{b.email}</td>
                  <td>{b.date}</td>
                  <td>{b.slot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
