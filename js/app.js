import { initMap, getLocations } from './map.js';
import { createTrip, getTrip } from './api.js';

initMap();

document.getElementById("createTripBtn").onclick = async () => {

    const { pickup, drop } = getLocations();

    if (!pickup || !drop) {
        alert("Select pickup & drop");
        return;
    }

    const trip = await createTrip(pickup, drop);

    startPolling(trip.id);
};

function startPolling(tripId) {
    const statusDiv = document.getElementById("status");

    const interval = setInterval(async () => {
        const trip = await getTrip(tripId);

        statusDiv.innerText = trip.status;

        if (trip.status === "COMPLETED") {
            clearInterval(interval);
        }
    }, 3000);
}