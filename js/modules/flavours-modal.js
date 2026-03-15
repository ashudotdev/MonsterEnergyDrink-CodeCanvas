// ══════════════════════════════════════════════════════
    // FLAVOUR KNOW MORE MODAL
    // ══════════════════════════════════════════════════════
    const flKmBackdrop = document.getElementById('fl-km-backdrop');
    const flKmClose    = document.getElementById('fl-km-close');

    // DOM Elements to populate
    const flKmglow        = document.getElementById('fl-km-glow');
    const flKmCan         = document.getElementById('fl-km-can');
    const flKmTag         = document.getElementById('fl-km-tag');
    const flKmTitle       = document.getElementById('fl-km-title');
    const flKmDesc        = document.getElementById('fl-km-desc');
    const flKmTaste       = document.getElementById('fl-km-taste');
    const flKmSugar       = document.getElementById('fl-km-sugar');
    const flKmIngredients = document.getElementById('fl-km-ingredients');
    const flKmModal       = document.getElementById('fl-km-modal');

    function openFlavourModal(card) {
        // Read data attributes from the card
        const name   = card.dataset.kmName;
        const tag    = card.dataset.kmTag;
        const accent = card.dataset.kmAccent;
        const img    = card.dataset.kmImg;
        const desc   = card.dataset.kmDesc;
        const taste  = card.dataset.kmTaste;
        const sugar  = card.dataset.kmSugar;
        const ing    = card.dataset.kmIngredients;

        // Apply theme color via CSS variable specifically for the modal
        flKmModal.style.setProperty('--fl-km-accent', accent);
        
        // Populate glow matching the accent
        flKmglow.style.background = `radial-gradient(circle, color-mix(in srgb, ${accent} 40%, transparent) 0%, transparent 70%)`;

        // Populate text and image
        flKmCan.src               = img;
        flKmCan.alt               = name;
        flKmTag.textContent       = tag;
        flKmTitle.textContent     = name;
        flKmDesc.textContent      = desc;
        flKmTaste.textContent     = taste;
        flKmSugar.textContent     = sugar;
        flKmIngredients.textContent = ing;

        // Show modal
        flKmBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
        bindCursorHovers();
    }

    function closeFlavourModal() {
        flKmBackdrop.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Bind "KNOW MORE ↗" buttons
    document.querySelectorAll('.fl-know-more-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.fl-detail-card');
            if (card) openFlavourModal(card);
        });
    });

    // Close handlers
    if (flKmClose) flKmClose.addEventListener('click', closeFlavourModal);
    if (flKmBackdrop) {
        flKmBackdrop.addEventListener('click', (e) => {
            if (e.target === flKmBackdrop) closeFlavourModal();
        });
    }

    