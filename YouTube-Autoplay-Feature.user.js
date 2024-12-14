// ==UserScript==
// @name         YouTube Autoplay Feature
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Autoplay Feature for YouTubePremiumFree.
// @author       Livrädo Sandoval
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let timeoutId; // Para manejar el temporizador globalmente
    let lastVideoDuration = ''; // Para evitar reiniciar el temporizador en el mismo video

    // Función para convertir duración de "min:seg" a milisegundos
    function convertTimeToMs(timeStr) {
        const [minutes, seconds] = timeStr.split(':').map(Number);
        return (minutes * 60 + seconds) * 1000;
    }

    // Función para simular clic en el botón "Siguiente"
    function clickNextButton() {
        const nextButton = document.querySelector('.ytp-next-button.ytp-button');

        if (nextButton) {
            nextButton.click();
            console.log('Botón "Siguiente" presionado automáticamente.');
        } else {
            console.log('No se encontró el botón "Siguiente".');
        }
    }

    // Función para calcular la duración y establecer el temporizador
    function setupAutoNext() {
        const timeDisplay = document.querySelector('.ytp-time-display.notranslate');

        if (timeDisplay) {
            const timeDuration = timeDisplay.querySelector('.ytp-time-duration');

            if (timeDuration) {
                const videoDuration = timeDuration.textContent;
                const durationInMs = convertTimeToMs(videoDuration);

                // Filtra videos que duren menos de 30 segundos
                if (durationInMs <= 30000) {
                    console.log('El video dura menos de 30 segundos. No se activará el auto-siguiente.');
                    return;
                }

                // Si es un video nuevo, configuramos el temporizador
                if (videoDuration !== lastVideoDuration) {
                    lastVideoDuration = videoDuration; // Actualiza la duración detectada

                    console.log('Duración del video detectada:', videoDuration, `(en milisegundos: ${durationInMs} ms)`);

                    // Cancela cualquier temporizador previo
                    clearTimeout(timeoutId);

                    // Configura un nuevo temporizador para presionar el botón al finalizar el video
                    timeoutId = setTimeout(() => {
                        console.log('El video ha terminado. Presionando el botón "Siguiente".');
                        clickNextButton();
                    }, durationInMs);
                } else {
                    console.log('El temporizador ya está configurado para este video.');
                }
            } else {
                console.log('No se encontró el elemento con la duración del video.');
            }
        } else {
            console.log('No se encontró el contenedor del tiempo del video.');
        }
    }

    // Configurar todo al cargar la página
    document.addEventListener('DOMContentLoaded', () => {
        setupAutoNext();
    });

    // Configuración periódica para adaptarse a cambios dinámicos
    const observer = new MutationObserver(() => {
        setupAutoNext();
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();