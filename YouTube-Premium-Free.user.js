// ==UserScript==
// @name         YouTube Premium Free
// @namespace    http://tampermonkey.net/
// @version      1.4.0
// @description  Get YouTube Premium in your browser totally free
// @author       Livrädo Sandoval
// @match        *://*.youtube.com/*
// @match        *://www.youtube.com/*
// @match        *://m.youtube.com/*
// @match        *://www.youtube-nocookie.com/*
// @exclude      *://www.youtube.com/live_chat*
// @exclude      *://accounts.youtube.com/*
// @exclude      *://www.youtube.com/live_chat_replay*
// @exclude      *://www.youtube.com/persist_identity*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=YouTube.com
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @grant        GM.registerMenuCommand
// @grant        GM.unregisterMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    `use strict`;

    changeLogo();

    function onLocationChange() {
        changeTitle();
        changeLogo();
    }

    function changeLogo() {
        // Check if the logo element exists
        const logoElement = document.querySelector("#logo-icon");
        if (!logoElement) {
            if (debugMessages) console.log("Logo element not found!");
            return;
        }
    
        var part1 = `<nice-logo id="owo" class="style-scope ytd-topbar-logo-renderer"><svg viewBox="0 0 97 20" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g viewBox="0 0 97 20" preserveAspectRatio="xMidYMid meet" class="style-scope yt-icon"><g class="style-scope yt-icon"> <path d="M27.9704 3.12324C27.6411 1.89323 26.6745 0.926623 25.4445 0.597366C23.2173 2.24288e-07 14.2827 0 14.2827 0C14.2827 0 5.34807 2.24288e-07 3.12088 0.597366C1.89323 0.926623 0.924271 1.89323 0.595014 3.12324C-2.8036e-07 5.35042 0 10 0 10C0 10 -1.57002e-06 14.6496 0.597364 16.8768C0.926621 18.1068 1.89323 19.0734 3.12324 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6769 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9704 3.12324Z" fill="#FF0000" class="style-scope yt-icon"></path> <path d="M11.4275 14.2854L18.8475 10.0004L11.4275 5.71533V14.2854Z" fill="white" class="style-scope yt-icon"></path></g><g id="youtube-red-paths" class="style-scope yt-icon"><path d="M40.0566 6.34524V7.03668C40.0566 10.4915 38.5255 12.5118 35.1742 12.5118H34.6638V18.5583H31.9263V1.42285H35.414C38.6078 1.42285 40.0566 2.7728 40.0566 6.34524ZM37.1779 6.59218C37.1779 4.09924 36.7287 3.50658 35.1765 3.50658H34.6662V10.4727H35.1365C36.6064 10.4727 37.1803 9.40968 37.1803 7.10253L37.1779 6.59218Z" class="style-scope yt-icon"></path><path d="M46.5336 5.8345L46.3901 9.08238C45.2259 8.83779 44.264 9.02123 43.836 9.77382V18.5579H41.1196V6.0391H43.2857L43.5303 8.75312H43.6337C43.9183 6.77288 44.8379 5.771 46.0232 5.771C46.1949 5.7757 46.3666 5.79687 46.5336 5.8345Z" class="style-scope yt-icon"></path><path d="M49.6567 13.2456V13.8782C49.6567 16.0842 49.779 16.8415 50.7198 16.8415C51.6182 16.8415 51.8228 16.1501 51.8439 14.7178L54.2734 14.8613C54.4568 17.5565 53.0481 18.763 50.6586 18.763C47.7588 18.763 46.9004 16.8627 46.9004 13.4126V11.223C46.9004 7.58707 47.8599 5.80908 50.7409 5.80908C53.6407 5.80908 54.3769 7.32131 54.3769 11.0984V13.2456H49.6567ZM49.6567 10.6703V11.5687H51.7193V10.675C51.7193 8.37258 51.5547 7.71172 50.6821 7.71172C49.8096 7.71172 49.6567 8.38669 49.6567 10.675V10.6703Z" class="style-scope yt-icon"></path>`;
        var part2 = `<path d="M68.4103 9.09902V18.5557H65.5928V9.30834C65.5928 8.28764 65.327 7.77729 64.7132 7.77729C64.2216 7.77729 63.7724 8.06186 63.4667 8.59338C63.4832 8.76271 63.4902 8.93439 63.4879 9.10373V18.5605H60.668V9.30834C60.668 8.28764 60.4022 7.77729 59.7884 7.77729C59.2969 7.77729 58.8665 8.06186 58.5631 8.57456V18.5628H55.7456V6.03929H57.9728L58.2221 7.63383H58.2621C58.8947 6.42969 59.9178 5.77588 61.1219 5.77588C62.3072 5.77588 62.9799 6.36854 63.288 7.43157C63.9418 6.34973 64.9225 5.77588 66.0443 5.77588C67.7564 5.77588 68.4103 7.00119 68.4103 9.09902Z" class="style-scope yt-icon"></path><path d="M69.8191 2.8338C69.8191 1.4862 70.3106 1.09814 71.3501 1.09814C72.4132 1.09814 72.8812 1.54734 72.8812 2.8338C72.8812 4.22373 72.4108 4.57181 71.3501 4.57181C70.3106 4.56945 69.8191 4.22138 69.8191 2.8338ZM69.9837 6.03935H72.6789V18.5629H69.9837V6.03935Z" class="style-scope yt-icon"></path><path d="M81.891 6.03955V18.5631H79.6849L79.4403 17.032H79.3792C78.7466 18.2573 77.827 18.7677 76.684 18.7677C75.0095 18.7677 74.2522 17.7046 74.2522 15.3975V6.0419H77.0697V15.2352C77.0697 16.3382 77.3002 16.7874 77.867 16.7874C78.3844 16.7663 78.8477 16.4582 79.0688 15.9902V6.0419H81.891V6.03955Z" class="style-scope yt-icon"></path><path d="M96.1901 9.09893V18.5557H93.3726V9.30825C93.3726 8.28755 93.1068 7.7772 92.493 7.7772C92.0015 7.7772 91.5523 8.06177 91.2465 8.59329C91.263 8.76027 91.2701 8.9296 91.2677 9.09893V18.5557H88.4502V9.30825C88.4502 8.28755 88.1845 7.7772 87.5706 7.7772C87.0791 7.7772 86.6487 8.06177 86.3453 8.57447V18.5627H83.5278V6.0392H85.7527L85.9973 7.63139H86.0372C86.6699 6.42725 87.6929 5.77344 88.8971 5.77344C90.0824 5.77344 90.755 6.3661 91.0631 7.42913C91.7169 6.34729 92.6976 5.77344 93.8194 5.77344C95.541 5.77579 96.1901 7.0011 96.1901 9.09893Z" class="style-scope yt-icon"></path><path d="M40.0566 6.34524V7.03668C40.0566 10.4915 38.5255 12.5118 35.1742 12.5118H34.6638V18.5583H31.9263V1.42285H35.414C38.6078 1.42285 40.0566 2.7728 40.0566 6.34524ZM37.1779 6.59218C37.1779 4.09924 36.7287 3.50658 35.1765 3.50658H34.6662V10.4727H35.1365C36.6064 10.4727 37.1803 9.40968 37.1803 7.10253L37.1779 6.59218Z" class="style-scope yt-icon"></path></g></g></svg></nice-logo>`;
    
        logoElement.innerHTML = part1 + " " + part2;
    
        if (debugMessages) console.log("Logo changed successfully!");
    }

    // Configurar Trusted Types para evitar errores de 'TrustedHTML'
    if (window.trustedTypes && trustedTypes.createPolicy) {
        if (!trustedTypes.defaultPolicy) {
            const passThroughFn = (x) => x;
            trustedTypes.createPolicy('default', {
                createHTML: passThroughFn,
                createScriptURL: passThroughFn,
                createScript: passThroughFn,
            });
        }
    }

    let video;
    const cssSelectorArr = [
        `#masthead-ad`,
        `ytd-rich-item-renderer.style-scope.ytd-rich-grid-row #content:has(.ytd-display-ad-renderer)`,// Anuncios de video en la página de inicio.
        `.video-ads.ytp-ad-module`,// Anuncios en la parte inferior del reproductor.
        `tp-yt-paper-dialog:has(yt-mealbar-promo-renderer)`,// Anuncios de promoción de membresía en la página de reproducción.
        `ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-ads"]`,// Anuncios recomendados en la parte superior derecha de la página de reproducción.
        `#related #player-ads`,// Anuncios promocionales en el lado derecho de la sección de comentarios de la página de reproducción.
        `#related ytd-ad-slot-renderer`,// Anuncios de video en la sección de comentarios de la página de reproducción.
        `ytd-ad-slot-renderer`,// Anuncios en la página de búsqueda.
        `yt-mealbar-promo-renderer`,// Anuncios de recomendación de membresía en la página de reproducción.
        `ytd-popup-container:has(a[href="/premium"])`,// Anuncios de interceptación de membresía
        `ad-slot-renderer`,// Anuncios de recomendación de terceros en la página M
        `ytm-companion-ad-renderer`,// Enlace a anuncios de video que se pueden omitir en M
    ];
    window.dev=false;// Uso en desarrollo

    /**
    * Formatea la hora estándar
    * @param {Date} time Hora estándar
    * @param {String} format Formato
    * @return {String}
    */
    function moment(time) {
        // Obtiene año, mes, día, hora, minuto y segundo
        let y = time.getFullYear()
        let m = (time.getMonth() + 1).toString().padStart(2, `0`)
        let d = time.getDate().toString().padStart(2, `0`)
        let h = time.getHours().toString().padStart(2, `0`)
        let min = time.getMinutes().toString().padStart(2, `0`)
        let s = time.getSeconds().toString().padStart(2, `0`)
        return `${y}-${m}-${d} ${h}:${min}:${s}`
    }

    /**
    * Salida de información
    * @param {String} msg Información
    * @return {undefined}
    */
    function log(msg) {
        if(!window.dev){
            return false;
        }
        console.log(window.location.href);
        console.log(`${moment(new Date())}  ${msg}`);
    }

    /**
    * Establece la bandera de ejecución
    * @param {String} name
    * @return {undefined}
    */
    function setRunFlag(name){
        let style = document.createElement(`style`);
        style.id = name;
        (document.head || document.body).appendChild(style);// Adjunta el nodo al HTML.
    }

    /**
    * Obtiene la bandera de ejecución
    * @param {String} name
    * @return {undefined|Element}
    */
    function getRunFlag(name){
        return document.getElementById(name);
    }

    /**
    * Verifica si se ha establecido la bandera de ejecución
    * @param {String} name
    * @return {Boolean}
    */
    function checkRunFlag(name){
        if(getRunFlag(name)){
            return true;
        }else{
            setRunFlag(name)
            return false;
        }
    }

    /**
    * Genera el elemento de estilo CSS para eliminar anuncios y lo adjunta al nodo HTML
    * @param {String} styles Texto de estilo
    * @return {undefined}
    */
    function generateRemoveADHTMLElement(id) {
        // Si ya se ha establecido, salir.
        if (checkRunFlag(id)) {
            log(`El nodo de anuncios de la página ya ha sido generado`);
            return false
        }

        // Establece el estilo para eliminar anuncios.
        let style = document.createElement(`style`);// Crea el elemento de estilo.
        (document.head || document.body).appendChild(style);// Adjunta el nodo al HTML.
        style.appendChild(document.createTextNode(generateRemoveADCssText(cssSelectorArr)));// Adjunta el nodo de estilo al nodo del elemento.
        log(`Generación del nodo de anuncios de la página exitosa`);
    }

    /**
    * Genera el texto CSS para eliminar anuncios
    * @param {Array} cssSelectorArr Array de selectores CSS a establecer
    * @return {String}
    */
    function generateRemoveADCssText(cssSelectorArr){
        cssSelectorArr.forEach((selector,index)=>{
            cssSelectorArr[index]=`${selector}{display:none!important}`;// Recorre y establece el estilo.
        });
        return cssSelectorArr.join(` `);// Une en una cadena.
    }

    /**
    * Evento de toque
    * @return {undefined}
    */
    function nativeTouch(){
        // Crea un objeto Touch
        let touch = new Touch({
            identifier: Date.now(),
            target: this,
            clientX: 12,
            clientY: 34,
            radiusX: 56,
            radiusY: 78,
            rotationAngle: 0,
            force: 1
        });

        // Crea un objeto TouchEvent
        let touchStartEvent = new TouchEvent(`touchstart`, {
            bubbles: true,
            cancelable: true,
            view: window,
            touches: [touch],
            targetTouches: [touch],
            changedTouches: [touch]
        });

        // Despacha el evento touchstart al elemento objetivo
        this.dispatchEvent(touchStartEvent);

        // Crea un objeto TouchEvent
        let touchEndEvent = new TouchEvent(`touchend`, {
            bubbles: true,
            cancelable: true,
            view: window,
            touches: [],
            targetTouches: [],
            changedTouches: [touch]
        });

        // Despacha el evento touchend al elemento objetivo
        this.dispatchEvent(touchEndEvent);
    }


    /**
    * Obtiene el DOM
    * @return {undefined}
    */
    function getVideoDom(){
        video = document.querySelector(`.ad-showing video`) || document.querySelector(`video`);
    }


    /**
    * Reproducción automática
    * @return {undefined}
    */
    function playAfterAd(){
        if(video.paused && video.currentTime<1){
            video.play();
            log(`Reproducción automática del video`);
        }
    }


    /**
    * Elimina la ventana emergente de interceptación de anuncios de YT y cierra la capa de superposición
    * @return {undefined}
    */
    function closeOverlay(){
        // Elimina la ventana emergente de interceptación de anuncios de YT
        const premiumContainers = [...document.querySelectorAll(`ytd-popup-container`)];
        const matchingContainers = premiumContainers.filter(container => container.querySelector(`a[href="/premium"]`));

        if(matchingContainers.length>0){
            matchingContainers.forEach(container => container.remove());
            log(`Eliminación del interceptor de YT`);
        }

        // Obtiene todos los elementos con la etiqueta especificada
        const backdrops = document.querySelectorAll(`tp-yt-iron-overlay-backdrop`);
        // Busca elementos con un estilo específico
        const targetBackdrop = Array.from(backdrops).find(
            (backdrop) => backdrop.style.zIndex === `2201`
        );
        // Si se encuentra el elemento, limpia su clase y elimina el atributo abierto
        if (targetBackdrop) {
            targetBackdrop.className = ``; // Limpia todas las clases
            targetBackdrop.removeAttribute(`opened`); // Elimina el atributo abierto
            log(`Cierra la capa de superposición`);
        }
    }


    /**
    * Salta el anuncio
    * @return {undefined}
    */
    function skipAd(mutationsList, observer) {
        const skipButton = document.querySelector(`.ytp-ad-skip-button`) || document.querySelector(`.ytp-skip-ad-button`) || document.querySelector(`.ytp-ad-skip-button-modern`);
        const shortAdMsg = document.querySelector(`.video-ads.ytp-ad-module .ytp-ad-player-overlay`) || document.querySelector(`.ytp-ad-button-icon`);

        if((skipButton || shortAdMsg) && window.location.href.indexOf(`https://m.youtube.com/`) === -1){ // Hay un error de silencio en dispositivos móviles
            video.muted = true;
        }

        if(skipButton){
            const delayTime = 0.5;
            setTimeout(skipAd,delayTime*1000);// Si click y call no han saltado, cambia directamente el tiempo del anuncio
            if(video.currentTime>delayTime){
                video.currentTime = video.duration;// Forzar
                log(`Cuenta especial saltó el anuncio del botón`);
                return;
            }
            skipButton.click();// PC
            nativeTouch.call(skipButton);// Teléfono
            log(`Salto del anuncio del botón`);
        }else if(shortAdMsg){
            video.currentTime = video.duration;
            log(`Se forzó el final de este anuncio`);
        }

    }

    /**
    * Elimina anuncios en reproducción
    * @return {undefined}
    */
    function removePlayerAD(id){

        if (checkRunFlag(id)) {
            log(`La función de eliminación de anuncios en reproducción ya está en ejecución`);
            return false
        }

        const targetNode = document.body;
        const config = {childList: true, subtree: true };
        const observer = new MutationObserver(()=>{getVideoDom();closeOverlay();skipAd();playAfterAd();});// Maneja anuncios de video relacionados
        observer.observe(targetNode, config);
        log(`La función de eliminación de anuncios en reproducción se ejecutó con éxito`);
    }

    /**
    * main
    */
    function main(){
        generateRemoveADHTMLElement(`removeADHTMLElement`);
        removePlayerAD(`removePlayerAD`);
    }

    if (document.readyState === `loading`) {
        document.addEventListener(`DOMContentLoaded`, main);
        log(`El script de eliminación de anuncios de YouTube se llamará pronto:`);
    } else {
        main();
        log(`El script de eliminación de anuncios de YouTube se llamó rápidamente:`);
    }

    let resumeVideo = () => {
        const videoelem = document.body.querySelector('video.html5-main-video')
        if (videoelem && videoelem.paused) {
             console.log('reanudar video')
             videoelem.play()
        }
    }

    let removePop = node => {
        const elpopup = node.querySelector('.ytd-popup-container > .ytd-popup-container > .ytd-enforcement-message-view-model')

        if (elpopup) {
            elpopup.parentNode.remove()
            console.log('eliminar popup', elpopup)
            const bdelems = document
                .getElementsByTagName('tp-yt-iron-overlay-backdrop')
            for (var x = (bdelems || []).length; x--;)
                bdelems[x].remove()
            resumeVideo()
        }

        if (node.tagName.toLowerCase() === 'tp-yt-iron-overlay-backdrop') {
            node.remove()
            resumeVideo()
            console.log('eliminar fondo', node)
        }
    }

    let obs = new MutationObserver(mutations => mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
            Array.from(mutation.addedNodes)
                .filter(node => node.nodeType === 1)
                .map(node => removePop(node))
        }
    }))

    obs.observe(document.body, {
        childList: true,
        subtree: true
    })

    // Función para modificar el ícono de YouTube
    function modifyYtIcon(ytdLogos) {
        ytdLogos.forEach(ytdLogo => {
            const ytdLogoSvg = ytdLogo.querySelector("svg");
            ytdLogoSvg.setAttribute('width', '101');
            ytdLogoSvg.setAttribute('viewBox', '0 0 101 20');
            ytdLogoSvg.closest('ytd-logo').setAttribute('is-red-logo', '');
            const trustedHTML = trustedTypes.defaultPolicy.createHTML('<g><path d="M14.4848 20C14.4848 20 23.5695 20 25.8229 19.4C27.0917 19.06 28.0459 18.08 28.3808 16.87C29 14.65 29 9.98 29 9.98C29 9.98 29 5.34 28.3808 3.14C28.0459 1.9 27.0917 0.94 25.8229 0.61C23.5695 0 14.4848 0 14.4848 0C14.4848 0 5.42037 0 3.17711 0.61C1.9286 0.94 0.954148 1.9 0.59888 3.14C0 5.34 0 9.98 0 9.98C0 9.98 0 14.65 0.59888 16.87C0.954148 18.08 1.9286 19.06 3.17711 19.4C5.42037 20 14.4848 20 14.4848 20Z" fill="#FF0033"/><path d="M19 10L11.5 5.75V14.25L19 10Z" fill="white"/></g><g id="youtube-paths_yt19"><path d="M32.1819 2.10016V18.9002H34.7619V12.9102H35.4519C38.8019 12.9102 40.5619 11.1102 40.5619 7.57016V6.88016C40.5619 3.31016 39.0019 2.10016 35.7219 2.10016H32.1819ZM37.8619 7.63016C37.8619 10.0002 37.1419 11.0802 35.4019 11.0802H34.7619V3.95016H35.4519C37.4219 3.95016 37.8619 4.76016 37.8619 7.13016V7.63016Z"/><path d="M41.982 18.9002H44.532V10.0902C44.952 9.37016 45.992 9.05016 47.302 9.32016L47.462 6.33016C47.292 6.31016 47.142 6.29016 47.002 6.29016C45.802 6.29016 44.832 7.20016 44.342 8.86016H44.162L43.952 6.54016H41.982V18.9002Z"/><path d="M55.7461 11.5002C55.7461 8.52016 55.4461 6.31016 52.0161 6.31016C48.7861 6.31016 48.0661 8.46016 48.0661 11.6202V13.7902C48.0661 16.8702 48.7261 19.1102 51.9361 19.1102C54.4761 19.1102 55.7861 17.8402 55.6361 15.3802L53.3861 15.2602C53.3561 16.7802 53.0061 17.4002 51.9961 17.4002C50.7261 17.4002 50.6661 16.1902 50.6661 14.3902V13.5502H55.7461V11.5002ZM51.9561 7.97016C53.1761 7.97016 53.2661 9.12016 53.2661 11.0702V12.0802H50.6661V11.0702C50.6661 9.14016 50.7461 7.97016 51.9561 7.97016Z"/><path d="M60.1945 18.9002V8.92016C60.5745 8.39016 61.1945 8.07016 61.7945 8.07016C62.5645 8.07016 62.8445 8.61016 62.8445 9.69016V18.9002H65.5045L65.4845 8.93016C65.8545 8.37016 66.4845 8.04016 67.1045 8.04016C67.7745 8.04016 68.1445 8.61016 68.1445 9.69016V18.9002H70.8045V9.49016C70.8045 7.28016 70.0145 6.27016 68.3445 6.27016C67.1845 6.27016 66.1945 6.69016 65.2845 7.67016C64.9045 6.76016 64.1545 6.27016 63.0845 6.27016C61.8745 6.27016 60.7345 6.79016 59.9345 7.76016H59.7845L59.5945 6.54016H57.5445V18.9002H60.1945Z"/><path d="M74.0858 4.97016C74.9858 4.97016 75.4058 4.67016 75.4058 3.43016C75.4058 2.27016 74.9558 1.91016 74.0858 1.91016C73.2058 1.91016 72.7758 2.23016 72.7758 3.43016C72.7758 4.67016 73.1858 4.97016 74.0858 4.97016ZM72.8658 18.9002H75.3958V6.54016H72.8658V18.9002Z"/><path d="M79.9516 19.0902C81.4116 19.0902 82.3216 18.4802 83.0716 17.3802H83.1816L83.2916 18.9002H85.2816V6.54016H82.6416V16.4702C82.3616 16.9602 81.7116 17.3202 81.1016 17.3202C80.3316 17.3202 80.0916 16.7102 80.0916 15.6902V6.54016H77.4616V15.8102C77.4616 17.8202 78.0416 19.0902 79.9516 19.0902Z"/><path d="M90.0031 18.9002V8.92016C90.3831 8.39016 91.0031 8.07016 91.6031 8.07016C92.3731 8.07016 92.6531 8.61016 92.6531 9.69016V18.9002H95.3131L95.2931 8.93016C95.6631 8.37016 96.2931 8.04016 96.9131 8.04016C97.5831 8.04016 97.9531 8.61016 97.9531 9.69016V18.9002H100.613V9.49016C100.613 7.28016 99.8231 6.27016 98.1531 6.27016C96.9931 6.27016 96.0031 6.69016 95.0931 7.67016C94.7131 6.76016 93.9631 6.27016 92.8931 6.27016C91.6831 6.27016 90.5431 6.79016 89.7431 7.76016H89.5931L89.4031 6.54016H87.3531V18.9002H90.0031Z"/></g>');
            ytdLogoSvg.innerHTML = trustedHTML;
        });

        // Desconectar el observador una vez que se encuentra el elemento
        observer.disconnect();
    }

    // Función para verificar si el elemento objetivo existe y llamar a la función de modificación
    function checkYtIconExistence() {
        let ytdLogos = document.querySelectorAll("ytd-logo > yt-icon > span > div");
        const pfp = document.querySelector("#avatar-btn");
        const signInBtn = document.querySelector("a[href^='https://accounts.google.com']");

        if (pfp && ytdLogos.length == 4) {
            // Ejecutar en el siguiente ciclo de eventos para asegurarse de que el logo esté completamente cargado
            setTimeout(() => {
                // Volver a obtenerlo por si YouTube los intercambió
                ytdLogos = document.querySelectorAll("ytd-logo > yt-icon > span > div");
                modifyYtIcon(ytdLogos);
            }, 50)
        } else if (signInBtn) {
            // No aplicar el logo premium a usuarios no registrados
            // y desconectar el observador
            observer.disconnect();
        };
    }

    // Observar cambios en el DOM
    const observer = new MutationObserver(checkYtIconExistence);

    // Comenzar a observar el documento
    observer.observe(document.body, {childList: true, subtree: true});

    // Llamar a la función una vez al principio en caso de que el elemento ya esté presente
    checkYtIconExistence();


    /**
    * Cambia el título de la página
    * @return {undefined}
    */
    function changePageTitle() {
        const videoTitlePattern = / - YouTube$/;

        // Observa cambios en el título de la página
        const titleObserver = new MutationObserver(() => {
            if (videoTitlePattern.test(document.title)) {
                // Si el título es de un video, reemplaza " - YouTube" por " - YouTube Premium"
                document.title = document.title.replace(videoTitlePattern, " - YouTube Premium");
            } else if (document.title !== "YouTube Premium") {
                // Si no es un video, simplemente establece "YouTube Premium"
                document.title = "YouTube Premium";
            }
        });

        // Configura el observador para observar cambios en el título
        titleObserver.observe(document.querySelector('title'), { childList: true });

        // Cambia el título inicialmente si es necesario
        if (videoTitlePattern.test(document.title)) {
            document.title = document.title.replace(videoTitlePattern, " - YouTube Premium");
        } else if (document.title !== "YouTube Premium") {
            document.title = "YouTube Premium";
        }
    }

    // Llama a la función para cambiar el título
    changePageTitle();

    const DEFAULT_SETTINGS = {
        targetResolution: "hd2160",
        expandMenu: false,
        debug: false
    };

    const BROWSER_LANGUAGE = navigator.language || navigator.userLanguage;
    const GET_PREFERRED_LANGUAGE = () => {
        if (BROWSER_LANGUAGE.startsWith('zh') && BROWSER_LANGUAGE !== 'zh-TW') {
            return 'zh-CN';
        } else {
            return BROWSER_LANGUAGE;
        }
    };

    const TRANSLATIONS = {
        'es': {
            qualityMenu: 'Select your quality video',
            debug: 'DEBUG'
        }
    };

    const GET_LOCALIZED_TEXT = () => {
        const language = GET_PREFERRED_LANGUAGE();
        return TRANSLATIONS[language] || TRANSLATIONS['es'];
    };

    const QUALITIES = {
        highres: 4320,
        hd2880: 2880,
        hd2160: 2160,
        hd1440: 1440,
        hd1080: 1080,
        hd720: 720,
        large: 480,
        medium: 360,
        small: 240,
        tiny: 144,
    };

    const PREMIUM_INDICATOR_LABEL = "Premium";

    let userSettings = { ...DEFAULT_SETTINGS };
    let useCompatibilityMode = false;
    let isBrokenOrMissingGMAPI = false;
    let menuItems = [];
    let moviePlayer = null;

    // --- CLASS DEFINITIONS -----------

    class AllowedExceptionError extends Error {
        constructor(message) {
            super(message);
            this.name = "Allowed Exception";
        }
    }

    // --- GM FUNCTION OVERRIDES ------

    const GMCustomRegisterMenuCommand = useCompatibilityMode ? GM_registerMenuCommand : GM.registerMenuCommand;
    const GMCustomUnregisterMenuCommand = useCompatibilityMode ? GM_unregisterMenuCommand : GM.unregisterMenuCommand;
    const GMCustomGetValue = useCompatibilityMode ? GM_getValue : GM.getValue;
    const GMCustomSetValue = useCompatibilityMode ? GM_setValue : GM.setValue;
    const GMCustomListValues = useCompatibilityMode ? GM_listValues : GM.listValues;
    const GMCustomDeleteValue = useCompatibilityMode ? GM_deleteValue : GM.deleteValue;

    // --- FUNCTIONS ------

    function debugLog(message) {
        if (!userSettings.debug) return;
        const stack = new Error().stack;
        const stackLines = stack.split("\n");
        const callerLine = stackLines[2] ? stackLines[2].trim() : "Line not found";
        message += "";
        if (!message.endsWith(".")) {
            message += ".";
        }
        console.log(`[YTHD DEBUG] ${message} Function called ${callerLine}`);
    }

    // Attempt to set the video resolution to target quality or the next best quality
    function setResolution(force = false) {
        try {
            if (!moviePlayer?.getAvailableQualityData().length) throw "Quality options missing.";
            let resolvedTarget = findNextAvailableQuality(userSettings.targetResolution, moviePlayer.getAvailableQualityLevels());
            const premiumData = moviePlayer.getAvailableQualityData().find(q =>
                q.quality === resolvedTarget &&
                q.qualityLabel.trim().endsWith(PREMIUM_INDICATOR_LABEL) &&
                q.isPlayable
            );
            moviePlayer.setPlaybackQualityRange(resolvedTarget, resolvedTarget, premiumData?.formatId);
            debugLog(`Setting quality to: ${resolvedTarget}${premiumData ? " Premium" : ""}`);
        } catch (error) {
            debugLog("Did not set resolution. " + error);
        }
    }

    function findNextAvailableQuality(target, availableQualities) {
        const targetValue = QUALITIES[target];
        return availableQualities
            .map(q => ({ quality: q, value: QUALITIES[q] }))
            .find(q => q.value <= targetValue)?.quality;
    }

    function processNewPage() {
        debugLog('Processing new page...');
        moviePlayer = document.querySelector('#movie_player');
        setResolution();
    }

    // ----------------------------------------
    // Functions for the quality selection menu
    function processMenuOptions(options, callback) {
        Object.values(options).forEach(option => {
            if (!option.alwaysShow && !userSettings.expandMenu) return;
            if (option.items) {
                option.items.forEach(item => callback(item));
            } else {
                callback(option);
            }
        });
    }

    function showMenuOptions() {
        removeMenuOptions();
        const menuOptions = {
            expandMenu: {
                alwaysShow: true,
                label: () => `${GET_LOCALIZED_TEXT().qualityMenu} ${userSettings.expandMenu ? "🔼" : "🔽"}`,
                menuId: "menuExpandBtn",
                handleClick: function () {
                    userSettings.expandMenu = !userSettings.expandMenu;
                    GMCustomSetValue('expandMenu', userSettings.expandMenu);
                    showMenuOptions();
                },
            },
            qualities: {
                items: Object.entries(QUALITIES).map(([label, resolution]) => ({
                    label: () => `${resolution}p ${label === userSettings.targetResolution ? "✅" : ""}`,
                    menuId: label,
                    handleClick: function () {
                        if (userSettings.targetResolution === label) return;
                        userSettings.targetResolution = label;
                        GMCustomSetValue('targetResolution', label);
                        setResolution();
                        showMenuOptions();
                    },
                })),
            },
            debug: {
                label: () => `${GET_LOCALIZED_TEXT().debug} ${userSettings.debug ? "✅" : ""}`,
                menuId: "debugBtn",
                handleClick: function () {
                    userSettings.debug = !userSettings.debug;
                    GMCustomSetValue('debug', userSettings.debug);
                    showMenuOptions();
                },
            },
        };

        processMenuOptions(menuOptions, (item) => {
            GMCustomRegisterMenuCommand(item.label(), item.handleClick, {
                id: item.menuId,
                autoClose: false,
            });
            menuItems.push(item.menuId);
        });
    }

    function removeMenuOptions() {
        while (menuItems.length) {
            GMCustomUnregisterMenuCommand(menuItems.pop());
        }
    }

    // -----------------------------------------------
    // Verify Grease Monkey API exists and is working.
    function hasGreasyMonkeyAPI() {
        if (typeof GM != 'undefined') return true;
        if (typeof GM_info != 'undefined') {
            useCompatibilityMode = true;
            debugLog("Running in compatibility mode.");
            return true;
        }
        return false;
    }

    // -----------------------------------------------
    // User setting handling
    async function loadUserSettings() {
        try {
            // Get all keys from GM
            const storedValues = await GMCustomListValues();
            // Write any missing key-value pairs from DEFAULT_SETTINGS to GM
            for (const [key, value] of Object.entries(DEFAULT_SETTINGS)) {
                if (!storedValues.includes(key)) {
                    await GMCustomSetValue(key, value);
                }
            }
            // Delete any extra keys in GM that are not in DEFAULT_SETTINGS
            for (const key of storedValues) {
                if (!(key in DEFAULT_SETTINGS)) {
                    await GMCustomDeleteValue(key);
                }
            }
            // Retrieve and update user settings from GM
            const keyValuePairs = await Promise.all(
                storedValues.map(async key => [key, await GMCustomGetValue(key)])
            );

            keyValuePairs.forEach(([newKey, newValue]) => {
                userSettings[newKey] = newValue;
            });

            debugLog(`Loaded user settings: [${Object.entries(userSettings).map(([key, value]) => `${key}: ${value}`).join(", ")}].`);
        } catch (error) {
            throw error;
        }
    }

    // ----------------
    // Main function
    async function initialize() {
        try {
            if (!hasGreasyMonkeyAPI()) throw "Did not detect valid Grease Monkey API";
            await loadUserSettings();
        } catch (error) {
            debugLog(`Error loading user settings: ${error}. Loading with default settings.`);
        }
        if (window.self == window.top) {
            processNewPage(); // event listeners fire too late on first page load if premium bitrate is available and selected
            window.addEventListener('yt-player-updated', processNewPage, true); //handle desktop site
            window.addEventListener('yt-page-data-updated', processNewPage, true); //handle desktop site lazy reload
            window.addEventListener('state-navigateend', processNewPage, true); //handle mobile site
            showMenuOptions();
        } else {
            window.addEventListener('loadstart', processNewPage, true);
        }
    }

    // Entry Point
    initialize();

    const i18n = {
        'es': {
            downloadText: 'Descargar',
            error: {
                addNormalButton: 'Error al agregar botón de descarga normal:',
                addShortsButton: 'Error al agregar botón de descarga Shorts:'
            }
        }
    };

    GM_addStyle(`
        .youhou-download-btn {
            background: rgb(242, 242, 242);
            border: none;
            border-radius: 18px;
            color: #0f0f0f;
            padding: 0 16px;
            height: 36px;
            cursor: pointer;
            font-size: 14px;
            line-height: 2rem;
            font-weight: 400;
            white-space: nowrap;
        }
        .youhou-download-btn:hover {
            background: rgb(230, 230, 230);
        }
        .youhou-buttons-wrapper {
            display: flex;
            align-items: center;
            gap: 8px;
        }
    `);

    function waitForElement(selector, callback, maxTries = 10) {
        let tries = 0;

        function check() {
            const element = document.querySelector(selector);
            if (element) {
                callback(element);
                return;
            }

            tries++;
            if (tries < maxTries) {
                setTimeout(check, 1000);
            }
        }

        check();
    }

    function createDownloadButton() {
        if (document.querySelector('.youhou-download-btn')) {
            return;
        }

        const downloadButton = document.createElement('button');
        downloadButton.className = 'youhou-download-btn';
        downloadButton.textContent = i18n['es'].downloadText;

        downloadButton.addEventListener('click', function() {
            const videoUrl = window.location.href;
            const downloadDomains = ['cobalt.tools'];
            const randomDomain = downloadDomains[Math.floor(Math.random() * downloadDomains.length)];
            const newUrl = videoUrl.replace(/(www\.)?youtube\.com/, randomDomain);
            window.open(newUrl, '_blank');
        });

        return downloadButton;
    }

    function tryAddButton() {
        waitForElement('#subscribe-button button', (subscribeButton) => {
            if (!document.querySelector('.youhou-download-btn')) {
                const downloadButton = createDownloadButton();
                const container = subscribeButton.closest('#subscribe-button');
                if (container) {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'youhou-buttons-wrapper';

                    container.parentNode.insertBefore(wrapper, container);
                    wrapper.appendChild(container);

                    wrapper.appendChild(downloadButton);
                }
            }
        });
    }

    document.addEventListener('yt-navigate-finish', function() {
        if (window.location.pathname.includes('/watch')) {
            setTimeout(tryAddButton, 1000);
        }
    });

    if (window.location.pathname.includes('/watch')) {
        setTimeout(tryAddButton, 1000);
    }
})();
