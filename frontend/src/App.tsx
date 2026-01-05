import { useState } from "react";
import BookingList from "./pages/BookingList";
import CreateBooking from "./pages/CreateBooking";

export default function App() {
  const [page, setPage] = useState<"list" | "create">("list");

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-inner">
          <div className="logo">📅 Simple Booking Manager</div>

          <div className="nav-actions">
            <button
              className={`nav-btn ${page === "list" ? "active" : ""}`}
              onClick={() => setPage("list")}
            >
              Booking List
            </button>
            <button
              className={`nav-btn ${page === "create" ? "active" : ""}`}
              onClick={() => setPage("create")}
            >
              Create Booking
            </button>
          </div>
        </div>
      </nav>

      <main className="main">
        {page === "list" ? <BookingList /> : <CreateBooking />}
      </main>
    </div>
  );
}
