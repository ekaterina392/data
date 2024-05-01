// Function to fetch live traffic camera data from the proxy server
async function fetchTrafficCameras() {
    try {
        const response = await fetch('http://localhost:3000/traffic-cameras');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching traffic cameras:', error);
        throw error;
    }
}

// Function to display traffic cameras on the webpage
async function displayCameras() {
    const cameraContainer = document.getElementById("camera-container");

    try {
        const cameraData = await fetchTrafficCameras();
        const cameras = cameraData.Items;

        cameras.forEach(camera => {
            const cameraElement = document.createElement("div");
            cameraElement.classList.add("camera");

            const imgElement = document.createElement("img");
            imgElement.src = camera.ImageUrl;
            imgElement.alt = camera.Description;

            cameraElement.appendChild(imgElement);
            cameraContainer.appendChild(cameraElement);
        });
    } catch (error) {
        console.error('Error fetching and displaying traffic cameras:', error);
    }
}

// Call the function to display traffic cameras when the page loads
window.onload = displayCameras;
