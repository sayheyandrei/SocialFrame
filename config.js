// Соцсети и размеры материалов (актуальные для каждой сети)
window.SOCIAL_CONFIG = {
    instagram: {
        name: 'Instagram',
        sizes: [
            { w: 1080, h: 1080, label: 'Квадрат 1080×1080' },
            { w: 1080, h: 1350, label: 'Вертикаль 1080×1350' },
            { w: 1080, h: 566, label: 'Горизонталь 1080×566' },
            { w: 1080, h: 1920, label: 'Stories/Reels 1080×1920' }
        ]
    },
    facebook: {
        name: 'Facebook',
        sizes: [
            { w: 1080, h: 1080, label: 'Квадрат 1080×1080' },
            { w: 1080, h: 1359, label: 'Вертикаль 1080×1359' },
            { w: 1080, h: 566, label: 'Горизонталь 1080×566' },
            { w: 851, h: 315, label: 'Обложка 851×315' },
            { w: 1080, h: 1920, label: 'Stories 1080×1920' }
        ]
    },
    twitter: {
        name: 'X (Twitter)',
        sizes: [
            { w: 1280, h: 720, label: 'Горизонталь 1280×720' },
            { w: 720, h: 1280, label: 'Вертикаль 720×1280' },
            { w: 720, h: 720, label: 'Квадрат 720×720' },
            { w: 1500, h: 500, label: 'Обложка 1500×500' }
        ]
    },
    linkedin: {
        name: 'LinkedIn',
        sizes: [
            { w: 1200, h: 1200, label: 'Квадрат 1200×1200' },
            { w: 720, h: 900, label: 'Вертикаль 720×900' },
            { w: 1200, h: 627, label: 'Горизонталь 1200×627' },
            { w: 1128, h: 191, label: 'Обложка 1128×191' }
        ]
    }
};

// Google Fonts для селекта (подгружаются динамически)
window.GOOGLE_FONTS = [
    'Inter', 'Roboto', 'Open Sans', 'Lato', 'Oswald', 'Montserrat',
    'Playfair Display', 'PT Sans', 'Raleway', 'Source Sans 3', 'Nunito',
    'Poppins', 'Rubik', 'Manrope', 'Comfortaa', 'Jost'
];
