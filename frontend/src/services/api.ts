import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

export async function createBooking(data: any) {
    try {
        const response = await axios.post(
            `${API}/api/bookings`,
            data,
        );
        return response?.data;
    } catch (error: any) {
        throw error?.response?.data;
    }
}

export async function getBookings() {
    try {
        const response = await axios.get(`${API}/api/bookings`);
        return response?.data;
    } catch (error: any) {
        throw error?.response?.data;
    }
}
