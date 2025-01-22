(function() {
    'use strict';

    let timeoutId; // To handle the timer globally
    let lastVideoDuration = ''; // To avoid resetting the timer on the same video

    // Function to convert duration from "min:sec" to milliseconds
    function convertTimeToMs(timeStr) {
        const [minutes, seconds] = timeStr.split(':').map(Number);
        return (minutes * 60 + seconds) * 1000;
    }

    // Function to simulate a click on the "Next" button
    function clickNextButton() {
        const nextButton = document.querySelector('.ytp-next-button.ytp-button');

        if (nextButton) {
            nextButton.click();
            console.log('The "Next" button was clicked automatically.');
        } else {
            console.log('The "Next" button was not found.');
        }
    }

    // Function to calculate video duration and set the timer
    function setupAutoNext() {
        const timeDisplay = document.querySelector('.ytp-time-display.notranslate');

        if (timeDisplay) {
            const timeDuration = timeDisplay.querySelector('.ytp-time-duration');

            if (timeDuration) {
                const videoDuration = timeDuration.textContent;
                const durationInMs = convertTimeToMs(videoDuration);

                // Filter out videos shorter than 30 seconds
                if (durationInMs <= 30000) {
                    console.log('The video is shorter than 30 seconds. Auto-next will not be activated.');
                    return;
                }

                // If it's a new video, set up the timer
                if (videoDuration !== lastVideoDuration) {
                    lastVideoDuration = videoDuration; // Update the detected duration

                    console.log('Detected video duration:', videoDuration, `(in milliseconds: ${durationInMs} ms)`);

                    // Cancel any previous timer
                    clearTimeout(timeoutId);

                    // Set a new timer to click the button when the video ends
                    timeoutId = setTimeout(() => {
                        console.log('The video has ended. Clicking the "Next" button.');
                        clickNextButton();
                    }, durationInMs);
                } else {
                    console.log('The timer is already set for this video.');
                }
            } else {
                console.log('The element with the video duration was not found.');
            }
        } else {
            console.log('The video time container was not found.');
        }
    }

    // Set everything up when the page loads
    document.addEventListener('DOMContentLoaded', () => {
        setupAutoNext();
    });

    // Periodic setup to adapt to dynamic changes
    const observer = new MutationObserver(() => {
        setupAutoNext();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
