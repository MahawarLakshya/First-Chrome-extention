document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const currentSpeedDisplay = document.getElementById('currentSpeed');
    // Set initial playback speed
    let initialSpeed = parseFloat(slider.value);
    currentSpeedDisplay.textContent = slider.value;

    // Function to update video playback speed
    function updateSpeed(speed) {
        const videos = document.getElementsByTagName("video");
        for (let i = 0; i < videos.length; i++) {
            videos[i].playbackRate = speed;
        }
        currentSpeedDisplay.textContent = `${speed}x`;
    }



    // Event listener for slider input
    slider.addEventListener('input', function() {
        let speed = parseFloat(this.value);
        updateSpeed(speed);
    });



    // Call updateSpeed with initial value
    updateSpeed(initialSpeed);
});