// Lightbox-Funktionalität für Bildvergrößerung
document.addEventListener('DOMContentLoaded', function() {
    // Lightbox-HTML erstellen
    const lightboxHTML = `
        <div id="lightbox" class="lightbox">
            <span class="lightbox-close">&times;</span>
            <div class="lightbox-content">
                <img id="lightbox-image" class="lightbox-image" src="" alt="">
            </div>
        </div>
    `;
    
    // Lightbox zum Body hinzufügen
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.querySelector('.lightbox-close');
    
    // Alle Bilder finden, die klickbar sein sollen (außer Logo)
    const clickableImages = document.querySelectorAll('main img, .galerie img');
    
    // Klickbare Klasse zu Bildern hinzufügen
    clickableImages.forEach(img => {
        // Logo ausschließen
        if (!img.classList.contains('logo')) {
            img.classList.add('clickable-image');
            
            // Click-Event hinzufügen
            img.addEventListener('click', function() {
                lightboxImage.src = this.src;
                lightboxImage.alt = this.alt;
                lightbox.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Scrollen verhindern
            });
        }
    });
    
    // Lightbox schließen beim Klick auf X
    closeBtn.addEventListener('click', closeLightbox);
    
    // Lightbox schließen beim Klick auf Hintergrund
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Lightbox schließen mit Escape-Taste
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            closeLightbox();
        }
    });
    
    // Lightbox schließen Funktion
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Scrollen wieder erlauben
    }
}); 