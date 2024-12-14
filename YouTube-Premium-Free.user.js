// ==UserScript==
// @name         YouTube Premium Free
// @namespace    http://tampermonkey.net/
// @version      1.3.0
// @description  Get YouTube Premium in your browser totally free
// @author       Livrädo Sandoval
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Configuration
    const adblocker = true;
    const fixTimestamps = false;
    const removePopup = false;
    const debugMessages = true;

    let currentUrl = window.location.href;
    let isVideoPlayerModified = false;

    // Initial setup
    if (adblocker) removeAds();
    if (removePopup) popupRemover();
    changeTitle();
    changeLogo();

    // Function to change the title
    function changeTitle() {
        if (document.title !== "YouTube Premium") {
            document.title = "YouTube Premium";
        }
    }

    // Monitor for changes in the title and change it when it does
    const titleObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.target.nodeName === 'TITLE') {
                changeTitle();
            }
        });
    });

    // Start observing the title element if it exists
    const titleElement = document.querySelector('title');
    if (titleElement) {
        titleObserver.observe(titleElement, { childList: true });
    }

    // Monitor for changes in the URL (e.g., navigating to a different video)
    function onLocationChange() {
        changeTitle();
        changeLogo();
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

    // Function to change the logo
    function changeLogo() {
        var part1 = `<nice-logo id="owo" class="style-scope ytd-topbar-logo-renderer"><svg viewBox="0 0 97 20" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g viewBox="0 0 97 20" preserveAspectRatio="xMidYMid meet" class="style-scope yt-icon"><g class="style-scope yt-icon"> <path d="M27.9704 3.12324C27.6411 1.89323 26.6745 0.926623 25.4445 0.597366C23.2173 2.24288e-07 14.2827 0 14.2827 0C14.2827 0 5.34807 2.24288e-07 3.12088 0.597366C1.89323 0.926623 0.924271 1.89323 0.595014 3.12324C-2.8036e-07 5.35042 0 10 0 10C0 10 -1.57002e-06 14.6496 0.597364 16.8768C0.926621 18.1068 1.89323 19.0734 3.12324 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6769 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9704 3.12324Z" fill="#FF0000" class="style-scope yt-icon"></path> <path d="M11.4275 14.2854L18.8475 10.0004L11.4275 5.71533V14.2854Z" fill="white" class="style-scope yt-icon"></path></g><g id="youtube-red-paths" class="style-scope yt-icon"><path d="M40.0566 6.34524V7.03668C40.0566 10.4915 38.5255 12.5118 35.1742 12.5118H34.6638V18.5583H31.9263V1.42285H35.414C38.6078 1.42285 40.0566 2.7728 40.0566 6.34524ZM37.1779 6.59218C37.1779 4.09924 36.7287 3.50658 35.1765 3.50658H34.6662V10.4727H35.1365C36.6064 10.4727 37.1803 9.40968 37.1803 7.10253L37.1779 6.59218Z" class="style-scope yt-icon"></path><path d="M46.5336 5.8345L46.3901 9.08238C45.2259 8.83779 44.264 9.02123 43.836 9.77382V18.5579H41.1196V6.0391H43.2857L43.5303 8.75312H43.6337C43.9183 6.77288 44.8379 5.771 46.0232 5.771C46.1949 5.7757 46.3666 5.79687 46.5336 5.8345Z" class="style-scope yt-icon"></path><path d="M49.6567 13.2456V13.8782C49.6567 16.0842 49.779 16.8415 50.7198 16.8415C51.6182 16.8415 51.8228 16.1501 51.8439 14.7178L54.2734 14.8613C54.4568 17.5565 53.0481 18.763 50.6586 18.763C47.7588 18.763 46.9004 16.8627 46.9004 13.4126V11.223C46.9004 7.58707 47.8599 5.80908 50.7409 5.80908C53.6407 5.80908 54.3769 7.32131 54.3769 11.0984V13.2456H49.6567ZM49.6567 10.6703V11.5687H51.7193V10.675C51.7193 8.37258 51.5547 7.71172 50.6821 7.71172C49.8096 7.71172 49.6567 8.38669 49.6567 10.675V10.6703Z" class="style-scope yt-icon"></path>`
        var part2 = `<path d="M68.4103 9.09902V18.5557H65.5928V9.30834C65.5928 8.28764 65.327 7.77729 64.7132 7.77729C64.2216 7.77729 63.7724 8.06186 63.4667 8.59338C63.4832 8.76271 63.4902 8.93439 63.4879 9.10373V18.5605H60.668V9.30834C60.668 8.28764 60.4022 7.77729 59.7884 7.77729C59.2969 7.77729 58.8665 8.06186 58.5631 8.57456V18.5628H55.7456V6.03929H57.9728L58.2221 7.63383H58.2621C58.8947 6.42969 59.9178 5.77588 61.1219 5.77588C62.3072 5.77588 62.9799 6.36854 63.288 7.43157C63.9418 6.34973 64.9225 5.77588 66.0443 5.77588C67.7564 5.77588 68.4103 7.00119 68.4103 9.09902Z" class="style-scope yt-icon"></path><path d="M69.8191 2.8338C69.8191 1.4862 70.3106 1.09814 71.3501 1.09814C72.4132 1.09814 72.8812 1.54734 72.8812 2.8338C72.8812 4.22373 72.4108 4.57181 71.3501 4.57181C70.3106 4.56945 69.8191 4.22138 69.8191 2.8338ZM69.9837 6.03935H72.6789V18.5629H69.9837V6.03935Z" class="style-scope yt-icon"></path><path d="M81.891 6.03955V18.5631H79.6849L79.4403 17.032H79.3792C78.7466 18.2573 77.827 18.7677 76.684 18.7677C75.0095 18.7677 74.2522 17.7046 74.2522 15.3975V6.0419H77.0697V15.2352C77.0697 16.3382 77.3002 16.7874 77.867 16.7874C78.3844 16.7663 78.8477 16.4582 79.0688 15.9902V6.0419H81.891V6.03955Z" class="style-scope yt-icon"></path><path d="M96.1901 9.09893V18.5557H93.3726V9.30825C93.3726 8.28755 93.1068 7.7772 92.493 7.7772C92.0015 7.7772 91.5523 8.06177 91.2465 8.59329C91.263 8.76027 91.2701 8.9296 91.2677 9.09893V18.5557H88.4502V9.30825C88.4502 8.28755 88.1845 7.7772 87.5706 7.7772C87.0791 7.7772 86.6487 8.06177 86.3453 8.57447V18.5627H83.5278V6.0392H85.7527L85.9973 7.63139H86.0372C86.6699 6.42725 87.6929 5.77344 88.8971 5.77344C90.0824 5.77344 90.755 6.3661 91.0631 7.42913C91.7169 6.34729 92.6976 5.77344 93.8194 5.77344C95.541 5.77579 96.1901 7.0011 96.1901 9.09893Z" class="style-scope yt-icon"></path><path d="M40.0566 6.34524V7.03668C40.0566 10.4915 38.5255 12.5118 35.1742 12.5118H34.6638V18.5583H31.9263V1.42285H35.414C38.6078 1.42285 40.0566 2.7728 40.0566 6.34524ZM37.1779 6.59218C37.1779 4.09924 36.7287 3.50658 35.1765 3.50658H34.6662V10.4727H35.1365C36.6064 10.4727 37.1803 9.40968 37.1803 7.10253L37.1779 6.59218Z" class="style-scope yt-icon"></path></g></g></svg></nice-logo>`
        document.querySelector("#logo-icon").innerHTML = part1 + " " + part2;
    }

    function popupRemover() {

        setInterval(() => {
            const modalOverlay = document.querySelector("tp-yt-iron-overlay-backdrop");
            const popup = document.querySelector(".style-scope ytd-enforcement-message-view-model");
            const popupButton = document.getElementById("dismiss-button");

            var video = document.querySelector('video');

            const bodyStyle = document.body.style;
            bodyStyle.setProperty('overflow-y', 'auto', 'important');

            if (modalOverlay) {
                modalOverlay.removeAttribute("opened");
                modalOverlay.remove();
            }

            if (popup) {
                console.log("Popup detected, removing...");

                if(popupButton) popupButton.click();

                popup.remove();
                video.play();

                setTimeout(() => {
                    video.play();
                }, 500);

                console.log("Popup removed");
            }
            // Check if the video is paused after removing the popup
            if (!video.paused) return;
            // UnPause The Video
            video.play();

        }, 1000);
    }

    function removeAds() {
        console.log("removeAds()");

        setInterval(() => {

            if (window.location.href !== currentUrl) {
                currentUrl = window.location.href;
                isVideoPlayerModified = false;
                clearAllPlayers();
                removePageAds();
            }

            // Fix for youtube shorts
            if (window.location.href.includes("shorts")) {
                console.log("Youtube shorts detected, ignoring...");
                return;
            }

            if (isVideoPlayerModified){
                removeAllDuplicateVideos();
                return;
            }

            console.log("Video replacement started!");

            var video = document.querySelector('video');
            if (video) video.volume = 0;
            if (video) video.pause();
            if (video) video.remove();


            if (!clearAllPlayers()) {
                return;
            }

            let errorScreen = document.querySelector("#error-screen");
            if (errorScreen) {
                errorScreen.remove();
            }


            let videoID = '';
            let playList = '';
            let timeStamp = '';
            const url = new URL(window.location.href);
            const urlParams = new URLSearchParams(url.search);

            if (urlParams.has('v')) {
                videoID = urlParams.get('v');
            } else {
                const pathSegments = url.pathname.split('/');
                const liveIndex = pathSegments.indexOf('live');
                if (liveIndex !== -1 && liveIndex + 1 < pathSegments.length) {
                    videoID = pathSegments[liveIndex + 1];
                }
            }

            if (urlParams.has('list')) {
                playList = "&listType=playlist&list=" + urlParams.get('list');
            }

            if (urlParams.has('t')) {
                timeStamp = "&start=" + urlParams.get('t').replace('s', '');
            }

            if (!videoID) {
                console.log("YouTube video URL not found.", "e");
                return null;
            }

            console.log("Video ID: " + videoID);

            const startOfUrl = "https://www.youtube-nocookie.com/embed/";

            const endOfUrl = "?autoplay=1&modestbranding=1&rel=0";
            const finalUrl = startOfUrl + videoID + endOfUrl;


            const iframe = document.createElement('iframe');

            iframe.setAttribute('src', finalUrl);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
            iframe.setAttribute('allowfullscreen', true);
            iframe.setAttribute('mozallowfullscreen', "mozallowfullscreen");
            iframe.setAttribute('msallowfullscreen', "msallowfullscreen");
            iframe.setAttribute('oallowfullscreen', "oallowfullscreen");
            iframe.setAttribute('webkitallowfullscreen', "webkitallowfullscreen");

            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.position = 'absolute';
            iframe.style.top = '0';
            iframe.style.left = '0';
            iframe.style.zIndex = '9999';
            iframe.style.pointerEvents = 'all';

            const videoPlayerElement = document.querySelector('.html5-video-player');
            videoPlayerElement.appendChild(iframe);
            console.log("Finished");

            isVideoPlayerModified = true;
        }, 500);
        removePageAds();
    }

    function removeAllDuplicateVideos() {
        const videos = document.querySelectorAll('video');

        videos.forEach(video => {
            if (video.src.includes('www.youtube.com')) {
                video.muted = true;
                video.pause();
                video.addEventListener('volumechange', function() {
                    if (!video.muted) {
                        video.muted = true;
                        video.pause();
                        console.log("Video unmuted detected and remuted");
                    }
                });
                video.addEventListener('play', function() {
                    video.pause();
                    console.log("Video play detected and repaused");
                });

                console.log("Duplicate video found and muted");
            }
        });
    }

    function clearAllPlayers() {

        const videoPlayerElements = document.querySelectorAll('.html5-video-player');

        if (videoPlayerElements.length === 0) {
            console.error("No elements with class 'html5-video-player' found.");
            return false;
        }

        videoPlayerElements.forEach(videoPlayerElement => {
            const iframes = videoPlayerElement.querySelectorAll('iframe');
            iframes.forEach(iframe => {
                iframe.remove();
            });
        });

        console.log("Removed all current players!");
        return true;
    }

    //removes ads on the page (not video player ads)
    function removePageAds(){

        const sponsor = document.querySelectorAll("div#player-ads.style-scope.ytd-watch-flexy, div#panels.style-scope.ytd-watch-flexy");
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
            ytd-ad-slot-renderer,
            ytd-in-feed-ad-layout-renderer,
            ytd-banner-promo-renderer-background
            statement-banner-style-type-compact,
            .ytd-video-masthead-ad-v3-renderer,
            div#root.style-scope.ytd-display-ad-renderer.yt-simple-endpoint,
            div#sparkles-container.style-scope.ytd-promoted-sparkles-web-renderer,
            div#main-container.style-scope.ytd-promoted-video-renderer,
            div#player-ads.style-scope.ytd-watch-flexy,
            ad-slot-renderer,
            ytm-promoted-sparkles-web-renderer,
            masthead-ad,
            tp-yt-iron-overlay-backdrop,

            #masthead-ad {
                display: none !important;
            }
        `;

        document.head.appendChild(style);

        sponsor?.forEach((element) => {
            if (element.getAttribute("id") === "rendering-content") {
                element.childNodes?.forEach((childElement) => {
                    if (childElement?.data.targetId && childElement?.data.targetId !=="engagement-panel-macro-markers-description-chapters"){
                        //Skipping the Chapters section
                        element.style.display = 'none';
                    }
                });
            }
        });

        console.log("Removed page ads (✔️)");
    }

    function removeErrorScreen() {
        const errorScreen = document.querySelector("#error-screen");
        if (errorScreen) {
            errorScreen.remove();
        }
    }

    const DEBUG = false;

    const DEFAULT_SETTINGS = {
        targetResolution: "hd2160"
    };

    const resolutions = ['highres', 'hd2880', 'hd2160', 'hd1440', 'hd1080', 'hd720', 'large', 'medium', 'small', 'tiny', 'auto'];
    const quality = {
        highres: 4320,
        hd2880:  2880,
        hd2160:  2160,
        hd1440:  1440,
        hd1080:  1080,
        hd720:   720,
        large:   480,
        medium:  360,
        small:   240,
        tiny:    144,
        auto:    0
    };

    const qualityLevels = Object.fromEntries(
        Object.entries(quality).map(([key, value]) => [value, key])
    );

    let userSettings = { ...DEFAULT_SETTINGS };
    let menuCommandIds = [];

    let doc = document, win = window;
    let videoId = null;

    // --------------------
    // --- FUNCTIONS ------
    // --------------------

    function debugLog(message, shouldShow = true) {
        if (DEBUG && shouldShow) {
            console.log("YTHD DEBUG | " + message);
        }
    }

    // --------------------
    // Attempt to set the video resolution to target quality or the next best quality
    function setResolution(target, force = false) {
        if (target == 'auto') return;

        let ytPlayer = doc.getElementById("movie_player") || doc.getElementsByClassName("html5-video-player")[0];

        if (!isValidVideo(ytPlayer, force)) return;

        videoId = ytPlayer.getVideoData().video_id;

        let localItem = null;
        try {
            localStorage.getItem("yt-player-quality");
        } catch {
            debugLog("Fetching last used quality failed catastrophically. Likely the website is not YouTube. If website is YouTube then YouTube changed something.");
        }

        let availableQualities = ytPlayer.getAvailableQualityLevels();
        target = findNextAvailableQuality(target, availableQualities);

        let premiumIndicator = "Premium";
        let premiumData = ytPlayer.getAvailableQualityData().find(q => q.quality == target && q.qualityLabel.includes(premiumIndicator) && q.isPlayable);
        ytPlayer.setPlaybackQualityRange(target, target, premiumData?.formatId);
        debugLog("Set quality to: " + target + (premiumData ? " Premium" : ""));

        if (localItem){
            localStorage.setItem("yt-player-quality",localItem);
        }
        else {
            localStorage.removeItem("yt-player-quality");
        }
    }

    function isValidVideo(ytPlayer, force) {

        if (!ytPlayer?.getAvailableQualityLabels()[0]) {
            debugLog("Video data missing");
            videoId = null;
            return false;
        }

        if (window.location.href.startsWith("https://www.youtube.com/shorts/")) {
            debugLog("Skipping Youtube Shorts");
            videoId = null;
            return false;
        }

        if (videoId == ytPlayer.getVideoData().video_id && !force) {
            debugLog("Duplicate load");
            return false;
        }

        return true;
    }

    function findNextAvailableQuality(target, availableQualities) {
        const available = availableQualities.map(q => ({ quality: q, value: quality[q] }));
        const targetValue = quality[target];
        const smallerOrEqualQualities = available.filter(q => q.value <= targetValue);
        smallerOrEqualQualities.sort((a, b) => b.value - a.value);
        return smallerOrEqualQualities.length > 0 ? smallerOrEqualQualities[0].quality : 'auto';
    }

    // --------------------
    // Functions for the quality selection menu

    function createQualityMenu() {
        GM_registerMenuCommand("Set Preferred Quality (show/hide)", () => {
            menuCommandIds.length ? removeQualityMenuItems() : showQualityMenuItems();
        }, {
            autoClose: false
        });
    }

    function showQualityMenuItems() {
        removeQualityMenuItems();
        resolutions.forEach((resolution) => {
            let qualityText = (resolution === 'auto') ? 'auto' : quality[resolution] + "p";
            if (resolution === userSettings.targetResolution) {
                qualityText += " (selected)";
            }
            let menuCommandId = GM_registerMenuCommand(qualityText, () => {
                setSelectedResolution(resolution);
            }, {
                autoClose: false,
            });
            menuCommandIds.push(menuCommandId);
        });
    }

    function removeQualityMenuItems() {
        while (menuCommandIds.length) {
            GM_unregisterMenuCommand(menuCommandIds.pop());
        }
    }

    function setSelectedResolution(resolution) {
        if (userSettings.targetResolution == resolution) return;
        userSettings.targetResolution = resolution;
        GM.setValue('targetResolution', resolution);
        removeQualityMenuItems();
        showQualityMenuItems();
        setResolution(resolution, true);
    }

    // --------------------
    // Sync settings with locally stored values
    async function applySettings() {
        try {
            // Get all keys from GM
            const storedValues = await GM.listValues();

            // Write any missing key-value pairs from DEFAULT_SETTINGS to GM
            await Promise.all(Object.entries(DEFAULT_SETTINGS).map(async ([key, value]) => {
                if (!storedValues.includes(key)) {
                    await GM.setValue(key, value);
                }
            }));

            // Delete any extra keys in GM that are not in DEFAULT_SETTINGS
            await Promise.all(storedValues.map(async key => {
                if (!(key in DEFAULT_SETTINGS)) {
                    await GM.deleteValue(key);
                }
            }));

            // Retrieve and update user settings from GM
            await Promise.all(
                storedValues.map(key => GM.getValue(key).then(value => [key, value]))
            ).then(keyValuePairs => keyValuePairs.forEach(([newKey, newValue]) => {
                userSettings[newKey] = newValue;
            }));

            debugLog(Object.entries(userSettings).map(([key, value]) => key + ": " + value).join(", "));
        } catch (error) {
            debugLog("Error when applying settings: " + error.message);
        }
    }

    // --------------------
    // Main function
    function main() {
        if (win.self == win.top) { createQualityMenu(); }
        setResolution(userSettings.targetResolution);
        win.addEventListener('popstate', () => { videoId = null; });
        win.addEventListener("loadstart", () => { setResolution(userSettings.targetResolution); }, true);
    }

    // --------------------
    // Entry Point
    applySettings().then(main);
})();