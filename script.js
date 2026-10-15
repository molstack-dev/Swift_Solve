/* ============================================================
   SWIFTSOLVE — SCRIPT.JS
   Interacciones básicas: menú móvil, panel de audio y atajos.
   ============================================================ */

/**
 * Muestra u oculta el menú de navegación móvil.
 */
function toggleMenu() {
    document.querySelector('.mobile-nav').classList.toggle('open');
}

/**
 * Muestra u oculta el panel de audio y reproduce la presentación
 * al abrirlo. Si la reproducción falla (por ejemplo, por políticas
 * del navegador), se ignora silenciosamente.
 */
function toggleAudio() {
    const panel = document.querySelector('.audio-panel');
    panel.classList.toggle('hidden');

    if (!panel.classList.contains('hidden')) {
        panel.querySelector('audio').play().catch(() => {});
    }
}

/**
 * Copia un valor de color al portapapeles y muestra una confirmación
 * temporal ("Copiado") en el botón que se pulsó.
 *
 * @param {string} color - Código de color a copiar (ej. "#00D084").
 * @param {HTMLElement} btn - Botón que contiene el <span> con el texto.
 */
function copyColor(color, btn) {
    if (!navigator.clipboard) return;

    navigator.clipboard
        .writeText(color)
        .then(() => {
            const span = btn.querySelector('span');
            const original = span.textContent;
            span.textContent = 'Copiado';

            setTimeout(() => {
                span.textContent = original;
            }, 1200);
        })
        .catch(() => {});
}

/**
 * Atajos de teclado:
 * - Escape: cierra el menú móvil y el panel de audio.
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelector('.mobile-nav')?.classList.remove('open');
        document.querySelector('.audio-panel')?.classList.add('hidden');
    }
});