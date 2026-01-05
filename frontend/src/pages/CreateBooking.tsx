import { useState } from "react";
import { createBooking } from "../services/api";

export default function CreateBooking() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        date: "",
        from: "",
        to: "",
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        const slot = `${formatTime(form.from)} – ${formatTime(form.to)}`;

        try {
            const data = await createBooking({
                name: form.name,
                email: form.email,
                date: form.date,
                slot,
            });

            if (data?.success === true) {
                setMessage("Booking created successfully ✅");
                setForm({ name: "", email: "", date: "", from: "", to: "" });
            } else {
                setMessage("Failed to create booking");
            }
        } catch (err: any) {
            setMessage(err.message || String(err));
        } finally {
            setLoading(false);
        }
    };


    const formatTime = (time: string) => {
        const [h, m] = time.split(":");
        const hour = Number(h);
        const suffix = hour >= 12 ? "PM" : "AM";
        const formattedHour = hour % 12 || 12;
        return `${formattedHour}:${m} ${suffix}`;
    };

    return (
        <div className="card" style={{ maxWidth: 520, margin: "auto" }}>
            <h2>Create Booking</h2>
            <p className="subtitle">Fill in details to create a booking</p>

            <form className="form" onSubmit={handleSubmit}>
                <input
                    className="input"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <input
                    className="input"
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                />

                <div className="time-row">
                    <input
                        className="input"
                        type="time"
                        name="from"
                        value={form.from}
                        onChange={handleChange}
                        required
                    />
                    <span className="time-separator"> to </span>
                    <input
                        className="input"
                        type="time"
                        name="to"
                        value={form.to}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button className="primary-btn" disabled={loading}>
                    {loading ? "Creating..." : "Create Booking"}
                </button>
            </form>

            {message && <p className="subtitle" style={{ textAlign: "center" }}>{message}</p>}
        </div>
    );
}
