import { useEffect, useState } from "react";
import { getBookings } from "../services/api";

type Booking = {
    _id: string;
    name: string;
    email: string;
    date: string;
    slot: string;
};

export default function BookingList() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchBookings();
    }, []);

    async function fetchBookings() {
        try {
            setLoading(true);
            const data = await getBookings();
            setBookings(data?.bookings);
            setLoading(false);
        } catch {
            console.log("Failed to load tasks. Please try again later.");
            setLoading(false);
        }
    }

    return (
        <div className="card">
            <h2>All Bookings</h2>
            <p className="subtitle">View all created bookings</p>

            {loading ? (
                <div className="empty">Loading...</div>
            ) : bookings.length === 0 ? (
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
