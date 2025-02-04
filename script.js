document.getElementById("getLocationBtn").addEventListener("click", getLocation);

function getLocation() {
    let output = document.getElementById("output");
    output.innerHTML = "⏳ Getting location...";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        output.innerHTML = "❌ Geolocation is not supported by your browser.";
    }
}

function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    document.getElementById("output").innerHTML = 
        `📍 Latitude: <b>${latitude}</b> <br> 📍 Longitude: <b>${longitude}</b>`;
}

function showError(error) {
    let output = document.getElementById("output");
    switch (error.code) {
        case error.PERMISSION_DENIED:
            output.innerHTML = "❌ User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            output.innerHTML = "⚠️ Location information is unavailable.";
            break;
        case error.TIMEOUT:
            output.innerHTML = "⏳ The request to get user location timed out.";
            break;
        default:
            output.innerHTML = "❌ An unknown error occurred.";
            break;
    }
}
