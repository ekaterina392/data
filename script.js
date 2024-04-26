// script.js
const cameraGrid = document.getElementById('camera-grid');

// Function to fetch data from the public cameras API
async function fetchCameras() {
    try {
        const response = await fetch('YOUR_API_ENDPOINT');
        const data = await response.json();
        return data; // Assuming the API returns an array of camera objects
    } catch (error) {
        console.error('Error fetching cameras:', error);
    }
}

// Function to render cameras on the grid
async function renderCameras() {
    const cameras = await fetchCameras();
    if (cameras) {
        cameras.forEach(camera => {
            const cameraThumbnail = document.createElement('img');
            cameraThumbnail.src = camera.imageUrl; // Assuming each camera object has an 'imageUrl' property
            cameraThumbnail.alt = camera.name; // Assuming each camera object has a 'name' property
            cameraThumbnail.classList.add('camera-thumbnail');
            cameraGrid.appendChild(cameraThumbnail);
        });
    }
}

// Call renderCameras function when the page loads
window.onload = renderCameras;