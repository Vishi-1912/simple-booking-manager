import { useState } from "react";

export default function CreateBooking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    slot: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setMessage("✅ Booking created successfully");
      setForm({ name: "", email: "", date: "", slot: "" });
      setLoading(false);
    }, 800);
  };

  return (
    <div className="card" style={{ maxWidth: 520, margin: "auto" }}>
      <h2>Create Booking</h2>
      <p className="subtitle">Fill in details to create a booking</p>

      <form className="form" onSubmit={handleSubmit}>
        {["name", "email", "date", "slot"].map((field) => (
          <input
            key={field}
            className="input"
            type={field === "date" ? "date" : field === "email" ? "email" : "text"}
            name={field}
            value={(form as any)[field]}
            placeholder={
              field === "slot"
                ? "Time Slot (10AM – 11AM)"
                : field[0].toUpperCase() + field.slice(1)
            }
            onChange={handleChange}
            required
          />
        ))}

        <button className="primary-btn" disabled={loading}>
          {loading ? "Creating..." : "Create Booking"}
        </button>
      </form>

      {message && <p className="subtitle" style={{ textAlign: "center" }}>{message}</p>}
    </div>
  );
}
