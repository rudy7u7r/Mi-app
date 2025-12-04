const map = L.map('map').setView([-33.45, -70.66], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

const puntos = [
    { lat: -33.450, lng: -70.665, nombre: "Punto Plaza" },
    { lat: -33.453, lng: -70.660, nombre: "Punto Parque" },
    { lat: -33.447, lng: -70.670, nombre: "Punto Metro" }
];

puntos.forEach(p => {
    const marker = L.marker([p.lat, p.lng]).addTo(map);

    marker.bindPopup(`
        <b>${p.nombre}</b><br>
        ¿Cuánta basura botaste?<br>
        <input id="basura-${p.lat}" type="number" min="0" placeholder="Kg"><br>
        <button onclick="guardarBasura(${p.lat}, ${p.lng})">Guardar</button>
    `);
});

window.guardarBasura = function(lat, lng){
    const input = document.getElementById(`basura-${lat}`);
    const valor = input.value;

    if(valor === ""){
        alert("Ingresa una cantidad.");
        return;
    }

    console.log("Guardado:", { lat, lng, basuraKg: valor });

    alert("Registro guardado con éxito.");
};