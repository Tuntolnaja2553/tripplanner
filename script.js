let places = [];
let totalCost = 0;

function createTrip() {

    const tripName = document.getElementById("tripName").value;
    const location = document.getElementById("location").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    if (!tripName || !location || !startDate || !endDate) {
        alert("กรุณากรอกข้อมูลให้ครบ");
        return;
    }

    document.getElementById("displayTripName").textContent = tripName;
    document.getElementById("displayLocation").textContent =
        "📍 " + location;

    document.getElementById("displayDate").textContent =
        "📅 " + startDate + " → " + endDate;

    document.getElementById("tripSection").classList.remove("hidden");
}


function addPlace() {

    const name = document.getElementById("placeName").value;
    const time = document.getElementById("placeTime").value;
    const cost =
        Number(document.getElementById("placeCost").value) || 0;
    const note = document.getElementById("placeNote").value;

    if (!name) {
        alert("กรุณาใส่ชื่อสถานที่");
        return;
    }

    places.push({
        name: name,
        time: time,
        cost: cost,
        note: note
    });

    totalCost += cost;

    document.getElementById("totalCost").textContent =
        totalCost.toLocaleString() + " บาท";

    document.getElementById("placeCount").textContent =
        places.length + " สถานที่";

    displayPlaces();

    document.getElementById("placeName").value = "";
    document.getElementById("placeTime").value = "";
    document.getElementById("placeCost").value = "";
    document.getElementById("placeNote").value = "";
}


function displayPlaces() {

    const list = document.getElementById("placeList");

    list.innerHTML = "";

    places.forEach((place, index) => {

        const card = document.createElement("div");

        card.className = "place-card";

        card.innerHTML = `
            <h3>${index + 1}. ${place.name}</h3>
            <p>🕐 เวลา: ${place.time || "ไม่ได้ระบุ"}</p>
            <p>💰 ค่าใช้จ่าย: ${place.cost.toLocaleString()} บาท</p>
            <p>📝 ${place.note || "ไม่มีรายละเอียด"}</p>
        `;

        list.appendChild(card);
    });
}