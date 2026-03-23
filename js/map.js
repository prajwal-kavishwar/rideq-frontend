let map;
let pickup = null;
let drop = null;

let pickupMarker;
let dropMarker;

export function initMap() {
    map = L.map('map').setView([23.2599, 77.4126], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'OSM'
    }).addTo(map);

    map.on('click', (e) => {
        const { lat, lng } = e.latlng;

        if (!pickup) {
            pickup = { lat, lng };
            pickupMarker = L.marker([lat, lng]).addTo(map);
        } else if (!drop) {
            drop = { lat, lng };
            dropMarker = L.marker([lat, lng]).addTo(map);
        }
    });
}

export function getLocations() {
    return { pickup, drop };
}