const BASE_URL = "http://localhost:9090/api";

export async function login(email, password) {
    const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    return res.json();
}

export async function createTrip(pickup, drop) {
    const token = localStorage.getItem("token");

    const res = await fetch(`${BASE_URL}/trips`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            pickupLocation: {
                latitude: pickup.lat,
                longitude: pickup.lng
            },
            dropLocation: {
                latitude: drop.lat,
                longitude: drop.lng
            }
        })
    });

    return res.json();
}

export async function getTrip(tripId) {
    const token = localStorage.getItem("token");

    const res = await fetch(`${BASE_URL}/trips/${tripId}/detail`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    return res.json();
}

export async function setDriverLocation(lat, lng) {
    const token = localStorage.getItem("token");

    const res = await fetch(`${BASE_URL}/drivers/location`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            latitude: lat,
            longitude: lng
        })
    });

    return res.json();
}