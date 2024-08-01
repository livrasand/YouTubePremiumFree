// ==UserScript==
// @name         YouTube Premium Free
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Get YouTube Premium in your browser totally free
// @author       Livrädo Sandoval
// @match        *://www.youtube.com/*
// @icon         https://www.youtube.com/s/desktop/4905988d/img/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Configuration
    const adblocker = true;
    const fixTimestamps = false;

    // SVG logo code
    const customLogoSVG = `
         <svg version="1.1" id="SVGRoot" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 388.8 79.8" style="enable-background:new 0 0 388.8 79.8" xml:space="preserve"><style type="text/css">.st0{fill:red}.st1{fill:#fff}</style><path id="path6" class="st0" d="M111.7,12.5c-1.3-4.9-5.2-8.8-10.1-10.1C92.7,0,57,0,57,0S21.4,0,12.5,2.4C7.5,3.7,3.7,7.5,2.4,12.5
    C0,21.4,0,39.9,0,39.9s0,18.6,2.4,27.5c1.3,4.9,5.2,8.8,10.1,10.1c8.9,2.4,44.6,2.4,44.6,2.4s35.7,0,44.6-2.4
    c4.9-1.3,8.8-5.2,10.1-10.1c2.4-8.9,2.4-27.5,2.4-27.5S114.1,21.4,111.7,12.5z"/><path id="path8" class="st1" d="M45.6,57l29.6-17.1L45.6,22.8V57z"/><path id="path10" d="M164.7,25.3v2.8c0,13.8-6.1,21.9-19.5,21.9h-2v24.1h-10.9V5.7h13.9C158.9,5.7,164.7,11.1,164.7,25.3z
     M153.2,26.3c0-9.9-1.8-12.3-8-12.3h-2v27.8h1.9c5.9,0,8.2-4.2,8.2-13.5L153.2,26.3z M190.6,23.3l-0.6,13c-4.6-1-8.5-0.2-10.2,2.8
    v35.1H169v-50h8.6l1,10.8h0.4c1.1-7.9,4.8-11.9,9.5-11.9C189.2,23.1,189.9,23.1,190.6,23.3L190.6,23.3z M203.1,52.9v2.5
    c0,8.8,0.5,11.8,4.2,11.8c3.6,0,4.4-2.8,4.5-8.5l9.7,0.6c0.7,10.8-4.9,15.6-14.4,15.6c-11.6,0-15-7.6-15-21.4v-8.7
    c0-14.5,3.8-21.6,15.3-21.6c11.6,0,14.5,6,14.5,21.1v8.6H203.1z M203.1,42.6v3.6h8.2v-3.6c0-9.2-0.7-11.8-4.1-11.8
    C203.7,30.8,203.1,33.5,203.1,42.6L203.1,42.6z M277.9,36.3v37.8h-11.2V37.2c0-4.1-1.1-6.1-3.5-6.1c-2.5,0-3.8,2.3-3.8,6.9v35.9
    h-11.2V37.2c0-4.1-1.1-6.1-3.5-6.1c-2.4,0-3.7,2.3-3.7,6.9v35.9H229V24.4h8.4l0.6,6.9h0.4c2-4.7,5.5-7.5,10.3-7.5
    c4.3,0,7.9,2.4,9.3,6.3c1.5-4.3,5.6-6.3,10.1-6.3C274.7,23.8,277.9,28.6,277.9,36.3L277.9,36.3z M337.1,64.1
    c-3.4,5.6-8.5,8.2-15.8,8.2c-11.5,0-16-7.4-16-21.2v-8.6c0-13.6,4.8-21.1,15.7-21.1c11,0,15.4,7.4,15.4,21.1v4.8h-20.3v4.7
    c0,8.5,1.1,11.6,4.5,11.6c2.9,0,4-1.6,4.4-6.1l9.5,1.1C338.5,55.4,337.9,60.2,337.1,64.1z M316.3,35.7h10.4v-2.5
    c0-6.3-1-8.8-4.2-8.8C317.2,24.3,316.3,27,316.3,35.7L316.3,35.7z M293.5,53.5h-10.4V77h-11.2V23.8h21.6c9.7,0,14,4.7,14,14.2
    c0,8-3.2,12.6-9.6,13.9l11.3,24.9h-12.2L293.5,53.5z M298.1,44.2c2.9,0,4.6-2.1,4.6-7.7c0-5.5-1.7-7.6-4.6-7.6h-9.2v15.3H298.1z
     M388.8,25.3v2.8c0,13.8-6.1,21.9-19.5,21.9h-2v24.1h-10.9V5.7h13.9C383,5.7,388.8,11.1,388.8,25.3z M377.2,26.3
    c0-9.9-1.8-12.3-8-12.3h-2v27.8h1.9c5.9,0,8.2-4.2,8.2-13.5L377.2,26.3z"/></svg>
    `;

    // Initial setup
    if (adblocker) removeAds();
    changeTitle();
    observeLogo();

    // Function to change the title
    function changeTitle() {
        if (document.title !== "YouTube Premium") {
            document.title = "YouTube Premium";
        }
    }

    // Monitor for changes in the title and change it when it does
    var titleObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.target.nodeName === 'TITLE') {
                changeTitle();
            }
        });
    });

    // Start observing the title element if it exists
    var titleElement = document.querySelector('title');
    if (titleElement) {
        titleObserver.observe(titleElement, { childList: true });
    }

    // Monitor for changes in the URL (e.g., navigating to a different video)
    function onLocationChange() {
        changeTitle();
        replaceLogo(); // Ensure logo is updated on URL change
    }

    // Observe changes to the history API (for URL changes)
    window.addEventListener('popstate', onLocationChange);
    window.addEventListener('pushstate', onLocationChange);
    window.addEventListener('replacestate', onLocationChange);

    // Override history methods to detect URL changes
    const originalPushState = history.pushState;
    history.pushState = function() {
        originalPushState.apply(this, arguments);
        window.dispatchEvent(new Event('pushstate'));
    };

    const originalReplaceState = history.replaceState;
    history.replaceState = function() {
        originalReplaceState.apply(this, arguments);
        window.dispatchEvent(new Event('replacestate'));
    };

    function removeAds() {
        console.log("removeAds()");

        setInterval(() => {
            // Remove page ads
            removePageAds();

            // Skip YouTube shorts
            if (window.location.href.includes("shorts")) {
                console.log("Youtube shorts detected, ignoring...");
                return;
            }

            // Remove video ads
            var video = document.querySelector('video');
            if (video) {
                video.volume = 0;
                video.pause();
                video.remove();
            }

            clearAllPlayers();
            removeErrorScreen();

        }, 500);
    }

    function removePageAds() {
        const style = document.createElement('style');
        style.textContent = `
            ytd-action-companion-ad-renderer,
            ytd-display-ad-renderer,
            ytd-video-masthead-ad-advertiser-info-renderer,
            ytd-video-masthead-ad-primary-video-renderer,
            ytd-in-feed-ad-layout-renderer,
            ytd-ad-slot-renderer,
            yt-about-this-ad-renderer,
            yt-mealbar-promo-renderer,
            ytd-statement-banner-renderer,
            #masthead-ad {
                display: none !important;
            }
        `;
        document.head.appendChild(style);
        console.log("Removed page ads (✔️)");
    }

    function clearAllPlayers() {
        const videoPlayerElements = document.querySelectorAll('.html5-video-player');
        if (videoPlayerElements.length === 0) {
            console.error("No elements with class 'html5-video-player' found.");
            return false;
        }

        videoPlayerElements.forEach(videoPlayerElement => {
            const iframes = videoPlayerElement.querySelectorAll('iframe');
            iframes.forEach(iframe => iframe.remove());
        });

        console.log("Removed all current players!");
        return true;
    }

    function removeErrorScreen() {
        let errorScreen = document.querySelector("#error-screen");
        if (errorScreen) {
            errorScreen.remove();
        }
    }

    // Function to observe changes in the DOM and replace the logo when it's available
    function observeLogo() {
        const logoObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                const logoContainer = document.querySelector('#logo-icon-container');
                if (logoContainer) {
                    replaceLogo();
                    logoObserver.disconnect(); // Stop observing once the logo is replaced
                }
            });
        });

        // Start observing the body for changes
        logoObserver.observe(document.body, { childList: true, subtree: true });
    }

    // Function to replace the YouTube logo
    function replaceLogo() {
        const style = document.createElement('style');
        style.textContent = `
            #logo-icon-container {
                background: url('data:image/svg+xml;base64,${btoa(customLogoSVG)}') no-repeat center center;
                background-size: contain;
                width: 100px; /* Adjust width as needed */
                height: 30px; /* Adjust height as needed */
            }
        `;
        document.head.appendChild(style);
    }

})();

