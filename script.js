(function () {
    'use strict';

    const CONFIG = window.SOCIAL_CONFIG || {};
    const MAX_OVERLAY_IMAGES = 6;
    const GOOGLE_FONTS_API = 'https://www.googleapis.com/webfonts/v1/webfonts?key=';
    const FONTS_FALLBACK = window.GOOGLE_FONTS || ['Inter', 'Roboto', 'Open Sans', 'Lato', 'Oswald', 'Montserrat', 'Playfair Display', 'PT Sans'];

    let state = {
        network: 'instagram',
        size: null,
        bgUrl: null,
        overlayImages: [],
        overlayTexts: [],
        nextImageSlot: 0,
        selectedTextId: null
    };

    const $ = (id) => document.getElementById(id);
    const resultContainer = $('resultContainer');
    const bgLayer = $('bgLayer');
    const overlayLayer = $('overlayLayer');
    const sizeSelect = $('sizeSelect');
    const canvasTitle = $('canvasTitle');
    const clearBtn = $('clearBtn');
    const downloadBtn = $('downloadBtn');
    const btnAddPreview = $('btnAddPreview');
    const fontSelect = $('fontSelect');
    const fileBackground = $('fileBackground');
    const fileImage = $('fileImage');
    const textModal = $('textModal');
    const textInput = $('textInput');
    const textModalOk = $('textModalOk');
    const textModalCancel = $('textModalCancel');

    function init() {
        if (!resultContainer || !sizeSelect) return;

        document.querySelectorAll('.social-btn').forEach(btn => {
            btn.addEventListener('click', () => setNetwork(btn.dataset.network));
        });
        sizeSelect.addEventListener('change', onSizeChange);
        clearBtn?.addEventListener('click', clearAll);
        downloadBtn?.addEventListener('click', download);
        btnAddPreview?.addEventListener('click', addImageSlot);
        $('btnAddText')?.addEventListener('click', openTextModal);
        textModalOk?.addEventListener('click', addTextFromModal);
        textModalCancel?.addEventListener('click', () => closeTextModal());

        fileBackground?.addEventListener('change', (e) => { if (e.target.files[0]) handleBackgroundFile(e.target.files[0]); });
        fileImage?.addEventListener('change', (e) => { if (e.target.files[0]) handleImageFile(e.target.files[0]); });

        $('previewBackground')?.addEventListener('click', (e) => { if (!e.target.classList.contains('btn-remove')) fileBackground?.click(); });
        $('removeBackground')?.addEventListener('click', (e) => { e.stopPropagation(); clearBackground(); });

        for (let i = 0; i < MAX_OVERLAY_IMAGES; i++) {
            const card = $('previewImage' + (i + 1));
            const removeBtn = $('removeImage' + i);
            if (card) card.addEventListener('click', (e) => {
                if (e.target.classList.contains('btn-remove')) return;
                if (card.classList.contains('has-image')) selectImageSlot(i);
                else triggerImageUpload(i);
            });
            if (removeBtn) removeBtn.addEventListener('click', (e) => { e.stopPropagation(); removeImageSlot(i); });
        }

        textModal?.addEventListener('click', (e) => { if (e.target === textModal) closeTextModal(); });

        loadGoogleFontsForSelect();
        setNetwork('instagram');
        updateAddButton();
    }

    function setNetwork(network) {
        if (!CONFIG[network]) return;
        state.network = network;
        document.querySelectorAll('.social-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.network === network);
        });
        const cfg = CONFIG[network];
        sizeSelect.innerHTML = '';
        cfg.sizes.forEach((s, i) => {
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = s.label;
            sizeSelect.appendChild(opt);
        });
        sizeSelect.value = '0';
        applySize(cfg.sizes[0]);
        canvasTitle.textContent = cfg.name + ' — ' + cfg.sizes[0].label;
    }

    function onSizeChange() {
        const cfg = CONFIG[state.network];
        if (!cfg) return;
        const idx = parseInt(sizeSelect.value, 10) || 0;
        const s = cfg.sizes[idx];
        if (s) {
            state.size = s;
            applySize(s);
            canvasTitle.textContent = cfg.name + ' — ' + s.label;
        }
    }

    function applySize(s) {
        state.size = s;
        if (!resultContainer || !s) return;
        resultContainer.style.width = s.w + 'px';
        resultContainer.style.height = s.h + 'px';
    }

    function handleBackgroundFile(file) {
        if (!file.type.startsWith('image/')) return;
        const url = URL.createObjectURL(file);
        state.bgUrl = url;
        bgLayer.style.backgroundImage = 'url(' + url + ')';
        const card = $('previewBackground');
        const img = $('previewBackgroundImg');
        if (card) card.classList.add('has-image');
        if (img) { img.src = url; img.style.display = 'block'; }
        fileBackground.value = '';
        updateButtons();
    }

    function clearBackground() {
        if (state.bgUrl) URL.revokeObjectURL(state.bgUrl);
        state.bgUrl = null;
        bgLayer.style.backgroundImage = '';
        const card = $('previewBackground');
        const img = $('previewBackgroundImg');
        if (card) card.classList.remove('has-image');
        if (img) { img.src = ''; img.style.display = 'none'; }
        updateButtons();
    }

    function triggerImageUpload(slotIndex) {
        state.currentImageSlot = slotIndex;
        fileImage.click();
    }

    function selectImageSlot(slotIndex) {
        state.selectedImageSlot = slotIndex;
        const item = state.overlayImages[slotIndex];
        if (item && item.el) item.el.classList.add('selected');
        state.overlayImages.forEach((it, i) => {
            if (it && it.el && i !== slotIndex) it.el.classList.remove('selected');
        });
    }

    function handleImageFile(file) {
        if (!file.type.startsWith('image/')) return;
        const slotIndex = typeof state.currentImageSlot === 'number' ? state.currentImageSlot : state.nextImageSlot;
        const url = URL.createObjectURL(file);
        const card = $('previewImage' + (slotIndex + 1));
        const previewImg = $('previewImage' + (slotIndex + 1) + 'Img');
        if (card) { card.classList.add('has-image'); card.style.display = 'flex'; }
        if (previewImg) { previewImg.src = url; previewImg.style.display = 'block'; }

        const draggable = createDraggableImage(url, slotIndex);
        state.overlayImages[slotIndex] = { url, file, el: draggable, scale: 1, x: 0, y: 0 };
        overlayLayer.appendChild(draggable);
        centerItemOnCanvas(draggable, slotIndex);
        state.nextImageSlot = Math.min(state.nextImageSlot + 1, MAX_OVERLAY_IMAGES);
        state.currentImageSlot = null;
        fileImage.value = '';
        updateAddButton();
        updateButtons();
    }

    function createDraggableImage(src, slotIndex) {
        const wrap = document.createElement('div');
        wrap.className = 'draggable-item';
        wrap.dataset.slot = String(slotIndex);
        const img = document.createElement('img');
        img.src = src;
        img.draggable = false;
        wrap.appendChild(img);
        img.onload = function () {
            if (!state.size) return;
            const maxW = state.size.w * 0.5;
            const maxH = state.size.h * 0.5;
            let w = img.naturalWidth || 100;
            let h = img.naturalHeight || 100;
            if (w > maxW || h > maxH) {
                const r = Math.min(maxW / w, maxH / h);
                w *= r;
                h *= r;
            }
            wrap.style.width = w + 'px';
            wrap.style.height = h + 'px';
            wrap.dataset.scale = '1';
            centerItemOnCanvas(wrap, slotIndex);
        };
        makeDraggableAndScalable(wrap, slotIndex);
        return wrap;
    }

    function centerItemOnCanvas(wrap, slotIndex) {
        if (!state.size || !resultContainer) return;
        const rect = resultContainer.getBoundingClientRect();
        const w = wrap.offsetWidth || 100;
        const h = wrap.offsetHeight || 100;
        wrap.style.left = (state.size.w / 2 - w / 2) + 'px';
        wrap.style.top = (state.size.h / 2 - h / 2) + 'px';
        const data = state.overlayImages[slotIndex];
        if (data) {
            data.x = state.size.w / 2 - w / 2;
            data.y = state.size.h / 2 - h / 2;
        }
    }

    function makeDraggableAndScalable(wrap, slotIndex) {
        let startX, startY, startLeft, startTop;
        let scale = 1;

        wrap.addEventListener('mousedown', onStart);
        wrap.addEventListener('touchstart', onStart, { passive: false });

        function onStart(e) {
            e.preventDefault();
            const touch = e.touches ? e.touches[0] : e;
            const rect = wrap.getBoundingClientRect();
            startX = touch.clientX;
            startY = touch.clientY;
            startLeft = parseFloat(wrap.style.left) || 0;
            startTop = parseFloat(wrap.style.top) || 0;
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onEnd);
            document.addEventListener('touchmove', onMove, { passive: false });
            document.addEventListener('touchend', onEnd);
        }

        function onMove(e) {
            const touch = e.touches ? e.touches[0] : e;
            const dx = touch.clientX - startX;
            const dy = touch.clientY - startY;
            wrap.style.left = (startLeft + dx) + 'px';
            wrap.style.top = (startTop + dy) + 'px';
            const data = state.overlayImages[slotIndex];
            if (data) {
                data.x = startLeft + dx;
                data.y = startTop + dy;
            }
        }

        function onEnd() {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onEnd);
            document.removeEventListener('touchmove', onMove);
            document.removeEventListener('touchend', onEnd);
        }

        wrap.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -0.1 : 0.1;
            scale = Math.max(0.2, Math.min(3, (parseFloat(wrap.dataset.scale) || 1) + delta));
            wrap.dataset.scale = String(scale);
            wrap.style.transform = 'scale(' + scale + ')';
            const data = state.overlayImages[slotIndex];
            if (data) data.scale = scale;
        }, { passive: false });
    }

    function addImageSlot() {
        if (state.nextImageSlot >= MAX_OVERLAY_IMAGES) return;
        const card = $('previewImage' + (state.nextImageSlot + 1));
        if (card) {
            card.style.display = 'flex';
            card.classList.remove('has-image');
        }
        updateAddButton();
    }

    function removeImageSlot(slotIndex) {
        const data = state.overlayImages[slotIndex];
        if (data) {
            if (data.url) URL.revokeObjectURL(data.url);
            if (data.el && data.el.parentNode) data.el.parentNode.removeChild(data.el);
            state.overlayImages[slotIndex] = null;
        }
        const card = $('previewImage' + (slotIndex + 1));
        const img = $('previewImage' + (slotIndex + 1) + 'Img');
        if (card) { card.classList.remove('has-image'); if (slotIndex > 0) card.style.display = 'none'; }
        if (img) { img.src = ''; img.style.display = 'none'; }
        for (let i = 0; i < MAX_OVERLAY_IMAGES; i++) {
            if (!state.overlayImages[i]) { state.nextImageSlot = i; break; }
            state.nextImageSlot = i + 1;
        }
        updateAddButton();
        updateButtons();
    }

    function updateAddButton() {
        if (btnAddPreview) btnAddPreview.disabled = state.nextImageSlot >= MAX_OVERLAY_IMAGES;
    }

    function loadGoogleFontsForSelect() {
        if (!fontSelect) return;
        const fonts = FONTS_FALLBACK;
        fontSelect.innerHTML = fonts.map(f => '<option value="' + f + '">' + f + '</option>').join('');
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=' + fonts.map(f => f.replace(/ /g, '+')).join('&family=') + '&display=swap';
        document.head.appendChild(link);
    }

    function openTextModal() {
        if (textModal) textModal.classList.add('open');
        if (textInput) { textInput.value = ''; textInput.focus(); }
    }

    function closeTextModal() {
        if (textModal) textModal.classList.remove('open');
    }

    function addTextFromModal() {
        const text = textInput?.value?.trim();
        if (!text || !state.size) { closeTextModal(); return; }
        const font = fontSelect?.value || 'Inter';
        const div = document.createElement('div');
        div.className = 'text-item';
        div.textContent = text;
        div.style.fontFamily = "'" + font + "', sans-serif";
        div.style.fontSize = Math.min(48, state.size.w / 15) + 'px';
        div.dataset.font = font;
        overlayLayer.appendChild(div);
        const rect = resultContainer.getBoundingClientRect();
        div.style.left = (state.size.w / 2 - 100) + 'px';
        div.style.top = (state.size.h / 2 - 24) + 'px';
        div.style.width = '200px';
        state.overlayTexts.push({ el: div, x: state.size.w / 2 - 100, y: state.size.h / 2 - 24 });
        makeTextDraggable(div, state.overlayTexts.length - 1);
        closeTextModal();
        updateButtons();
    }

    function makeTextDraggable(el, idx) {
        let startX, startY, startLeft, startTop;
        el.addEventListener('mousedown', (e) => {
            e.preventDefault();
            startX = e.clientX;
            startY = e.clientY;
            startLeft = parseFloat(el.style.left) || 0;
            startTop = parseFloat(el.style.top) || 0;
            state.overlayTexts.forEach(t => t.el.classList.remove('selected'));
            el.classList.add('selected');
            state.selectedTextId = idx;
            const onMove = (e) => {
                el.style.left = (startLeft + e.clientX - startX) + 'px';
                el.style.top = (startTop + e.clientY - startY) + 'px';
                if (state.overlayTexts[idx]) {
                    state.overlayTexts[idx].x = startLeft + e.clientX - startX;
                    state.overlayTexts[idx].y = startTop + e.clientY - startY;
                }
            };
            const onEnd = () => {
                document.removeEventListener('mousemove', onMove);
                document.removeEventListener('mouseup', onEnd);
            };
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onEnd);
        });
    }

    function clearAll() {
        clearBackground();
        state.overlayImages.forEach((data, i) => {
            if (data) removeImageSlot(i);
        });
        state.overlayImages = [];
        state.nextImageSlot = 0;
        state.overlayTexts.forEach(t => {
            if (t.el && t.el.parentNode) t.el.parentNode.removeChild(t.el);
        });
        state.overlayTexts = [];
        document.querySelectorAll('.preview-card[data-type="image"]').forEach((card, i) => {
            if (i > 0) card.style.display = 'none';
        });
        updateAddButton();
        updateButtons();
    }

    function updateButtons() {
        const hasContent = !!state.bgUrl || state.overlayImages.some(Boolean) || state.overlayTexts.length > 0;
        if (clearBtn) clearBtn.disabled = !hasContent;
        if (downloadBtn) downloadBtn.disabled = !hasContent;
    }

    function download() {
        if (!state.size || !resultContainer) return;
        html2canvas(resultContainer, {
            width: state.size.w,
            height: state.size.h,
            scale: 1,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#27272a'
        }).then(canvas => {
            const a = document.createElement('a');
            a.download = 'socialframe_' + state.network + '_' + state.size.w + 'x' + state.size.h + '.png';
            a.href = canvas.toDataURL('image/png');
            a.click();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
