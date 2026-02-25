(function () {
    'use strict';

    var DEFAULT_DATA = {
        socialNetworks: {
            instagram: { name: 'Instagram', sizes: [{ w: 1080, h: 1080, label: 'Post square 1080×1080' }, { w: 1080, h: 1350, label: 'Post portrait 1080×1350' }, { w: 1080, h: 566, label: 'Post landscape 1080×566' }, { w: 1080, h: 1920, label: 'Stories/Reels 1080×1920' }] },
            facebook: { name: 'Facebook', sizes: [{ w: 1080, h: 1080, label: 'Square 1080×1080' }, { w: 1080, h: 1359, label: 'Portrait 1080×1359' }, { w: 1080, h: 566, label: 'Landscape 1080×566' }, { w: 1080, h: 1920, label: 'Reels/Stories 1080×1920' }, { w: 820, h: 360, label: 'Page cover 820×360' }] },
            twitter: { name: 'X (Twitter)', sizes: [{ w: 1280, h: 720, label: 'Landscape 1280×720' }, { w: 720, h: 1280, label: 'Portrait 720×1280' }, { w: 720, h: 720, label: 'Square 720×720' }, { w: 1500, h: 500, label: 'Header 1500×500' }] },
            linkedin: { name: 'LinkedIn', sizes: [{ w: 1200, h: 1200, label: 'Square 1200×1200' }, { w: 720, h: 900, label: 'Portrait 720×900' }, { w: 1200, h: 627, label: 'Link preview 1200×627' }, { w: 4200, h: 700, label: 'Company cover 4200×700' }, { w: 1584, h: 396, label: 'Profile banner 1584×396' }] },
            tiktok: { name: 'TikTok', sizes: [{ w: 1080, h: 1920, label: 'Video 1080×1920' }] },
            youtube: { name: 'YouTube', sizes: [{ w: 1080, h: 1920, label: 'Shorts 1080×1920' }, { w: 2560, h: 1440, label: 'Channel banner 2560×1440' }] },
            pinterest: { name: 'Pinterest', sizes: [{ w: 1000, h: 1500, label: 'Standard pin 1000×1500' }] },
            snapchat: { name: 'Snapchat', sizes: [{ w: 1080, h: 1920, label: 'Story/Ads 1080×1920' }] },
            threads: { name: 'Threads', sizes: [{ w: 1080, h: 1080, label: 'Square 1080×1080' }, { w: 1080, h: 1350, label: 'Portrait 1080×1350' }] }
        },
        safeZones: {
            instagram: { default: [{ type: 'avatar', left: 0.04, top: 0.04, size: 0.1, shape: 'circle', label: 'Avatar' }, { type: 'bottom', left: 0, top: 0.88, width: 1, height: 0.12, shape: 'rect', label: 'Controls' }], '1080x1920': [{ type: 'safeArea', insetsPx: { top: 320, right: 35, bottom: 320, left: 35 }, label: 'Safe area', shape: 'rect' }, { type: 'top', left: 0, top: 0, width: 1, height: 0.06, shape: 'rect', label: 'Progress' }, { type: 'bottom', left: 0, top: 0.9, width: 1, height: 0.1, shape: 'rect', label: 'Reply' }], '1080x1080': [{ type: 'safeArea', insetsPx: { top: 60, right: 60, bottom: 60, left: 60 }, label: 'Safe area', shape: 'rect' }], '1080x1350': [{ type: 'safeArea', insetsPx: { top: 80, right: 80, bottom: 80, left: 80 }, label: 'Safe area', shape: 'rect' }, { type: 'guide', rectPx: { x: 0, y: 135, w: 1080, h: 1080 }, label: 'Preview in profile (square)' }], '1080x566': [{ type: 'safeArea', insetsPx: { top: 40, right: 60, bottom: 40, left: 60 }, label: 'Safe area', shape: 'rect' }] },
            facebook: { default: [{ type: 'avatar', left: 0.04, top: 0.04, size: 0.1, shape: 'circle', label: 'Avatar' }, { type: 'bottom', left: 0, top: 0.86, width: 1, height: 0.14, shape: 'rect', label: 'Controls' }], '1080x1920': [{ type: 'safeArea', insetsPx: { top: 320, right: 35, bottom: 320, left: 35 }, label: 'Safe area', shape: 'rect' }, { type: 'top', left: 0, top: 0, width: 1, height: 0.06, shape: 'rect', label: 'Progress' }, { type: 'bottom', left: 0, top: 0.9, width: 1, height: 0.1, shape: 'rect', label: 'Reply' }], '820x360': [{ type: 'safeArea', insetsPx: { top: 24, right: 90, bottom: 24, left: 90 }, label: 'Safe area', shape: 'rect' }, { type: 'bottom', left: 0, top: 0.444, width: 0.244, height: 0.556, shape: 'rect', label: 'Avatar' }] },
            twitter: { default: [{ type: 'avatar', left: 0.04, top: 0.04, size: 0.12, shape: 'circle', label: 'Avatar' }, { type: 'bottom', left: 0, top: 0.82, width: 1, height: 0.18, shape: 'rect', label: 'Actions' }], '1500x500': [{ type: 'safeArea', insetsPx: { top: 50, right: 150, bottom: 50, left: 150 }, label: 'Safe area', shape: 'rect' }, { type: 'bottom', left: 0, top: 0.2, width: 0.267, height: 0.8, shape: 'rect', label: 'Avatar' }] },
            linkedin: { default: [{ type: 'avatar', left: 0.04, top: 0.04, size: 0.1, shape: 'circle', label: 'Avatar' }, { type: 'bottom', left: 0, top: 0.84, width: 1, height: 0.16, shape: 'rect', label: 'Controls' }], '1200x627': [{ type: 'safeArea', insetsPx: { top: 60, right: 60, bottom: 60, left: 60 }, label: 'Safe area', shape: 'rect' }], '4200x700': [{ type: 'safeArea', insetsPx: { top: 35, right: 210, bottom: 35, left: 210 }, label: 'Safe area', shape: 'rect' }], '1584x396': [{ type: 'safeArea', insetsPx: { top: 24, right: 80, bottom: 24, left: 80 }, label: 'Safe area', shape: 'rect' }] },
            tiktok: { '1080x1920': [{ type: 'safeArea', insetsPx: { top: 131, right: 120, bottom: 367, left: 120 }, label: 'Safe area', shape: 'rect' }, { type: 'bottom', left: 0.78, top: 0, width: 0.22, height: 1, shape: 'rect', label: 'Right UI' }, { type: 'bottom', left: 0, top: 0.8, width: 1, height: 0.2, shape: 'rect', label: 'Caption' }] },
            youtube: { '1080x1920': [{ type: 'safeArea', insetsPx: { top: 150, right: 150, bottom: 450, left: 50 }, label: 'Safe area', shape: 'rect' }, { type: 'bottom', left: 0.78, top: 0, width: 0.22, height: 1, shape: 'rect', label: 'Right UI' }, { type: 'bottom', left: 0, top: 0.76, width: 1, height: 0.24, shape: 'rect', label: 'Bottom' }], '2560x1440': [{ type: 'safeArea', insetsPx: { top: 509, right: 507, bottom: 508, left: 507 }, label: 'Safe area', shape: 'rect' }] },
            pinterest: { '1000x1500': [{ type: 'safeArea', insetsPx: { top: 50, right: 50, bottom: 150, left: 50 }, label: 'Safe area', shape: 'rect' }] },
            snapchat: { '1080x1920': [{ type: 'safeArea', insetsPx: { top: 250, right: 64, bottom: 250, left: 64 }, label: 'Safe area', shape: 'rect' }, { type: 'top', left: 0, top: 0, width: 1, height: 0.1, shape: 'rect', label: 'Top UI' }, { type: 'bottom', left: 0, top: 0.9, width: 1, height: 0.1, shape: 'rect', label: 'Bottom UI' }] },
            threads: { '1080x1080': [{ type: 'safeArea', insetsPx: { top: 60, right: 60, bottom: 60, left: 60 }, label: 'Safe area', shape: 'rect' }], '1080x1350': [{ type: 'safeArea', insetsPx: { top: 80, right: 80, bottom: 80, left: 80 }, label: 'Safe area', shape: 'rect' }, { type: 'guide', rectPx: { x: 0, y: 135, w: 1080, h: 1080 }, label: 'Square preview' }] }
        }
    };

    var CONFIG = window.SOCIAL_CONFIG || {};
    var MAX_OVERLAY_IMAGES = 7;
    const GOOGLE_FONTS_API = 'https://www.googleapis.com/webfonts/v1/webfonts?key=';
    const FONTS_FALLBACK = window.GOOGLE_FONTS || ['Inter', 'Roboto', 'Open Sans', 'Lato', 'Oswald', 'Montserrat', 'Playfair Display', 'PT Sans'];

    let state = {
        network: 'instagram',
        size: null,
        bgUrl: null,
        overlayImages: [],
        overlayTexts: [],
        layersOrder: ['background'],
        nextImageSlot: 0,
        nextTextId: 0,
        visibleImageSlotsCount: 1,
        selectedImageSlot: null,
        selectedTextId: null,
        isHarmonized: false,
        addingTextMode: false,
        bgOffsetX: 0,
        bgOffsetY: 0,
        bgZoom: 1,
        safeZonesVisible: false,
        canvasTool: 'cursor',
        canvasZoomPercent: 100,
        viewportScale: 1,
        canvasPanX: 0,
        canvasPanY: 0,
        customSizes: [],
        overlayShapes: [],
        nextShapeId: 0,
        selectedShapeId: null,
        shapeBezierMode: false,
        colorPickerTarget: 'text'
    };

    var SHAPE_TYPES = [
        { id: 'square', name: 'Square', hasBezier: true },
        { id: 'roundedSquare', name: 'Rounded square', hasBezier: false },
        { id: 'circle', name: 'Circle', hasBezier: false },
        { id: 'hexagon', name: 'Hexagon', hasBezier: true },
        { id: 'triangle', name: 'Triangle', hasBezier: true },
        { id: 'star', name: 'Star', hasBezier: false },
        { id: 'rhombus', name: 'Rhombus', hasBezier: true },
        { id: 'squareSharpCorner', name: 'Comment', hasBezier: false },
        { id: 'parallelogram', name: 'Parallelogram', hasBezier: true },
        { id: 'line', name: 'Line', hasBezier: true },
        { id: 'arrow', name: 'Arrow', hasBezier: true }
    ];

    var SHAPE_ICON_FILES = {
        square: 'rectangle.svg',
        roundedSquare: 'round-rectangle.svg',
        circle: 'circle.svg',
        hexagon: 'hexagon.svg',
        triangle: 'triangle.svg',
        star: 'star.svg',
        rhombus: 'rhombus.svg',
        squareSharpCorner: 'comment.svg',
        parallelogram: 'parallelogram.svg',
        line: 'line.svg',
        arrow: 'arrow.svg'
    };

    var SHAPE_MENU_ICONS_INLINE = {
        square: '<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none"><path d="M119 21H21V119H119V21Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2"/></svg>',
        roundedSquare: '<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none"><path d="M96 21H44C31.2975 21 21 31.2975 21 44V96C21 108.703 31.2975 119 44 119H96C108.703 119 119 108.703 119 96V44C119 31.2975 108.703 21 96 21Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2"/></svg>',
        circle: '<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none"><path d="M119 70C119 42.938 97.062 21 70 21C42.938 21 21 42.938 21 70C21 97.062 42.938 119 70 119C97.062 119 119 97.062 119 70Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2"/></svg>',
        hexagon: '<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none"><path d="M116 43.5781V96.4209L70 122.847L24 96.4209V43.5781L70 17.1523L116 43.5781Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2"/></svg>',
        triangle: '<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none"><path d="M123.274 117H16.7256L70 24.0117L123.274 117Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2"/></svg>',
        star: '<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none"><path d="M83.6035 54.6504L83.832 55.1885L84.4131 55.2539L117.748 58.9521L92.8125 82.5811L92.4102 82.9619L92.5195 83.5049L99.4707 117.962L70.5186 100.404L70 100.09L69.4814 100.404L40.5283 117.962L47.4805 83.5049L47.5898 82.9619L47.1875 82.5811L22.251 58.9521L55.5869 55.2539L56.168 55.1885L56.3965 54.6504L70 22.5625L83.6035 54.6504Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2"/></svg>',
        rhombus: '<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none"><path d="M122.586 70L70 122.586L17.4141 70L70 17.4141L122.586 70Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2"/></svg>',
        squareSharpCorner: '<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none"><path d="M70 21C97.062 21 119 42.938 119 70V119H70C42.938 119 21 97.062 21 70C21 42.938 42.938 21 70 21Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2"/></svg>',
        parallelogram: '<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none"><path d="M11.6084 33.5L47.6182 106.5H128.392L92.3818 33.5H11.6084Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2"/></svg>',
        line: '<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none"><path d="M16.5 69H123.5" stroke="white" stroke-width="2"/></svg>',
        arrow: '<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none"><path d="M124.207 70.7073C124.598 70.3168 124.598 69.6836 124.207 69.2931L117.843 62.9291C117.453 62.5386 116.819 62.5386 116.429 62.9291C116.038 63.3197 116.038 63.9528 116.429 64.3433L122.086 70.0002L116.429 75.6571C116.038 76.0476 116.038 76.6807 116.429 77.0713C116.819 77.4618 117.453 77.4618 117.843 77.0713L124.207 70.7073ZM16.5 70.0002V71.0002H123.5V70.0002V69.0002H16.5V70.0002Z" fill="white"/></svg>'
    };

    function getShapeCanvasSvg(typeId, fillColor, strokeColor, strokeWidth, contentSize) {
        var fill = fillColor || 'var(--app-accent)';
        var stroke = strokeColor || 'none';
        var sw = strokeWidth || 0;
        var ve = (sw > 0) ? ' vector-effect="non-scaling-stroke"' : '';
        var rw = 80, rh = 80, rx = 12;
        if (typeId === 'roundedSquare' && contentSize && contentSize.w > 0 && contentSize.h > 0) {
            rw = contentSize.w;
            rh = contentSize.h;
            var ratio = (contentSize.cornerRadiusRatio != null) ? contentSize.cornerRadiusRatio : 0.15;
            rx = Math.min(rw, rh) * Math.max(0.05, Math.min(0.5, ratio));
        }
        var strokeThenFill = function (strokeOnly, fillOnly) {
            return (sw > 0 && stroke !== 'none') ? (strokeOnly + fillOnly) : fillOnly;
        };
        var shapes = {
            square: strokeThenFill('<rect width="80" height="80" fill="none" stroke="' + stroke + '" stroke-width="' + sw + '"' + ve + '/>', '<rect width="80" height="80" fill="' + fill + '" stroke="none"/>'),
            roundedSquare: strokeThenFill('<rect width="' + rw + '" height="' + rh + '" rx="' + rx + '" fill="none" stroke="' + stroke + '" stroke-width="' + sw + '"' + ve + '/>', '<rect width="' + rw + '" height="' + rh + '" rx="' + rx + '" fill="' + fill + '" stroke="none"/>'),
            circle: strokeThenFill('<circle cx="40" cy="40" r="40" fill="none" stroke="' + stroke + '" stroke-width="' + sw + '"' + ve + '/>', '<circle cx="40" cy="40" r="40" fill="' + fill + '" stroke="none"/>'),
            hexagon: strokeThenFill('<path d="M40 4 L76 22 v36 L40 76 L4 58 V22 Z" fill="none" stroke="' + stroke + '" stroke-width="' + sw + '"' + ve + '/>', '<path d="M40 4 L76 22 v36 L40 76 L4 58 V22 Z" fill="' + fill + '" stroke="none"/>'),
            triangle: strokeThenFill('<path d="M40 4 L80 76 H0 Z" fill="none" stroke="' + stroke + '" stroke-width="' + sw + '"' + ve + '/>', '<path d="M40 4 L80 76 H0 Z" fill="' + fill + '" stroke="none"/>'),
            star: strokeThenFill('<path d="M47.77 31.23L47.9 31.54L48.24 31.57L67.29 33.69L53.04 47.19L52.81 47.41L52.87 47.72L56.84 67.41L40.3 57.37L40 57.19L39.7 57.37L23.16 67.41L27.13 47.72L27.19 47.41L26.96 47.19L12.71 33.69L31.76 31.57L32.1 31.54L32.23 31.23L40 12.89L47.77 31.23Z" fill="none" stroke="' + stroke + '" stroke-width="' + sw + '"' + ve + '/>', '<path d="M47.77 31.23L47.9 31.54L48.24 31.57L67.29 33.69L53.04 47.19L52.81 47.41L52.87 47.72L56.84 67.41L40.3 57.37L40 57.19L39.7 57.37L23.16 67.41L27.13 47.72L27.19 47.41L26.96 47.19L12.71 33.69L31.76 31.57L32.1 31.54L32.23 31.23L40 12.89L47.77 31.23Z" fill="' + fill + '" stroke="none"/>'),
            rhombus: strokeThenFill('<path d="M40 4 L76 40 L40 76 L4 40 Z" fill="none" stroke="' + stroke + '" stroke-width="' + sw + '"' + ve + '/>', '<path d="M40 4 L76 40 L40 76 L4 40 Z" fill="' + fill + '" stroke="none"/>'),
            squareSharpCorner: strokeThenFill('<path d="M40 12C55.46 12 68 24.54 68 40V68H40C24.54 68 12 55.46 12 40C12 24.54 24.54 12 40 12Z" fill="none" stroke="' + stroke + '" stroke-width="' + sw + '"' + ve + '/>', '<path d="M40 12C55.46 12 68 24.54 68 40V68H40C24.54 68 12 55.46 12 40C12 24.54 24.54 12 40 12Z" fill="' + fill + '" stroke="none"/>'),
            parallelogram: strokeThenFill('<path d="M20 4 h60 l20 36 h-60 L20 4z" fill="none" stroke="' + stroke + '" stroke-width="' + sw + '"' + ve + '/>', '<path d="M20 4 h60 l20 36 h-60 L20 4z" fill="' + fill + '" stroke="none"/>'),
            line: '<line x1="0" y1="10" x2="100" y2="10" stroke="' + (stroke && stroke !== 'none' ? stroke : fill) + '" stroke-width="' + sw + '" stroke-linecap="round"' + ve + '/>',
            arrow: (function () {
                var lineStroke = (stroke && stroke !== 'none') ? stroke : fill;
                var solidStroke = getOpaqueColor(lineStroke);
                var arrowAlpha = getAlphaFromColor(lineStroke);
                var headLen = 5 * (1 + Math.max(0, sw) / 4);
                var headW = 4 * (1 + Math.max(0, sw) / 4);
                var hx = 80 - headLen;
                var lineSeg = '<line x1="0" y1="12" x2="80" y2="12" stroke="' + solidStroke + '" stroke-width="' + sw + '" stroke-linecap="round"' + ve + '/>';
                var headSeg = '<path d="M80 12 L' + hx + ' ' + (12 - headW) + ' M80 12 L' + hx + ' ' + (12 + headW) + '" fill="none" stroke="' + solidStroke + '" stroke-width="' + sw + '" stroke-linecap="round" stroke-linejoin="round"' + ve + '/>';
                var inner = lineSeg + headSeg;
                return arrowAlpha < 1 ? ('<g opacity="' + arrowAlpha + '">' + inner + '</g>') : inner;
            })()
        };
        var vb = (typeId === 'line' || typeId === 'arrow') ? '0 0 100 24' : (typeId === 'roundedSquare' && contentSize && contentSize.w > 0 && contentSize.h > 0) ? ('0 0 ' + rw + ' ' + rh) : '0 0 80 80';
        return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + vb + '" width="100%" height="100%" preserveAspectRatio="none" overflow="visible">' + (shapes[typeId] || shapes.square) + '</svg>';
    }

    function getShapeViewBox(typeId) {
        if (typeId === 'hexagon') return { w: 72, h: 72 };
        if (typeId === 'star') return { w: 54.58, h: 54.52 };
        if (typeId === 'parallelogram') return { w: 80, h: 60 };
        if (typeId === 'squareSharpCorner') return { w: 56, h: 56 };
        return (typeId === 'line' || typeId === 'arrow') ? { w: 100, h: 24 } : { w: 80, h: 80 };
    }

    function getShapeCornerPoints(typeId) {
        var pts = {
            square: [[0, 0], [80, 0], [80, 80], [0, 80]],
            triangle: [[40, 4], [80, 76], [0, 76]],
            rhombus: [[40, 4], [76, 40], [40, 76], [4, 40]],
            parallelogram: [[0, 0], [60, 0], [80, 60], [20, 60]],
            squareSharpCorner: [[0, 0], [56, 0], [56, 56], [0, 56]],
            star: [[27.29, 0], [35.06, 18.34], [54.58, 20.8], [40.33, 34.3], [44.13, 54.52], [27.59, 44.48], [10.45, 54.52], [14.42, 34.83], [0, 20.8], [19.05, 18.68]],
            hexagon: [[36, 0], [72, 18], [72, 54], [36, 72], [0, 54], [0, 18]],
            line: [[0, 10], [100, 10]],
            arrow: [[0, 12], [80, 12]]
        };
        return pts[typeId] || pts.square;
    }

    function isPathBasedShape(sh) {
        if (!sh || !sh.typeId) return false;
        var id = sh.typeId;
        return id === 'square' || id === 'triangle' || id === 'rhombus' || id === 'parallelogram' || id === 'line' || id === 'arrow' || id === 'hexagon' || id === 'star' || id === 'squareSharpCorner';
    }

    function getShapePathModel(typeId, w, h) {
        var vb = getShapeViewBox(typeId);
        var pts = getShapeCornerPoints(typeId);
        var scaleX = w / vb.w;
        var scaleY = h / vb.h;
        var scaled = pts.map(function (p) {
            return [p[0] * scaleX, p[1] * scaleY];
        });
        var points = normalizeBezierPoints(scaled);
        ensureDefaultHandlePositions(points, typeId);
        return points;
    }

    function normalizeBezierPoints(points) {
        if (!points || points.length < 2) return points;
        return points.map(function (pt) {
            if (pt && pt.p && Array.isArray(pt.p)) return { p: pt.p.slice(), out: (pt.out && pt.out.slice()) || pt.p.slice(), in: (pt.in && pt.in.slice()) || pt.p.slice() };
            if (Array.isArray(pt) && pt.length >= 2) return { p: [pt[0], pt[1]], out: [pt[0], pt[1]], in: [pt[0], pt[1]] };
            return null;
        }).filter(Boolean);
    }

    function ensureDefaultHandlePositions(points, typeId) {
        if (!points || points.length < 2) return;
        var n = points.length;
        var isOpenPath = (typeId === 'line' || typeId === 'arrow') && n === 2;
        if (isOpenPath) {
            var p0 = points[0].p, p1 = points[1].p;
            points[0].in[0] = p0[0]; points[0].in[1] = p0[1];
            points[1].out[0] = p1[0]; points[1].out[1] = p1[1];
            var dx = (p1[0] - p0[0]) * 0.25, dy = (p1[1] - p0[1]) * 0.25;
            points[0].out[0] = p0[0] + dx; points[0].out[1] = p0[1] + dy;
            points[1].in[0] = p1[0] - dx; points[1].in[1] = p1[1] - dy;
            return;
        }
        function dist(a, b) { return Math.hypot(a[0] - b[0], a[1] - b[1]); }
        function unit(v) {
            var d = Math.hypot(v[0], v[1]);
            if (d < 1e-6) return [0, 0];
            return [v[0] / d, v[1] / d];
        }
        points.forEach(function (pt, i) {
            var p = pt.p, out = pt.out, inn = pt.in;
            var sameOut = p[0] === out[0] && p[1] === out[1];
            var sameIn = p[0] === inn[0] && p[1] === inn[1];
            if (!sameOut && !sameIn) return;
            var prev = points[(i - 1 + n) % n].p;
            var next = points[(i + 1) % n].p;
            var sidePrev = dist(p, prev);
            var sideNext = dist(p, next);
            var side = (sidePrev + sideNext) * 0.5;
            var handleLen = side * 0.25;
            if (handleLen < 1e-6) handleLen = 5;
            if (sameOut) {
                var toNext = [next[0] - p[0], next[1] - p[1]];
                var u = unit(toNext);
                pt.out[0] = p[0] + u[0] * handleLen;
                pt.out[1] = p[1] + u[1] * handleLen;
            }
            if (sameIn) {
                var toPrev = [prev[0] - p[0], prev[1] - p[1]];
                var u = unit(toPrev);
                pt.in[0] = p[0] + u[0] * handleLen;
                pt.in[1] = p[1] + u[1] * handleLen;
            }
        });
    }

    function getArrowheadGeometry(normalized, strokeWidth, arrowHeadLen, arrowHeadW) {
        if (!normalized || normalized.length < 2) return null;
        var p0 = normalized[0].p;
        var p1 = normalized[1].p;
        var i1 = normalized[1].in;
        var tx = p1[0] - i1[0], ty = p1[1] - i1[1];
        var tlen = Math.sqrt(tx * tx + ty * ty);
        if (tlen < 1e-6) {
            tx = p1[0] - p0[0];
            ty = p1[1] - p0[1];
            tlen = Math.sqrt(tx * tx + ty * ty);
        }
        tlen = tlen || 1;
        var ux = tx / tlen, uy = ty / tlen;
        var perpX = -uy, perpY = ux;
        var thickFactor = 1 + Math.max(0, strokeWidth || 0) / 4;
        var defaultHeadLen = 5 * thickFactor;
        var defaultHeadW = 4 * thickFactor;
        var headLen = (arrowHeadLen != null && arrowHeadLen >= defaultHeadLen) ? arrowHeadLen : defaultHeadLen;
        var headW = (arrowHeadW != null && arrowHeadW >= defaultHeadW) ? arrowHeadW : defaultHeadW;
        return {
            p1: p1,
            ux: ux, uy: uy,
            perpX: perpX, perpY: perpY,
            headLen: headLen, headW: headW,
            defaultHeadLen: defaultHeadLen, defaultHeadW: defaultHeadW,
            ax: p1[0] - headLen * ux - headW * perpX, ay: p1[1] - headLen * uy - headW * perpY,
            bx: p1[0] - headLen * ux + headW * perpX, by: p1[1] - headLen * uy + headW * perpY
        };
    }

    function buildShapePathFromPoints(typeId, points, fill, stroke, strokeWidth, arrowHeadLen, arrowHeadW) {
        if (!points || points.length < 2) return null;
        var normalized = normalizeBezierPoints(points);
        var n = normalized.length;
        var p0 = normalized[0].p;
        var d = 'M' + p0[0] + ' ' + p0[1];
        for (var i = 1; i < n; i++) {
            var prev = normalized[i - 1];
            var curr = normalized[i];
            d += ' C' + prev.out[0] + ' ' + prev.out[1] + ' ' + curr.in[0] + ' ' + curr.in[1] + ' ' + curr.p[0] + ' ' + curr.p[1];
        }
        var last = normalized[n - 1];
        var first = normalized[0];
        var isOpen = (typeId === 'line' || typeId === 'arrow') && n === 2;
        if (!isOpen) {
            d += ' C' + last.out[0] + ' ' + last.out[1] + ' ' + first.in[0] + ' ' + first.in[1] + ' ' + first.p[0] + ' ' + first.p[1];
            d += ' Z';
        }
        var vb = getShapeViewBox(typeId);
        var isLine = typeId === 'line' || typeId === 'arrow';
        var sw = strokeWidth || 0;
        var ve = (stroke !== 'none' && sw > 0) ? ' vector-effect="non-scaling-stroke"' : '';
        var lineStroke = (stroke && stroke !== 'none') ? stroke : fill;
        if (typeId === 'line') {
            return '<path d="' + d + '" fill="none" stroke="' + lineStroke + '" stroke-width="' + sw + '" stroke-linecap="round" stroke-linejoin="round"' + ve + '/>';
        }
        if (typeId === 'arrow') {
            var geom = getArrowheadGeometry(normalized, sw, arrowHeadLen, arrowHeadW);
            if (!geom) return null;
            var solidStroke = getOpaqueColor(lineStroke);
            var arrowAlpha = getAlphaFromColor(lineStroke);
            var linePath = '<path d="' + d + '" fill="none" stroke="' + solidStroke + '" stroke-width="' + sw + '" stroke-linecap="round" stroke-linejoin="round"' + ve + '/>';
            var arrowhead = '<path d="M' + geom.p1[0] + ' ' + geom.p1[1] + ' L' + geom.ax + ' ' + geom.ay + ' M' + geom.p1[0] + ' ' + geom.p1[1] + ' L' + geom.bx + ' ' + geom.by + '" fill="none" stroke="' + solidStroke + '" stroke-width="' + sw + '" stroke-linecap="round" stroke-linejoin="round"' + ve + '/>';
            return arrowAlpha < 1 ? ('<g opacity="' + arrowAlpha + '">' + linePath + arrowhead + '</g>') : (linePath + arrowhead);
        }
        if (sw > 0 && stroke !== 'none') {
            return '<path d="' + d + '" fill="none" stroke="' + stroke + '" stroke-width="' + sw + '"' + ve + ' stroke-linejoin="round" stroke-linecap="round"/>' +
                '<path d="' + d + '" fill="' + fill + '" stroke="none"/>';
        }
        var pathAttrs = 'd="' + d + '" fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + (strokeWidth || 0) + '"' + ve;
        if ((strokeWidth || 0) > 0) {
            pathAttrs += ' stroke-linejoin="round" stroke-linecap="round"';
        }
        return '<path ' + pathAttrs + '/>';
    }

    function getShapeCanvasSvgWithPoints(typeId, points, fillColor, strokeColor, strokeWidth, expansion) {
        var fill = fillColor || '#2563eb';
        var stroke = strokeColor || 'none';
        var sw = strokeWidth || 0;
        var vb = getShapeViewBox(typeId);
        var inner = buildShapePathFromPoints(typeId, points, fill, stroke, sw);
        if (!inner) return getShapeCanvasSvg(typeId, fillColor, strokeColor, strokeWidth);
        var viewBoxW = vb.w, viewBoxH = vb.h, svgInner = inner;
        if (expansion && expansion.width > 0 && expansion.height > 0) {
            viewBoxW = expansion.width;
            viewBoxH = expansion.height;
            svgInner = '<g transform="translate(' + (-expansion.minX) + ',' + (-expansion.minY) + ')">' + inner + '</g>';
        }
        return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + viewBoxW + ' ' + viewBoxH + '" width="100%" height="100%" preserveAspectRatio="none" overflow="visible">' + svgInner + '</svg>';
    }

    function cubicAt(t, p0, p1, p2, p3) {
        var u = 1 - t;
        var u2 = u * u, u3 = u2 * u, t2 = t * t, t3 = t2 * t;
        return [
            u3 * p0[0] + 3 * u2 * t * p1[0] + 3 * u * t2 * p2[0] + t3 * p3[0],
            u3 * p0[1] + 3 * u2 * t * p1[1] + 3 * u * t2 * p2[1] + t3 * p3[1]
        ];
    }
    function splitCubicRight(t, p0, p1, p2, p3) {
        var u = 1 - t;
        var p01 = [u * p0[0] + t * p1[0], u * p0[1] + t * p1[1]];
        var p12 = [u * p1[0] + t * p2[0], u * p1[1] + t * p2[1]];
        var p23 = [u * p2[0] + t * p3[0], u * p2[1] + t * p3[1]];
        var p012 = [u * p01[0] + t * p12[0], u * p01[1] + t * p12[1]];
        var p123 = [u * p12[0] + t * p23[0], u * p12[1] + t * p23[1]];
        var b = [u * p012[0] + t * p123[0], u * p012[1] + t * p123[1]];
        return [b, p123, p23, p3];
    }
    function splitCubicLeft(t, p0, p1, p2, p3) {
        var u = 1 - t;
        var p01 = [u * p0[0] + t * p1[0], u * p0[1] + t * p1[1]];
        var p12 = [u * p1[0] + t * p2[0], u * p1[1] + t * p2[1]];
        var p23 = [u * p2[0] + t * p3[0], u * p2[1] + t * p3[1]];
        var p012 = [u * p01[0] + t * p12[0], u * p01[1] + t * p12[1]];
        var p123 = [u * p12[0] + t * p23[0], u * p12[1] + t * p23[1]];
        var b = [u * p012[0] + t * p123[0], u * p012[1] + t * p123[1]];
        return [p0, p01, p012, b];
    }
    function pointOnCubicAtDistanceFromEnd(p0, p1, p2, p3, r) {
        if (r <= 0) return { point: p3.slice(), t: 1 };
        var dist = function (a, b) { return Math.hypot(a[0] - b[0], a[1] - b[1]); };
        var lo = 0.5, hi = 1;
        for (var step = 0; step < 24; step++) {
            var t = (lo + hi) / 2;
            var pt = cubicAt(t, p0, p1, p2, p3);
            var d = dist(pt, p3);
            if (Math.abs(d - r) < 1e-6) return { point: pt, t: t };
            if (d > r) lo = t; else hi = t;
        }
        return { point: cubicAt(lo, p0, p1, p2, p3), t: lo };
    }
    function pointOnCubicAtDistanceFromStart(p0, p1, p2, p3, r) {
        if (r <= 0) return { point: p0.slice(), t: 0 };
        var dist = function (a, b) { return Math.hypot(a[0] - b[0], a[1] - b[1]); };
        var lo = 0, hi = 0.5;
        for (var step = 0; step < 24; step++) {
            var t = (lo + hi) / 2;
            var pt = cubicAt(t, p0, p1, p2, p3);
            var d = dist(pt, p0);
            if (Math.abs(d - r) < 1e-6) return { point: pt, t: t };
            if (d < r) lo = t; else hi = t;
        }
        return { point: cubicAt(hi, p0, p1, p2, p3), t: hi };
    }
    function cubicSubSegment(t1, t2, p0, p1, p2, p3) {
        if (t1 >= t2 - 1e-9) return null;
        var right1 = splitCubicRight(t1, p0, p1, p2, p3);
        var tLocal = (t2 - t1) / (1 - t1);
        if (tLocal <= 1e-9) return null;
        if (tLocal >= 1 - 1e-9) return right1;
        return splitCubicLeft(tLocal, right1[0], right1[1], right1[2], right1[3]);
    }
    function buildBezierPathWithRoundedCorners(pathModel, radius) {
        if (!pathModel || pathModel.length < 3) return '';
        var n = pathModel.length;
        var pts = pathModel.slice(0, n);
        var r = Math.max(0, radius);
        function dist(a, b) { return Math.hypot(a[0] - b[0], a[1] - b[1]); }
        var trimEnd = [], trimStart = [], tEnd = [], tStart = [];
        for (var i = 0; i < n; i++) {
            var prev = pts[(i - 1 + n) % n];
            var curr = pts[i];
            var next = pts[(i + 1) % n];
            var segLenIn = dist(prev.p, curr.p);
            var segLenOut = dist(curr.p, next.p);
            var rMax = Math.min(segLenIn, segLenOut) * 0.49;
            var rUsed = Math.min(r, rMax);
            var endRes = pointOnCubicAtDistanceFromEnd(prev.p, prev.out, curr.in, curr.p, rUsed);
            trimEnd[i] = endRes.point;
            tEnd[i] = endRes.t;
            var startRes = pointOnCubicAtDistanceFromStart(curr.p, curr.out, next.in, next.p, rUsed);
            trimStart[i] = startRes.point;
            tStart[i] = startRes.t;
        }
        var d = 'M' + trimEnd[0][0] + ' ' + trimEnd[0][1];
        for (var j = 0; j < n; j++) {
            var curr = pts[j];
            var next = pts[(j + 1) % n];
            d += ' Q' + curr.p[0] + ' ' + curr.p[1] + ' ' + trimStart[j][0] + ' ' + trimStart[j][1];
            var tS = tStart[j];
            var tE = tEnd[(j + 1) % n];
            if (tE > tS + 1e-9) {
                var sub = cubicSubSegment(tS, tE, curr.p, curr.out, next.in, next.p);
                if (sub) d += ' C' + sub[1][0] + ' ' + sub[1][1] + ' ' + sub[2][0] + ' ' + sub[2][1] + ' ' + sub[3][0] + ' ' + sub[3][1];
            }
        }
        return d + ' Z';
    }
    function buildRoundedPolygonPath(vertices, radius) {
        if (!vertices || vertices.length < 3) return '';
        var n = vertices.length;
        function dist(a, b) { return Math.hypot(a[0] - b[0], a[1] - b[1]); }
        function unit(v) {
            var d = Math.hypot(v[0], v[1]);
            if (d < 1e-9) return [0, 0];
            return [v[0] / d, v[1] / d];
        }
        var Q1 = [], Q2 = [];
        for (var i = 0; i < n; i++) {
            var prev = vertices[(i - 1 + n) % n];
            var curr = vertices[i];
            var next = vertices[(i + 1) % n];
            var rMax = Math.min(dist(prev, curr) / 2, dist(curr, next) / 2);
            var rUsed = Math.min(radius, Math.max(0, rMax));
            var toPrev = [curr[0] - prev[0], curr[1] - prev[1]];
            var toNext = [curr[0] - next[0], curr[1] - next[1]];
            var uPrev = unit(toPrev), uNext = unit(toNext);
            Q1.push([curr[0] - uPrev[0] * rUsed, curr[1] - uPrev[1] * rUsed]);
            Q2.push([curr[0] - uNext[0] * rUsed, curr[1] - uNext[1] * rUsed]);
        }
        var d = 'M' + Q2[n - 1][0] + ' ' + Q2[n - 1][1];
        for (var j = 0; j < n; j++) {
            d += ' L' + Q1[j][0] + ' ' + Q1[j][1] + ' Q' + vertices[j][0] + ' ' + vertices[j][1] + ' ' + Q2[j][0] + ' ' + Q2[j][1];
        }
        return d + ' Z';
    }

    function buildStarPathWithOptions(pathModel, w, h, cornerRadiusRatio, starInnerRatio) {
        if (!pathModel || pathModel.length !== 10) return '';
        var outerIdx = [0, 2, 4, 6, 8];
        var innerIdx = [1, 3, 5, 7, 9];
        var pts = pathModel.map(function (pt) { return pt.p.slice(); });
        var cx = 0, cy = 0;
        outerIdx.forEach(function (i) { cx += pts[i][0]; cy += pts[i][1]; });
        cx /= 5;
        cy /= 5;
        var innerRatio = (starInnerRatio != null && starInnerRatio > 0) ? Math.max(0.1, Math.min(2, starInnerRatio)) : 1;
        var vertices = pts.map(function (p, i) {
            if (innerIdx.indexOf(i) >= 0) {
                return [cx + (p[0] - cx) * innerRatio, cy + (p[1] - cy) * innerRatio];
            }
            return p.slice();
        });
        var r = (cornerRadiusRatio != null && cornerRadiusRatio > 0) ? Math.min(w, h) * Math.max(0.02, Math.min(0.4, cornerRadiusRatio)) : 0;
        function dist(a, b) { return Math.hypot(a[0] - b[0], a[1] - b[1]); }
        function unit(v) {
            var d = Math.hypot(v[0], v[1]);
            if (d < 1e-9) return [0, 0];
            return [v[0] / d, v[1] / d];
        }
        var Q1 = [], Q2 = [];
        for (var i = 0; i < 10; i++) {
            if (outerIdx.indexOf(i) < 0 || r <= 0) { Q1.push(vertices[i].slice()); Q2.push(vertices[i].slice()); continue; }
            var prev = vertices[(i - 1 + 10) % 10];
            var curr = vertices[i];
            var next = vertices[(i + 1) % 10];
            var rMax = Math.min(dist(prev, curr) / 2, dist(curr, next) / 2);
            var rUsed = Math.min(r, Math.max(0, rMax));
            var toPrev = [curr[0] - prev[0], curr[1] - prev[1]];
            var toNext = [curr[0] - next[0], curr[1] - next[1]];
            var uPrev = unit(toPrev), uNext = unit(toNext);
            Q1.push([curr[0] - uPrev[0] * rUsed, curr[1] - uPrev[1] * rUsed]);
            Q2.push([curr[0] - uNext[0] * rUsed, curr[1] - uNext[1] * rUsed]);
        }
        var d = 'M' + vertices[9][0] + ' ' + vertices[9][1];
        for (var j = 0; j < 10; j++) {
            if (outerIdx.indexOf(j) >= 0 && r > 0) {
                d += ' L' + Q1[j][0] + ' ' + Q1[j][1] + ' Q' + vertices[j][0] + ' ' + vertices[j][1] + ' ' + Q2[j][0] + ' ' + Q2[j][1];
            } else {
                d += ' L' + vertices[j][0] + ' ' + vertices[j][1];
            }
        }
        return d + ' Z';
    }

    function buildCommentPath(w, h, cornerRadiusRatio) {
        var sx = w / 56, sy = h / 56;
        var x0 = 28 * sx, c1x = 43.46 * sx, c2y = 12.54 * sy, endy = 28 * sy;
        var c2x = 56 * sx, endx = 56 * sx;
        var x1 = 12.54 * sx, y1 = 43.46 * sy, y2 = 28 * sy, x2 = 12.54 * sx, y3 = 12.54 * sy;
        var base = 'M' + x0 + ' 0 C' + c1x + ' 0 ' + c2x + ' ' + c2y + ' ' + endx + ' ' + endy;
        var r = (cornerRadiusRatio != null && cornerRadiusRatio > 0) ? Math.min(w, h) * Math.max(0.02, Math.min(0.5, cornerRadiusRatio)) : 0;
        var rMax = Math.min(w, h) * 0.49;
        r = r > 0 ? Math.min(r, rMax) : 0;
        var br = r <= 0
            ? ' L' + w + ' ' + h + ' L' + x0 + ' ' + h
            : ' L' + w + ' ' + (h - r) + ' Q' + w + ' ' + h + ' ' + (w - r) + ' ' + h + ' L' + x0 + ' ' + h;
        return base + br + ' C' + x1 + ' ' + h + ' 0 ' + y1 + ' 0 ' + y2 + ' C0 ' + y3 + ' ' + x2 + ' 0 ' + x0 + ' 0Z';
    }

    function getShapeCanvasSvgFromPathModel(typeId, pathModel, w, h, fillColor, strokeColor, strokeWidth, cornerRadiusRatio, starInnerRatio, arrowHeadLen, arrowHeadW) {
        var fill = fillColor || '#2563eb';
        var stroke = strokeColor || 'none';
        var sw = strokeWidth || 0;
        var inner;
        var useRoundedHexagon = typeId === 'hexagon' && pathModel && pathModel.length >= 6 && cornerRadiusRatio != null && cornerRadiusRatio > 0 && !state.shapeBezierMode;
        var useRoundedTriangle = typeId === 'triangle' && pathModel && pathModel.length >= 3 && cornerRadiusRatio != null && cornerRadiusRatio > 0 && !state.shapeBezierMode;
        var useRoundedRhombus = typeId === 'rhombus' && pathModel && pathModel.length >= 4 && cornerRadiusRatio != null && cornerRadiusRatio > 0 && !state.shapeBezierMode;
        var useRoundedParallelogram = typeId === 'parallelogram' && pathModel && pathModel.length >= 4 && cornerRadiusRatio != null && cornerRadiusRatio > 0 && !state.shapeBezierMode;
        var useStar = typeId === 'star' && pathModel && pathModel.length === 10;
        var useComment = typeId === 'squareSharpCorner' && pathModel && pathModel.length >= 4;
        var strokeThenFillPath = function (d, veStr) {
            if (sw > 0 && stroke !== 'none') {
                return '<path d="' + d + '" fill="none" stroke="' + stroke + '" stroke-width="' + sw + '"' + (veStr || '') + ' stroke-linejoin="round" stroke-linecap="round"/>' +
                    '<path d="' + d + '" fill="' + fill + '" stroke="none"/>';
            }
            return '<path d="' + d + '" fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + sw + '"' + (veStr || '') + ' stroke-linejoin="round" stroke-linecap="round"/>';
        };
        if (useComment) {
            var dComment = buildCommentPath(w, h, cornerRadiusRatio != null ? cornerRadiusRatio : 0);
            var veComment = (sw > 0) ? ' vector-effect="non-scaling-stroke"' : '';
            inner = strokeThenFillPath(dComment, veComment);
        } else if (useRoundedRhombus) {
            var rRhombus = Math.min(w, h) * Math.max(0.05, Math.min(0.5, cornerRadiusRatio));
            var dRhombus = buildBezierPathWithRoundedCorners(pathModel, rRhombus);
            var veRhombus = (sw > 0) ? ' vector-effect="non-scaling-stroke"' : '';
            inner = strokeThenFillPath(dRhombus, veRhombus);
        } else if (useRoundedParallelogram) {
            var rPar = Math.min(w, h) * Math.max(0.05, Math.min(0.5, cornerRadiusRatio));
            var dPar = buildBezierPathWithRoundedCorners(pathModel, rPar);
            var vePar = (sw > 0) ? ' vector-effect="non-scaling-stroke"' : '';
            inner = strokeThenFillPath(dPar, vePar);
        } else if (useStar) {
            var dStar = buildStarPathWithOptions(pathModel, w, h, cornerRadiusRatio, starInnerRatio != null ? starInnerRatio : 1);
            var veStar = (sw > 0) ? ' vector-effect="non-scaling-stroke"' : '';
            inner = strokeThenFillPath(dStar, veStar);
        } else if (useRoundedHexagon) {
            var r = Math.min(w, h) * Math.max(0.05, Math.min(0.5, cornerRadiusRatio));
            var d = buildBezierPathWithRoundedCorners(pathModel, r);
            var ve = (sw > 0) ? ' vector-effect="non-scaling-stroke"' : '';
            inner = strokeThenFillPath(d, ve);
        } else if (useRoundedTriangle) {
            var rTri = Math.min(w, h) * Math.max(0.05, Math.min(0.5, cornerRadiusRatio));
            var dTri = buildBezierPathWithRoundedCorners(pathModel, rTri);
            var veTri = (sw > 0) ? ' vector-effect="non-scaling-stroke"' : '';
            inner = strokeThenFillPath(dTri, veTri);
        } else {
            inner = buildShapePathFromPoints(typeId, pathModel, fill, stroke, sw, arrowHeadLen, arrowHeadW);
        }
        if (!inner) return '';
        return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + w + ' ' + h + '" width="100%" height="100%" preserveAspectRatio="none" overflow="visible">' + inner + '</svg>';
    }

    function renderShapeFromModel(sh) {
        if (!sh || !sh.el) return;
        var el = sh.el;
        var sw = (sh.strokeWidth || 0);
        if (isPathBasedShape(sh) && sh.pathModel && sh.pathModel.length >= 2) {
            var cx = sh.cx;
            var cy = sh.cy;
            var w = sh.w;
            var h = sh.h;
            var rot = (sh.rot != null ? sh.rot : 0);
            el.style.left = (cx - w / 2) + 'px';
            el.style.top = (cy - h / 2) + 'px';
            el.style.width = w + 'px';
            el.style.height = h + 'px';
            el.style.transformOrigin = 'center center';
            el.style.transform = rot ? 'rotate(' + rot + 'deg)' : '';
            el.innerHTML = getShapeCanvasSvgFromPathModel(sh.typeId, sh.pathModel, w, h, sh.fill || '#2563eb', (sh.stroke && sh.stroke !== 'none') ? sh.stroke : 'none', sw, sh.cornerRadiusRatio, sh.starInnerRatio, sh.arrowHeadLen, sh.arrowHeadW);
        } else {
            var baseLeft = (sh.x != null ? sh.x : 0) - sw;
            var baseTop = (sh.y != null ? sh.y : 0) - sw;
            var baseW = (sh.contentW != null ? sh.contentW : 80) + 2 * sw;
            var baseH = (sh.contentH != null ? sh.contentH : 80) + 2 * sw;
            el.style.left = baseLeft + 'px';
            el.style.top = baseTop + 'px';
            el.style.width = baseW + 'px';
            el.style.height = baseH + 'px';
            el.style.transformOrigin = 'center center';
            el.style.transform = (sh.rotation != null ? sh.rotation : 0) ? 'rotate(' + (sh.rotation || 0) + 'deg)' : '';
            var contentSize = (sh.typeId === 'roundedSquare' && sh.contentW > 0 && sh.contentH > 0) ? { w: sh.contentW, h: sh.contentH, cornerRadiusRatio: sh.cornerRadiusRatio } : undefined;
            el.innerHTML = getShapeCanvasSvg(sh.typeId, sh.fill || '#2563eb', (sh.stroke && sh.stroke !== 'none') ? sh.stroke : 'none', sw, contentSize);
        }
        if (state.shapeBezierMode && state.selectedShapeId != null && state.overlayShapes[state.selectedShapeId] === sh) updateShapeBezierOverlay();
    }

    var stateBySlot = {};

    function getSlotKey(network, size) {
        if (!size) return null;
        return network + '_' + size.w + '_' + size.h;
    }

    function parseSlotKey(key) {
        if (!key) return null;
        var parts = key.split('_');
        if (parts.length < 3) return null;
        return {
            network: parts.slice(0, -2).join('_'),
            w: parseInt(parts[parts.length - 2], 10),
            h: parseInt(parts[parts.length - 1], 10)
        };
    }

    function restoreCurrentSlot(key) {
        if (!key || !stateBySlot[key]) return;
        var info = parseSlotKey(key);
        if (!info) return;
        state.network = info.network;
        state.size = { w: info.w, h: info.h };
        resultContainer.style.width = info.w + 'px';
        resultContainer.style.height = info.h + 'px';
        restoreSlot(stateBySlot[key]);
        requestViewportUpdate();
    }

    function urlToDataURL(url) {
        return fetch(url).then(function (r) { return r.blob(); }).then(function (blob) {
            return new Promise(function (res, rej) {
                var r = new FileReader();
                r.onload = function () { res(r.result); };
                r.onerror = rej;
                r.readAsDataURL(blob);
            });
        });
    }

    function serializeSlotState() {
        var key = getSlotKey(state.network, state.size);
        if (!key) return Promise.resolve(null);
        var hasContent = !!state.bgUrl || state.overlayImages.some(Boolean) || state.overlayTexts.length > 0 || state.overlayShapes.length > 0;
        if (!hasContent) return Promise.resolve({ empty: true });

        var promises = [];
        var bgDataUrl = null;
        if (state.bgUrl) {
            promises.push(urlToDataURL(state.bgUrl).then(function (dataUrl) { bgDataUrl = dataUrl; }));
        }
        var overlayImagesData = [];
        state.overlayImages.forEach(function (data, i) {
            if (!data || !data.url) return;
            var el = data.el;
            var baseW = el ? (parseFloat(el.style.width) || el.offsetWidth) : null;
            var baseH = el ? (parseFloat(el.style.height) || el.offsetHeight) : null;
            var scale = data.scale || 1;
            /* Preserve visual size (base × scale) so wheel zoom is not lost on size change */
            var w = baseW != null && !isNaN(baseW) ? baseW * scale : null;
            var h = baseH != null && !isNaN(baseH) ? baseH * scale : null;
            var idx = overlayImagesData.length;
            overlayImagesData.push({
                slotIndex: i,
                scale: 1,
                x: data.x || 0,
                y: data.y || 0,
                rotation: (data.rotation != null ? data.rotation : 0),
                width: w && !isNaN(w) ? w : undefined,
                height: h && !isNaN(h) ? h : undefined,
                dataURL: null
            });
            promises.push(urlToDataURL(data.url).then(function (dataUrl) { overlayImagesData[idx].dataURL = dataUrl; }));
        });

        return Promise.all(promises).then(function () {
            var texts = state.overlayTexts.map(function (t) {
                var el = t.el;
                var manual = el && el.dataset.manuallyResized;
                var w = el ? parseFloat(el.style.width) : null;
                var h = el ? el.style.height : null;
                return {
                    layerId: t.layerId,
                    content: el ? el.innerHTML : '',
                    fontFamily: el ? (el.style.fontFamily || el.dataset.font || 'Inter') : 'Inter',
                    fontSize: el ? (el.style.fontSize || '24px') : '24px',
                    color: el ? (el.style.color || el.dataset.color || '#2563eb') : '#2563eb',
                    x: t.x,
                    y: t.y,
                    rotation: t.rotation != null ? t.rotation : 0,
                    manuallyResized: !!manual,
                    width: w && !isNaN(w) ? w : undefined,
                    height: manual && h ? h : undefined
                };
            });
            var overlayShapesData = state.overlayShapes.map(function (s) {
                if (!s || !s.el) return null;
                var rot = (s.rot != null ? s.rot : (s.rotation != null ? s.rotation : 0));
                var sw = (s.strokeWidth || 0);
                if (isPathBasedShape(s) && s.pathModel) {
                    return {
                        layerId: s.layerId,
                        typeId: s.typeId,
                        cx: s.cx,
                        cy: s.cy,
                        w: s.w,
                        h: s.h,
                        rot: rot,
                        pathModel: s.pathModel.map(function (p) {
                            return { p: p.p.slice(), in: p.in.slice(), out: p.out.slice() };
                        }),
                        fill: s.fill || '#2563eb',
                        stroke: s.stroke && s.stroke !== 'none' ? s.stroke : 'none',
                        strokeWidth: sw,
                        x: s.cx - s.w / 2 + sw,
                        y: s.cy - s.h / 2 + sw,
                        contentW: s.w - 2 * sw,
                        contentH: s.h - 2 * sw,
                        rotation: rot,
                        cornerRadiusRatio: ((s.typeId === 'hexagon' || s.typeId === 'triangle' || s.typeId === 'star' || s.typeId === 'rhombus' || s.typeId === 'parallelogram' || s.typeId === 'squareSharpCorner') && s.cornerRadiusRatio != null) ? s.cornerRadiusRatio : undefined,
                        starInnerRatio: (s.typeId === 'star' && s.starInnerRatio != null) ? s.starInnerRatio : undefined,
                        arrowHeadLen: (s.typeId === 'arrow' && s.arrowHeadLen != null) ? s.arrowHeadLen : undefined,
                        arrowHeadW: (s.typeId === 'arrow' && s.arrowHeadW != null) ? s.arrowHeadW : undefined
                    };
                }
                return {
                    layerId: s.layerId,
                    typeId: s.typeId,
                    x: s.x,
                    y: s.y,
                    fill: s.fill || '#2563eb',
                    stroke: s.stroke && s.stroke !== 'none' ? s.stroke : 'none',
                    strokeWidth: sw,
                    rotation: rot,
                    contentW: s.contentW,
                    contentH: s.contentH,
                    cornerRadiusRatio: (s.typeId === 'roundedSquare' && s.cornerRadiusRatio != null) ? s.cornerRadiusRatio : undefined,
                    bezierPoints: s.bezierPoints ? s.bezierPoints.map(function (p) {
                        return { p: p.p.slice(), in: p.in.slice(), out: p.out.slice() };
                    }) : undefined
                };
            }).filter(Boolean);
            return {
                empty: false,
                bg: bgDataUrl ? { dataURL: bgDataUrl, offsetX: state.bgOffsetX, offsetY: state.bgOffsetY, zoom: state.bgZoom, imageWidth: state.bgImageWidth, imageHeight: state.bgImageHeight } : null,
                overlayImages: overlayImagesData,
                overlayTexts: texts,
                overlayShapes: overlayShapesData,
                layersOrder: state.layersOrder.slice(),
                isHarmonized: state.isHarmonized
            };
        });
    }

    function saveCurrentStateToSlot(key) {
        if (!key) return Promise.resolve();
        return serializeSlotState().then(function (data) {
            if (data && !data.empty) stateBySlot[key] = data;
            else stateBySlot[key] = null;
            updateSizeReadyIcons();
        }).catch(function (err) { console.error('Save slot failed:', err); });
    }

    var MAX_UNDO = 10;
    var undoBySlot = {};
    var redoBySlot = {};
    var _isUndoRedo = false;

    function getUndoStack(key) {
        if (!undoBySlot[key]) undoBySlot[key] = [];
        return undoBySlot[key];
    }
    function getRedoStack(key) {
        if (!redoBySlot[key]) redoBySlot[key] = [];
        return redoBySlot[key];
    }

    function pushUndoState() {
        if (_isUndoRedo) return Promise.resolve();
        var key = getSlotKey(state.network, state.size);
        if (!key) return Promise.resolve();
        return serializeSlotState().then(function (data) {
            if (!data) return;
            var stack = getUndoStack(key);
            stack.push(data);
            if (stack.length > MAX_UNDO) stack.shift();
            redoBySlot[key] = [];
            updateUndoRedoButtons();
        }).catch(function (err) { console.error('Push undo failed:', err); });
    }

    function performUndo() {
        var key = getSlotKey(state.network, state.size);
        if (!key) return;
        var stack = getUndoStack(key);
        if (stack.length === 0) return;
        var item = stack.pop();
        serializeSlotState().then(function (currentData) {
            if (currentData) getRedoStack(key).push(currentData);
            _isUndoRedo = true;
            restoreSlot(item);
            _isUndoRedo = false;
            updateButtons();
            updateLayersList();
            updateTextFloatToolbarVisibility();
            updateSelectionFrame();
            updateUndoRedoButtons();
            updateSizeReadyIcons();
        }).catch(function (err) { console.error('Undo failed:', err); });
    }

    function performRedo() {
        var key = getSlotKey(state.network, state.size);
        if (!key) return;
        var stack = getRedoStack(key);
        if (stack.length === 0) return;
        var item = stack.pop();
        serializeSlotState().then(function (currentData) {
            if (currentData) {
                var uStack = getUndoStack(key);
                uStack.push(currentData);
                if (uStack.length > MAX_UNDO) uStack.shift();
            }
            _isUndoRedo = true;
            restoreSlot(item);
            _isUndoRedo = false;
            updateButtons();
            updateLayersList();
            updateTextFloatToolbarVisibility();
            updateSelectionFrame();
            updateUndoRedoButtons();
            updateSizeReadyIcons();
        }).catch(function (err) { console.error('Redo failed:', err); });
    }

    function updateUndoRedoButtons() {
        var key = getSlotKey(state.network, state.size);
        var canUndo = key && getUndoStack(key).length > 0;
        var canRedo = key && getRedoStack(key).length > 0;
        var undoBtnEl = $('undoBtn');
        var redoBtnEl = $('redoBtn');
        if (undoBtnEl) undoBtnEl.disabled = !canUndo;
        if (redoBtnEl) redoBtnEl.disabled = !canRedo;
    }

    function clearDomOnly() {
        resetFilters();
        if (state.bgUrl) URL.revokeObjectURL(state.bgUrl);
        state.bgUrl = null;
        state.bgOffsetX = 0;
        state.bgOffsetY = 0;
        state.bgZoom = 1;
        state.bgImageWidth = null;
        state.bgImageHeight = null;
        bgLayer.style.backgroundImage = '';
        bgLayer.style.backgroundPosition = '';
        bgLayer.style.backgroundSize = '';
        if (bgLayer._bgDragCleanup) { bgLayer._bgDragCleanup(); }
        state.overlayImages.forEach(function (data, i) {
            if (data) {
                if (data.url) URL.revokeObjectURL(data.url);
                if (data.el && data.el.parentNode) data.el.parentNode.removeChild(data.el);
            }
        });
        state.overlayImages = [];
        state.nextImageSlot = 0;
        state.overlayTexts.forEach(function (t) {
            if (t.el && t.el.parentNode) t.el.parentNode.removeChild(t.el);
        });
        state.overlayTexts = [];
        state.overlayShapes.forEach(function (s) {
            if (s && s.el && s.el.parentNode) s.el.parentNode.removeChild(s.el);
        });
        state.overlayShapes = [];
        state.selectedTextId = null;
        state.selectedImageSlot = null;
        state.selectedShapeId = null;
        state.layersOrder = ['background'];
        updateTextFloatToolbarVisibility();
        updateShapeToolbarVisibility();
        updateSelectionFrame();
        updateLayersList();
        updateButtons();
    }

    function restoreSlot(data) {
        if (!data || data.empty) { clearDomOnly(); return; }
        clearDomOnly();
        state.layersOrder = data.layersOrder ? data.layersOrder.slice() : ['background'];
        state.isHarmonized = !!data.isHarmonized;
        if (data.isHarmonized && resultContainer) {
            resultContainer.classList.add('harmonized');
            if (harmonizeOverlay) harmonizeOverlay.style.display = 'block';
        }
        if (data.bg && data.bg.dataURL) {
            state.bgUrl = data.bg.dataURL;
            state.bgOffsetX = data.bg.offsetX || 0;
            state.bgOffsetY = data.bg.offsetY || 0;
            state.bgZoom = data.bg.zoom || 1;
            state.bgImageWidth = data.bg.imageWidth || null;
            state.bgImageHeight = data.bg.imageHeight || null;
            bgLayer.style.backgroundImage = 'url(' + data.bg.dataURL + ')';
            applyBgPosition();
            initBgLayerDrag();
        }
        (data.overlayImages || []).forEach(function (item) {
            if (!item.dataURL) return;
            var slotIndex = item.slotIndex != null ? item.slotIndex : 0;
            var url = item.dataURL;
            var draggable = createDraggableImage(url, slotIndex);
            var imgRotation = (item.rotation != null ? item.rotation : 0);
            state.overlayImages[slotIndex] = { url: url, file: null, el: draggable, scale: item.scale || 1, x: item.x || 0, y: item.y || 0, rotation: imgRotation };
            overlayLayer.appendChild(draggable);
            draggable.style.left = (item.x || 0) + 'px';
            draggable.style.top = (item.y || 0) + 'px';
            draggable.style.transformOrigin = 'center center';
            if (imgRotation) draggable.style.transform = 'rotate(' + imgRotation + 'deg)';
            var savedW = item.width && !isNaN(item.width) ? item.width : null;
            var savedH = item.height && !isNaN(item.height) ? item.height : null;
            var img = draggable.querySelector('img');
            if (savedW && savedH) {
                draggable.style.width = savedW + 'px';
                draggable.style.height = savedH + 'px';
                draggable.dataset.scale = '1';
                draggable.style.transform = (imgRotation ? 'rotate(' + imgRotation + 'deg) ' : '') + 'scale(1)';
                draggable.dataset.originalWidth = String(savedW);
                draggable.dataset.originalHeight = String(savedH);
                draggable.dataset.aspectRatio = String(savedW / savedH);
                if (img) {
                    img.onload = function () {
                        draggable.dataset.aspectRatio = String(savedW / savedH);
                    };
                }
            } else {
                draggable.dataset.scale = String(item.scale || 1);
                draggable.style.transform = (imgRotation ? 'rotate(' + imgRotation + 'deg) ' : '') + 'scale(' + (item.scale || 1) + ')';
                if (img) {
                    img.onload = function () {
                        if (!state.size) return;
                        var maxW = state.size.w * 0.5;
                        var maxH = state.size.h * 0.5;
                        var w = img.naturalWidth || 100;
                        var h = img.naturalHeight || 100;
                        if (w > maxW || h > maxH) {
                            var r = Math.min(maxW / w, maxH / h);
                            w *= r;
                            h *= r;
                        }
                        draggable.style.width = w + 'px';
                        draggable.style.height = h + 'px';
                        draggable.dataset.originalWidth = String(w);
                        draggable.dataset.originalHeight = String(h);
                    };
                }
            }
            state.nextImageSlot = Math.max(state.nextImageSlot, slotIndex + 1);
        });
        (data.overlayTexts || []).forEach(function (item) {
            var div = document.createElement('div');
            div.className = 'text-item';
            div.contentEditable = 'true';
            div.dataset.placeholder = 'Enter text…';
            div.innerHTML = item.content || '';
            div.style.fontFamily = (item.fontFamily && item.fontFamily.indexOf("'") === -1 ? "'" + item.fontFamily + "', sans-serif" : item.fontFamily) || "'Inter', sans-serif";
            div.style.fontSize = item.fontSize || '24px';
            div.style.color = item.color || '#2563eb';
            div.style.left = (item.x || 0) + 'px';
            div.style.top = (item.y || 0) + 'px';
            div.style.minWidth = '80px';
            var textRotation = item.rotation != null ? item.rotation : 0;
            if (textRotation) div.style.transform = 'rotate(' + textRotation + 'deg)';
            if (item.manuallyResized && item.height) { div.style.height = item.height; div.style.overflow = 'hidden'; div.dataset.manuallyResized = '1'; }
            if (item.width) { div.style.width = item.width + 'px'; div.style.minWidth = item.width + 'px'; }
            div.dataset.font = (item.fontFamily && item.fontFamily.replace(/'/g, '')) || 'Inter';
            div.dataset.color = item.color || '#2563eb';
            overlayLayer.appendChild(div);
            var layerId = item.layerId || ('text-' + (state.nextTextId++));
            state.overlayTexts.push({ el: div, x: item.x || 0, y: item.y || 0, layerId: layerId, rotation: textRotation });
            var idx = state.overlayTexts.length - 1;
            makeTextDraggable(div, idx);
            div.addEventListener('input', function () {
                if (!div.dataset.manuallyResized) { div.style.height = 'auto'; div.style.overflow = ''; }
                updateLayersList();
            });
            div.addEventListener('blur', function onBlur() {
                if (!div.textContent.trim()) {
                    div.remove();
                    var i = state.overlayTexts.findIndex(function (t) { return t.el === div; });
                    if (i >= 0) {
                        var lid = state.overlayTexts[i].layerId;
                        state.overlayTexts.splice(i, 1);
                        state.layersOrder = state.layersOrder.filter(function (x) { return x !== lid; });
                        if (state.selectedTextId === i) state.selectedTextId = null;
                        else if (state.selectedTextId !== null && state.selectedTextId > i) state.selectedTextId--;
                    }
                    updateLayersList();
                    updateButtons();
                }
            });
        });
        (data.overlayShapes || []).forEach(function (item) {
            var typeId = item.typeId || 'square';
            var def = SHAPE_TYPES.find(function (d) { return d.id === typeId; });
            if (!def) return;
            var layerId = item.layerId || ('shape-' + (state.nextShapeId++));
            var sw = item.strokeWidth || 0;
            var fill = item.fill || '#2563eb';
            var stroke = (item.stroke && item.stroke !== 'none') ? item.stroke : 'none';
            var wrap = document.createElement('div');
            wrap.className = 'shape-item';
            wrap.dataset.layerId = layerId;
            wrap.dataset.shapeType = typeId;
            wrap.style.position = 'absolute';
            wrap.style.pointerEvents = 'auto';
            var shapeData;
            var isPathBased = isPathBasedShape({ typeId: typeId });
            if (isPathBased && (item.cx != null || (item.x != null && item.contentW != null))) {
                var cx = item.cx != null ? item.cx : (item.x + (item.contentW || 0) / 2);
                var cy = item.cy != null ? item.cy : (item.y + (item.contentH || 0) / 2);
                var w = item.w != null ? item.w : ((item.contentW != null ? item.contentW : 80) + 2 * sw);
                var h = item.h != null ? item.h : ((item.contentH != null ? item.contentH : 80) + 2 * sw);
                var rot = (item.rot != null ? item.rot : (item.rotation != null ? item.rotation : 0));
                var pathModel;
                if (item.pathModel && item.pathModel.length >= 2) {
                    pathModel = normalizeBezierPoints(item.pathModel);
                } else if (item.bezierPoints && item.bezierPoints.length >= 2) {
                    var vb = getShapeViewBox(typeId);
                    var scaleX = w / vb.w;
                    var scaleY = h / vb.h;
                    pathModel = normalizeBezierPoints(item.bezierPoints.map(function (p) {
                        var pt = p && p.p ? p : { p: p, in: p, out: p };
                        return {
                            p: [pt.p[0] * scaleX, pt.p[1] * scaleY],
                            in: [(pt.in[0] != null ? pt.in[0] : pt.p[0]) * scaleX, (pt.in[1] != null ? pt.in[1] : pt.p[1]) * scaleY],
                            out: [(pt.out[0] != null ? pt.out[0] : pt.p[0]) * scaleX, (pt.out[1] != null ? pt.out[1] : pt.p[1]) * scaleY]
                        };
                    }));
                    ensureDefaultHandlePositions(pathModel, typeId);
                } else {
                    pathModel = getShapePathModel(typeId, w, h);
                }
                shapeData = {
                    el: wrap,
                    typeId: typeId,
                    layerId: layerId,
                    fill: fill,
                    stroke: stroke,
                    strokeWidth: sw,
                    cx: cx,
                    cy: cy,
                    w: w,
                    h: h,
                    rot: rot,
                    pathModel: pathModel,
                    cornerRadiusRatio: ((typeId === 'hexagon' || typeId === 'triangle' || typeId === 'star' || typeId === 'rhombus' || typeId === 'parallelogram' || typeId === 'squareSharpCorner') && item.cornerRadiusRatio != null) ? item.cornerRadiusRatio : undefined,
                    starInnerRatio: (typeId === 'star' && item.starInnerRatio != null) ? item.starInnerRatio : undefined,
                    arrowHeadLen: (typeId === 'arrow' && item.arrowHeadLen != null) ? item.arrowHeadLen : undefined,
                    arrowHeadW: (typeId === 'arrow' && item.arrowHeadW != null) ? item.arrowHeadW : undefined
                };
                state.overlayShapes.push(shapeData);
                renderShapeFromModel(shapeData);
            } else {
                var cw = item.contentW != null ? item.contentW : 80;
                var ch = item.contentH != null ? item.contentH : 80;
                var w = cw + 2 * sw;
                var h = ch + 2 * sw;
                wrap.style.left = (item.x != null ? item.x - sw : 0) + 'px';
                wrap.style.top = (item.y != null ? item.y - sw : 0) + 'px';
                wrap.style.width = w + 'px';
                wrap.style.height = h + 'px';
                var contentSize = (typeId === 'roundedSquare' && cw > 0 && ch > 0) ? { w: cw, h: ch, cornerRadiusRatio: item.cornerRadiusRatio } : undefined;
                wrap.innerHTML = getShapeCanvasSvg(typeId, fill, stroke, sw, contentSize);
                shapeData = {
                    el: wrap,
                    x: item.x != null ? item.x : 0,
                    y: item.y != null ? item.y : 0,
                    typeId: typeId,
                    layerId: layerId,
                    fill: fill,
                    stroke: stroke,
                    strokeWidth: sw,
                    contentW: cw,
                    contentH: ch,
                    cornerRadiusRatio: (typeId === 'roundedSquare' && item.cornerRadiusRatio != null) ? item.cornerRadiusRatio : undefined,
                    rotation: (item.rotation != null ? item.rotation : 0)
                };
                state.overlayShapes.push(shapeData);
                if (shapeData.rotation) wrap.style.transform = 'rotate(' + shapeData.rotation + 'deg)';
                wrap.style.transformOrigin = 'center center';
            }
            overlayLayer.appendChild(wrap);
            makeShapeDraggable(wrap, state.overlayShapes.length - 1);
        });
        if (!data.layersOrder || data.layersOrder.length <= 1) {
            var order = ['background'];
            state.overlayImages.forEach(function (dataImg, i) {
                if (dataImg && dataImg.el) order.push('image-' + i);
            });
            state.overlayTexts.forEach(function (t) { order.push(t.layerId); });
            state.overlayShapes.forEach(function (s) { order.push(s.layerId); });
            state.layersOrder = order;
        }
        applyLayersOrderToCanvas();
        updateTextFloatToolbarVisibility();
        updateSelectionFrame();
        updateLayersList();
        updateButtons();
    }

    const $ = (id) => document.getElementById(id);
    const canvasWrap = $('canvasWrap');
    const canvasViewport = $('canvasViewport');
    const canvasStage = $('canvasStage');
    const canvasScaler = $('canvasScaler');
    const resultContainer = $('resultContainer');
    const bgLayer = $('bgLayer');
    const overlayLayer = $('overlayLayer');
    const safeZonesLayer = $('safeZonesLayer');
    const guidesLayer = $('guidesLayer');
    const socialNetworksAccordion = $('socialNetworksAccordion');
    const canvasTitle = $('canvasTitle');
    const harmonizeBtn = $('harmonizeBtn');
    const resetFiltersBtn = $('resetFiltersBtn');
    const harmonizeOverlay = $('harmonizeOverlay');
    const clearBtn = $('clearBtn');
    const downloadBtn = $('downloadBtn');
    const fontList = $('fontList');
    const textFontSelect = $('textFontSelect');
    const textFloatToolbar = $('textFloatToolbar');
    const shapeFloatToolbar = $('shapeFloatToolbar');
    const layersList = $('layersList');
    const textSizeValue = $('textSizeValue');
    const textSizeUp = $('textSizeUp');
    const textSizeDown = $('textSizeDown');
    const textColorInput = $('textColorInput');
    const textColorTrigger = $('textColorTrigger');
    const colorPickerPopover = $('colorPickerPopover');
    const colorPickerPresets = $('colorPickerPresets');
    const colorPickerSv = $('colorPickerSv');
    const colorPickerSvHue = $('colorPickerSvHue');
    const colorPickerSvCursor = $('colorPickerSvCursor');
    const colorPickerHue = $('colorPickerHue');
    const colorPickerHueCursor = $('colorPickerHueCursor');
    const colorPickerHex = $('colorPickerHex');
    const colorPickerOpacity = $('colorPickerOpacity');
    const colorPickerOpacityValue = $('colorPickerOpacityValue');

    var COLOR_PRESETS = ['#000000', '#ffffff', '#2563eb', '#1d4ed8', '#3b82f6', '#93c5fd', '#18181b', '#71717a', '#a1a1aa', '#e4e4e7', '#22c55e', '#ef4444', '#f59e0b', '#8b5cf6'];
    var colorPickerState = { h: 217, s: 0.85, v: 0.92, alpha: 100 };

    function hexToRgb(hex) {
        hex = hex.replace(/^#/, '');
        if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        var n = parseInt(hex, 16);
        return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
    }
    function rgbToHsv(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min, h, s = max === 0 ? 0 : d / max, v = max;
        if (max === min) h = 0;
        else if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
        else if (max === g) h = (b - r) / d + 2;
        else h = (r - g) / d + 4;
        h /= 6;
        return { h: h * 360, s: s, v: v };
    }
    function hsvToRgb(h, s, v) {
        h = (h % 360) / 60;
        var c = v * s, x = c * (1 - Math.abs((h % 2) - 1)), m = v - c, r = 0, g = 0, b = 0;
        if (h < 1) { r = c; g = x; }
        else if (h < 2) { r = x; g = c; }
        else if (h < 3) { g = c; b = x; }
        else if (h < 4) { g = x; b = c; }
        else if (h < 5) { r = x; b = c; }
        else { r = c; b = x; }
        return { r: Math.round((r + m) * 255), g: Math.round((g + m) * 255), b: Math.round((b + m) * 255) };
    }
    function rgbToHex(r, g, b) {
        return '#' + [r, g, b].map(function (x) { var s = x.toString(16); return s.length === 1 ? '0' + s : s; }).join('');
    }

    function syncColorTrigger() {
        var hex = getColorPickerHex ? getColorPickerHex() : (textColorInput && textColorInput.value) || '#2563eb';
        if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) hex = '#2563eb';
        var alpha = (colorPickerState && colorPickerState.alpha != null) ? colorPickerState.alpha : 100;
        var rgb = hexToRgb(hex);
        var cssColor = alpha >= 100 ? hex : 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + (alpha / 100) + ')';
        if (state.colorPickerTarget === 'shapeFill') {
            var ft = $('shapeFillTrigger');
            if (ft) { ft.style.backgroundColor = cssColor; ft.dataset.alpha = String(alpha); }
            return;
        }
        if (state.colorPickerTarget === 'shapeBorder') {
            var bt = $('shapeBorderTrigger');
            if (bt) { bt.style.backgroundColor = 'transparent'; bt.style.borderColor = cssColor; bt.dataset.alpha = String(alpha); }
            return;
        }
        if (textColorTrigger) {
            if (textColorInput) textColorInput.value = hex;
            textColorTrigger.dataset.alpha = String(alpha);
            textColorTrigger.style.backgroundColor = cssColor;
        }
    }

    function updateColorPickerFromHex(hex) {
        if (!hex || !/^#[0-9A-Fa-f]{6}$/.test(hex)) return;
        var rgb = hexToRgb(hex);
        var hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
        colorPickerState.h = hsv.h;
        colorPickerState.s = hsv.s;
        colorPickerState.v = hsv.v;
    }

    function parseColorForPicker(cssColor) {
        if (!cssColor) return { hex: '#2563eb', alpha: 100 };
        var m = cssColor.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)$/);
        if (m) {
            var r = parseInt(m[1], 10);
            var g = parseInt(m[2], 10);
            var b = parseInt(m[3], 10);
            var a = m[4] != null ? Math.round(parseFloat(m[4]) * 100) : 100;
            return { hex: rgbToHex(r, g, b), alpha: Math.max(0, Math.min(100, a)) };
        }
        if (/^#[0-9A-Fa-f]{6}$/.test(cssColor)) return { hex: cssColor, alpha: 100 };
        if (/^#[0-9A-Fa-f]{3}$/.test(cssColor)) return { hex: cssColor, alpha: 100 };
        return { hex: '#2563eb', alpha: 100 };
    }

    function getAlphaFromColor(cssColor) {
        if (!cssColor) return 1;
        var m = cssColor.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)$/);
        return m && m[4] != null ? Math.max(0, Math.min(1, parseFloat(m[4]))) : 1;
    }

    function getOpaqueColor(cssColor) {
        var parsed = parseColorForPicker(cssColor);
        return parsed.hex;
    }

    function getColorPickerHex() {
        var rgb = hsvToRgb(colorPickerState.h, colorPickerState.s, colorPickerState.v);
        return rgbToHex(rgb.r, rgb.g, rgb.b);
    }

    function getColorPickerCssColor() {
        var rgb = hsvToRgb(colorPickerState.h, colorPickerState.s, colorPickerState.v);
        var a = colorPickerState.alpha / 100;
        return a >= 1 ? rgbToHex(rgb.r, rgb.g, rgb.b) : 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + a + ')';
    }

    function applyColorPickerToTarget() {
        var hex = getColorPickerHex();
        var cssColor = getColorPickerCssColor();
        if (state.colorPickerTarget === 'shapeFill') {
            if (textColorInput) textColorInput.value = hex;
            if (textColorTrigger) textColorTrigger.dataset.alpha = String(colorPickerState.alpha);
            var sh = state.selectedShapeId != null && state.overlayShapes[state.selectedShapeId] ? state.overlayShapes[state.selectedShapeId] : null;
            if (sh) { sh.fill = cssColor; applyShapeToolbarToShape(); }
            syncColorTrigger();
            updateSelectionFrame();
            requestToolbarLayout();
            return;
        }
        if (state.colorPickerTarget === 'shapeBorder') {
            if (textColorInput) textColorInput.value = hex;
            if (textColorTrigger) textColorTrigger.dataset.alpha = String(colorPickerState.alpha);
            var sh = state.selectedShapeId != null && state.overlayShapes[state.selectedShapeId] ? state.overlayShapes[state.selectedShapeId] : null;
            if (sh) { sh.stroke = cssColor; applyShapeToolbarToShape(); }
            syncColorTrigger();
            updateSelectionFrame();
            requestToolbarLayout();
            return;
        }
        if (textColorInput) textColorInput.value = hex;
        if (textColorTrigger) textColorTrigger.dataset.alpha = String(colorPickerState.alpha);
        syncColorTrigger();
        if (typeof onTextColorChange === 'function') {
            state._pendingTextColor = cssColor;
            onTextColorChange();
        }
    }

    function renderColorPickerUI() {
        var hex = getColorPickerHex();
        if (colorPickerSvHue) {
            var rgb = hsvToRgb(colorPickerState.h, 1, 1);
            colorPickerSvHue.style.backgroundColor = rgbToHex(rgb.r, rgb.g, rgb.b);
        }
        if (colorPickerSv && colorPickerSvCursor) {
            var s = colorPickerState.s * 100;
            var v = 100 - colorPickerState.v * 100;
            colorPickerSvCursor.style.left = s + '%';
            colorPickerSvCursor.style.top = v + '%';
        }
        if (colorPickerHue && colorPickerHueCursor) {
            colorPickerHueCursor.style.left = (colorPickerState.h / 360 * 100) + '%';
        }
        if (colorPickerHex) colorPickerHex.value = hex.toUpperCase();
        if (colorPickerPresets) {
            colorPickerPresets.querySelectorAll('.color-picker-swatch').forEach(function (sw) {
                sw.classList.toggle('selected', (sw.dataset.hex || '').toLowerCase() === hex.toLowerCase());
            });
        }
        if (colorPickerOpacity) colorPickerOpacity.value = colorPickerState.alpha;
        if (colorPickerOpacityValue) colorPickerOpacityValue.textContent = colorPickerState.alpha + '%';
    }

    var colorPickerPopoverParent = null;

    function openColorPickerForShape(target, initialColor) {
        if (!colorPickerPopover) return;
        state.colorPickerTarget = target;
        var parsed = parseColorForPicker(initialColor || '#2563eb');
        updateColorPickerFromHex(parsed.hex);
        colorPickerState.alpha = parsed.alpha;
        var trigger = target === 'shapeFill' ? $('shapeFillTrigger') : $('shapeBorderTrigger');
        if (trigger) trigger.dataset.alpha = String(parsed.alpha);
        renderColorPickerUI();
        if (colorPickerPopover.parentNode !== document.body) {
            colorPickerPopoverParent = colorPickerPopover.parentNode;
            document.body.appendChild(colorPickerPopover);
        }
        colorPickerPopover.style.position = 'fixed';
        var trigger = target === 'shapeFill' ? $('shapeFillTrigger') : $('shapeBorderTrigger');
        if (trigger) {
            var r = trigger.getBoundingClientRect();
            colorPickerPopover.style.left = r.left + 'px';
            colorPickerPopover.style.top = (r.bottom + 8) + 'px';
        }
        colorPickerPopover.classList.add('open');
    }

    function closeColorPickerPopover() {
        if (!colorPickerPopover) return;
        colorPickerPopover.classList.remove('open');
        if (colorPickerPopover.parentNode === document.body && colorPickerPopoverParent) {
            colorPickerPopoverParent.appendChild(colorPickerPopover);
            colorPickerPopover.style.position = '';
            colorPickerPopover.style.left = '';
            colorPickerPopover.style.top = '';
        }
    }

    function initColorPicker() {
        if (!textColorTrigger || !colorPickerPopover) return;
        colorPickerPopoverParent = colorPickerPopover.parentNode;
        if (colorPickerPresets) {
            colorPickerPresets.innerHTML = '';
            COLOR_PRESETS.forEach(function (hex) {
                var sw = document.createElement('button');
                sw.type = 'button';
                sw.className = 'color-picker-swatch';
                sw.dataset.hex = hex;
                sw.style.backgroundColor = hex;
                sw.addEventListener('click', function () {
                    updateColorPickerFromHex(hex);
                    renderColorPickerUI();
                    applyColorPickerToTarget();
                });
                colorPickerPresets.appendChild(sw);
            });
        }
        textColorTrigger.addEventListener('click', function (e) {
            e.stopPropagation();
            state.colorPickerTarget = 'text';
            var isOpen = colorPickerPopover.classList.toggle('open');
            if (isOpen) {
                var hex = textColorInput.value || '#2563eb';
                var alpha = (textColorTrigger.dataset && textColorTrigger.dataset.alpha) ? parseInt(textColorTrigger.dataset.alpha, 10) : 100;
                if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) hex = '#2563eb';
                updateColorPickerFromHex(hex);
                colorPickerState.alpha = isNaN(alpha) ? 100 : Math.max(0, Math.min(100, alpha));
                renderColorPickerUI();
            }
        });
        document.addEventListener('mousedown', function (e) {
            if (!colorPickerPopover || !colorPickerPopover.classList.contains('open')) return;
            if (colorPickerPopover.contains(e.target) || textColorTrigger.contains(e.target)) return;
            var shapeFillTrigger = $('shapeFillTrigger');
            var shapeBorderTrigger = $('shapeBorderTrigger');
            if (shapeFillTrigger && shapeFillTrigger.contains(e.target)) return;
            if (shapeBorderTrigger && shapeBorderTrigger.contains(e.target)) return;
            closeColorPickerPopover();
        });
        if (colorPickerSv) {
            function setSvFromEvent(e) {
                var rect = colorPickerSv.getBoundingClientRect();
                var x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                var y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
                colorPickerState.s = x;
                colorPickerState.v = 1 - y;
                renderColorPickerUI();
            }
            colorPickerSv.addEventListener('mousedown', function (e) {
                e.preventDefault();
                setSvFromEvent(e);
                renderColorPickerUI();
                applyColorPickerToTarget();
                var onMove = function (ev) { setSvFromEvent(ev); renderColorPickerUI(); applyColorPickerToTarget(); };
                var onUp = function () { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
                document.addEventListener('mousemove', onMove);
                document.addEventListener('mouseup', onUp);
            });
        }
        if (colorPickerHue) {
            function setHueFromEvent(e) {
                var rect = colorPickerHue.getBoundingClientRect();
                var x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                colorPickerState.h = x * 360;
                renderColorPickerUI();
            }
            colorPickerHue.addEventListener('mousedown', function (e) {
                e.preventDefault();
                setHueFromEvent(e);
                renderColorPickerUI();
                applyColorPickerToTarget();
                var onMove = function (ev) { setHueFromEvent(ev); renderColorPickerUI(); applyColorPickerToTarget(); };
                var onUp = function () { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
                document.addEventListener('mousemove', onMove);
                document.addEventListener('mouseup', onUp);
            });
        }
        if (colorPickerHex) {
            colorPickerHex.addEventListener('input', function () {
                var v = colorPickerHex.value.trim();
                if (v.indexOf('#') !== 0) v = '#' + v;
                if (/^#[0-9A-Fa-f]{6}$/.test(v)) {
                    updateColorPickerFromHex(v);
                    renderColorPickerUI();
                }
            });
            colorPickerHex.addEventListener('keydown', function (e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    var v = colorPickerHex.value.trim();
                    if (v.indexOf('#') !== 0) v = '#' + v;
                    if (/^#[0-9A-Fa-f]{6}$/.test(v)) {
                        updateColorPickerFromHex(v);
                        renderColorPickerUI();
                        applyColorPickerToTarget();
                    }
                    closeColorPickerPopover();
                }
            });
        }
        if (colorPickerOpacity) {
            colorPickerOpacity.addEventListener('input', function () {
                colorPickerState.alpha = parseInt(colorPickerOpacity.value, 10);
                if (colorPickerOpacityValue) colorPickerOpacityValue.textContent = colorPickerState.alpha + '%';
                applyColorPickerToTarget();
            });
        }
        syncColorTrigger();
    }
    const textAlignLeftBtn = $('textAlignLeft');
    const textAlignCenterBtn = $('textAlignCenter');
    const textAlignRightBtn = $('textAlignRight');
    const textBoldBtn = $('textBold');
    const textItalicBtn = $('textItalic');
    const textUnderlineBtn = $('textUnderline');
    const textUppercaseBtn = $('textUppercase');
    const fileBackground = $('fileBackground');
    const fileImage = $('fileImage');
    var safeZonesBtn = $('safeZonesBtn');
    var themeDarkBtn = $('themeDark');
    var themeLightBtn = $('themeLight');
    var fontPanelToolbar = $('fontPanelToolbar');
    var fontPanelList = $('fontPanelList');

    function updateTextFloatToolbarVisibility() {
        var show = state.overlayTexts.length > 0 && state.selectedTextId !== null;
        if (textFloatToolbar) {
            textFloatToolbar.classList.toggle('visible', !!show);
            textFloatToolbar.style.display = show ? '' : 'none';
            if (show) requestToolbarLayout();
        }
        if (fontPanelToolbar) fontPanelToolbar.style.display = show ? '' : 'none';
        if (fontPanelList) fontPanelList.style.display = show ? '' : 'none';
    }

    var toolbarLayoutScheduled = false;
    function requestToolbarLayout() {
        if (toolbarLayoutScheduled) return;
        toolbarLayoutScheduled = true;
        requestAnimationFrame(function () {
            toolbarLayoutScheduled = false;
            if (state.selectedTextId !== null) positionTextFloatToolbar();
            if (state.selectedShapeId !== null) positionShapeFloatToolbar();
        });
    }

    function positionTextFloatToolbar() {
        if (!textFloatToolbar || state.selectedTextId === null) return;
        var t = state.overlayTexts[state.selectedTextId];
        if (!t || !t.el) return;
        var toolbar = textFloatToolbar;
        var wasVisible = toolbar.classList.contains('visible');
        toolbar.style.display = 'block';
        toolbar.style.visibility = 'hidden';
        toolbar.style.transform = 'translate(-50%, 0)';
        var objRect = t.el.getBoundingClientRect();
        var tbRect = toolbar.getBoundingClientRect();
        var gap = 16;
        var left = objRect.left + objRect.width / 2;
        var top = objRect.top - tbRect.height - gap;
        top = Math.max(8, top);
        toolbar.style.left = left + 'px';
        toolbar.style.top = top + 'px';
        toolbar.style.visibility = '';
        toolbar.style.transform = 'translate(-50%, 0)';
        if (!wasVisible) toolbar.style.display = 'none';
    }

    function getViewportScale() {
        return (state.viewportScale != null && state.viewportScale > 0) ? state.viewportScale : 1;
    }

    function screenToModel(clientX, clientY) {
        if (!canvasStage || !state.size) return { x: 0, y: 0 };
        var scale = getViewportScale();
        var stageRect = canvasStage.getBoundingClientRect();
        return {
            x: (clientX - stageRect.left) / scale,
            y: (clientY - stageRect.top) / scale
        };
    }

    function modelToScreen(x, y) {
        if (!canvasStage) return { x: 0, y: 0 };
        var scale = getViewportScale();
        var stageRect = canvasStage.getBoundingClientRect();
        return {
            x: stageRect.left + x * scale,
            y: stageRect.top + y * scale
        };
    }

    function clientToOverlay(clientX, clientY) {
        return screenToModel(clientX, clientY);
    }

    function getCanvasScale() {
        return getViewportScale();
    }

    function applyControlsScale() {
        var scale = getCanvasScale();
        var inv = 1 / scale;
        var tr = 'scale(' + inv + ')';
        var originCenter = 'center center';
        if (overlayLayer) overlayLayer.style.setProperty('--controls-scale', String(scale));
        if (selectionFrameWrapper) {
            selectionFrameWrapper.style.transform = '';
            selectionFrameWrapper.style.transformOrigin = '';
        }
        if (selectionFrame) {
            selectionFrame.style.transform = '';
            selectionFrame.style.transformOrigin = '';
        }
        overlayLayer.querySelectorAll('.shape-bezier-handles, .shape-line-endpoint-handles, .shape-radius-handles').forEach(function (wrap) {
            wrap.style.transform = tr;
            wrap.style.transformOrigin = originCenter;
        });
    }

    function toModelPoint(clientX, clientY) {
        var scale = getCanvasScale();
        var stageRect = canvasStage && canvasStage.getBoundingClientRect();
        if (!stageRect) return null;
        return [
            (clientX - stageRect.left) / scale,
            (clientY - stageRect.top) / scale
        ];
    }

    function toScreenPoint(x, y) {
        var scale = getCanvasScale();
        var stageRect = canvasStage && canvasStage.getBoundingClientRect();
        if (!stageRect) return null;
        return [
            stageRect.left + x * scale,
            stageRect.top + y * scale
        ];
    }

    var SNAP_THRESHOLD = 5;

    function getOverlayElementRectInCanvas(el) {
        if (!resultContainer || !state.size || !el) return null;
        var r = resultContainer.getBoundingClientRect();
        var scaleX = state.size.w / r.width;
        var scaleY = state.size.h / r.height;
        var elRect = el.getBoundingClientRect();
        var left = (elRect.left - r.left) * scaleX;
        var top = (elRect.top - r.top) * scaleY;
        var width = elRect.width * scaleX;
        var height = elRect.height * scaleY;
        return { left: left, top: top, width: width, height: height, right: left + width, bottom: top + height, centerX: left + width / 2, centerY: top + height / 2 };
    }

    function getSnapLines(excludeEl) {
        var vertical = [];
        var horizontal = [];
        if (!state.size) return { vertical: vertical, horizontal: horizontal };
        var w = state.size.w;
        var h = state.size.h;
        vertical.push(0, w, w / 2);
        horizontal.push(0, h, h / 2);
        state.overlayImages.forEach(function (data) {
            if (!data || !data.el || data.el === excludeEl) return;
            var rect = getOverlayElementRectInCanvas(data.el);
            if (rect) {
                vertical.push(rect.left, rect.right, rect.centerX);
                horizontal.push(rect.top, rect.bottom, rect.centerY);
            }
        });
        state.overlayTexts.forEach(function (t) {
            if (!t.el || t.el === excludeEl) return;
            var rect = getOverlayElementRectInCanvas(t.el);
            if (rect) {
                vertical.push(rect.left, rect.right, rect.centerX);
                horizontal.push(rect.top, rect.bottom, rect.centerY);
            }
        });
        state.overlayShapes.forEach(function (s) {
            if (!s || !s.el || s.el === excludeEl) return;
            var rect = getOverlayElementRectInCanvas(s.el);
            if (rect) {
                vertical.push(rect.left, rect.right, rect.centerX);
                horizontal.push(rect.top, rect.bottom, rect.centerY);
            }
        });
        if (safeZonesLayer) {
            safeZonesLayer.querySelectorAll('.safe-zone-item').forEach(function (item) {
                var rect = getOverlayElementRectInCanvas(item);
                if (rect) {
                    vertical.push(rect.left, rect.right, rect.centerX);
                    horizontal.push(rect.top, rect.bottom, rect.centerY);
                }
            });
        }
        return { vertical: vertical, horizontal: horizontal };
    }

    function applySnap(left, top, width, height, snapLines) {
        var guides = { vertical: [], horizontal: [] };
        var th = SNAP_THRESHOLD;
        var right = left + width;
        var bottom = top + height;
        var centerX = left + width / 2;
        var centerY = top + height / 2;
        var bestV = { dist: th + 1, left: left, x: null, preferEdge: false };
        snapLines.vertical.forEach(function (x) {
            var dLeft = Math.abs(left - x);
            var dRight = Math.abs(right - x);
            var dCenter = Math.abs(centerX - x);
            var dEdge = Math.min(dLeft, dRight);
            var useEdge = dEdge <= th && dEdge <= dCenter;
            var d = useEdge ? dEdge : Math.min(dEdge, dCenter);
            if (d < bestV.dist || (d <= bestV.dist && useEdge && !bestV.preferEdge)) {
                bestV.dist = d;
                bestV.preferEdge = useEdge;
                if (dLeft <= dRight && (useEdge || dLeft <= dCenter)) { bestV.left = x; bestV.x = x; }
                else if (dRight <= dCenter || useEdge) { bestV.left = x - width; bestV.x = x; }
                else { bestV.left = x - width / 2; bestV.x = x; }
            }
        });
        if (bestV.x !== null) { left = bestV.left; guides.vertical.push(bestV.x); }
        right = left + width;
        centerX = left + width / 2;
        var bestH = { dist: th + 1, top: top, y: null, preferEdge: false };
        snapLines.horizontal.forEach(function (y) {
            var dTop = Math.abs(top - y);
            var dBottom = Math.abs(bottom - y);
            var dCenter = Math.abs(centerY - y);
            var dEdge = Math.min(dTop, dBottom);
            var useEdge = dEdge <= th && dEdge <= dCenter;
            var d = useEdge ? dEdge : Math.min(dEdge, dCenter);
            if (d < bestH.dist || (d <= bestH.dist && useEdge && !bestH.preferEdge)) {
                bestH.dist = d;
                bestH.preferEdge = useEdge;
                if (dTop <= dBottom && (useEdge || dTop <= dCenter)) { bestH.top = y; bestH.y = y; }
                else if (dBottom <= dCenter || useEdge) { bestH.top = y - height; bestH.y = y; }
                else { bestH.top = y - height / 2; bestH.y = y; }
            }
        });
        if (bestH.y !== null) { top = bestH.top; guides.horizontal.push(bestH.y); }
        return { left: left, top: top, guides: guides };
    }

    function updateGuidesLayer(guides) {
        if (!guidesLayer) return;
        guidesLayer.innerHTML = '';
        if (!guides) return;
        (guides.vertical || []).forEach(function (x) {
            var line = document.createElement('div');
            line.className = 'guide-line v';
            line.style.left = x + 'px';
            guidesLayer.appendChild(line);
        });
        (guides.horizontal || []).forEach(function (y) {
            var line = document.createElement('div');
            line.className = 'guide-line h';
            line.style.top = y + 'px';
            guidesLayer.appendChild(line);
        });
    }

    var selectionFrame = null;
    var selectionFrameWrapper = null;

    var ROTATION_ICON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.0092 2V5.13219C20.0092 5.42605 19.6418 5.55908 19.4537 5.33333C17.6226 3.2875 14.9617 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12" /></svg>';

    function createSelectionFrame() {
        if (selectionFrame) return selectionFrame;
        var wrapper = document.createElement('div');
        wrapper.className = 'selection-frame-wrapper';
        wrapper.style.position = 'absolute';
        wrapper.style.pointerEvents = 'none';
        wrapper.style.zIndex = '10';
        var frame = document.createElement('div');
        frame.className = 'selection-frame';
        frame.style.width = '100%';
        frame.style.height = '100%';
        frame.style.boxSizing = 'border-box';
        frame.innerHTML = '<div class="selection-frame-border"></div>';
        var sideHandles = ['n', 'e', 's', 'w'];
        sideHandles.forEach(function (dir) {
            var h = document.createElement('div');
            h.className = 'resize-handle handle-' + dir;
            h.dataset.dir = dir;
            frame.appendChild(h);
        });
        ['nw', 'ne', 'se', 'sw'].forEach(function (corner) {
            var zone = document.createElement('div');
            zone.className = 'selection-frame-corner-zone handle-' + corner;
            zone.dataset.corner = corner;
            var h = document.createElement('div');
            h.className = 'resize-handle handle-' + corner;
            h.dataset.dir = corner;
            zone.appendChild(h);
            var rotBtn = document.createElement('div');
            rotBtn.className = 'selection-frame-rotation-handle handle-' + corner;
            rotBtn.dataset.corner = corner;
            rotBtn.setAttribute('aria-label', 'Rotate');
            rotBtn.innerHTML = ROTATION_ICON_SVG;
            zone.appendChild(rotBtn);
            frame.appendChild(zone);
        });
        wrapper.appendChild(frame);
        if (overlayLayer) overlayLayer.appendChild(wrapper);
        selectionFrame = frame;
        selectionFrameWrapper = wrapper;
        applyControlsScale();
        initResizeHandles(frame);
        initRotationHandle(frame);
        return frame;
    }

    function initRotationHandle(frame) {
        var rotBtns = frame.querySelectorAll('.selection-frame-rotation-handle');
        if (!rotBtns.length) return;
        var cornerZones = frame.querySelectorAll('.selection-frame-corner-zone');
        function clearRotationHover() {
            frame.classList.remove('show-rotation-handle', 'show-rotation-nw', 'show-rotation-ne', 'show-rotation-se', 'show-rotation-sw');
        }
        function showRotateAt(corner) {
            frame.classList.add('show-rotation-handle');
            frame.classList.remove('show-rotation-nw', 'show-rotation-ne', 'show-rotation-se', 'show-rotation-sw');
            frame.classList.add('show-rotation-' + corner);
        }
        cornerZones.forEach(function (zone) {
            var corner = zone.dataset.corner;
            zone.addEventListener('mouseenter', function () { showRotateAt(corner); });
            zone.addEventListener('mouseleave', function (e) {
                var to = e.relatedTarget;
                if (!to || !frame.contains(to)) clearRotationHover();
            });
        });
        function onRotateMousedown(e) {
            e.preventDefault();
            e.stopPropagation();
            var el = getFramedElement();
            if (!el) return;
            var isImg = isFramedImage(el);
            var isShape = isFramedShape(el);
            var sh = isShape && state.selectedShapeId != null ? state.overlayShapes[state.selectedShapeId] : null;
            var t = !isShape && state.selectedTextId != null ? state.overlayTexts[state.selectedTextId] : null;
            var imgSlot = isImg ? parseInt(el.dataset.slot, 10) : null;
            var imgData = isImg && imgSlot != null ? state.overlayImages[imgSlot] : null;
            if (!sh && !t && !imgData) return;
            pushUndoState();
            var rect = resultContainer.getBoundingClientRect();
            var elRect = el.getBoundingClientRect();
            var centerX = (elRect.left + elRect.right) / 2;
            var centerY = (elRect.top + elRect.bottom) / 2;
            function angleFromCenter(clientX, clientY) {
                return Math.atan2(clientY - centerY, clientX - centerX) * 180 / Math.PI;
            }
            var initialAngle = angleFromCenter(e.clientX, e.clientY);
            var initialRotation = isShape ? (sh.rot != null ? sh.rot : (sh.rotation != null ? sh.rotation : 0)) : (t ? (t.rotation != null ? t.rotation : 0) : (imgData && (imgData.rotation != null) ? imgData.rotation : 0));
            var startAngle = initialAngle;
            var startRotation = initialRotation;
            document.body.style.cursor = 'grabbing';
            document.body.style.userSelect = 'none';
            function onMove(ev) {
                var curAngle = angleFromCenter(ev.clientX, ev.clientY);
                var r;
                if (ev.shiftKey) {
                    var totalDelta = curAngle - initialAngle;
                    var snappedDelta = Math.round(totalDelta / 10) * 10;
                    r = initialRotation + snappedDelta;
                } else {
                    var delta = curAngle - startAngle;
                    r = Math.round(startRotation + delta);
                    startAngle = curAngle;
                    startRotation = r;
                }
                r = Math.max(-360, Math.min(360, r));
                if (isShape && sh) {
                    if (isPathBasedShape(sh)) sh.rot = r; else sh.rotation = r;
                    applyShapeToolbarToShape();
                } else if (t) {
                    t.rotation = r;
                    t.el.style.transform = r ? 'rotate(' + r + 'deg)' : '';
                } else if (imgData) {
                    imgData.rotation = r;
                    el.style.transformOrigin = 'center center';
                    var sc = parseFloat(el.dataset.scale) || 1;
                    el.style.transform = (r ? 'rotate(' + r + 'deg) ' : '') + 'scale(' + sc + ')';
                }
                var rotationVal = isShape ? $('shapeRotationValue') : $('textRotationValue');
                if (rotationVal && !isImg) rotationVal.value = String(r);
                updateSelectionFrame();
                if (isShape) updateShapeBezierOverlay();
                requestToolbarLayout();
            }
            function onEnd() {
                document.removeEventListener('mousemove', onMove);
                document.removeEventListener('mouseup', onEnd);
                document.body.style.cursor = '';
                document.body.style.userSelect = '';
                updateTextFloatToolbarVisibility();
                if (isShape) updateShapeToolbarVisibility();
            }
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onEnd);
        }
        rotBtns.forEach(function (rotBtn) { rotBtn.addEventListener('mousedown', onRotateMousedown); });
    }

    function getFramedElement() {
        if (state.selectedImageSlot !== null) {
            var data = state.overlayImages[state.selectedImageSlot];
            return data && data.el ? data.el : null;
        }
        if (state.selectedTextId !== null) {
            var t = state.overlayTexts[state.selectedTextId];
            return t && t.el ? t.el : null;
        }
        if (state.selectedShapeId !== null) {
            var s = state.overlayShapes[state.selectedShapeId];
            return s && s.el ? s.el : null;
        }
        return null;
    }

    function isFramedImage(el) {
        return el && el.classList && el.classList.contains('draggable-item');
    }

    function isFramedShape(el) {
        return el && el.classList && el.classList.contains('shape-item');
    }

    function getShapePathBBox(bezierPoints) {
        if (!bezierPoints || bezierPoints.length < 2) return null;
        var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        bezierPoints.forEach(function (pt) {
            var p = pt.p;
            if (p[0] < minX) minX = p[0];
            if (p[1] < minY) minY = p[1];
            if (p[0] > maxX) maxX = p[0];
            if (p[1] > maxY) maxY = p[1];
        });
        if (minX > maxX || minY > maxY) return null;
        return { minX: minX, minY: minY, maxX: maxX, maxY: maxY, width: maxX - minX, height: maxY - minY };
    }

    function getShapePathBBoxFull(bezierPoints) {
        if (!bezierPoints || bezierPoints.length < 2) return null;
        var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        bezierPoints.forEach(function (pt) {
            [pt.p, pt.out, pt.in].forEach(function (c) {
                if (c[0] < minX) minX = c[0];
                if (c[1] < minY) minY = c[1];
                if (c[0] > maxX) maxX = c[0];
                if (c[1] > maxY) maxY = c[1];
            });
        });
        if (minX > maxX || minY > maxY) return null;
        return { minX: minX, minY: minY, maxX: maxX, maxY: maxY, width: maxX - minX, height: maxY - minY };
    }

    function getShapePathBBoxLocal(sh) {
        if (!sh || !sh.el || !isPathBasedShape(sh)) return null;
        var svg = sh.el.querySelector && sh.el.querySelector('svg');
        if (!svg) return null;
        var paths = svg.querySelectorAll ? svg.querySelectorAll('path') : [];
        if (paths.length === 0) return null;
        var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        for (var i = 0; i < paths.length; i++) {
            var p = paths[i];
            if (typeof p.getBBox !== 'function') continue;
            var b = p.getBBox();
            if (b.x < minX) minX = b.x;
            if (b.y < minY) minY = b.y;
            if (b.x + b.width > maxX) maxX = b.x + b.width;
            if (b.y + b.height > maxY) maxY = b.y + b.height;
        }
        if (minX > maxX || minY > maxY) return null;
        return { x: minX, y: minY, width: Math.max(1, maxX - minX), height: Math.max(1, maxY - minY) };
    }

    function getShapePathBBoxInCanvas(sh) {
        if (!sh || !sh.el || !isPathBasedShape(sh) || sh.w == null || sh.h == null) return null;
        var path = sh.el.querySelector && sh.el.querySelector('svg path');
        if (!path || typeof path.getBBox !== 'function') return null;
        var b = path.getBBox();
        var shapeLeft = sh.cx - sh.w / 2;
        var shapeTop = sh.cy - sh.h / 2;
        var rot = (sh.rot != null ? sh.rot : 0) * Math.PI / 180;
        var cosR = Math.cos(rot);
        var sinR = Math.sin(rot);
        var cxLocal = sh.w / 2;
        var cyLocal = sh.h / 2;
        var corners = [
            [b.x, b.y],
            [b.x + b.width, b.y],
            [b.x + b.width, b.y + b.height],
            [b.x, b.y + b.height]
        ];
        var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        corners.forEach(function (c) {
            var dx = c[0] - cxLocal;
            var dy = c[1] - cyLocal;
            var rx = dx * cosR - dy * sinR + cxLocal;
            var ry = dx * sinR + dy * cosR + cyLocal;
            var worldX = shapeLeft + rx;
            var worldY = shapeTop + ry;
            if (worldX < minX) minX = worldX;
            if (worldX > maxX) maxX = worldX;
            if (worldY < minY) minY = worldY;
            if (worldY > maxY) maxY = worldY;
        });
        if (minX > maxX || minY > maxY) return null;
        return {
            left: minX,
            top: minY,
            width: Math.max(1, maxX - minX),
            height: Math.max(1, maxY - minY)
        };
    }

    function updateSelectionFrame() {
        var el = getFramedElement();
        var frame = createSelectionFrame();
        if (!el) {
            frame.classList.remove('visible');
            frame.style.transform = '';
            frame.style.transformOrigin = '';
            if (selectionFrameWrapper) selectionFrameWrapper.style.display = 'none';
            hideShapeRadiusHandles();
            hideLineEndpointHandles();
            return;
        }
        if (state.shapeBezierMode && state.selectedShapeId !== null) {
            frame.classList.remove('visible');
            frame.style.transform = '';
            frame.style.transformOrigin = '';
            if (selectionFrameWrapper) selectionFrameWrapper.style.display = 'none';
            hideLineEndpointHandles();
            return;
        }
        var rotation = 0;
        var left, top, width, height;
        if (isFramedImage(el)) {
            var imgSlot = parseInt(el.dataset.slot, 10);
            var imgData = (imgSlot != null && state.overlayImages[imgSlot]) ? state.overlayImages[imgSlot] : null;
            rotation = (imgData && (imgData.rotation != null)) ? imgData.rotation : 0;
            var baseLeft = parseFloat(el.style.left);
            var baseTop = parseFloat(el.style.top);
            var baseW = parseFloat(el.style.width);
            var baseH = parseFloat(el.style.height);
            if (isNaN(baseLeft)) baseLeft = 0;
            if (isNaN(baseTop)) baseTop = 0;
            if (isNaN(baseW) || baseW <= 0) baseW = el.offsetWidth || 50;
            if (isNaN(baseH) || baseH <= 0) baseH = el.offsetHeight || 50;
            var scale = parseFloat(el.dataset.scale) || 1;
            width = baseW * scale;
            height = baseH * scale;
            left = baseLeft + baseW * (1 - scale) / 2;
            top = baseTop + baseH * (1 - scale) / 2;
        } else {
            if (state.selectedShapeId != null) {
                var sh = state.overlayShapes[state.selectedShapeId];
                if (isPathBasedShape(sh) && sh.w != null && sh.h != null) {
                    var localBBox = getShapePathBBoxLocal(sh);
                    if (localBBox) {
                        var b = localBBox;
                        var rotRad = (sh.rot != null ? sh.rot : 0) * Math.PI / 180;
                        var cosR = Math.cos(rotRad), sinR = Math.sin(rotRad);
                        var dx = b.x + b.width / 2 - sh.w / 2;
                        var dy = b.y + b.height / 2 - sh.h / 2;
                        var centerX = sh.cx + dx * cosR - dy * sinR;
                        var centerY = sh.cy + dx * sinR + dy * cosR;
                        left = centerX - b.width / 2;
                        top = centerY - b.height / 2;
                        width = b.width;
                        height = b.height;
                        rotation = (sh.rot != null ? sh.rot : 0);
                    } else {
                        left = sh.cx - sh.w / 2;
                        top = sh.cy - sh.h / 2;
                        width = sh.w;
                        height = sh.h;
                        rotation = (sh.rot != null ? sh.rot : 0);
                    }
                } else {
                    left = parseFloat(el.style.left) || 0;
                    top = parseFloat(el.style.top) || 0;
                    width = parseFloat(el.style.width) || el.offsetWidth || 80;
                    height = parseFloat(el.style.height) || el.offsetHeight || 40;
                    rotation = (sh && (sh.rot != null ? sh.rot : (sh.rotation != null ? sh.rotation : 0))) || 0;
                }
            } else {
                left = parseFloat(el.style.left) || 0;
                top = parseFloat(el.style.top) || 0;
                width = parseFloat(el.style.minWidth) || parseFloat(el.style.width) || el.offsetWidth || 80;
                height = parseFloat(el.style.minHeight) || parseFloat(el.style.height) || el.offsetHeight || 40;
                var t = state.overlayTexts[state.selectedTextId];
                rotation = (t && (t.rotation != null ? t.rotation : 0)) || 0;
            }
        }
        var container = selectionFrameWrapper || frame;
        if (state.selectedShapeId != null) {
            var sh = state.overlayShapes[state.selectedShapeId];
            if (sh && (sh.typeId === 'line' || sh.typeId === 'arrow')) {
                frame.classList.remove('visible');
                if (container !== frame) container.style.display = 'none';
                hideShapeRadiusHandles();
                showLineEndpointHandles();
            } else {
                container.style.left = left + 'px';
                container.style.top = top + 'px';
                container.style.width = width + 'px';
                container.style.height = height + 'px';
                if (container !== frame) container.style.display = '';
                frame.style.transformOrigin = 'center center';
                frame.style.transform = rotation ? 'rotate(' + rotation + 'deg)' : '';
                frame.classList.toggle('has-rotation', true);
                frame.classList.add('visible');
                if (sh && (sh.typeId === 'roundedSquare' || sh.typeId === 'hexagon' || sh.typeId === 'triangle' || sh.typeId === 'star' || sh.typeId === 'rhombus' || sh.typeId === 'parallelogram' || sh.typeId === 'squareSharpCorner')) showShapeRadiusHandles();
                else hideShapeRadiusHandles();
                hideLineEndpointHandles();
            }
        } else {
            container.style.left = left + 'px';
            container.style.top = top + 'px';
            container.style.width = width + 'px';
            container.style.height = height + 'px';
            if (container !== frame) container.style.display = '';
            frame.style.transformOrigin = 'center center';
            frame.style.transform = rotation ? 'rotate(' + rotation + 'deg)' : '';
            frame.classList.toggle('has-rotation', true);
            frame.classList.add('visible');
            hideShapeRadiusHandles();
            hideLineEndpointHandles();
        }
        applyControlsScale();
        requestToolbarLayout();
    }

    function initResizeHandles(frame) {
        frame.querySelectorAll('.resize-handle').forEach(function (handle) {
            handle.addEventListener('mousedown', function (e) {
                e.preventDefault();
                e.stopPropagation();
                var el = getFramedElement();
                if (!el) return;
                pushUndoState();
                if (textFloatToolbar && state.selectedTextId !== null) { textFloatToolbar.classList.remove('visible'); textFloatToolbar.style.display = 'none'; }
                if (shapeFloatToolbar && isFramedShape(el)) { shapeFloatToolbar.classList.remove('visible'); shapeFloatToolbar.style.display = 'none'; }
                var dir = handle.dataset.dir;
                var p0 = clientToOverlay(e.clientX, e.clientY);
                var scale = parseFloat(el.dataset.scale) || 1;
                var isImg = isFramedImage(el);
                var baseW = el.offsetWidth || 50;
                var baseH = el.offsetHeight || 50;
                var visualW = isImg ? baseW * scale : baseW;
                var visualH = isImg ? baseH * scale : baseH;
                var baseLeft = parseFloat(el.style.left) || 0;
                var baseTop = parseFloat(el.style.top) || 0;
                var slotIndex = isFramedImage(el) ? parseInt(el.dataset.slot, 10) : null;
                var textIdx = isFramedImage(el) ? null : state.selectedTextId;
                var isShape = isFramedShape(el);
                var shapeIdx = isShape ? state.selectedShapeId : null;
                var l0, t0, w0, h0;
                {
                    l0 = isImg ? baseLeft + baseW * (1 - scale) / 2 : baseLeft;
                    t0 = isImg ? baseTop + baseH * (1 - scale) / 2 : baseTop;
                    w0 = isImg ? visualW : (baseW || parseFloat(handle.parentElement.style.width) || 80);
                    h0 = isImg ? visualH : (baseH || parseFloat(handle.parentElement.style.height) || 40);
                }
                var rotation = 0;
                if (isImg && state.overlayImages[slotIndex]) rotation = state.overlayImages[slotIndex].rotation != null ? state.overlayImages[slotIndex].rotation : 0;
                else if (textIdx != null && state.overlayTexts[textIdx]) rotation = state.overlayTexts[textIdx].rotation != null ? state.overlayTexts[textIdx].rotation : 0;
                else if (isShape && shapeIdx != null && state.overlayShapes[shapeIdx]) {
                    var s = state.overlayShapes[shapeIdx];
                    rotation = (s.rot != null ? s.rot : (s.rotation != null ? s.rotation : 0));
                }
                var rad = rotation * Math.PI / 180;
                var cosR = Math.cos(rad), sinR = Math.sin(rad);

                function onMove(ev) {
                    var p = clientToOverlay(ev.clientX, ev.clientY);
                    var dx = p.x - p0.x;
                    var dy = p.y - p0.y;
                    p0 = p;
                    var l = l0, t = t0, w = w0, h = h0;
                    var isCorner = dir.length === 2;
                    var localDx = cosR * dx + sinR * dy;
                    var localDy = -sinR * dx + cosR * dy;
                    var aspectRatio = parseFloat(el.dataset.aspectRatio) || (w0 / h0);
                    if (isImg && isCorner && el.dataset.aspectRatio) {
                        var dw = dir.indexOf('e') >= 0 ? localDx : (dir.indexOf('w') >= 0 ? -localDx : 0);
                        var dh = dir.indexOf('s') >= 0 ? localDy : (dir.indexOf('n') >= 0 ? -localDy : 0);
                        var newW = w0 + dw;
                        var newH = h0 + dh;
                        if (Math.abs(dw / w0) >= Math.abs(dh / h0)) {
                            newW = Math.max(20, newW);
                            newH = newW / aspectRatio;
                            if (newH < 20) { newH = 20; newW = newH * aspectRatio; }
                        } else {
                            newH = Math.max(20, newH);
                            newW = newH * aspectRatio;
                            if (newW < 20) { newW = 20; newH = newW / aspectRatio; }
                        }
                        w = newW;
                        h = newH;
                        l = l0; t = t0;
                        if (dir.indexOf('w') >= 0) { l += (w0 - w) * cosR / 2; t += (w0 - w) * sinR / 2; }
                        if (dir.indexOf('n') >= 0) { l -= (h0 - h) * sinR / 2; t += (h0 - h) * cosR / 2; }
                    } else {
                        if (dir.indexOf('e') >= 0) {
                            w += localDx;
                            if (rotation !== 0) { l -= (localDx / 2) * (1 - cosR); t += (localDx / 2) * sinR; }
                        }
                        if (dir.indexOf('w') >= 0) {
                            w -= localDx;
                            l += (localDx / 2) * (1 + cosR); t += (localDx / 2) * sinR;
                        }
                        if (dir.indexOf('s') >= 0) {
                            h += localDy;
                            if (rotation !== 0) { l -= (localDy / 2) * sinR; t -= (localDy / 2) * (1 - cosR); }
                        }
                        if (dir.indexOf('n') >= 0) {
                            h -= localDy;
                            l -= (localDy / 2) * sinR; t += (localDy / 2) * (1 + cosR);
                        }
                        if (isCorner && (isShape || textIdx != null)) {
                            var aspect = w0 / h0;
                            if (aspect <= 0) aspect = 1;
                            if (w / h > aspect) h = w / aspect;
                            else w = h * aspect;
                            w = Math.max(20, w);
                            h = Math.max(20, h);
                            l = l0 + (dir.indexOf('w') >= 0 ? (w0 - w) * cosR / 2 : 0) - (dir.indexOf('n') >= 0 ? (h0 - h) * sinR / 2 : 0);
                            t = t0 + (dir.indexOf('w') >= 0 ? (w0 - w) * sinR / 2 : 0) + (dir.indexOf('n') >= 0 ? (h0 - h) * cosR / 2 : 0);
                        } else {
                            w = Math.max(20, w);
                            h = Math.max(20, h);
                        }
                        if (isImg && (dir === 'n' || dir === 's' || dir === 'e' || dir === 'w')) {
                            el.dataset.aspectRatio = String(w / h);
                        }
                    }
                    /* Constrain to canvas only for images; text and shapes can extend beyond */
                    if (state.size && isFramedImage(el)) {
                        l = Math.max(0, Math.min(state.size.w - w, l));
                        t = Math.max(0, Math.min(state.size.h - h, t));
                    }
                    l0 = l; t0 = t; w0 = w; h0 = h;
                    updateGuidesLayer([]);
                    if (isFramedImage(el)) {
                        el.style.left = l + 'px';
                        el.style.top = t + 'px';
                        el.style.width = w + 'px';
                        el.style.height = h + 'px';
                        el.dataset.scale = '1';
                        var d = state.overlayImages[slotIndex];
                        var rot = (d && (d.rotation != null)) ? d.rotation : 0;
                        el.style.transform = (rot ? 'rotate(' + rot + 'deg) ' : '') + 'scale(1)';
                        if (d) { d.x = l; d.y = t; }
                    } else {
                        el.style.left = l + 'px';
                        el.style.top = t + 'px';
                        el.style.width = w + 'px';
                        el.style.minWidth = w + 'px';
                        el.style.height = h + 'px';
                        el.style.overflow = isShape ? 'visible' : 'hidden';
                        el.dataset.manuallyResized = '1';
                        if (isShape && shapeIdx !== null) {
                            var sh = state.overlayShapes[shapeIdx];
                            var sw = (sh && (sh.strokeWidth || 0)) || 0;
                            if (sh) {
                                if (isPathBasedShape(sh) && sh.pathModel) {
                                    var oldW = sh.w || w;
                                    var oldH = sh.h || h;
                                    var scaleX = (oldW > 0) ? w / oldW : 1;
                                    var scaleY = (oldH > 0) ? h / oldH : 1;
                                    sh.cx = l + w / 2;
                                    sh.cy = t + h / 2;
                                    sh.w = w;
                                    sh.h = h;
                                    sh.pathModel = sh.pathModel.map(function (pt) {
                                        return {
                                            p: [pt.p[0] * scaleX, pt.p[1] * scaleY],
                                            out: [pt.out[0] * scaleX, pt.out[1] * scaleY],
                                            in: [pt.in[0] * scaleX, pt.in[1] * scaleY]
                                        };
                                    });
                                    renderShapeFromModel(sh);
                                } else {
                                    sh.x = l + sw;
                                    sh.y = t + sw;
                                    sh.contentW = Math.max(1, w - 2 * sw);
                                    sh.contentH = Math.max(1, h - 2 * sw);
                                    el.style.left = l + 'px';
                                    el.style.top = t + 'px';
                                    el.style.width = w + 'px';
                                    el.style.minWidth = w + 'px';
                                    el.style.height = h + 'px';
                                }
                            }
                            requestToolbarLayout();
                        } else {
                            var tx = state.overlayTexts[textIdx];
                            if (tx) { tx.x = l; tx.y = t; }
                        }
                    }
                    updateSelectionFrame();
                    requestToolbarLayout();
                }
                document.addEventListener('mousemove', onMove);
                document.addEventListener('mouseup', function onEnd() {
                    document.removeEventListener('mousemove', onMove);
                    document.removeEventListener('mouseup', onEnd);
                    updateGuidesLayer(null);
                    updateTextFloatToolbarVisibility();
                    if (isShape) updateShapeToolbarVisibility();
                });
            });
        });
    }

    function initTooltips() {
        var tooltipEl = $('app-tooltip');
        if (!tooltipEl) return;
        var showTimer = null;
        var hideTimer = null;
        document.addEventListener('mouseover', function (e) {
            var el = e.target.closest && e.target.closest('[data-tooltip]');
            if (!el) {
                if (showTimer) clearTimeout(showTimer);
                showTimer = null;
                tooltipEl.classList.remove('visible');
                return;
            }
            var text = el.getAttribute('data-tooltip');
            if (!text) return;
            if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
            showTimer = setTimeout(function () {
                showTimer = null;
                tooltipEl.textContent = text;
                tooltipEl.classList.add('visible');
                var rect = el.getBoundingClientRect();
                var ttRect = tooltipEl.getBoundingClientRect();
                var x = rect.left + rect.width / 2 - ttRect.width / 2;
                var y = rect.top - ttRect.height - 8;
                if (x < 8) x = 8;
                if (x + ttRect.width > window.innerWidth - 8) x = window.innerWidth - ttRect.width - 8;
                if (y < 8) y = rect.bottom + 8;
                tooltipEl.style.left = x + 'px';
                tooltipEl.style.top = y + 'px';
            }, 400);
        });
        document.addEventListener('mouseout', function (e) {
            var el = e.target.closest && e.target.closest('[data-tooltip]');
            if (!el) return;
            if (showTimer) { clearTimeout(showTimer); showTimer = null; }
            hideTimer = setTimeout(function () {
                hideTimer = null;
                tooltipEl.classList.remove('visible');
            }, 100);
        });
    }

    function initCanvasTools() {
        var cursorBtn = $('canvasToolCursor');
        var handBtn = $('canvasToolHand');
        var zoomPlusBtn = $('canvasZoomPlus');
        var zoomMinusBtn = $('canvasZoomMinus');
        var frameBtn = $('canvasToolFrame');
        function setActiveTool(tool) {
            state.canvasTool = tool;
            if (cursorBtn) cursorBtn.classList.toggle('active', tool === 'cursor');
            if (handBtn) handBtn.classList.toggle('active', tool === 'hand');
            if (canvasWrap) canvasWrap.style.cursor = tool === 'hand' ? 'grab' : '';
            if (canvasViewport) canvasViewport.style.cursor = tool === 'hand' ? 'grab' : '';
        }
        if (cursorBtn) cursorBtn.addEventListener('click', function () { setActiveTool('cursor'); });
        if (handBtn) handBtn.addEventListener('click', function () { setActiveTool('hand'); });
        if (zoomPlusBtn) zoomPlusBtn.addEventListener('click', function () {
            state.canvasZoomPercent = Math.min(150, (state.canvasZoomPercent || 100) + 10);
            requestViewportUpdate();
        });
        if (zoomMinusBtn) zoomMinusBtn.addEventListener('click', function () {
            state.canvasZoomPercent = Math.max(20, (state.canvasZoomPercent || 100) - 10);
            requestViewportUpdate();
        });
        if (frameBtn) frameBtn.addEventListener('click', function () {
            state.canvasZoomPercent = 100;
            state.canvasPanX = 0;
            state.canvasPanY = 0;
            requestViewportUpdate();
        });
        setActiveTool(state.canvasTool || 'cursor');

        function onViewportPanStart(e) {
            if (state.canvasTool !== 'hand' || !canvasViewport || !canvasScaler) return;
            e.preventDefault();
            e.stopPropagation();
            var startX = e.clientX;
            var startY = e.clientY;
            var startPanX = state.canvasPanX || 0;
            var startPanY = state.canvasPanY || 0;
            if (canvasWrap) canvasWrap.style.cursor = 'grabbing';
            if (canvasViewport) canvasViewport.style.cursor = 'grabbing';
            function onMove(ev) {
                var dx = ev.clientX - startX;
                var dy = ev.clientY - startY;
                state.canvasPanX = startPanX + dx;
                state.canvasPanY = startPanY + dy;
                requestViewportUpdate();
            }
            function onEnd() {
                document.removeEventListener('mousemove', onMove);
                document.removeEventListener('mouseup', onEnd);
                if (canvasWrap) canvasWrap.style.cursor = state.canvasTool === 'hand' ? 'grab' : '';
                if (canvasViewport) canvasViewport.style.cursor = state.canvasTool === 'hand' ? 'grab' : '';
            }
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onEnd);
        }
        if (canvasViewport) canvasViewport.addEventListener('mousedown', onViewportPanStart, true);
    }

    function initShapeMenu() {
        var btnShape = $('btnShape');
        var popover = $('shapeMenuPopover');
        var grid = $('shapeMenuGrid');
        if (!btnShape || !popover || !grid) return;
        function svgToIcon(svgText) {
            if (!svgText) return '';
            return svgText
                .replace(/\bfill="white"\b/gi, 'fill="currentColor"')
                .replace(/\bstroke="white"\b/gi, 'stroke="currentColor"')
                .replace(/\bfill-opacity="[^"]*"/gi, '');
        }
        function addShapeButton(def, iconHtml) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'shape-menu-item';
            btn.dataset.shape = def.id;
            btn.setAttribute('aria-label', def.name);
            btn.innerHTML = iconHtml || '';
            var isLine = def.id === 'line' || def.id === 'arrow';
            btn.addEventListener('click', function () {
                popover.classList.remove('open');
                btnShape.setAttribute('aria-expanded', 'false');
                if (!state.size || !overlayLayer || !canvasStage) return;
                var stageRect = canvasStage.getBoundingClientRect();
                var viewportCenterX = stageRect.left + stageRect.width / 2;
                var viewportCenterY = stageRect.top + stageRect.height / 2;
                var center = screenToModel(viewportCenterX, viewportCenterY);
                createShape(def.id, center.x, center.y);
            });
            grid.appendChild(btn);
        }
        SHAPE_TYPES.forEach(function (def) {
            var rawSvg = SHAPE_MENU_ICONS_INLINE[def.id] || '';
            addShapeButton(def, svgToIcon(rawSvg));
        });
        btnShape.addEventListener('click', function (e) {
            e.stopPropagation();
            var open = popover.classList.toggle('open');
            btnShape.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        document.addEventListener('mousedown', function (e) {
            if (popover.classList.contains('open') && !popover.contains(e.target) && !btnShape.contains(e.target)) {
                popover.classList.remove('open');
                btnShape.setAttribute('aria-expanded', 'false');
            }
        });
    }

    var SHAPE_DEFAULT_SIZE = 360;

    function createShape(typeId, centerX, centerY) {
        if (!overlayLayer || !state.size) return;
        pushUndoState();
        var def = SHAPE_TYPES.find(function (d) { return d.id === typeId; });
        var layerId = 'shape-' + (state.nextShapeId++);
        var isLine = typeId === 'line' || typeId === 'arrow';
        var baseSize = Math.min(SHAPE_DEFAULT_SIZE, state.size.w, state.size.h);
        baseSize = Math.max(60, baseSize);
        var w = baseSize;
        var h = isLine ? Math.max(12, Math.round(baseSize * 0.24)) : baseSize;
        var x = centerX - w / 2;
        var y = centerY - h / 2;
        var initialStrokeWidth = (typeId === 'line' || typeId === 'arrow') ? 4 : 0;
        var sw = initialStrokeWidth;
        var initialFill = (typeId === 'line' || typeId === 'arrow') ? 'none' : '#2563eb';
        var initialStroke = (typeId === 'line' || typeId === 'arrow') ? '#2563eb' : 'none';
        var wrap = document.createElement('div');
        wrap.className = 'shape-item';
        wrap.dataset.layerId = layerId;
        wrap.dataset.shapeType = typeId;
        wrap.style.position = 'absolute';
        wrap.style.pointerEvents = 'auto';
        var shapeData;
        if (isPathBasedShape({ typeId: typeId })) {
            var pathModel = getShapePathModel(typeId, w, h);
            shapeData = {
                el: wrap,
                typeId: typeId,
                layerId: layerId,
                fill: initialFill,
                stroke: initialStroke,
                strokeWidth: initialStrokeWidth,
                cx: centerX,
                cy: centerY,
                w: w,
                h: h,
                rot: 0,
                pathModel: pathModel,
                cornerRadiusRatio: (typeId === 'hexagon' || typeId === 'triangle' || typeId === 'star' || typeId === 'rhombus' || typeId === 'parallelogram' ? 0 : (typeId === 'squareSharpCorner' ? 0 : undefined)),
                starInnerRatio: (typeId === 'star' ? 1 : undefined)
            };
        } else {
            var defaultW = w;
            var defaultH = h;
            var leftPx = x - sw;
            var topPx = y - sw;
            wrap.style.left = leftPx + 'px';
            wrap.style.top = topPx + 'px';
            wrap.style.width = (defaultW + 2 * sw) + 'px';
            wrap.style.height = (defaultH + 2 * sw) + 'px';
            var contentSize = (typeId === 'roundedSquare') ? { w: defaultW, h: defaultH } : undefined;
            wrap.innerHTML = getShapeCanvasSvg(typeId, initialFill, initialStroke, initialStrokeWidth, contentSize);
            shapeData = {
                el: wrap,
                typeId: typeId,
                layerId: layerId,
                fill: initialFill,
                stroke: initialStroke,
                strokeWidth: initialStrokeWidth,
                x: leftPx + sw,
                y: topPx + sw,
                contentW: defaultW,
                contentH: defaultH,
                rotation: 0
            };
        }
        state.overlayShapes.push(shapeData);
        state.layersOrder.push(layerId);
        wrap.style.visibility = 'hidden';
        overlayLayer.appendChild(wrap);
        requestAnimationFrame(function () { wrap.style.visibility = ''; });
        applyLayersOrderToCanvas();
        if (isPathBasedShape(shapeData)) renderShapeFromModel(shapeData);
        makeShapeDraggable(wrap, state.overlayShapes.length - 1);
        updateLayersList();
        updateSizeReadyIcons();
    }

    function makeShapeDraggable(el, idx) {
        el.addEventListener('mousedown', function (e) {
            if (e.target.closest('.shape-float-toolbar')) return;
            if (state.shapeBezierMode) return;
            e.stopPropagation();
            state.overlayTexts.forEach(function (t) { t.el.classList.remove('selected'); });
            state.selectedTextId = null;
            state.overlayImages.forEach(function (it) { if (it && it.el) it.el.classList.remove('selected'); });
            state.selectedImageSlot = null;
            state.overlayShapes.forEach(function (s) { if (s && s.el) s.el.classList.remove('selected'); });
            el.classList.add('selected');
            state.selectedShapeId = idx;
            updateTextFloatToolbarVisibility();
            updateShapeToolbarVisibility();
            requestToolbarLayout();
            updateLayersList();
            updateSelectionFrame();
            var startX = e.clientX;
            var startY = e.clientY;
            var startLeft = parseFloat(el.style.left) || 0;
            var startTop = parseFloat(el.style.top) || 0;
            var sh = state.overlayShapes[idx];
            var isPathBased = sh && isPathBasedShape(sh);
            var rot = (sh && (sh.rot != null ? sh.rot : (sh.rotation != null ? sh.rotation : 0))) || 0;
            var startAabb = getOverlayElementRectInCanvas(el);
            pushUndoState();
            var shapeToolbarHiddenForDrag = false;
            function onMove(ev) {
                if (!shapeToolbarHiddenForDrag) {
                    shapeToolbarHiddenForDrag = true;
                    closeColorPickerPopover();
                    if (shapeFloatToolbar) { shapeFloatToolbar.classList.remove('visible'); shapeFloatToolbar.style.display = 'none'; }
                }
                var p0 = screenToModel(startX, startY);
                var p1 = screenToModel(ev.clientX, ev.clientY);
                var dx = p1.x - p0.x;
                var dy = p1.y - p0.y;
                var snapLines = getSnapLines(el);
                var snapped;
                var finalLeft, finalTop;
                var W = el.offsetWidth || 80;
                var H = el.offsetHeight || 80;
                if (startAabb) {
                    snapped = applySnap(startAabb.left + dx, startAabb.top + dy, startAabb.width, startAabb.height, snapLines);
                    var centerX = snapped.left + startAabb.width / 2;
                    var centerY = snapped.top + startAabb.height / 2;
                    finalLeft = centerX - W / 2;
                    finalTop = centerY - H / 2;
                } else {
                    snapped = applySnap(startLeft + dx, startTop + dy, W, H, snapLines);
                    finalLeft = snapped.left;
                    finalTop = snapped.top;
                }
                /* Text and shapes can be moved beyond canvas edge, like images */
                if (sh) {
                    if (isPathBased) {
                        sh.cx = finalLeft + W / 2;
                        sh.cy = finalTop + H / 2;
                    } else {
                        var strokeW = (sh.strokeWidth || 0);
                        sh.x = finalLeft + strokeW;
                        sh.y = finalTop + strokeW;
                    }
                }
                if (isPathBased && sh) renderShapeFromModel(sh);
                else {
                    el.style.left = finalLeft + 'px';
                    el.style.top = finalTop + 'px';
                }
                updateGuidesLayer(snapped.guides);
                updateSelectionFrame();
                requestToolbarLayout();
            }
            function onEnd() {
                document.removeEventListener('mousemove', onMove);
                document.removeEventListener('mouseup', onEnd);
                updateGuidesLayer(null);
                updateShapeToolbarVisibility();
            }
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onEnd);
        });
    }

    function updateShapeToolbarVisibility() {
        var show = state.overlayShapes.length > 0 && state.selectedShapeId !== null;
        if (shapeFloatToolbar) {
            shapeFloatToolbar.classList.toggle('visible', !!show);
            shapeFloatToolbar.style.display = show ? '' : 'none';
            if (show) {
                requestToolbarLayout();
                syncShapeToolbarFromShape();
            }
            var def = state.selectedShapeId != null && state.overlayShapes[state.selectedShapeId] ? SHAPE_TYPES.find(function (d) { return d.id === state.overlayShapes[state.selectedShapeId].typeId; }) : null;
            var bezierBtn = shapeFloatToolbar && shapeFloatToolbar.querySelector('#shapeBezierBtn');
            if (bezierBtn) bezierBtn.style.display = (def && def.hasBezier) ? '' : 'none';
            var fillWrap = shapeFloatToolbar && shapeFloatToolbar.querySelector('.shape-toolbar-fill-wrap');
            if (fillWrap) fillWrap.style.display = (def && (def.id === 'line' || def.id === 'arrow')) ? 'none' : '';
        }
        var inner = shapeFloatToolbar && shapeFloatToolbar.querySelector('.shape-toolbar-inner');
        if (inner) {
            [].slice.call(inner.querySelectorAll('.shape-toolbar-sep')).forEach(function (sep) {
                var prev = sep.previousElementSibling;
                var next = sep.nextElementSibling;
                var prevVisible = prev && prev.style.display !== 'none' && (prev.offsetWidth > 0 || prev.offsetHeight > 0);
                var nextVisible = next && next.style.display !== 'none' && (next.offsetWidth > 0 || next.offsetHeight > 0);
                sep.style.display = (prevVisible && nextVisible) ? '' : 'none';
            });
        }
    }

    function syncShapeToolbarFromShape() {
        if (state.selectedShapeId == null) return;
        var sh = state.overlayShapes[state.selectedShapeId];
        if (!sh) return;
        var fillTrigger = $('shapeFillTrigger');
        var borderTrigger = $('shapeBorderTrigger');
        var strokeVal = $('shapeStrokeValue');
        var fillColor = sh.fill || '#2563eb';
        var strokeColor = (sh.stroke && sh.stroke !== 'none') ? sh.stroke : '#2563eb';
        if (fillTrigger) {
            if (fillTrigger) fillTrigger.style.backgroundColor = fillColor;
            var fp = parseColorForPicker(fillColor);
            fillTrigger.dataset.alpha = String(fp.alpha);
        }
        if (borderTrigger) {
            if (borderTrigger) { borderTrigger.style.backgroundColor = 'transparent'; borderTrigger.style.borderColor = strokeColor; }
            var bp = parseColorForPicker(strokeColor);
            borderTrigger.dataset.alpha = String(bp.alpha);
        }
        if (strokeVal) strokeVal.value = String(sh.strokeWidth || 0);
        var rotationVal = $('shapeRotationValue');
        if (rotationVal) rotationVal.value = String(sh.rot != null ? sh.rot : (sh.rotation != null ? sh.rotation : 0));
    }

    function applyShapeToolbarToShape() {
        if (state.selectedShapeId == null) return;
        var sh = state.overlayShapes[state.selectedShapeId];
        if (!sh || !sh.el) return;
        renderShapeFromModel(sh);
    }

    function updateShapeBezierOverlay() {
        if (!state.shapeBezierMode || state.selectedShapeId == null || !overlayLayer) return;
        var sh = state.overlayShapes[state.selectedShapeId];
        if (!sh || !sh.el) return;
        var wrap = overlayLayer.querySelector('.shape-bezier-handles');
        if (!wrap) return;
        var left, top, w, h, rot;
        if (isPathBasedShape(sh) && sh.w != null) {
            left = sh.cx - sh.w / 2;
            top = sh.cy - sh.h / 2;
            w = sh.w;
            h = sh.h;
            rot = (sh.rot != null ? sh.rot : 0);
        } else {
            left = parseFloat(sh.el.style.left) || 0;
            top = parseFloat(sh.el.style.top) || 0;
            w = sh.el.offsetWidth || 0;
            h = sh.el.offsetHeight || 0;
            rot = (sh.rotation != null ? sh.rotation : 0);
        }
        wrap.style.left = left + 'px';
        wrap.style.top = top + 'px';
        wrap.style.width = w + 'px';
        wrap.style.height = h + 'px';
        wrap.style.transformOrigin = 'center center';
        wrap.style.transform = rot ? 'rotate(' + rot + 'deg)' : '';
    }

    function initShapeToolbar() {
        var strokeVal = $('shapeStrokeValue');
        var strokeUp = $('shapeStrokeUp');
        var strokeDown = $('shapeStrokeDown');
        var fillTrigger = $('shapeFillTrigger');
        var fillInput = $('shapeFillInput');
        var borderTrigger = $('shapeBorderTrigger');
        var borderInput = $('shapeBorderInput');
        var bezierBtn = $('shapeBezierBtn');
        if (strokeUp) strokeUp.addEventListener('click', function (e) {
            e.stopPropagation();
            if (state.selectedShapeId == null) return;
            var sh = state.overlayShapes[state.selectedShapeId];
            if (!sh) return;
            sh.strokeWidth = Math.min(24, (sh.strokeWidth || 0) + 1);
            if (sh.strokeWidth > 0 && (!sh.stroke || sh.stroke === 'none')) sh.stroke = '#2563eb';
            if (strokeVal) strokeVal.value = String(sh.strokeWidth);
            applyShapeToolbarToShape();
            updateSelectionFrame();
            requestToolbarLayout();
        });
        if (strokeDown) strokeDown.addEventListener('click', function (e) {
            e.stopPropagation();
            if (state.selectedShapeId == null) return;
            var sh = state.overlayShapes[state.selectedShapeId];
            if (!sh) return;
            sh.strokeWidth = Math.max(0, (sh.strokeWidth || 0) - 1);
            if (strokeVal) strokeVal.value = String(sh.strokeWidth);
            applyShapeToolbarToShape();
            updateSelectionFrame();
            requestToolbarLayout();
        });
        if (strokeVal) {
            strokeVal.addEventListener('input', function () { this.value = this.value.replace(/\D/g, ''); });
            strokeVal.addEventListener('change', function () {
                if (state.selectedShapeId == null) return;
                var sh = state.overlayShapes[state.selectedShapeId];
                if (!sh) return;
                var n = parseInt(this.value, 10) || 0;
                n = Math.max(0, Math.min(24, n));
                this.value = String(n);
                sh.strokeWidth = n;
                if (sh.strokeWidth > 0 && (!sh.stroke || sh.stroke === 'none')) sh.stroke = '#2563eb';
                applyShapeToolbarToShape();
                updateSelectionFrame();
                requestToolbarLayout();
            });
        }
        if (fillTrigger) {
            fillTrigger.addEventListener('click', function (e) {
                e.stopPropagation();
                if (state.selectedShapeId == null) return;
                var sh = state.overlayShapes[state.selectedShapeId];
                openColorPickerForShape('shapeFill', (sh && sh.fill && sh.fill !== 'none') ? sh.fill : '#2563eb');
            });
        }
        if (borderTrigger) {
            borderTrigger.addEventListener('click', function (e) {
                e.stopPropagation();
                if (state.selectedShapeId == null) return;
                var sh = state.overlayShapes[state.selectedShapeId];
                openColorPickerForShape('shapeBorder', (sh && sh.stroke && sh.stroke !== 'none') ? sh.stroke : '#2563eb');
            });
        }
        var rotationVal = $('shapeRotationValue');
        var rotationUp = $('shapeRotationUp');
        var rotationDown = $('shapeRotationDown');
        function stepShapeRotation(delta, e) {
            if (state.selectedShapeId == null) return;
            var sh = state.overlayShapes[state.selectedShapeId];
            if (!sh) return;
            var currentRot = (sh.rot != null ? sh.rot : (sh.rotation != null ? sh.rotation : 0));
            var step = (e && e.shiftKey) ? 10 : 1;
            var actualDelta = delta > 0 ? step : -step;
            var r = currentRot + actualDelta;
            if (e && e.shiftKey) r = Math.round(r / 10) * 10;
            r = Math.max(-360, Math.min(360, r));
            if (isPathBasedShape(sh)) sh.rot = r; else sh.rotation = r;
            if (rotationVal) rotationVal.value = String(r);
            applyShapeToolbarToShape();
            updateSelectionFrame();
            requestToolbarLayout();
        }
        function bindRotationRepeat(btn, delta) {
            if (!btn) return;
            var timer = null;
            var initialTimer = null;
            function clearAll() {
                if (timer) { clearInterval(timer); timer = null; }
                if (initialTimer) { clearTimeout(initialTimer); initialTimer = null; }
                document.removeEventListener('mouseup', clearAll);
                btn.removeEventListener('pointerleave', clearAll);
            }
            btn.addEventListener('mousedown', function (e) {
                e.preventDefault();
                e.stopPropagation();
                stepShapeRotation(delta, e);
                initialTimer = setTimeout(function () {
                    initialTimer = null;
                    timer = setInterval(function () { stepShapeRotation(delta, e); }, 80);
                }, 400);
                document.addEventListener('mouseup', clearAll);
                btn.addEventListener('pointerleave', clearAll);
            });
        }
        bindRotationRepeat(rotationUp, 1);
        bindRotationRepeat(rotationDown, -1);
        if (rotationVal) {
            rotationVal.addEventListener('input', function () { this.value = this.value.replace(/[^\d-]/g, ''); });
            rotationVal.addEventListener('change', function () {
                if (state.selectedShapeId == null) return;
                var sh = state.overlayShapes[state.selectedShapeId];
                if (!sh) return;
                var r = parseInt(this.value, 10) || 0;
                r = Math.max(-360, Math.min(360, r));
                this.value = String(r);
                if (isPathBasedShape(sh)) sh.rot = r; else sh.rotation = r;
                applyShapeToolbarToShape();
                updateSelectionFrame();
                requestToolbarLayout();
            });
        }
        var shapeRotationIcon = document.querySelector('.shape-toolbar-rotation-icon');
        if (shapeRotationIcon) {
            shapeRotationIcon.addEventListener('click', function () {
                if (state.selectedShapeId == null) return;
                var sh = state.overlayShapes[state.selectedShapeId];
                if (!sh) return;
                if (isPathBasedShape(sh)) sh.rot = 0; else sh.rotation = 0;
                if (rotationVal) rotationVal.value = '0';
                applyShapeToolbarToShape();
                updateSelectionFrame();
                requestToolbarLayout();
            });
        }
        if (bezierBtn) bezierBtn.addEventListener('click', function () {
            if (state.selectedShapeId == null) return;
            state.shapeBezierMode = true;
            if (shapeFloatToolbar) { shapeFloatToolbar.classList.remove('visible'); shapeFloatToolbar.style.display = 'none'; }
            document.body.classList.add('shape-bezier-mode');
            showShapeBezierHandles();
            updateSelectionFrame();
            requestToolbarLayout();
        });
    }

    var shapeBezierHandlesEl = null;

    function showShapeBezierHandles() {
        hideShapeBezierHandles();
        if (state.selectedShapeId == null) return;
        var sh = state.overlayShapes[state.selectedShapeId];
        if (!sh || !sh.el) return;
        if (!isPathBasedShape(sh) || !sh.pathModel || sh.pathModel.length < 2) return;
        if (!overlayLayer) return;
        if (sh.typeId === 'hexagon' || sh.typeId === 'roundedSquare' || sh.typeId === 'triangle' || sh.typeId === 'star' || sh.typeId === 'rhombus' || sh.typeId === 'parallelogram') hideShapeRadiusHandles();
        var points = sh.pathModel;
        var w = sh.w;
        var h = sh.h;
        var left = sh.cx - w / 2;
        var top = sh.cy - h / 2;
        var rot = (sh.rot != null ? sh.rot : 0);
        var wrap = document.createElement('div');
        wrap.className = 'shape-bezier-handles';
        wrap.setAttribute('data-export-ignore', '');
        wrap.style.pointerEvents = 'none';
        wrap.style.position = 'absolute';
        wrap.style.left = left + 'px';
        wrap.style.top = top + 'px';
        wrap.style.width = w + 'px';
        wrap.style.height = h + 'px';
        wrap.style.transformOrigin = 'center center';
        if (rot) wrap.style.transform = 'rotate(' + rot + 'deg)';
        var guidesSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        guidesSvg.setAttribute('class', 'shape-bezier-guides-svg');
        guidesSvg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
        guidesSvg.setAttribute('preserveAspectRatio', 'none');
        guidesSvg.style.position = 'absolute';
        guidesSvg.style.left = '0px';
        guidesSvg.style.top = '0px';
        guidesSvg.style.width = w + 'px';
        guidesSvg.style.height = h + 'px';
        guidesSvg.style.pointerEvents = 'none';
        wrap.appendChild(guidesSvg);
        var guideLinesOut = [];
        var guideLinesIn = [];
        guidesSvg.setAttribute('overflow', 'visible');
        points.forEach(function (pt) {
            var lOut = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            lOut.setAttribute('class', 'shape-bezier-guide-line');
            lOut.setAttribute('vector-effect', 'non-scaling-stroke');
            guidesSvg.appendChild(lOut);
            var lIn = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            lIn.setAttribute('class', 'shape-bezier-guide-line');
            lIn.setAttribute('vector-effect', 'non-scaling-stroke');
            guidesSvg.appendChild(lIn);
            guideLinesOut.push(lOut);
            guideLinesIn.push(lIn);
        });
        function updateBezierGuides() {
            points.forEach(function (pt, i) {
                var p = pt.p, out = pt.out, inn = pt.in;
                var lOut = guideLinesOut[i], lIn = guideLinesIn[i];
                lOut.setAttribute('x1', p[0]); lOut.setAttribute('y1', p[1]);
                lOut.setAttribute('x2', out[0]); lOut.setAttribute('y2', out[1]);
                lOut.setAttribute('visibility', (p[0] === out[0] && p[1] === out[1]) ? 'hidden' : 'visible');
                lIn.setAttribute('x1', p[0]); lIn.setAttribute('y1', p[1]);
                lIn.setAttribute('x2', inn[0]); lIn.setAttribute('y2', inn[1]);
                lIn.setAttribute('visibility', (p[0] === inn[0] && p[1] === inn[1]) ? 'hidden' : 'visible');
            });
        }
        updateBezierGuides();
        var shapeEl = sh.el;
        function clientToViewBox(cx, cy) {
            var shapeRect = shapeEl.getBoundingClientRect();
            if (shapeRect.width <= 0 || shapeRect.height <= 0) return null;
            var fracX, fracY;
            if (rot !== 0) {
                var centerX = shapeRect.left + shapeRect.width / 2;
                var centerY = shapeRect.top + shapeRect.height / 2;
                var dx = cx - centerX;
                var dy = cy - centerY;
                var rad = -rot * Math.PI / 180;
                var c = Math.cos(rad), s = Math.sin(rad);
                var localDx = dx * c - dy * s;
                var localDy = dx * s + dy * c;
                fracX = 0.5 + localDx / w;
                fracY = 0.5 + localDy / h;
            } else {
                fracX = (cx - shapeRect.left) / shapeRect.width;
                fracY = (cy - shapeRect.top) / shapeRect.height;
            }
            return [fracX * w, fracY * h];
        }
        function setDotPos(dot, x, y) {
            dot.style.left = (x / w * 100) + '%';
            dot.style.top = (y / h * 100) + '%';
        }
        points.forEach(function (pt, i) {
            var dot = document.createElement('div');
            dot.className = 'shape-bezier-dot';
            dot.dataset.index = String(i);
            dot.dataset.kind = 'point';
            dot.style.pointerEvents = 'auto';
            setDotPos(dot, pt.p[0], pt.p[1]);
            wrap.appendChild(dot);
            var dotOut = document.createElement('div');
            dotOut.className = 'shape-bezier-handle-dot';
            dotOut.dataset.index = String(i);
            dotOut.dataset.kind = 'out';
            dotOut.style.pointerEvents = 'auto';
            setDotPos(dotOut, pt.out[0], pt.out[1]);
            wrap.appendChild(dotOut);
            var dotIn = document.createElement('div');
            dotIn.className = 'shape-bezier-handle-dot';
            dotIn.dataset.index = String(i);
            dotIn.dataset.kind = 'in';
            dotIn.style.pointerEvents = 'auto';
            setDotPos(dotIn, pt.in[0], pt.in[1]);
            wrap.appendChild(dotIn);
            if ((sh.typeId === 'line' || sh.typeId === 'arrow') && i === 0) dotIn.style.display = 'none';
            if ((sh.typeId === 'line' || sh.typeId === 'arrow') && i === 1) dotOut.style.display = 'none';
        });
        overlayLayer.appendChild(wrap);
        shapeBezierHandlesEl = wrap;
        function makeDragger(dot, onUpdate) {
            dot.addEventListener('pointerdown', function (e) {
                e.preventDefault();
                e.stopPropagation();
                dot.setPointerCapture(e.pointerId);
                var hasMoved = false;
                var startClientX = e.clientX;
                var startClientY = e.clientY;
                var dragThreshold = 2;
                function onMove(ev) {
                    var dx = ev.clientX - startClientX;
                    var dy = ev.clientY - startClientY;
                    if (!hasMoved && (Math.abs(dx) < dragThreshold && Math.abs(dy) < dragThreshold)) return;
                    hasMoved = true;
                    var co = clientToViewBox(ev.clientX, ev.clientY);
                    if (!co) return;
                    onUpdate(co[0], co[1]);
                    var idx = parseInt(dot.dataset.index, 10);
                    var pt = points[idx];
                    if (dot.dataset.kind === 'point') {
                        setDotPos(dot, pt.p[0], pt.p[1]);
                        var outEl = wrap.querySelector('.shape-bezier-handle-dot[data-index="' + idx + '"][data-kind="out"]');
                        var inEl = wrap.querySelector('.shape-bezier-handle-dot[data-index="' + idx + '"][data-kind="in"]');
                        if (outEl) setDotPos(outEl, pt.out[0], pt.out[1]);
                        if (inEl) setDotPos(inEl, pt.in[0], pt.in[1]);
                    } else {
                        setDotPos(dot, dot.dataset.kind === 'out' ? pt.out[0] : pt.in[0], dot.dataset.kind === 'out' ? pt.out[1] : pt.in[1]);
                    }
                    updateBezierGuides();
                    applyShapeToolbarToShape();
                    updateSelectionFrame();
                }
                function onEnd(ev) {
                    ev.stopPropagation();
                    dot.releasePointerCapture(ev.pointerId);
                    dot.removeEventListener('pointermove', onMove);
                    dot.removeEventListener('pointerup', onEnd);
                    dot.removeEventListener('pointercancel', onEnd);
                }
                dot.addEventListener('pointermove', onMove);
                dot.addEventListener('pointerup', onEnd);
                dot.addEventListener('pointercancel', onEnd);
            });
        }
        wrap.querySelectorAll('.shape-bezier-dot').forEach(function (dot) {
            makeDragger(dot, function (newX, newY) {
                var idx = parseInt(dot.dataset.index, 10);
                var pt = points[idx];
                var dx = newX - pt.p[0], dy = newY - pt.p[1];
                pt.p[0] = newX; pt.p[1] = newY;
                pt.out[0] += dx; pt.out[1] += dy;
                pt.in[0] += dx; pt.in[1] += dy;
            });
        });
        wrap.querySelectorAll('.shape-bezier-handle-dot').forEach(function (dot) {
            makeDragger(dot, function (newX, newY) {
                var idx = parseInt(dot.dataset.index, 10);
                var pt = points[idx];
                if (dot.dataset.kind === 'out') { pt.out[0] = newX; pt.out[1] = newY; }
                else { pt.in[0] = newX; pt.in[1] = newY; }
            });
        });
        updateSelectionFrame();
    }

    function hideShapeBezierHandles() {
        if (shapeBezierHandlesEl && shapeBezierHandlesEl.parentNode) {
            shapeBezierHandlesEl.parentNode.removeChild(shapeBezierHandlesEl);
        }
        shapeBezierHandlesEl = null;
    }

    var shapeRadiusHandlesEl = null;
    var lineEndpointHandlesEl = null;

    function hideLineEndpointHandles() {
        if (lineEndpointHandlesEl && lineEndpointHandlesEl.parentNode) {
            lineEndpointHandlesEl.parentNode.removeChild(lineEndpointHandlesEl);
        }
        lineEndpointHandlesEl = null;
    }

    function linePathPointToCanvas(sh, localP) {
        var w = sh.w || 80;
        var h = sh.h || 24;
        var rot = (sh.rot != null ? sh.rot : 0) * Math.PI / 180;
        var cosR = Math.cos(rot);
        var sinR = Math.sin(rot);
        var dx = localP[0] - w / 2;
        var dy = localP[1] - h / 2;
        return {
            x: sh.cx + dx * cosR - dy * sinR,
            y: sh.cy + dx * sinR + dy * cosR
        };
    }

    function overlayToShapeLocal(ox, oy, sh) {
        var rot = (sh.rot != null ? sh.rot : 0) * Math.PI / 180;
        var cosR = Math.cos(rot);
        var sinR = Math.sin(rot);
        var vx = ox - sh.cx;
        var vy = oy - sh.cy;
        var lx = sh.w / 2 + vx * cosR + vy * sinR;
        var ly = sh.h / 2 - vx * sinR + vy * cosR;
        return [lx, ly];
    }

    function showLineEndpointHandles() {
        hideLineEndpointHandles();
        if (state.selectedShapeId == null || !overlayLayer) return;
        var sh = state.overlayShapes[state.selectedShapeId];
        if (!sh || !sh.el || !sh.pathModel || sh.pathModel.length < 2) return;
        if (sh.typeId !== 'line' && sh.typeId !== 'arrow') return;
        var p0Canvas = linePathPointToCanvas(sh, sh.pathModel[0].p);
        var p1Canvas = linePathPointToCanvas(sh, sh.pathModel[1].p);
        var dx = p1Canvas.x - p0Canvas.x;
        var dy = p1Canvas.y - p0Canvas.y;
        var len = Math.hypot(dx, dy) || 1;
        var perpX = -dy / len;
        var perpY = dx / len;
        var rotIconOffset = 20;
        var rot0Canvas = { x: p0Canvas.x + perpX * rotIconOffset, y: p0Canvas.y + perpY * rotIconOffset };
        var rot1Canvas = { x: p1Canvas.x - perpX * rotIconOffset, y: p1Canvas.y - perpY * rotIconOffset };
        var wrap = document.createElement('div');
        wrap.className = 'shape-line-endpoint-handles';
        wrap.setAttribute('data-export-ignore', '');
        wrap.style.pointerEvents = 'none';
        wrap.style.position = 'absolute';
        wrap.style.left = '0';
        wrap.style.top = '0';
        wrap.style.width = '0';
        wrap.style.height = '0';
        wrap.style.overflow = 'visible';
        wrap.style.zIndex = '100';
        [p0Canvas, p1Canvas].forEach(function (pt, i) {
            var dot = document.createElement('div');
            dot.className = 'shape-line-endpoint-dot';
            dot.dataset.index = String(i);
            dot.style.position = 'absolute';
            dot.style.left = pt.x + 'px';
            dot.style.top = pt.y + 'px';
            dot.style.transform = 'translate(-50%, -50%)';
            dot.style.width = '12px';
            dot.style.height = '12px';
            dot.style.borderRadius = '50%';
            dot.style.background = 'var(--app-accent)';
            dot.style.border = '2px solid #fff';
            dot.style.pointerEvents = 'auto';
            dot.style.cursor = 'move';
            dot.style.boxSizing = 'border-box';
            wrap.appendChild(dot);
        });
        [rot0Canvas, rot1Canvas].forEach(function (pt, i) {
            var rotBtn = document.createElement('div');
            rotBtn.className = 'shape-line-rotation-handle';
            rotBtn.dataset.index = String(i);
            rotBtn.setAttribute('aria-label', 'Rotate');
            rotBtn.innerHTML = ROTATION_ICON_SVG;
            rotBtn.style.position = 'absolute';
            rotBtn.style.left = pt.x + 'px';
            rotBtn.style.top = pt.y + 'px';
            rotBtn.style.transform = 'translate(-50%, -50%)';
            rotBtn.style.width = '24px';
            rotBtn.style.height = '24px';
            rotBtn.style.borderRadius = '50%';
            rotBtn.style.background = '#fff';
            rotBtn.style.border = '1px solid var(--app-border)';
            rotBtn.style.color = 'var(--app-text)';
            rotBtn.style.pointerEvents = 'auto';
            rotBtn.style.cursor = 'grab';
            rotBtn.style.display = 'flex';
            rotBtn.style.alignItems = 'center';
            rotBtn.style.justifyContent = 'center';
            rotBtn.style.boxSizing = 'border-box';
            wrap.appendChild(rotBtn);
        });
        if (sh.typeId === 'arrow') {
            var normalized = normalizeBezierPoints(sh.pathModel);
            var sw = (sh.strokeWidth || 0);
            var geom = getArrowheadGeometry(normalized, sw, sh.arrowHeadLen, sh.arrowHeadW);
            if (geom) {
                var axCanvas = linePathPointToCanvas(sh, [geom.ax, geom.ay]);
                var bxCanvas = linePathPointToCanvas(sh, [geom.bx, geom.by]);
                [axCanvas, bxCanvas].forEach(function (pt, i) {
                    var adot = document.createElement('div');
                    adot.className = 'shape-line-arrowhead-dot';
                    adot.dataset.leg = String(i);
                    adot.style.position = 'absolute';
                    adot.style.left = pt.x + 'px';
                    adot.style.top = pt.y + 'px';
                    adot.style.transform = 'translate(-50%, -50%)';
                    adot.style.width = '10px';
                    adot.style.height = '10px';
                    adot.style.borderRadius = '50%';
                    adot.style.background = 'var(--app-accent)';
                    adot.style.border = '2px solid #fff';
                    adot.style.pointerEvents = 'auto';
                    adot.style.cursor = 'move';
                    adot.style.boxSizing = 'border-box';
                    wrap.appendChild(adot);
                });
            }
        }
        overlayLayer.appendChild(wrap);
        lineEndpointHandlesEl = wrap;

        function updateLineHandlesPositions() {
            var p0 = linePathPointToCanvas(sh, sh.pathModel[0].p);
            var p1 = linePathPointToCanvas(sh, sh.pathModel[1].p);
            var ddx = p1.x - p0.x;
            var ddy = p1.y - p0.y;
            var l = Math.hypot(ddx, ddy) || 1;
            var px = -ddy / l;
            var py = ddx / l;
            var off = 20;
            var r0 = { x: p0.x + px * off, y: p0.y + py * off };
            var r1 = { x: p1.x - px * off, y: p1.y - py * off };
            var dots = wrap.querySelectorAll('.shape-line-endpoint-dot');
            var rots = wrap.querySelectorAll('.shape-line-rotation-handle');
            if (dots[0]) { dots[0].style.left = p0.x + 'px'; dots[0].style.top = p0.y + 'px'; }
            if (dots[1]) { dots[1].style.left = p1.x + 'px'; dots[1].style.top = p1.y + 'px'; }
            if (rots[0]) { rots[0].style.left = r0.x + 'px'; rots[0].style.top = r0.y + 'px'; }
            if (rots[1]) { rots[1].style.left = r1.x + 'px'; rots[1].style.top = r1.y + 'px'; }
            if (sh.typeId === 'arrow') {
                var norm = normalizeBezierPoints(sh.pathModel);
                var geomArrow = getArrowheadGeometry(norm, sh.strokeWidth || 0, sh.arrowHeadLen, sh.arrowHeadW);
                if (geomArrow) {
                    var axC = linePathPointToCanvas(sh, [geomArrow.ax, geomArrow.ay]);
                    var bxC = linePathPointToCanvas(sh, [geomArrow.bx, geomArrow.by]);
                    var adots = wrap.querySelectorAll('.shape-line-arrowhead-dot');
                    if (adots[0]) { adots[0].style.left = axC.x + 'px'; adots[0].style.top = axC.y + 'px'; }
                    if (adots[1]) { adots[1].style.left = bxC.x + 'px'; adots[1].style.top = bxC.y + 'px'; }
                }
            }
        }

        wrap.querySelectorAll('.shape-line-endpoint-dot').forEach(function (dot) {
            var pointIndex = parseInt(dot.dataset.index, 10);
            dot.addEventListener('mousedown', function (e) {
                e.preventDefault();
                e.stopPropagation();
                pushUndoState();
                var fixedIndex = 1 - pointIndex;
                var fixedCanvas = linePathPointToCanvas(sh, sh.pathModel[fixedIndex].p);
                var fixedInCanvas = linePathPointToCanvas(sh, sh.pathModel[fixedIndex].in);
                var fixedOutCanvas = linePathPointToCanvas(sh, sh.pathModel[fixedIndex].out);
                var movedPCanvas = linePathPointToCanvas(sh, sh.pathModel[pointIndex].p);
                var movedInCanvas = linePathPointToCanvas(sh, sh.pathModel[pointIndex].in);
                var movedOutCanvas = linePathPointToCanvas(sh, sh.pathModel[pointIndex].out);
                var p0 = sh.pathModel[0].p;
                var p1 = sh.pathModel[1].p;
                var out0 = sh.pathModel[0].out;
                var in1 = sh.pathModel[1].in;
                var dx = p1[0] - p0[0];
                var dy = p1[1] - p0[1];
                var cross0 = (out0[0] - p0[0]) * dy - (out0[1] - p0[1]) * dx;
                var cross1 = (in1[0] - p1[0]) * dy - (in1[1] - p1[1]) * dx;
                var isStraightLine = Math.abs(cross0) < 1e-6 && Math.abs(cross1) < 1e-6;
                var outDir = [movedOutCanvas.x - movedPCanvas.x, movedOutCanvas.y - movedPCanvas.y];
                var outLen = Math.hypot(outDir[0], outDir[1]) || 1;
                outDir[0] /= outLen;
                outDir[1] /= outLen;
                var inDir = [movedInCanvas.x - movedPCanvas.x, movedInCanvas.y - movedPCanvas.y];
                var inLen = Math.hypot(inDir[0], inDir[1]) || 1;
                inDir[0] /= inLen;
                inDir[1] /= inLen;
                function onMove(ev) {
                    var p = clientToOverlay(ev.clientX, ev.clientY);
                    var x0 = pointIndex === 0 ? p.x : fixedCanvas.x;
                    var y0 = pointIndex === 0 ? p.y : fixedCanvas.y;
                    var x1 = pointIndex === 1 ? p.x : fixedCanvas.x;
                    var y1 = pointIndex === 1 ? p.y : fixedCanvas.y;
                    var minX = Math.min(x0, x1);
                    var maxX = Math.max(x0, x1);
                    var minY = Math.min(y0, y1);
                    var maxY = Math.max(y0, y1);
                    var w = Math.max(4, maxX - minX);
                    var h = Math.max(4, maxY - minY);
                    sh.cx = minX + w / 2;
                    sh.cy = minY + h / 2;
                    sh.w = w;
                    sh.h = h;
                    sh.rot = 0;
                    var fixedP = [fixedCanvas.x - minX, fixedCanvas.y - minY];
                    sh.pathModel[fixedIndex].p = fixedP;
                    if (isStraightLine) {
                        sh.pathModel[fixedIndex].in = fixedP.slice();
                        sh.pathModel[fixedIndex].out = fixedP.slice();
                    } else {
                        sh.pathModel[fixedIndex].in = [fixedInCanvas.x - minX, fixedInCanvas.y - minY];
                        sh.pathModel[fixedIndex].out = [fixedOutCanvas.x - minX, fixedOutCanvas.y - minY];
                    }
                    var movedP = [p.x - minX, p.y - minY];
                    sh.pathModel[pointIndex].p = movedP;
                    if (isStraightLine) {
                        sh.pathModel[pointIndex].in = movedP.slice();
                        sh.pathModel[pointIndex].out = movedP.slice();
                    } else {
                        sh.pathModel[pointIndex].out = [p.x - minX + outDir[0] * outLen, p.y - minY + outDir[1] * outLen];
                        sh.pathModel[pointIndex].in = [p.x - minX + inDir[0] * inLen, p.y - minY + inDir[1] * inLen];
                    }
                    renderShapeFromModel(sh);
                    updateLineHandlesPositions();
                }
                function onEnd() {
                    document.removeEventListener('mousemove', onMove);
                    document.removeEventListener('mouseup', onEnd);
                    updateSelectionFrame();
                    updateShapeToolbarVisibility();
                    requestToolbarLayout();
                }
                document.addEventListener('mousemove', onMove);
                document.addEventListener('mouseup', onEnd);
            });
        });

        wrap.querySelectorAll('.shape-line-rotation-handle').forEach(function (rotBtn) {
            rotBtn.addEventListener('mousedown', function (e) {
                e.preventDefault();
                e.stopPropagation();
                pushUndoState();
                var centerScreen = modelToScreen(sh.cx, sh.cy);
                var centerClientX = centerScreen.x;
                var centerClientY = centerScreen.y;
                function angleFromCenter(clientX, clientY) {
                    return Math.atan2(clientY - centerClientY, clientX - centerClientX) * 180 / Math.PI;
                }
                var initialAngle = angleFromCenter(e.clientX, e.clientY);
                var initialRotation = sh.rot != null ? sh.rot : (sh.rotation != null ? sh.rotation : 0);
                var startAngle = initialAngle;
                var startRotation = initialRotation;
                document.body.style.cursor = 'grabbing';
                document.body.style.userSelect = 'none';
                function onMove(ev) {
                    var curAngle = angleFromCenter(ev.clientX, ev.clientY);
                    var r;
                    if (ev.shiftKey) {
                        var totalDelta = curAngle - initialAngle;
                        var snappedDelta = Math.round(totalDelta / 10) * 10;
                        r = initialRotation + snappedDelta;
                    } else {
                        var delta = curAngle - startAngle;
                        r = Math.round(startRotation + delta);
                        startAngle = curAngle;
                        startRotation = r;
                    }
                    r = Math.max(-360, Math.min(360, r));
                    sh.rot = r;
                    renderShapeFromModel(sh);
                    updateLineHandlesPositions();
                    var rotationVal = $('shapeRotationValue');
                    if (rotationVal) rotationVal.value = String(r);
                    requestToolbarLayout();
                }
                function onEnd() {
                    document.removeEventListener('mousemove', onMove);
                    document.removeEventListener('mouseup', onEnd);
                    document.body.style.cursor = '';
                    document.body.style.userSelect = '';
                    updateSelectionFrame();
                    updateShapeToolbarVisibility();
                    requestToolbarLayout();
                }
                document.addEventListener('mousemove', onMove);
                document.addEventListener('mouseup', onEnd);
            });
        });

        wrap.querySelectorAll('.shape-line-arrowhead-dot').forEach(function (adot) {
            var legIndex = parseInt(adot.dataset.leg, 10);
            adot.addEventListener('mousedown', function (e) {
                e.preventDefault();
                e.stopPropagation();
                pushUndoState();
                document.body.style.cursor = 'move';
                document.body.style.userSelect = 'none';
                var norm = normalizeBezierPoints(sh.pathModel);
                var sw = sh.strokeWidth || 0;
                function onMove(ev) {
                    var p = clientToOverlay(ev.clientX, ev.clientY);
                    var q = overlayToShapeLocal(p.x, p.y, sh);
                    var geom = getArrowheadGeometry(norm, sw, sh.arrowHeadLen, sh.arrowHeadW);
                    if (!geom) return;
                    var p1 = geom.p1;
                    var ux = geom.ux, uy = geom.uy;
                    var perpX = geom.perpX, perpY = geom.perpY;
                    var defLen = geom.defaultHeadLen, defW = geom.defaultHeadW;
                    var newHeadLen, newHeadW;
                    if (legIndex === 0) {
                        newHeadLen = (p1[0] - q[0]) * ux + (p1[1] - q[1]) * uy;
                        newHeadW = (p1[0] - q[0]) * perpX + (p1[1] - q[1]) * perpY;
                    } else {
                        newHeadLen = (p1[0] - q[0]) * ux + (p1[1] - q[1]) * uy;
                        newHeadW = (q[0] - p1[0]) * perpX + (q[1] - p1[1]) * perpY;
                    }
                    sh.arrowHeadLen = Math.max(defLen, newHeadLen);
                    sh.arrowHeadW = Math.max(defW, newHeadW);
                    renderShapeFromModel(sh);
                    updateLineHandlesPositions();
                }
                function onEnd() {
                    document.removeEventListener('mousemove', onMove);
                    document.removeEventListener('mouseup', onEnd);
                    document.body.style.cursor = '';
                    document.body.style.userSelect = '';
                    updateSelectionFrame();
                    updateShapeToolbarVisibility();
                    requestToolbarLayout();
                }
                document.addEventListener('mousemove', onMove);
                document.addEventListener('mouseup', onEnd);
            });
        });
    }

    function hideShapeRadiusHandles() {
        if (shapeRadiusHandlesEl && shapeRadiusHandlesEl.parentNode) {
            shapeRadiusHandlesEl.parentNode.removeChild(shapeRadiusHandlesEl);
        }
        shapeRadiusHandlesEl = null;
    }

    function showShapeRadiusHandles() {
        hideShapeRadiusHandles();
        if (state.selectedShapeId == null || !overlayLayer) return;
        var sh = state.overlayShapes[state.selectedShapeId];
        if (!sh || !sh.el) return;
        var w, h, left, top, corners, rot;
        if (sh.typeId === 'roundedSquare') {
            w = sh.contentW != null ? sh.contentW : (sh.el.offsetWidth || 80) - 2 * (sh.strokeWidth || 0);
            h = sh.contentH != null ? sh.contentH : (sh.el.offsetHeight || 80) - 2 * (sh.strokeWidth || 0);
            w = Math.max(1, w);
            h = Math.max(1, h);
            var ratio = (sh.cornerRadiusRatio != null) ? sh.cornerRadiusRatio : 0.15;
            ratio = Math.max(0.05, Math.min(0.5, ratio));
            var r = Math.min(w, h) * ratio;
            left = parseFloat(sh.el.style.left) || 0;
            top = parseFloat(sh.el.style.top) || 0;
            rot = (sh.rotation != null ? sh.rotation : 0);
            corners = [
                { id: 'tl', leftPct: (r / w) * 100, topPct: (r / h) * 100, corner: [0, 0] },
                { id: 'tr', leftPct: ((w - r) / w) * 100, topPct: (r / h) * 100, corner: [w, 0] },
                { id: 'br', leftPct: ((w - r) / w) * 100, topPct: ((h - r) / h) * 100, corner: [w, h] },
                { id: 'bl', leftPct: (r / w) * 100, topPct: ((h - r) / h) * 100, corner: [0, h] }
            ];
        } else if (sh.typeId === 'squareSharpCorner' && sh.pathModel && sh.pathModel.length >= 4 && sh.w != null && sh.h != null) {
            w = sh.w;
            h = sh.h;
            left = sh.cx - w / 2;
            top = sh.cy - h / 2;
            rot = (sh.rot != null ? sh.rot : 0);
            var ratioComment = (sh.cornerRadiusRatio != null) ? sh.cornerRadiusRatio : 0;
            ratioComment = Math.max(0, Math.min(0.5, ratioComment));
            var rComment = Math.min(w, h) * ratioComment;
            corners = [
                { id: 'br', leftPct: ((w - rComment) / w) * 100, topPct: ((h - rComment) / h) * 100, corner: [w, h] }
            ];
        } else if (sh.typeId === 'hexagon' && sh.pathModel && sh.pathModel.length >= 6 && sh.w != null && sh.h != null) {
            w = sh.w;
            h = sh.h;
            left = sh.cx - w / 2;
            top = sh.cy - h / 2;
            rot = (sh.rot != null ? sh.rot : 0);
            var vertices = sh.pathModel.slice(0, 6).map(function (pt) { return pt.p.slice(); });
            var cx = 0, cy = 0;
            vertices.forEach(function (v) { cx += v[0]; cy += v[1]; });
            cx /= 6;
            cy /= 6;
            var ratioHex = (sh.cornerRadiusRatio != null) ? sh.cornerRadiusRatio : 0;
            ratioHex = Math.max(0, Math.min(0.5, ratioHex));
            corners = vertices.map(function (v, i) {
                var t = 1 - ratioHex * 2;
                t = Math.max(0.1, t);
                var px = v[0] * t + cx * (1 - t);
                var py = v[1] * t + cy * (1 - t);
                return { id: 'c' + i, leftPct: (px / w) * 100, topPct: (py / h) * 100, corner: v.slice(), centroid: [cx, cy] };
            });
        } else if (sh.typeId === 'triangle' && sh.pathModel && sh.pathModel.length >= 3 && sh.w != null && sh.h != null) {
            w = sh.w;
            h = sh.h;
            left = sh.cx - w / 2;
            top = sh.cy - h / 2;
            rot = (sh.rot != null ? sh.rot : 0);
            var verticesTri = sh.pathModel.slice(0, 3).map(function (pt) { return pt.p.slice(); });
            var cxTri = 0, cyTri = 0;
            verticesTri.forEach(function (v) { cxTri += v[0]; cyTri += v[1]; });
            cxTri /= 3;
            cyTri /= 3;
            var ratioTri = (sh.cornerRadiusRatio != null) ? sh.cornerRadiusRatio : 0;
            ratioTri = Math.max(0, Math.min(0.5, ratioTri));
            corners = verticesTri.map(function (v, i) {
                var t = 1 - ratioTri * 2;
                t = Math.max(0.1, t);
                var px = v[0] * t + cxTri * (1 - t);
                var py = v[1] * t + cyTri * (1 - t);
                return { id: 'c' + i, leftPct: (px / w) * 100, topPct: (py / h) * 100, corner: v.slice(), centroid: [cxTri, cyTri] };
            });
        } else if (sh.typeId === 'star' && sh.pathModel && sh.pathModel.length === 10 && sh.w != null && sh.h != null) {
            w = sh.w;
            h = sh.h;
            left = sh.cx - w / 2;
            top = sh.cy - h / 2;
            rot = (sh.rot != null ? sh.rot : 0);
            var ptsStar = sh.pathModel.map(function (pt) { return pt.p.slice(); });
            var cxStar = 0, cyStar = 0;
            [0, 2, 4, 6, 8].forEach(function (i) { cxStar += ptsStar[i][0]; cyStar += ptsStar[i][1]; });
            cxStar /= 5;
            cyStar /= 5;
            var ratioStar = (sh.cornerRadiusRatio != null) ? sh.cornerRadiusRatio : 0;
            ratioStar = Math.max(0, Math.min(0.5, ratioStar));
            var innerRatioStar = (sh.starInnerRatio != null) ? sh.starInnerRatio : 1;
            innerRatioStar = Math.max(0.1, Math.min(2, innerRatioStar));
            corners = [];
            [0, 2, 4, 6, 8].forEach(function (i) {
                var v = ptsStar[i];
                var t = 1 - ratioStar * 2;
                t = Math.max(0.1, t);
                var px = v[0] * t + cxStar * (1 - t);
                var py = v[1] * t + cyStar * (1 - t);
                corners.push({ id: 'outer' + i, leftPct: (px / w) * 100, topPct: (py / h) * 100, corner: v.slice(), centroid: [cxStar, cyStar], kind: 'radius' });
            });
            [1, 3, 5, 7, 9].forEach(function (i) {
                var v = ptsStar[i];
                var px = cxStar + (v[0] - cxStar) * innerRatioStar;
                var py = cyStar + (v[1] - cyStar) * innerRatioStar;
                corners.push({ id: 'inner' + i, leftPct: (px / w) * 100, topPct: (py / h) * 100, corner: v.slice(), centroid: [cxStar, cyStar], kind: 'thickness' });
            });
        } else if (sh.typeId === 'rhombus' && sh.pathModel && sh.pathModel.length >= 4 && sh.w != null && sh.h != null) {
            w = sh.w;
            h = sh.h;
            left = sh.cx - w / 2;
            top = sh.cy - h / 2;
            rot = (sh.rot != null ? sh.rot : 0);
            var verticesRhombus = sh.pathModel.slice(0, 4).map(function (pt) { return pt.p.slice(); });
            var cxRhombus = 0, cyRhombus = 0;
            verticesRhombus.forEach(function (v) { cxRhombus += v[0]; cyRhombus += v[1]; });
            cxRhombus /= 4;
            cyRhombus /= 4;
            var ratioRhombus = (sh.cornerRadiusRatio != null) ? sh.cornerRadiusRatio : 0;
            ratioRhombus = Math.max(0, Math.min(0.5, ratioRhombus));
            corners = verticesRhombus.map(function (v, i) {
                var t = 1 - ratioRhombus * 2;
                t = Math.max(0.1, t);
                var px = v[0] * t + cxRhombus * (1 - t);
                var py = v[1] * t + cyRhombus * (1 - t);
                return { id: 'c' + i, leftPct: (px / w) * 100, topPct: (py / h) * 100, corner: v.slice(), centroid: [cxRhombus, cyRhombus] };
            });
        } else if (sh.typeId === 'parallelogram' && sh.pathModel && sh.pathModel.length >= 4 && sh.w != null && sh.h != null) {
            w = sh.w;
            h = sh.h;
            left = sh.cx - w / 2;
            top = sh.cy - h / 2;
            rot = (sh.rot != null ? sh.rot : 0);
            var verticesPar = sh.pathModel.slice(0, 4).map(function (pt) { return pt.p.slice(); });
            var cxPar = 0, cyPar = 0;
            verticesPar.forEach(function (v) { cxPar += v[0]; cyPar += v[1]; });
            cxPar /= 4;
            cyPar /= 4;
            var ratioPar = (sh.cornerRadiusRatio != null) ? sh.cornerRadiusRatio : 0;
            ratioPar = Math.max(0, Math.min(0.5, ratioPar));
            corners = verticesPar.map(function (v, i) {
                var t = 1 - ratioPar * 2;
                t = Math.max(0.1, t);
                var px = v[0] * t + cxPar * (1 - t);
                var py = v[1] * t + cyPar * (1 - t);
                return { id: 'c' + i, leftPct: (px / w) * 100, topPct: (py / h) * 100, corner: v.slice(), centroid: [cxPar, cyPar] };
            });
        } else {
            return;
        }
        var wrap = document.createElement('div');
        wrap.className = 'shape-radius-handles';
        wrap.setAttribute('data-export-ignore', '');
        wrap.style.pointerEvents = 'none';
        wrap.style.position = 'absolute';
        wrap.style.left = left + 'px';
        wrap.style.top = top + 'px';
        wrap.style.width = (w + 2 * (sh.strokeWidth || 0)) + 'px';
        wrap.style.height = (h + 2 * (sh.strokeWidth || 0)) + 'px';
        wrap.style.transformOrigin = 'center center';
        wrap.style.transform = rot ? 'rotate(' + rot + 'deg)' : '';
        corners.forEach(function (c) {
            var dot = document.createElement('div');
            dot.className = 'shape-radius-dot' + (c.kind === 'thickness' ? ' shape-star-inner-dot' : '');
            dot.dataset.corner = c.id;
            dot.dataset.kind = c.kind || '';
            dot.style.position = 'absolute';
            dot.style.left = c.leftPct + '%';
            dot.style.top = c.topPct + '%';
            dot.style.transform = 'translate(-50%, -50%)';
            dot.style.width = '12px';
            dot.style.height = '12px';
            dot.style.borderRadius = '50%';
            dot.style.background = (c.kind === 'thickness') ? '#059669' : '#dc2626';
            dot.style.border = '2px solid #fff';
            dot.style.pointerEvents = 'auto';
            dot.style.cursor = 'move';
            dot.style.boxSizing = 'border-box';
            wrap.appendChild(dot);
        });
        overlayLayer.appendChild(wrap);
        shapeRadiusHandlesEl = wrap;

        function clientToShapeViewBox(cx, cy) {
            var rect = sh.el.getBoundingClientRect();
            if (rect.width <= 0 || rect.height <= 0) return null;
            var fracX = (cx - rect.left) / rect.width;
            var fracY = (cy - rect.top) / rect.height;
            return [fracX * w, fracY * h];
        }

        function resetRadiusToDefault() {
            pushUndoState();
            if (sh.typeId === 'roundedSquare') {
                sh.cornerRadiusRatio = 0.15;
                applyShapeToolbarToShape();
            } else if (sh.typeId === 'squareSharpCorner') {
                sh.cornerRadiusRatio = 0;
                renderShapeFromModel(sh);
            } else if (sh.typeId === 'hexagon' || sh.typeId === 'triangle' || sh.typeId === 'rhombus' || sh.typeId === 'parallelogram') {
                sh.cornerRadiusRatio = 0;
                renderShapeFromModel(sh);
            } else if (sh.typeId === 'star') {
                sh.cornerRadiusRatio = 0;
                sh.starInnerRatio = 1;
                renderShapeFromModel(sh);
            }
            updateSelectionFrame();
        }

        wrap.querySelectorAll('.shape-radius-dot').forEach(function (dot) {
            var cornerId = dot.dataset.corner;
            var corner = corners.find(function (c) { return c.id === cornerId; });
            if (!corner) return;
            dot.addEventListener('dblclick', function (e) {
                e.preventDefault();
                e.stopPropagation();
                resetRadiusToDefault();
            });
            dot.addEventListener('mousedown', function (e) {
                e.preventDefault();
                e.stopPropagation();
                pushUndoState();
                function onMove(ev) {
                    var v = clientToShapeViewBox(ev.clientX, ev.clientY);
                    if (!v) return;
                    var vx = v[0], vy = v[1];
                    var newRatio;
                    if (sh.typeId === 'roundedSquare') {
                        var dist = 0;
                        if (cornerId === 'tl') dist = Math.hypot(vx, vy);
                        else if (cornerId === 'tr') dist = Math.hypot(w - vx, vy);
                        else if (cornerId === 'br') dist = Math.hypot(w - vx, h - vy);
                        else dist = Math.hypot(vx, h - vy);
                        newRatio = dist / (Math.min(w, h) * Math.SQRT2);
                        newRatio = Math.max(0.05, Math.min(0.5, newRatio));
                        sh.cornerRadiusRatio = newRatio;
                        renderShapeFromModel(sh);
                        applyShapeToolbarToShape();
                        var rNew = Math.min(w, h) * newRatio;
                        wrap.querySelectorAll('.shape-radius-dot').forEach(function (d) {
                            var cid = d.dataset.corner;
                            if (cid === 'tl') { d.style.left = (rNew / w) * 100 + '%'; d.style.top = (rNew / h) * 100 + '%'; }
                            else if (cid === 'tr') { d.style.left = ((w - rNew) / w) * 100 + '%'; d.style.top = (rNew / h) * 100 + '%'; }
                            else if (cid === 'br') { d.style.left = ((w - rNew) / w) * 100 + '%'; d.style.top = ((h - rNew) / h) * 100 + '%'; }
                            else { d.style.left = (rNew / w) * 100 + '%'; d.style.top = ((h - rNew) / h) * 100 + '%'; }
                        });
                    } else if (sh.typeId === 'squareSharpCorner' && cornerId === 'br') {
                        var distBr = Math.hypot(w - vx, h - vy);
                        newRatio = distBr / (Math.min(w, h) * Math.SQRT2);
                        newRatio = Math.max(0, Math.min(0.5, newRatio));
                        sh.cornerRadiusRatio = newRatio;
                        renderShapeFromModel(sh);
                        var rNewComment = Math.min(w, h) * newRatio;
                        wrap.querySelectorAll('.shape-radius-dot').forEach(function (d) {
                            d.style.left = ((w - rNewComment) / w) * 100 + '%';
                            d.style.top = ((h - rNewComment) / h) * 100 + '%';
                        });
                    } else if ((sh.typeId === 'hexagon' || sh.typeId === 'triangle' || sh.typeId === 'rhombus' || sh.typeId === 'parallelogram') && corner.corner && corner.centroid) {
                        var distHandle = Math.hypot(vx - corner.corner[0], vy - corner.corner[1]);
                        var distCornerToCentroid = Math.hypot(corner.corner[0] - corner.centroid[0], corner.corner[1] - corner.centroid[1]);
                        newRatio = distCornerToCentroid < 1e-6 ? 0 : (distHandle / (2 * distCornerToCentroid));
                        newRatio = Math.max(0, Math.min(0.5, newRatio));
                        sh.cornerRadiusRatio = newRatio;
                        renderShapeFromModel(sh);
                        var t = 1 - newRatio * 2;
                        t = Math.max(0.1, t);
                        corners.forEach(function (c, i) {
                            var px = c.corner[0] * t + c.centroid[0] * (1 - t);
                            var py = c.corner[1] * t + c.centroid[1] * (1 - t);
                            var dd = wrap.querySelectorAll('.shape-radius-dot')[i];
                            if (dd) { dd.style.left = (px / w) * 100 + '%'; dd.style.top = (py / h) * 100 + '%'; }
                        });
                    } else if (sh.typeId === 'star' && corner.corner && corner.centroid) {
                        if (corner.kind === 'radius') {
                            var distHandleStar = Math.hypot(vx - corner.corner[0], vy - corner.corner[1]);
                            var distCornerToCentroidStar = Math.hypot(corner.corner[0] - corner.centroid[0], corner.corner[1] - corner.centroid[1]);
                            newRatio = distCornerToCentroidStar < 1e-6 ? 0 : (distHandleStar / (2 * distCornerToCentroidStar));
                            newRatio = Math.max(0, Math.min(0.5, newRatio));
                            sh.cornerRadiusRatio = newRatio;
                        } else {
                            var distCursorToCenter = Math.hypot(vx - corner.centroid[0], vy - corner.centroid[1]);
                            var distCornerToCenter = Math.hypot(corner.corner[0] - corner.centroid[0], corner.corner[1] - corner.centroid[1]);
                            var newInnerRatio = distCornerToCenter < 1e-6 ? 1 : distCursorToCenter / distCornerToCenter;
                            newInnerRatio = Math.max(0.1, Math.min(2, newInnerRatio));
                            sh.starInnerRatio = newInnerRatio;
                        }
                        renderShapeFromModel(sh);
                        var ratioStarUpd = (sh.cornerRadiusRatio != null) ? Math.max(0, Math.min(0.5, sh.cornerRadiusRatio)) : 0;
                        var innerRatioStarUpd = (sh.starInnerRatio != null) ? Math.max(0.1, Math.min(2, sh.starInnerRatio)) : 1;
                        corners.forEach(function (c, i) {
                            var px, py;
                            if (c.kind === 'radius') {
                                var tStar = 1 - ratioStarUpd * 2;
                                tStar = Math.max(0.1, tStar);
                                px = c.corner[0] * tStar + c.centroid[0] * (1 - tStar);
                                py = c.corner[1] * tStar + c.centroid[1] * (1 - tStar);
                            } else {
                                px = c.centroid[0] + (c.corner[0] - c.centroid[0]) * innerRatioStarUpd;
                                py = c.centroid[1] + (c.corner[1] - c.centroid[1]) * innerRatioStarUpd;
                            }
                            var dd = wrap.querySelectorAll('.shape-radius-dot')[i];
                            if (dd) { dd.style.left = (px / w) * 100 + '%'; dd.style.top = (py / h) * 100 + '%'; }
                        });
                    }
                    updateSelectionFrame();
                }
                function onEnd() {
                    document.removeEventListener('mousemove', onMove);
                    document.removeEventListener('mouseup', onEnd);
                }
                document.addEventListener('mousemove', onMove);
                document.addEventListener('mouseup', onEnd);
            });
        });
    }

    function positionShapeFloatToolbar() {
        if (!shapeFloatToolbar || state.selectedShapeId === null) return;
        var s = state.overlayShapes[state.selectedShapeId];
        if (!s || !s.el) return;
        var toolbar = shapeFloatToolbar;
        var wasVisible = toolbar.classList.contains('visible');
        toolbar.style.display = 'block';
        toolbar.style.visibility = 'hidden';
        toolbar.style.transform = 'translate(-50%, 0)';
        var tbRect = toolbar.getBoundingClientRect();
        var gap = 16;
        var left, top;
        var frame = createSelectionFrame();
        if (frame && frame.classList.contains('visible')) {
            var frameRect = frame.getBoundingClientRect();
            left = frameRect.left + frameRect.width / 2;
            top = frameRect.top - tbRect.height - gap;
        } else {
            var objRect = s.el.getBoundingClientRect();
            left = objRect.left + objRect.width / 2;
            top = objRect.top - tbRect.height - gap;
        }
        top = Math.max(8, top);
        toolbar.style.left = left + 'px';
        toolbar.style.top = top + 'px';
        toolbar.style.visibility = '';
        toolbar.style.transform = 'translate(-50%, 0)';
        if (!wasVisible) toolbar.style.display = 'none';
    }

    function init() {
        if (!resultContainer || !socialNetworksAccordion) return;

        initTooltips();
        initCanvasTools();
        buildSocialAccordion();
        initCustomSizePanel();
        initShapeMenu();
        initShapeToolbar();
        harmonizeBtn?.addEventListener('click', harmonizeImages);
        resetFiltersBtn?.addEventListener('click', resetFilters);
        clearBtn?.addEventListener('click', clearAll);
        initDownloadMenu();
        $('undoBtn')?.addEventListener('click', performUndo);
        $('redoBtn')?.addEventListener('click', performRedo);
        document.addEventListener('keydown', function (e) {
            if (e.key === 'z' && (e.metaKey || e.ctrlKey)) {
                var active = document.activeElement;
                if (!active || (active.contentEditable !== 'true' && active.tagName !== 'INPUT' && active.tagName !== 'TEXTAREA' && !active.isContentEditable)) {
                    e.preventDefault();
                    if (e.shiftKey) {
                        performRedo();
                    } else {
                        performUndo();
                    }
                }
                return;
            }
            if (e.key !== 'Backspace' && e.key !== 'Delete') return;
            var active = document.activeElement;
            if (active && (active.contentEditable === 'true' || active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable)) return;
            if (state.selectedImageSlot != null) {
                e.preventDefault();
                var slot = state.selectedImageSlot;
                pushUndoState().then(function () {
                    removeImageSlot(slot);
                    updateSizeReadyIcons();
                });
                return;
            }
            if (state.selectedTextId != null) {
                e.preventDefault();
                var idx = state.selectedTextId;
                var txt = state.overlayTexts[idx];
                if (txt && txt.el) {
                    pushUndoState().then(function () {
                        var layerId = txt.layerId;
                        txt.el.remove();
                        state.overlayTexts.splice(idx, 1);
                        state.selectedTextId = null;
                        state.layersOrder = state.layersOrder.filter(function (x) { return x !== layerId; });
                        applyLayersOrderToCanvas();
                        updateTextFloatToolbarVisibility();
                        updateButtons();
                        updateLayersList();
                        updateSelectionFrame();
                        updateSizeReadyIcons();
                    });
                }
                return;
            }
            if (state.selectedShapeId != null) {
                e.preventDefault();
                var idx = state.selectedShapeId;
                var sh = state.overlayShapes[idx];
                if (sh && sh.el) {
                    pushUndoState().then(function () {
                        var layerId = sh.layerId;
                        sh.el.remove();
                        state.overlayShapes.splice(idx, 1);
                        state.selectedShapeId = null;
                        hideShapeBezierHandles();
                        hideShapeRadiusHandles();
                        if (state.shapeBezierMode) {
                            state.shapeBezierMode = false;
                            document.body.classList.remove('shape-bezier-mode');
                        }
                        state.layersOrder = state.layersOrder.filter(function (x) { return x !== layerId; });
                        applyLayersOrderToCanvas();
                        updateShapeToolbarVisibility();
                        updateButtons();
                        updateLayersList();
                        updateSelectionFrame();
                        updateSizeReadyIcons();
                    });
                }
            }
        });
        $('btnAddText')?.addEventListener('click', toggleAddTextMode);
        $('btnAddBackground')?.addEventListener('click', function () { fileBackground?.click(); });
        $('btnAddImage')?.addEventListener('click', function () {
            var slot = state.nextImageSlot < MAX_OVERLAY_IMAGES ? state.nextImageSlot : (function () {
                for (var i = 0; i < MAX_OVERLAY_IMAGES; i++) { if (!state.overlayImages[i]) return i; }
                return MAX_OVERLAY_IMAGES - 1;
            })();
            triggerImageUpload(slot);
        });

        fileBackground?.addEventListener('change', (e) => { if (e.target.files[0]) handleBackgroundFile(e.target.files[0]); });
        fileImage?.addEventListener('change', (e) => { if (e.target.files[0]) handleImageFile(e.target.files[0]); });

        overlayLayer?.addEventListener('click', onOverlayClick);
        loadFontList();
        initColorPicker();
        bindTextToolbarButtons();
        if (textSizeUp) textSizeUp.addEventListener('click', function () { changeTextSize(2); });
        if (textSizeDown) textSizeDown.addEventListener('click', function () { changeTextSize(-2); });
        if (textSizeValue) {
            textSizeValue.addEventListener('input', function () {
                this.value = this.value.replace(/\D/g, '');
            });
            textSizeValue.addEventListener('change', function () {
                var n = parseInt(this.value, 10);
                if (isNaN(n)) n = 24;
                n = Math.max(12, Math.min(120, n));
                this.value = String(n);
                state.overlayTexts.forEach(function (t) {
                    if (t.el.classList.contains('selected')) {
                        t.el.style.fontSize = n + 'px';
                        if (!t.el.dataset.manuallyResized) {
                            t.el.style.width = '';
                            t.el.style.minWidth = '';
                            t.el.style.height = '';
                            t.el.style.overflow = '';
                        }
                        updateSelectionFrame();
                        requestToolbarLayout();
                    }
                });
            });
        }
        if (textFontSelect) textFontSelect.addEventListener('change', function () {
            var fontName = textFontSelect.value;
            if (!fontName) return;
            stateSelectedFont = fontName;
            applyFontToTextElement(fontName, state.overlayTexts.filter(function (t) { return t.el.classList.contains('selected'); }).map(function (t) { return t.el; }));
        });
        resultContainer?.addEventListener('mousedown', onCanvasMousedown);
        document.addEventListener('mousedown', onDocumentMousedown, true);
        if (textAlignLeftBtn) textAlignLeftBtn.classList.add('active');
        if (safeZonesBtn) {
            safeZonesBtn.classList.toggle('on', state.safeZonesVisible);
            safeZonesBtn.setAttribute('aria-checked', state.safeZonesVisible ? 'true' : 'false');
            safeZonesBtn.addEventListener('click', function () {
                state.safeZonesVisible = !state.safeZonesVisible;
                safeZonesBtn.classList.toggle('on', state.safeZonesVisible);
                safeZonesBtn.setAttribute('aria-checked', state.safeZonesVisible ? 'true' : 'false');
                if (safeZonesLayer) safeZonesLayer.style.display = state.safeZonesVisible ? '' : 'none';
            });
        }
        openNetwork('instagram');
        if (safeZonesLayer) safeZonesLayer.style.display = state.safeZonesVisible ? '' : 'none';
        try {
            if (localStorage.getItem('socialframe-theme') === 'dark') {
                document.body.classList.add('theme-dark');
                if (themeDarkBtn) themeDarkBtn.classList.add('active');
                if (themeLightBtn) themeLightBtn.classList.remove('active');
            } else {
                document.body.classList.remove('theme-dark');
                if (themeLightBtn) themeLightBtn.classList.add('active');
                if (themeDarkBtn) themeDarkBtn.classList.remove('active');
            }
        } catch (e) {
            if (themeLightBtn) themeLightBtn.classList.add('active');
        }
        if (themeDarkBtn) {
            themeDarkBtn.addEventListener('click', function () {
                document.body.classList.add('theme-dark');
                themeDarkBtn.classList.add('active');
                if (themeLightBtn) themeLightBtn.classList.remove('active');
                positionThemeTabsSlider();
                try { localStorage.setItem('socialframe-theme', 'dark'); } catch (e) { }
            });
        }
        if (themeLightBtn) {
            themeLightBtn.addEventListener('click', function () {
                document.body.classList.remove('theme-dark');
                themeLightBtn.classList.add('active');
                if (themeDarkBtn) themeDarkBtn.classList.remove('active');
                positionThemeTabsSlider();
                try { localStorage.setItem('socialframe-theme', 'light'); } catch (e) { }
            });
        }
        positionThemeTabsSlider();
        updateTextFloatToolbarVisibility();
        updateLayersList();
        window.addEventListener('resize', function () { requestViewportUpdate(); requestToolbarLayout(); });
        if (typeof ResizeObserver !== 'undefined' && canvasViewport) {
            var resizeObserver = new ResizeObserver(function () { requestViewportUpdate(); requestToolbarLayout(); });
            resizeObserver.observe(canvasViewport);
        }
        requestViewportUpdate();
    }

    var NETWORK_ICONS = {
        twitter: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.50012 12C2.50012 7.52166 2.50012 5.28249 3.89136 3.89124C5.28261 2.5 7.52178 2.5 12.0001 2.5C16.4785 2.5 18.7176 2.5 20.1089 3.89124C21.5001 5.28249 21.5001 7.52166 21.5001 12C21.5001 16.4783 21.5001 18.7175 20.1089 20.1088C18.7176 21.5 16.4785 21.5 12.0001 21.5C7.52178 21.5 5.28261 21.5 3.89136 20.1088C2.50012 18.7175 2.50012 16.4783 2.50012 12Z" /><path d="M7.00012 17L11.1937 12.8065M17.0001 7L12.8066 11.1935M12.8066 11.1935L9.7779 7H7.00012L11.1937 12.8065M12.8066 11.1935L17.0001 17H14.2223L11.1937 12.8065" /></svg>',
        instagram: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" /><path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" /><path d="M17.5078 6.5L17.4988 6.5" /></svg>',
        facebook: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" /><path d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847" /></svg>',
        linkedin: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10V17" /><path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" /><path d="M7.00801 7L6.99902 7" /><path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" /></svg>',
        snapchat: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6.57556 7.42444C6.57556 4.42861 9.00416 2 12 2C14.9958 2 17.4244 4.42861 17.4244 7.42444C17.4244 12.1722 17.6611 14.5456 22 16.4444C19.7778 17 19.2222 17.5556 18.6667 19.7778C14.7778 19.7778 14.2222 22 12 22C9.77778 22 9.22222 19.7778 5.33333 19.7778C4.77778 17.5556 4.22222 17 2 16.4444C6.33889 14.5456 6.57556 12.1722 6.57556 7.42444Z" /><path d="M2 16C5.82356 13.9171 5.82356 11.9503 2.95589 9" /><path d="M22 16C18.1764 13.9171 18.1764 11.9503 21.0441 9" /></svg>',
        pinterest: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11L8 21" /><path d="M9.97368 16.5724C10.5931 16.8473 11.2787 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 12.9108 7.24367 13.7646 7.66921 14.5" /><circle cx="12" cy="12" r="10" /></svg>',
        youtube: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z" /><path d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z" /></svg>',
        threads: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M19.25 8.50488C17.6729 2.63804 12.25 3.00452 12.25 3.00452C12.25 3.00452 4.75 2.50512 4.75 12C4.75 21.4949 12.25 20.9955 12.25 20.9955C12.25 20.9955 16.7077 21.2924 18.75 17.0782C19.4167 15.2204 19.25 11.5049 12.75 11.5049C12.75 11.5049 9.75 11.5049 9.75 14.0049C9.75 14.9812 10.75 16.0049 12.25 16.0049C13.75 16.0049 15.4212 14.9777 15.75 13.0049C16.75 7.00488 11.25 6.50488 9.75 9.00488" /></svg>',
        tiktok: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" /><path d="M10.5359 11.0075C9.71585 10.8916 7.84666 11.0834 6.93011 12.7782C6.01355 14.4729 6.9373 16.2368 7.51374 16.9069C8.08298 17.5338 9.89226 18.721 11.8114 17.5619C12.2871 17.2746 12.8797 17.0603 13.552 14.8153L13.4738 5.98145C13.3441 6.95419 14.4186 9.23575 17.478 9.5057" /></svg>',
        custom: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="7.5" r="1.5" /><path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" /><path d="M5 21C9.37246 15.775 14.2741 8.88406 21.4975 13.5424" /></svg>'
    };

    var SIZE_READY_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7" /></svg>';

    function buildSocialAccordion() {
        var baseConfig = window.SOCIAL_CONFIG || {};
        CONFIG = {};
        Object.keys(baseConfig).forEach(function (k) { CONFIG[k] = baseConfig[k]; });
        if (state.customSizes && state.customSizes.length > 0) {
            CONFIG.custom = {
                name: 'Custom sizes',
                sizes: state.customSizes.map(function (s) { return { w: s.w, h: s.h, label: s.label }; })
            };
        }
        socialNetworksAccordion.innerHTML = '';
        var networks = Object.keys(CONFIG);
        networks.forEach(function (network) {
            var cfg = CONFIG[network];
            if (!cfg || !cfg.sizes || !cfg.sizes.length) return;
            var item = document.createElement('div');
            item.className = 'accordion-item';
            item.dataset.network = network;
            var header = document.createElement('button');
            header.type = 'button';
            header.className = 'accordion-header menu-item';
            header.dataset.network = network;
            header.setAttribute('aria-expanded', 'false');
            var iconSvg = NETWORK_ICONS[network];
            if (iconSvg) {
                var iconWrap = document.createElement('span');
                iconWrap.className = 'accordion-header-icon';
                iconWrap.innerHTML = iconSvg;
                header.appendChild(iconWrap);
            }
            var headerText = document.createElement('span');
            headerText.className = 'accordion-header-text';
            headerText.textContent = cfg.name;
            header.appendChild(headerText);
            var iconWrap = document.createElement('span');
            iconWrap.className = 'accordion-icon';
            iconWrap.innerHTML = '<svg class="icon-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4V20M20 12H4" /></svg><svg class="icon-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12L4 12" /></svg>';
            header.appendChild(iconWrap);
            var body = document.createElement('div');
            body.className = 'accordion-body';
            cfg.sizes.forEach(function (s, i) {
                var subBtn = document.createElement('button');
                subBtn.type = 'button';
                subBtn.className = 'accordion-subitem menu-item' + (i === 0 ? ' active' : '');
                subBtn.dataset.network = network;
                subBtn.dataset.sizeIndex = String(i);
                subBtn.dataset.slotKey = getSlotKey(network, s);
                var labelSpan = document.createElement('span');
                labelSpan.className = 'accordion-subitem-label';
                labelSpan.textContent = s.label;
                subBtn.appendChild(labelSpan);
                var readyIcon = document.createElement('span');
                readyIcon.className = 'size-ready-icon';
                readyIcon.innerHTML = SIZE_READY_ICON;
                readyIcon.setAttribute('aria-hidden', 'true');
                subBtn.appendChild(readyIcon);
                subBtn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    selectSize(network, parseInt(subBtn.dataset.sizeIndex, 10));
                });
                body.appendChild(subBtn);
            });
            item.appendChild(header);
            item.appendChild(body);
            socialNetworksAccordion.appendChild(item);
            header.addEventListener('click', function () {
                openNetwork(network);
            });
        });
        updateSizeReadyIcons();
    }

    function updateSizeReadyIcons() {
        var currentKey = getSlotKey(state.network, state.size);
        var currentHasContent = !!state.bgUrl || state.overlayImages.some(Boolean) || state.overlayTexts.length > 0 || state.overlayShapes.length > 0;
        document.querySelectorAll('.accordion-subitem').forEach(function (btn) {
            var slotKey = btn.dataset.slotKey;
            var icon = btn.querySelector('.size-ready-icon');
            if (!icon) return;
            var isCurrent = currentKey === slotKey;
            var hasContent = (isCurrent && currentHasContent) || (stateBySlot[slotKey] && !stateBySlot[slotKey].empty);
            icon.classList.toggle('visible', !!hasContent);
        });
    }

    function initCustomSizePanel() {
        var customWidthEl = $('customWidth');
        var customHeightEl = $('customHeight');
        var customCreateBtn = $('customCreateBtn');
        if (!customWidthEl || !customHeightEl || !customCreateBtn) return;
        function updateCreateButton() {
            var w = parseInt(customWidthEl.value, 10);
            var h = parseInt(customHeightEl.value, 10);
            customCreateBtn.disabled = !(w > 0 && h > 0);
        }
        customWidthEl.addEventListener('input', updateCreateButton);
        customHeightEl.addEventListener('input', updateCreateButton);
        customCreateBtn.addEventListener('click', function () {
            var w = parseInt(customWidthEl.value, 10);
            var h = parseInt(customHeightEl.value, 10);
            if (!(w > 0 && h > 0)) return;
            state.customSizes.push({ w: w, h: h, label: w + '×' + h });
            buildSocialAccordion();
            openNetwork('custom');
            selectSize('custom', state.customSizes.length - 1);
            customWidthEl.value = '';
            customHeightEl.value = '';
            customCreateBtn.disabled = true;
        });
    }

    function openNetwork(network) {
        if (!CONFIG[network]) return;
        var keyToSave = getSlotKey(state.network, state.size);
        function doOpen() {
            state.network = network;
            document.querySelectorAll('.accordion-item').forEach(function (item) {
                var isOpen = item.dataset.network === network;
                item.classList.toggle('open', isOpen);
                var h = item.querySelector('.accordion-header');
                if (h) h.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            });
            selectSize(network, 0, true);
        }
        if (keyToSave) {
            saveCurrentStateToSlot(keyToSave).then(doOpen);
        } else {
            doOpen();
        }
    }

    function selectSize(network, sizeIndex, skipSave) {
        var cfg = CONFIG[network];
        if (!cfg || !cfg.sizes || !cfg.sizes[sizeIndex]) return;
        var sz = cfg.sizes[sizeIndex];
        var keyOld = getSlotKey(state.network, state.size);
        var doSwitch = function () {
            state.network = network;
            document.querySelectorAll('.accordion-subitem[data-network="' + network + '"]').forEach(function (btn) {
                btn.classList.toggle('active', parseInt(btn.dataset.sizeIndex, 10) === sizeIndex);
            });
            applySize(sz);
            if (canvasTitle) canvasTitle.textContent = cfg.name + ' — ' + sz.label;
            var sizeLabel = $('canvasSizeLabel');
            if (sizeLabel) sizeLabel.textContent = sz.label;
        };
        if (!skipSave && keyOld) {
            saveCurrentStateToSlot(keyOld).then(doSwitch);
        } else {
            doSwitch();
        }
    }

    function applySize(s) {
        if (safeZonesLayer) safeZonesLayer.innerHTML = '';
        state.size = s;
        if (!resultContainer || !s || !canvasWrap) return;
        var key = getSlotKey(state.network, s);
        if (stateBySlot[key] && !stateBySlot[key].empty) {
            restoreSlot(stateBySlot[key]);
        } else {
            clearDomOnly();
            updateButtons();
        }
        resultContainer.style.width = s.w + 'px';
        resultContainer.style.height = s.h + 'px';
        canvasWrap.style.setProperty('visibility', 'hidden', '');
        requestAnimationFrame(function () {
            if (canvasViewport && s) {
                var margin = 8;
                var fitW = Math.max(0, canvasViewport.clientWidth - margin);
                var fitH = Math.max(0, canvasViewport.clientHeight - margin);
                if (fitW > 0 && fitH > 0) {
                    var fitScale = (s.w >= s.h)
                        ? Math.min(1, (fitW * 0.8) / s.w)
                        : Math.min(1, (fitH * 0.8) / s.h);
                    state.canvasZoomPercent = Math.max(20, Math.min(150, Math.round(fitScale * 100)));
                }
            }
            requestViewportUpdate();
            canvasWrap.style.removeProperty('visibility');
            updateLayersList();
            updateSizeReadyIcons();
        });
    }

    function disableZoomUI(disabled) {
        var zoomPlusBtn = $('canvasZoomPlus');
        var zoomMinusBtn = $('canvasZoomMinus');
        if (zoomPlusBtn) {
            zoomPlusBtn.disabled = !!disabled;
            zoomPlusBtn.setAttribute('aria-disabled', disabled ? 'true' : 'false');
        }
        if (zoomMinusBtn) {
            zoomMinusBtn.disabled = !!disabled;
            zoomMinusBtn.setAttribute('aria-disabled', disabled ? 'true' : 'false');
        }
    }

    function updateZoomLabel(zoomPct) {
        var zoomEl = $('canvasZoomValue');
        if (zoomEl) zoomEl.textContent = zoomPct + '%';
    }

    var queuedViewportUpdate = false;

    function requestViewportUpdate() {
        if (queuedViewportUpdate) return;
        queuedViewportUpdate = true;
        requestAnimationFrame(function () {
            queuedViewportUpdate = false;
            updateCanvasViewport();
            updateSafeZones();
        });
    }

    function updateCanvasViewport() {
        if (!state.size || !canvasViewport || !canvasStage || !canvasScaler) return;

        var w = state.size.w;
        var h = state.size.h;
        var margin = 8;
        var fitW = Math.max(0, canvasViewport.clientWidth - margin);
        var fitH = Math.max(0, canvasViewport.clientHeight - margin);

        // Do not touch transform and stage size until fitW/fitH are stable
        if (fitW <= 0 || fitH <= 0) {
            requestAnimationFrame(requestViewportUpdate);
            return;
        }

        var zoomPct = state.canvasZoomPercent || 100;
        zoomPct = Math.max(20, Math.min(150, zoomPct));
        state.canvasZoomPercent = zoomPct;
        disableZoomUI(false);

        var actualScale = zoomPct / 100;
        var rounded = Math.floor(actualScale * 1000) / 1000;
        state.viewportScale = rounded;
        if (canvasScaler && canvasScaler.dataset) canvasScaler.dataset.scale = String(rounded);

        var stageW = Math.max(1, Math.round(w * rounded));
        var stageH = Math.max(1, Math.round(h * rounded));

        canvasStage.style.width = stageW + 'px';
        canvasStage.style.height = stageH + 'px';
        var panX = state.canvasPanX || 0;
        var panY = state.canvasPanY || 0;
        canvasStage.style.transform = 'translate(' + panX + 'px, ' + panY + 'px)';
        canvasScaler.style.width = w + 'px';
        canvasScaler.style.height = h + 'px';
        canvasScaler.style.transform = 'scale(' + rounded + ')';

        var baseBorder = 1;
        var baseRadius = 12;
        if (rounded > 0 && resultContainer) {
            resultContainer.style.borderWidth = (baseBorder / rounded) + 'px';
            resultContainer.style.borderRadius = (baseRadius / rounded) + 'px';
        }

        applyControlsScale();
        updateZoomLabel(zoomPct);
        requestToolbarLayout();
    }

    function applyBgPosition() {
        if (!bgLayer) return;
        var zoom = state.bgZoom || 1;
        var maxX = getBgMaxOffsetX(zoom);
        var maxY = getBgMaxOffsetY(zoom);
        var offX = Math.max(-maxX, Math.min(maxX, state.bgOffsetX || 0));
        var offY = Math.max(-maxY, Math.min(maxY, state.bgOffsetY || 0));
        state.bgOffsetX = offX;
        state.bgOffsetY = offY;
        bgLayer.style.backgroundPosition = 'calc(50% + ' + offX + 'px) calc(50% + ' + offY + 'px)';
        if (state.bgImageWidth && state.bgImageHeight && state.size) {
            var w = state.size.w;
            var h = state.size.h;
            var bw = state.bgImageWidth;
            var bh = state.bgImageHeight;
            var scale = Math.max(w / bw, h / bh) * zoom;
            bgLayer.style.backgroundSize = (bw * scale) + 'px ' + (bh * scale) + 'px';
        }
    }

    function getBgMaxOffsetX(zoom) {
        if (!state.size || !state.bgImageWidth || !state.bgImageHeight) return 0;
        zoom = zoom || state.bgZoom || 1;
        var w = state.size.w;
        var h = state.size.h;
        var bw = state.bgImageWidth;
        var bh = state.bgImageHeight;
        var scale = Math.max(w / bw, h / bh) * zoom;
        var dispW = bw * scale;
        if (dispW <= w) return 0;
        return (dispW - w) / 2;
    }

    function getBgMaxOffsetY(zoom) {
        if (!state.size || !state.bgImageWidth || !state.bgImageHeight) return 0;
        zoom = zoom || state.bgZoom || 1;
        var w = state.size.w;
        var h = state.size.h;
        var bw = state.bgImageWidth;
        var bh = state.bgImageHeight;
        var scale = Math.max(w / bw, h / bh) * zoom;
        var dispH = bh * scale;
        if (dispH <= h) return 0;
        return (dispH - h) / 2;
    }

    function updateSafeZones() {
        if (!safeZonesLayer || !state.size || !state.network) return;
        var zonesConfig = (window.SAFE_ZONES && window.SAFE_ZONES[state.network]) || null;
        if (!zonesConfig) {
            safeZonesLayer.innerHTML = '';
            safeZonesLayer.style.display = state.safeZonesVisible ? '' : 'none';
            return;
        }
        var sizeKey = state.size.w + 'x' + state.size.h;
        var list = zonesConfig[sizeKey] || zonesConfig.default;
        if (!list || !list.length) {
            safeZonesLayer.innerHTML = '';
            safeZonesLayer.style.display = state.safeZonesVisible ? '' : 'none';
            return;
        }
        var w = state.size.w;
        var h = state.size.h;
        safeZonesLayer.innerHTML = '';
        list.forEach(function (z) {
            var el = document.createElement('div');
            var leftPct, topPct, widthPct, heightPct;
            var isCircle = z.shape === 'circle' || z.type === 'avatar';
            if (z.label) el.title = z.label;

            if (z.type === 'safeArea' && z.insetsPx) {
                var ins = z.insetsPx;
                var x = ins.left || 0;
                var y = ins.top || 0;
                var rw = w - (ins.left || 0) - (ins.right || 0);
                var rh = h - (ins.top || 0) - (ins.bottom || 0);
                leftPct = (x / w) * 100;
                topPct = (y / h) * 100;
                widthPct = (rw / w) * 100;
                heightPct = (rh / h) * 100;
                el.className = 'safe-zone-item rect';
            } else if (z.type === 'guide' && z.rectPx) {
                var r = z.rectPx;
                leftPct = (r.x / w) * 100;
                topPct = (r.y / h) * 100;
                widthPct = (r.w / w) * 100;
                heightPct = (r.h / h) * 100;
                el.className = 'safe-zone-item rect';
            } else if (isCircle && z.rectPx) {
                var r = z.rectPx;
                leftPct = (r.x / w) * 100;
                topPct = (r.y / h) * 100;
                widthPct = (r.w / w) * 100;
                heightPct = (r.h / h) * 100;
                el.style.left = leftPct + '%';
                el.style.top = topPct + '%';
                el.style.width = widthPct + '%';
                el.style.height = heightPct + '%';
                el.className = 'safe-zone-item circle';
                safeZonesLayer.appendChild(el);
                return;
            } else if (isCircle) {
                var diameterPx = (z.size || 0.1) * Math.min(w, h);
                var widthPctCircle = (diameterPx / w) * 100;
                var heightPctCircle = (diameterPx / h) * 100;
                leftPct = (z.left || 0) * 100;
                topPct = (z.top || 0) * 100;
                el.style.left = leftPct + '%';
                el.style.top = topPct + '%';
                el.style.width = widthPctCircle + '%';
                el.style.height = heightPctCircle + '%';
                el.className = 'safe-zone-item circle';
                safeZonesLayer.appendChild(el);
                return;
            } else {
                leftPct = ((z.left || 0) * 100);
                topPct = ((z.top || 0) * 100);
                widthPct = (z.width !== undefined ? z.width : 1) * 100;
                heightPct = (z.height !== undefined ? z.height : 0.1) * 100;
                el.className = 'safe-zone-item rect';
            }

            el.style.left = leftPct + '%';
            el.style.top = topPct + '%';
            el.style.width = widthPct + '%';
            el.style.height = heightPct + '%';
            safeZonesLayer.appendChild(el);
        });
        safeZonesLayer.style.display = state.safeZonesVisible ? '' : 'none';
        var circles = safeZonesLayer.querySelectorAll('.safe-zone-item.circle');
        if (circles.length > 0) {
            circles.forEach(function (circleEl) {
                var rect = circleEl.getBoundingClientRect();
                var diff = Math.abs(rect.width - rect.height);
                if (typeof console !== 'undefined' && console.log) {
                    console.log('[SafeZones] circle size diff (|w-h| px):', diff.toFixed(2));
                }
            });
        }
    }

    function handleBackgroundFile(file) {
        if (!file.type.startsWith('image/')) return;
        pushUndoState().then(function () {
            var url = URL.createObjectURL(file);
            state.bgUrl = url;
            state.bgOffsetX = 0;
            state.bgOffsetY = 0;
            state.bgZoom = 1;
            state.bgImageWidth = null;
            state.bgImageHeight = null;
            updateSizeReadyIcons();
            var img = new Image();
            img.onload = function () {
                state.bgImageWidth = img.naturalWidth;
                state.bgImageHeight = img.naturalHeight;
                applyBgPosition();
            };
            img.onerror = function () {
                applyBgPosition();
            };
            img.src = url;
            bgLayer.style.backgroundImage = 'url(' + url + ')';
            applyBgPosition();
            initBgLayerDrag();
            fileBackground.value = '';
            updateButtons();
            updateLayersList();
        });
    }

    function clearBackground(skipPushUndo) {
        function doClear() {
            if (state.bgUrl) URL.revokeObjectURL(state.bgUrl);
            state.bgUrl = null;
            state.bgOffsetX = 0;
            state.bgOffsetY = 0;
            updateSizeReadyIcons();
            state.bgZoom = 1;
            state.bgImageWidth = null;
            state.bgImageHeight = null;
            bgLayer.style.backgroundImage = '';
            bgLayer.style.backgroundPosition = '';
            bgLayer.style.backgroundSize = '';
            if (bgLayer._bgDragCleanup) { bgLayer._bgDragCleanup(); }
            updateButtons();
            updateLayersList();
        }
        if (skipPushUndo) {
            doClear();
        } else {
            pushUndoState().then(doClear);
        }
    }

    function initBgLayerDrag() {
        if (!bgLayer || !state.bgUrl || bgLayer._bgDragInited) return;
        bgLayer._bgDragInited = true;
        bgLayer.style.cursor = 'move';

        function onStart(e) {
            if (!state.bgUrl) return;
            e.preventDefault();
            const startX = e.touches ? e.touches[0].clientX : e.clientX;
            const startY = e.touches ? e.touches[0].clientY : e.clientY;
            const startOffsetX = state.bgOffsetX;
            const startOffsetY = state.bgOffsetY;

            function onMove(e) {
                var x = e.touches ? e.touches[0].clientX : e.clientX;
                var y = e.touches ? e.touches[0].clientY : e.clientY;
                state.bgOffsetX = startOffsetX + (x - startX);
                state.bgOffsetY = startOffsetY + (y - startY);
                applyBgPosition();
            }
            function onEnd() {
                document.removeEventListener('mousemove', onMove);
                document.removeEventListener('mouseup', onEnd);
                document.removeEventListener('touchmove', onMove, { passive: true });
                document.removeEventListener('touchend', onEnd);
            }
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onEnd);
            document.addEventListener('touchmove', onMove, { passive: true });
            document.addEventListener('touchend', onEnd);
        }

        function onWheel(e) {
            if (!state.bgUrl) return;
            e.preventDefault();
            var delta = e.deltaY > 0 ? -0.05 : 0.05;
            var zoom = Math.max(1, Math.min(1.5, (state.bgZoom || 1) + delta));
            state.bgZoom = Math.round(zoom * 100) / 100;
            applyBgPosition();
        }

        bgLayer.addEventListener('mousedown', onStart);
        bgLayer.addEventListener('touchstart', onStart, { passive: false });
        bgLayer.addEventListener('wheel', onWheel, { passive: false });
        bgLayer._bgDragCleanup = function () {
            bgLayer.removeEventListener('mousedown', onStart);
            bgLayer.removeEventListener('touchstart', onStart);
            bgLayer.removeEventListener('wheel', onWheel);
            bgLayer.style.cursor = '';
            bgLayer._bgDragInited = false;
            bgLayer._bgDragCleanup = null;
        };
    }

    function triggerImageUpload(slotIndex) {
        state.currentImageSlot = slotIndex;
        fileImage.click();
    }

    function selectImageSlot(slotIndex) {
        state.selectedImageSlot = slotIndex;
        state.selectedTextId = null;
        state.overlayTexts.forEach(function (t) { t.el.classList.remove('selected'); });
        const item = state.overlayImages[slotIndex];
        if (item && item.el) item.el.classList.add('selected');
        state.overlayImages.forEach((it, i) => {
            if (it && it.el && i !== slotIndex) it.el.classList.remove('selected');
        });
        updateTextFloatToolbarVisibility();
        updateLayersList();
        updateSelectionFrame();
    }

    function handleImageFile(file) {
        if (!file.type.startsWith('image/')) return;
        const slotIndex = typeof state.currentImageSlot === 'number' ? state.currentImageSlot : state.nextImageSlot;
        pushUndoState().then(function () {
            const url = URL.createObjectURL(file);
            const draggable = createDraggableImage(url, slotIndex);
            state.overlayImages[slotIndex] = { url, file, el: draggable, scale: 1, x: 0, y: 0 };
            state.layersOrder.push('image-' + slotIndex);
            draggable.style.visibility = 'hidden';
            overlayLayer.appendChild(draggable);
            applyLayersOrderToCanvas();
            centerItemOnCanvas(draggable, slotIndex);
            state.nextImageSlot = Math.min(state.nextImageSlot + 1, MAX_OVERLAY_IMAGES);
            state.currentImageSlot = null;
            fileImage.value = '';
            updateButtons();
            updateLayersList();
            updateSizeReadyIcons();
        });
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
            var defaultMaxW = 320;
            var maxW = Math.min(defaultMaxW, state.size.w * 0.5);
            var maxH = state.size.h * 0.5;
            var w = img.naturalWidth || 100;
            var h = img.naturalHeight || 100;
            if (w > maxW || h > maxH) {
                var r = Math.min(maxW / w, maxH / h);
                w *= r;
                h *= r;
            }
            wrap.style.width = w + 'px';
            wrap.style.height = h + 'px';
            wrap.dataset.scale = '1';
            wrap.dataset.aspectRatio = String(img.naturalWidth / img.naturalHeight);
            wrap.dataset.originalWidth = String(w);
            wrap.dataset.originalHeight = String(h);
            centerItemOnCanvas(wrap, slotIndex);
            requestAnimationFrame(function () { wrap.style.visibility = ''; });
        };
        makeDraggableAndScalable(wrap, slotIndex);
        return wrap;
    }

    function centerItemOnCanvas(wrap, slotIndex) {
        if (!state.size || !resultContainer) return;
        var w = parseFloat(wrap.style.width) || wrap.offsetWidth || 100;
        var h = parseFloat(wrap.style.height) || wrap.offsetHeight || 100;
        var left = state.size.w / 2 - w / 2;
        var top = state.size.h / 2 - h / 2;
        wrap.style.left = left + 'px';
        wrap.style.top = top + 'px';
        var data = state.overlayImages[slotIndex];
        if (data) {
            data.x = left;
            data.y = top;
        }
    }

    function makeDraggableAndScalable(wrap, slotIndex) {
        let startX, startY, startLeft, startTop;
        let scale = 1;

        wrap.addEventListener('mousedown', onStart);
        wrap.addEventListener('touchstart', onStart, { passive: false });

        var rafId = null;
        function onStart(e) {
            e.preventDefault();
            selectImageSlot(slotIndex);
            pushUndoState();
            const touch = e.touches ? e.touches[0] : e;
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
            e.preventDefault();
            const touch = e.touches ? e.touches[0] : e;
            if (rafId != null) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(function () {
                rafId = null;
                var p0 = clientToOverlay(startX, startY);
                var p1 = clientToOverlay(touch.clientX, touch.clientY);
                var modelDx = p1.x - p0.x;
                var modelDy = p1.y - p0.y;
                var s = parseFloat(wrap.dataset.scale) || 1;
                var w = parseFloat(wrap.style.width) || wrap.offsetWidth || 50;
                var h = parseFloat(wrap.style.height) || wrap.offsetHeight || 50;
                var rawLeft = startLeft + modelDx;
                var rawTop = startTop + modelDy;
                var visLeft = rawLeft + w * (1 - s) / 2;
                var visTop = rawTop + h * (1 - s) / 2;
                var visW = w * s;
                var visH = h * s;
                var snapLines = getSnapLines(wrap);
                var snapped = applySnap(visLeft, visTop, visW, visH, snapLines);
                var left = snapped.left - w * (1 - s) / 2;
                var top = snapped.top - h * (1 - s) / 2;
                wrap.style.left = left + 'px';
                wrap.style.top = top + 'px';
                updateGuidesLayer(snapped.guides);
                const data = state.overlayImages[slotIndex];
                if (data) {
                    data.x = left;
                    data.y = top;
                }
                var frameContainer = selectionFrameWrapper || selectionFrame;
                if (frameContainer) {
                    frameContainer.style.left = (left + w * (1 - s) / 2) + 'px';
                    frameContainer.style.top = (top + h * (1 - s) / 2) + 'px';
                    frameContainer.style.width = visW + 'px';
                    frameContainer.style.height = visH + 'px';
                }
            });
        }

        function onEnd() {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onEnd);
            document.removeEventListener('touchmove', onMove);
            document.removeEventListener('touchend', onEnd);
            updateGuidesLayer(null);
            updateSelectionFrame();
        }

        wrap.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -0.1 : 0.1;
            scale = Math.max(0.2, Math.min(3, (parseFloat(wrap.dataset.scale) || 1) + delta));
            wrap.dataset.scale = String(scale);
            const data = state.overlayImages[slotIndex];
            var rot = (data && (data.rotation != null)) ? data.rotation : 0;
            wrap.style.transform = (rot ? 'rotate(' + rot + 'deg) ' : '') + 'scale(' + scale + ')';
            if (data) data.scale = scale;
            updateSelectionFrame();
        }, { passive: false });

        wrap.addEventListener('dblclick', (e) => {
            e.preventDefault();
            var s = parseFloat(wrap.dataset.scale) || 1;
            var w = wrap.offsetWidth || 50;
            var h = wrap.offsetHeight || 50;
            var left = parseFloat(wrap.style.left) || 0;
            var top = parseFloat(wrap.style.top) || 0;
            var centerX = left + w / 2;
            var centerY = top + h / 2;
            var origW = parseFloat(wrap.dataset.originalWidth) || w;
            var origH = parseFloat(wrap.dataset.originalHeight) || h;
            wrap.style.width = origW + 'px';
            wrap.style.height = origH + 'px';
            wrap.style.left = (centerX - origW / 2) + 'px';
            wrap.style.top = (centerY - origH / 2) + 'px';
            wrap.dataset.scale = '1';
            wrap.dataset.aspectRatio = String(origW / origH);
            var data = state.overlayImages[slotIndex];
            var rot = (data && (data.rotation != null)) ? data.rotation : 0;
            wrap.style.transform = (rot ? 'rotate(' + rot + 'deg) ' : '') + 'scale(1)';
            if (data) {
                data.scale = 1;
                data.x = centerX - origW / 2;
                data.y = centerY - origH / 2;
            }
            updateSelectionFrame();
        });
    }

    function removeImageSlot(slotIndex) {
        const data = state.overlayImages[slotIndex];
        if (data) {
            if (data.url) URL.revokeObjectURL(data.url);
            if (data.el && data.el.parentNode) data.el.parentNode.removeChild(data.el);
            state.overlayImages[slotIndex] = null;
        }
        if (state.selectedImageSlot === slotIndex) {
            state.selectedImageSlot = null;
            updateSelectionFrame();
        }
        state.layersOrder = state.layersOrder.filter(function (x) { return x !== 'image-' + slotIndex; });
        applyLayersOrderToCanvas();
        for (let i = 0; i < MAX_OVERLAY_IMAGES; i++) {
            if (!state.overlayImages[i]) { state.nextImageSlot = i; break; }
            state.nextImageSlot = i + 1;
        }
        updateButtons();
        updateLayersList();
        updateSizeReadyIcons();
    }

    function positionThemeTabsSlider() {
        var slider = $('themeTabsSlider');
        var active = document.querySelector('.theme-tabs button.active');
        if (slider && active) {
            var tabs = active.closest('.theme-tabs');
            var pad = tabs ? parseInt(getComputedStyle(tabs).paddingLeft, 10) || 2 : 2;
            slider.style.transform = 'translateX(' + (active.offsetLeft - pad) + 'px)';
        }
    }

    var stateSelectedFont = 'Inter';

    function getSelectedFont() {
        return stateSelectedFont || 'Inter';
    }

    function loadFontList() {
        const fonts = FONTS_FALLBACK;
        if (textFontSelect) {
            textFontSelect.innerHTML = '';
            fonts.forEach(function (fontName) {
                var opt = document.createElement('option');
                opt.value = fontName;
                opt.textContent = fontName;
                opt.style.fontFamily = "'" + fontName + "', sans-serif";
                if (fontName === 'Inter') opt.selected = true;
                textFontSelect.appendChild(opt);
            });
        }
        if (fontList) {
            fontList.innerHTML = '';
            fonts.forEach(function (fontName) {
                var btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'font-list-item' + (fontName === 'Inter' ? ' selected' : '');
                btn.dataset.font = fontName;
                btn.textContent = fontName;
                btn.style.fontFamily = "'" + fontName + "', sans-serif";
                btn.addEventListener('click', function () {
                    stateSelectedFont = fontName;
                    document.querySelectorAll('.font-list-item').forEach(function (item) { item.classList.remove('selected'); });
                    btn.classList.add('selected');
                    if (textFontSelect) { textFontSelect.value = fontName; }
                    applyFontToTextElement(fontName, state.overlayTexts.filter(function (t) { return t.el.classList.contains('selected'); }).map(function (t) { return t.el; }));
                });
                fontList.appendChild(btn);
            });
        }
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=' + fonts.map(function (f) { return f.replace(/ /g, '+'); }).join('&family=') + '&display=swap';
        document.head.appendChild(link);
    }

    function syncFontListSelection(fontName) {
        stateSelectedFont = fontName || 'Inter';
        if (textFontSelect) textFontSelect.value = stateSelectedFont;
        if (fontList) {
            document.querySelectorAll('.font-list-item').forEach(function (item) {
                item.classList.toggle('selected', item.dataset.font === stateSelectedFont);
            });
        }
    }

    function syncTextToolbarFromElement(el) {
        if (!el) return;
        var align = el.style.textAlign || 'left';
        var bold = (el.style.fontWeight === 'bold' || el.style.fontWeight === '700');
        var italic = (el.style.fontStyle === 'italic');
        var underline = (el.style.textDecoration || '').indexOf('underline') !== -1;
        var uppercase = (el.style.textTransform || '') === 'uppercase';
        var fs = parseFloat(el.style.fontSize) || 24;
        [textAlignLeftBtn, textAlignCenterBtn, textAlignRightBtn].forEach(function (btn) { if (btn) btn.classList.remove('active'); });
        if (textAlignLeftBtn && align === 'left') textAlignLeftBtn.classList.add('active');
        if (textAlignCenterBtn && align === 'center') textAlignCenterBtn.classList.add('active');
        if (textAlignRightBtn && align === 'right') textAlignRightBtn.classList.add('active');
        if (textBoldBtn) textBoldBtn.classList.toggle('active', bold);
        if (textItalicBtn) textItalicBtn.classList.toggle('active', italic);
        if (textUnderlineBtn) textUnderlineBtn.classList.toggle('active', underline);
        if (textUppercaseBtn) textUppercaseBtn.classList.toggle('active', uppercase);
        if (textSizeValue) textSizeValue.value = String(Math.round(fs));
        var t = state.overlayTexts.find(function (x) { return x.el === el; });
        var textRotationValue = $('textRotationValue');
        if (textRotationValue && t) textRotationValue.value = String(t.rotation != null ? t.rotation : 0);
    }

    function bindTextToolbarButtons() {
        function applyToSelected(prop, value) {
            state.overlayTexts.forEach(function (t) {
                if (t.el.classList.contains('selected')) {
                    t.el.style[prop] = value;
                }
            });
        }
        if (textAlignLeftBtn) textAlignLeftBtn.addEventListener('click', function () {
            applyToSelected('textAlign', 'left');
            [textAlignLeftBtn, textAlignCenterBtn, textAlignRightBtn].forEach(function (b) { if (b) b.classList.remove('active'); });
            textAlignLeftBtn.classList.add('active');
        });
        if (textAlignCenterBtn) textAlignCenterBtn.addEventListener('click', function () {
            applyToSelected('textAlign', 'center');
            [textAlignLeftBtn, textAlignCenterBtn, textAlignRightBtn].forEach(function (b) { if (b) b.classList.remove('active'); });
            textAlignCenterBtn.classList.add('active');
        });
        if (textAlignRightBtn) textAlignRightBtn.addEventListener('click', function () {
            applyToSelected('textAlign', 'right');
            [textAlignLeftBtn, textAlignCenterBtn, textAlignRightBtn].forEach(function (b) { if (b) b.classList.remove('active'); });
            textAlignRightBtn.classList.add('active');
        });
        if (textBoldBtn) textBoldBtn.addEventListener('click', function () {
            state.overlayTexts.forEach(function (t) {
                if (t.el.classList.contains('selected')) {
                    var cur = t.el.style.fontWeight;
                    t.el.style.fontWeight = (cur === 'bold' || cur === '700') ? 'normal' : 'bold';
                }
            });
            syncTextToolbarFromElement(state.overlayTexts.find(function (t) { return t.el.classList.contains('selected'); })?.el);
        });
        if (textItalicBtn) textItalicBtn.addEventListener('click', function () {
            state.overlayTexts.forEach(function (t) {
                if (t.el.classList.contains('selected')) {
                    var cur = t.el.style.fontStyle;
                    t.el.style.fontStyle = cur === 'italic' ? 'normal' : 'italic';
                }
            });
            syncTextToolbarFromElement(state.overlayTexts.find(function (t) { return t.el.classList.contains('selected'); })?.el);
        });
        if (textUnderlineBtn) textUnderlineBtn.addEventListener('click', function () {
            state.overlayTexts.forEach(function (t) {
                if (t.el.classList.contains('selected')) {
                    var cur = t.el.style.textDecoration || '';
                    t.el.style.textDecoration = cur.indexOf('underline') !== -1 ? 'none' : 'underline';
                }
            });
            syncTextToolbarFromElement(state.overlayTexts.find(function (t) { return t.el.classList.contains('selected'); })?.el);
        });
        if (textUppercaseBtn) textUppercaseBtn.addEventListener('click', function () {
            state.overlayTexts.forEach(function (t) {
                if (t.el.classList.contains('selected')) {
                    var cur = t.el.style.textTransform || '';
                    t.el.style.textTransform = cur === 'uppercase' ? 'none' : 'uppercase';
                }
            });
            syncTextToolbarFromElement(state.overlayTexts.find(function (t) { return t.el.classList.contains('selected'); })?.el);
        });
        var textRotationValue = $('textRotationValue');
        var textRotationUp = $('textRotationUp');
        var textRotationDown = $('textRotationDown');
        function applyTextRotation() {
            var t = state.overlayTexts.find(function (x) { return x.el.classList.contains('selected'); });
            if (!t || !textRotationValue) return;
            var r = parseInt(textRotationValue.value, 10) || 0;
            r = Math.max(-360, Math.min(360, r));
            textRotationValue.value = String(r);
            t.rotation = r;
            t.el.style.transform = r ? 'rotate(' + r + 'deg)' : '';
            updateSelectionFrame();
        }
        function stepTextRotation(delta, e) {
            var t = state.overlayTexts.find(function (x) { return x.el.classList.contains('selected'); });
            if (!t || !textRotationValue) return;
            var step = (e && e.shiftKey) ? 10 : 1;
            var actualDelta = delta > 0 ? step : -step;
            var r = (t.rotation != null ? t.rotation : 0) + actualDelta;
            if (e && e.shiftKey) r = Math.round(r / 10) * 10;
            r = Math.max(-360, Math.min(360, r));
            t.rotation = r;
            textRotationValue.value = String(r);
            t.el.style.transform = r ? 'rotate(' + r + 'deg)' : '';
            updateSelectionFrame();
        }
        function bindTextRotationRepeat(btn, delta) {
            if (!btn) return;
            var timer = null;
            var initialTimer = null;
            function clearAll() {
                if (timer) { clearInterval(timer); timer = null; }
                if (initialTimer) { clearTimeout(initialTimer); initialTimer = null; }
                document.removeEventListener('mouseup', clearAll);
                btn.removeEventListener('pointerleave', clearAll);
            }
            btn.addEventListener('mousedown', function (e) {
                e.preventDefault();
                e.stopPropagation();
                stepTextRotation(delta, e);
                initialTimer = setTimeout(function () {
                    initialTimer = null;
                    timer = setInterval(function () { stepTextRotation(delta, e); }, 80);
                }, 400);
                document.addEventListener('mouseup', clearAll);
                btn.addEventListener('pointerleave', clearAll);
            });
        }
        bindTextRotationRepeat(textRotationUp, 1);
        bindTextRotationRepeat(textRotationDown, -1);
        if (textRotationValue) {
            textRotationValue.addEventListener('input', function () { this.value = this.value.replace(/[^\d-]/g, ''); });
            textRotationValue.addEventListener('change', applyTextRotation);
        }
        var textRotationIcon = document.querySelector('.text-toolbar-rotation-icon');
        if (textRotationIcon) {
            textRotationIcon.addEventListener('click', function () {
                if (textRotationValue) {
                    textRotationValue.value = '0';
                    applyTextRotation();
                }
            });
        }
    }

    function toggleAddTextMode() {
        if (!state.size) return;
        state.addingTextMode = true;
        $('btnAddText')?.classList?.add('active');
        if (overlayLayer) overlayLayer.style.pointerEvents = 'auto';
        createTextOnCanvas(state.size.w / 2, state.size.h / 2);
        state.addingTextMode = false;
        $('btnAddText')?.classList?.remove('active');
        if (overlayLayer) overlayLayer.style.pointerEvents = '';
    }

    function onOverlayClick(e) {
        if (!state.addingTextMode || !state.size || !overlayLayer) return;
        if (e.target.closest('.draggable-item') || e.target.closest('.text-item')) return;
        if (e.target !== overlayLayer) return;
        var p = clientToOverlay(e.clientX, e.clientY);
        createTextOnCanvas(p.x, p.y);
        state.addingTextMode = false;
        $('btnAddText')?.classList?.remove('active');
        if (overlayLayer) overlayLayer.style.pointerEvents = '';
    }

    function applyFontToTextElement(fontName, elements) {
        var fontValue = "'" + fontName + "', sans-serif";
        elements.forEach(function (el) {
            if (!el) return;
            el.style.fontFamily = fontValue;
            el.dataset.font = fontName;
            el.querySelectorAll('*').forEach(function (desc) {
                desc.style.fontFamily = fontValue;
            });
        });
    }

    var TEXT_DEFAULT_WIDTH = 420;
    var TEXT_DEFAULT_HEIGHT = 80;

    function createTextOnCanvas(x, y) {
        pushUndoState().then(function () {
            var font = getSelectedFont();
            var hex = textColorInput?.value || '#2563eb';
            if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) hex = '#2563eb';
            var alpha = (textColorTrigger && textColorTrigger.dataset.alpha) ? parseInt(textColorTrigger.dataset.alpha, 10) : 100;
            var color = (alpha < 100) ? (function () { var r = hexToRgb(hex); return 'rgba(' + r.r + ',' + r.g + ',' + r.b + ',' + (alpha / 100) + ')'; })() : hex;
            var boxW = TEXT_DEFAULT_WIDTH;
            var boxH = TEXT_DEFAULT_HEIGHT;
            var left = x - boxW / 2;
            var top = y - boxH / 2;
            var div = document.createElement('div');
            div.className = 'text-item';
            div.contentEditable = 'true';
            div.dataset.placeholder = 'Enter text…';
            div.style.fontFamily = "'" + font + "', sans-serif";
            div.style.fontSize = Math.min(48, state.size.w / 15) + 'px';
            div.style.color = color;
            div.style.textAlign = 'left';
            div.style.fontWeight = 'normal';
            div.style.fontStyle = 'normal';
            div.style.textDecoration = 'none';
            div.style.textTransform = 'none';
            div.style.left = left + 'px';
            div.style.top = top + 'px';
            div.style.minWidth = boxW + 'px';
            div.style.minHeight = boxH + 'px';
            div.dataset.font = font;
            div.dataset.color = color;
            var layerId = 'text-' + (state.nextTextId++);
            state.overlayTexts.push({ el: div, x: left, y: top, layerId: layerId, rotation: 0 });
            state.layersOrder.push(layerId);
            div.style.visibility = 'hidden';
            overlayLayer.appendChild(div);
            requestAnimationFrame(function () { div.style.visibility = ''; });
            applyLayersOrderToCanvas();
            div.focus();
            makeTextDraggable(div, state.overlayTexts.length - 1);
            updateSizeReadyIcons();
            div.addEventListener('input', function () {
            if (!div.dataset.manuallyResized) { div.style.height = 'auto'; div.style.overflow = ''; }
            var f = div.dataset.font;
            if (f) applyFontToTextElement(f, [div]);
            updateLayersList();
            updateSelectionFrame();
        });
        div.addEventListener('paste', function () {
            setTimeout(function () {
                var f = div.dataset.font;
                if (f) applyFontToTextElement(f, [div]);
                updateLayersList();
            }, 0);
        });
        div.addEventListener('wheel', function (e) {
            e.preventDefault();
            var fs = parseFloat(div.style.fontSize) || 24;
            var delta = e.deltaY > 0 ? -2 : 2;
            fs = Math.max(12, Math.min(120, fs + delta));
            div.style.fontSize = fs + 'px';
            if (textSizeValue && div.classList.contains('selected')) textSizeValue.value = String(Math.round(fs));
            if (!div.dataset.manuallyResized) {
                div.style.width = '';
                div.style.minWidth = '';
                div.style.height = '';
                div.style.overflow = '';
            }
            updateSelectionFrame();
            requestToolbarLayout();
        }, { passive: false });
        div.addEventListener('blur', function onBlur() {
            if (!div.textContent.trim()) {
                div.remove();
                const i = state.overlayTexts.findIndex(t => t.el === div);
                if (i >= 0) {
                    var layerId = state.overlayTexts[i].layerId;
                    state.overlayTexts.splice(i, 1);
                    state.layersOrder = state.layersOrder.filter(function (x) { return x !== layerId; });
                    applyLayersOrderToCanvas();
                    if (state.selectedTextId === i) state.selectedTextId = null;
                    else if (state.selectedTextId !== null && state.selectedTextId > i) state.selectedTextId--;
                }
            }
            updateTextFloatToolbarVisibility();
            updateButtons();
            updateLayersList();
        });
        state.selectedTextId = state.overlayTexts.length - 1;
            updateTextFloatToolbarVisibility();
            updateButtons();
            updateLayersList();
        });
    }

    function onTextColorChange() {
        var color = state._pendingTextColor != null ? state._pendingTextColor : (textColorInput && textColorInput.value);
        if (state._pendingTextColor != null) state._pendingTextColor = null;
        if (!color) return;
        state.overlayTexts.forEach(t => {
            if (t.el.classList.contains('selected')) {
                t.el.style.color = color;
                t.el.dataset.color = color;
            }
        });
    }

    function changeTextSize(delta) {
        state.overlayTexts.forEach(function (t) {
            if (t.el.classList.contains('selected')) {
                var el = t.el;
                var fs = parseFloat(el.style.fontSize) || 24;
                fs = Math.max(12, Math.min(120, fs + delta));
                el.style.fontSize = fs + 'px';
                if (textSizeValue) textSizeValue.value = String(Math.round(fs));
                if (!el.dataset.manuallyResized) {
                    el.style.width = '';
                    el.style.minWidth = '';
                    el.style.height = '';
                    el.style.overflow = '';
                }
                updateSelectionFrame();
                requestToolbarLayout();
            }
        });
    }

    function deselectAll() {
        state.selectedTextId = null;
        state.selectedImageSlot = null;
        state.selectedShapeId = null;
        state.overlayTexts.forEach(function (t) { t.el.classList.remove('selected'); });
        state.overlayImages.forEach(function (it) { if (it && it.el) it.el.classList.remove('selected'); });
        state.overlayShapes.forEach(function (s) { if (s && s.el) s.el.classList.remove('selected'); });
        updateTextFloatToolbarVisibility();
        updateShapeToolbarVisibility();
        updateSelectionFrame();
        updateLayersList();
    }

    function onCanvasMousedown(e) {
        if (state.addingTextMode) return;
        if (state.selectedTextId != null || state.selectedShapeId != null) {
            var selTextEl = state.selectedTextId != null && state.overlayTexts[state.selectedTextId] ? state.overlayTexts[state.selectedTextId].el : null;
            var selShapeEl = state.selectedShapeId != null && state.overlayShapes[state.selectedShapeId] ? state.overlayShapes[state.selectedShapeId].el : null;
            var clickedEl = e.target.closest('.text-item') || e.target.closest('.shape-item') || e.target.closest('.draggable-item');
            var clickingCurrent = (selTextEl && clickedEl === selTextEl) || (selShapeEl && clickedEl === selShapeEl);
            if (!clickingCurrent && (clickedEl || e.target.closest('.result-container'))) {
                if (textFloatToolbar) { textFloatToolbar.classList.remove('visible'); textFloatToolbar.style.display = 'none'; }
                if (shapeFloatToolbar) { shapeFloatToolbar.classList.remove('visible'); shapeFloatToolbar.style.display = 'none'; }
            }
        }
        if (state.shapeBezierMode) {
            if (!e.target.closest('.shape-item') && !e.target.closest('.shape-bezier-handles') && !e.target.closest('.shape-radius-handles') && !e.target.closest('.shape-line-endpoint-handles')) {
                state.shapeBezierMode = false;
                document.body.classList.remove('shape-bezier-mode');
                hideShapeBezierHandles();
                applyShapeToolbarToShape();
                updateShapeToolbarVisibility();
                updateSelectionFrame();
            }
            return;
        }
        if (e.target.closest('.text-item') || e.target.closest('.draggable-item') || e.target.closest('.text-float-toolbar') || e.target.closest('.shape-float-toolbar') || e.target.closest('.selection-frame')) return;
        if (e.target.closest('.shape-item')) {
            var shapeEl = e.target.closest('.shape-item');
            var layerId = shapeEl.dataset.layerId;
            var idx = state.overlayShapes.findIndex(function (s) { return s.layerId === layerId; });
            if (idx >= 0) {
                state.selectedTextId = null;
                state.selectedImageSlot = null;
                state.overlayTexts.forEach(function (t) { t.el.classList.remove('selected'); });
                state.overlayImages.forEach(function (it) { if (it && it.el) it.el.classList.remove('selected'); });
                state.overlayShapes.forEach(function (s) { if (s && s.el) s.el.classList.remove('selected'); });
                shapeEl.classList.add('selected');
                state.selectedShapeId = idx;
                updateTextFloatToolbarVisibility();
                updateShapeToolbarVisibility();
                requestToolbarLayout();
                updateLayersList();
                updateSelectionFrame();
            }
            return;
        }
        deselectAll();
    }

    function onDocumentMousedown(e) {
        if (state.addingTextMode) return;
        if (e.target.closest('#shapeBezierBtn') || e.target.closest('.shape-float-toolbar')) return;
        if (state.shapeBezierMode) {
            if (e.target.closest('.shape-bezier-handles') || e.target.closest('.shape-radius-handles') || e.target.closest('.shape-line-endpoint-handles') || e.target.closest('.shape-item') || e.target.closest('.shape-float-toolbar') || e.target.closest('.text-float-toolbar') || e.target.closest('#canvasWrap')) return;
            state.shapeBezierMode = false;
            document.body.classList.remove('shape-bezier-mode');
            hideShapeBezierHandles();
            applyShapeToolbarToShape();
            updateShapeToolbarVisibility();
            updateSelectionFrame();
            return;
        }
        if (e.target.closest('#canvasWrap')) {
            if (!e.target.closest('.text-item') && !e.target.closest('.draggable-item') && !e.target.closest('.shape-item') && !e.target.closest('.selection-frame') && !e.target.closest('.text-float-toolbar') && !e.target.closest('.shape-float-toolbar')) {
                deselectAll();
            }
            return;
        }
        if (e.target.closest('.sidebar-right')) return;
        if (e.target.closest('.shape-float-toolbar') || e.target.closest('.text-float-toolbar') || e.target.closest('.color-picker-popover')) return;
        if (colorPickerPopover && colorPickerPopover.classList.contains('open')) return;
        deselectAll();
    }

    function getLayerEl(layerId) {
        if (layerId === 'background') return null;
        var m = layerId.match(/^image-(\d+)$/);
        if (m) {
            var d = state.overlayImages[parseInt(m[1], 10)];
            return d && d.el ? d.el : null;
        }
        m = layerId.match(/^text-(.+)$/);
        if (m) {
            var t = state.overlayTexts.find(function (x) { return x.layerId === layerId; });
            return t && t.el ? t.el : null;
        }
        m = layerId.match(/^shape-(\d+)$/);
        if (m) {
            var s = state.overlayShapes.find(function (x) { return x.layerId === layerId; });
            return s && s.el ? s.el : null;
        }
        return null;
    }

    function applyLayersOrderToCanvas() {
        if (!overlayLayer) return;
        state.layersOrder.forEach(function (id) {
            if (id === 'background') return;
            var el = getLayerEl(id);
            if (el && el.parentNode === overlayLayer) overlayLayer.appendChild(el);
        });
    }

    function updateLayersList() {
        if (!layersList) return;
        layersList.innerHTML = '';
        var bgSection = document.createElement('div');
        bgSection.className = 'layers-bg-section';
        var overlaySection = document.createElement('div');
        overlaySection.className = 'layers-overlay-section';
        var overlayRows = [];
        state.layersOrder.forEach(function (layerId, idx) {
            var row = document.createElement('div');
            row.className = 'layer-row';
            row.dataset.layerId = layerId;
            row.setAttribute('role', 'listitem');
            row.dataset.index = String(idx);
            var isSelected = false;
            var label = '';
            var previewHtml = '';

            if (layerId === 'background') {
                label = state.bgUrl ? 'Background' : 'Background';
                previewHtml = state.bgUrl ? '<img src="' + state.bgUrl + '" alt="">' : '<span>Bg</span>';
                isSelected = false;
            } else {
                var m = layerId.match(/^image-(\d+)$/);
                if (m) {
                    var slot = parseInt(m[1], 10);
                    var imgData = state.overlayImages[slot];
                    if (imgData && imgData.el) {
                        label = 'Image ' + (slot + 1);
                        previewHtml = imgData.url ? '<img src="' + imgData.url + '" alt="">' : '<span>' + (slot + 1) + '</span>';
                        isSelected = state.selectedImageSlot === slot;
                    }
                } else {
                    var txt = state.overlayTexts.find(function (t) { return t.layerId === layerId; });
                    if (txt && txt.el) {
                        label = (txt.el.textContent || '').trim() || '—';
                        previewHtml = '<span>T</span>';
                        var ti = state.overlayTexts.indexOf(txt);
                        isSelected = state.selectedTextId === ti;
                    } else {
                        var sh = state.overlayShapes.find(function (s) { return s.layerId === layerId; });
                        if (sh && sh.el) {
                            var shapeDef = SHAPE_TYPES.find(function (d) { return d.id === sh.typeId; });
                            label = shapeDef ? shapeDef.name : 'Shape';
                            previewHtml = '<span>S</span>';
                            isSelected = state.selectedShapeId === state.overlayShapes.indexOf(sh);
                        }
                    }
                }
            }

            if (isSelected) row.classList.add('selected');

            var currIdx = state.layersOrder.indexOf(layerId);
            var isImage = /^image-\d+$/.test(layerId);
            var canMoveUp = layerId !== 'background' && currIdx < state.layersOrder.length - 1;
            var canMoveDown = layerId !== 'background' && currIdx > 1;
            row.innerHTML = '<div class="layer-preview">' + previewHtml + '</div>' +
                '<span class="layer-label" title="' + (label || '').replace(/"/g, '&quot;') + '">' + (label || '—') + '</span>' +
                (layerId !== 'background' ? '<button type="button" class="btn-layer-up' + (canMoveUp ? '' : ' disabled') + '" data-tooltip="Move up" aria-label="Move up">↑</button>' +
                '<button type="button" class="btn-layer-down' + (canMoveDown ? '' : ' disabled') + '" data-tooltip="Move down" aria-label="Move down">↓</button>' : '') +
                (layerId !== 'background' || state.bgUrl ? '<button type="button" class="btn-remove" data-tooltip="Remove" aria-label="Remove"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" /><path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" /></svg></button>' : '');

            var upBtn = row.querySelector('.btn-layer-up');
            var downBtn = row.querySelector('.btn-layer-down');
            if (upBtn && layerId !== 'background') upBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                var idx = state.layersOrder.indexOf(layerId);
                if (idx < state.layersOrder.length - 1) {
                    state.layersOrder.splice(idx, 1);
                    state.layersOrder.splice(idx + 1, 0, layerId);
                    applyLayersOrderToCanvas();
                    updateLayersList();
                }
            });
            if (downBtn && layerId !== 'background') downBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                var idx = state.layersOrder.indexOf(layerId);
                if (idx > 1) {
                    state.layersOrder.splice(idx, 1);
                    state.layersOrder.splice(idx - 1, 0, layerId);
                    applyLayersOrderToCanvas();
                    updateLayersList();
                }
            });

            row.addEventListener('click', function (e) {
                if (e.target.closest && (e.target.closest('.btn-remove') || e.target.closest('.btn-layer-up') || e.target.closest('.btn-layer-down'))) return;
                if (layerId === 'background') {
                    if (fileBackground) fileBackground.click();
                    return;
                }
                var m = layerId.match(/^image-(\d+)$/);
                if (m) {
                    var slot = parseInt(m[1], 10);
                    if (state.overlayImages[slot] && state.overlayImages[slot].el) {
                        selectImageSlot(slot);
                    }
                } else {
                    var txt = state.overlayTexts.find(function (t) { return t.layerId === layerId; });
                    if (txt) {
                        var ti = state.overlayTexts.indexOf(txt);
                        state.selectedImageSlot = null;
                        state.selectedShapeId = null;
                        state.overlayImages.forEach(function (it) { if (it && it.el) it.el.classList.remove('selected'); });
                        state.overlayShapes.forEach(function (s) { if (s && s.el) s.el.classList.remove('selected'); });
                        state.overlayTexts.forEach(function (t) { t.el.classList.remove('selected'); });
                        txt.el.classList.add('selected');
                        state.selectedTextId = ti;
                        updateTextFloatToolbarVisibility();
                        updateShapeToolbarVisibility();
                        updateLayersList();
                        updateSelectionFrame();
                        if (textColorInput) {
                            state.colorPickerTarget = 'text';
                            var col = txt.el.dataset.color || txt.el.style.color;
                            var parsed = parseColorForPicker(col);
                            updateColorPickerFromHex(parsed.hex);
                            colorPickerState.alpha = parsed.alpha;
                            textColorInput.value = parsed.hex;
                            if (textColorTrigger) textColorTrigger.dataset.alpha = String(parsed.alpha);
                            syncColorTrigger();
                        }
                        syncFontListSelection(txt.el.dataset.font);
                        syncTextToolbarFromElement(txt.el);
                    } else {
                        var sh = state.overlayShapes.find(function (s) { return s.layerId === layerId; });
                        if (sh && sh.el) {
                            var si = state.overlayShapes.indexOf(sh);
                            state.selectedImageSlot = null;
                            state.selectedTextId = null;
                            state.overlayImages.forEach(function (it) { if (it && it.el) it.el.classList.remove('selected'); });
                            state.overlayTexts.forEach(function (t) { t.el.classList.remove('selected'); });
                            state.overlayShapes.forEach(function (s) { if (s && s.el) s.el.classList.remove('selected'); });
                            sh.el.classList.add('selected');
                            state.selectedShapeId = si;
                            updateTextFloatToolbarVisibility();
                            updateShapeToolbarVisibility();
                            requestToolbarLayout();
                            updateLayersList();
                            updateSelectionFrame();
                        }
                    }
                }
            });

            var removeBtn = row.querySelector('.btn-remove');
            if (removeBtn) removeBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                if (layerId === 'background') {
                    clearBackground();
                    updateLayersList();
                    updateButtons();
                    return;
                }
                var m = layerId.match(/^image-(\d+)$/);
                if (m) removeImageSlot(parseInt(m[1], 10));
                else {
                    var sh = state.overlayShapes.find(function (s) { return s.layerId === layerId; });
                    if (sh && sh.el) {
                        sh.el.remove();
                        var i = state.overlayShapes.indexOf(sh);
                        state.overlayShapes.splice(i, 1);
                        if (state.selectedShapeId === i) {
                            state.selectedShapeId = null;
                            hideShapeBezierHandles();
                            hideShapeRadiusHandles();
                            if (state.shapeBezierMode) {
                                state.shapeBezierMode = false;
                                document.body.classList.remove('shape-bezier-mode');
                            }
                        } else if (state.selectedShapeId !== null && state.selectedShapeId > i) state.selectedShapeId--;
                        state.layersOrder = state.layersOrder.filter(function (x) { return x !== layerId; });
                        applyLayersOrderToCanvas();
                        updateShapeToolbarVisibility();
                        updateButtons();
                        updateLayersList();
                        updateSelectionFrame();
                        updateSizeReadyIcons();
                    } else {
                        var txt = state.overlayTexts.find(function (t) { return t.layerId === layerId; });
                        if (txt && txt.el) {
                            txt.el.remove();
                            var i = state.overlayTexts.indexOf(txt);
                            state.overlayTexts.splice(i, 1);
                            if (state.selectedTextId === i) state.selectedTextId = null;
                            else if (state.selectedTextId !== null && state.selectedTextId > i) state.selectedTextId--;
                            state.layersOrder = state.layersOrder.filter(function (x) { return x !== layerId; });
                            applyLayersOrderToCanvas();
                            updateTextFloatToolbarVisibility();
                            updateButtons();
                            updateLayersList();
                            updateSelectionFrame();
                            updateSizeReadyIcons();
                        }
                    }
                }
            });

            if (layerId === 'background') {
                bgSection.appendChild(row);
            } else {
                overlayRows.push(row);
            }
        });
        overlayRows.reverse();
        overlayRows.forEach(function (r) { overlaySection.appendChild(r); });
        layersList.appendChild(bgSection);
        if (overlaySection.children.length > 0) {
            layersList.appendChild(overlaySection);
        }
    }

    function makeTextDraggable(el, idx) {
        var startX, startY, startLeft, startTop, startAabb;
        el.addEventListener('dblclick', function (e) {
            e.preventDefault();
            e.stopPropagation();
            el.contentEditable = 'true';
            el.focus();
        });
        el.addEventListener('mousedown', (e) => {
            if (el.contentEditable === 'true' && document.activeElement === el) return;
            e.preventDefault();
            startX = e.clientX;
            startY = e.clientY;
            startLeft = parseFloat(el.style.left) || 0;
            startTop = parseFloat(el.style.top) || 0;
            var t0 = state.overlayTexts[idx];
            var rot0 = (t0 && (t0.rotation != null ? t0.rotation : 0)) || 0;
            startAabb = (rot0 !== 0) ? getOverlayElementRectInCanvas(el) : null;
            state.overlayTexts.forEach(t => t.el.classList.remove('selected'));
            state.selectedImageSlot = null;
            state.overlayImages.forEach(function (it) { if (it && it.el) it.el.classList.remove('selected'); });
            el.classList.add('selected');
            state.selectedTextId = idx;
            updateTextFloatToolbarVisibility();
            updateLayersList();
            updateSelectionFrame();
            if (textColorInput) {
                state.colorPickerTarget = 'text';
                var col = el.dataset.color || el.style.color;
                var parsed = parseColorForPicker(col);
                updateColorPickerFromHex(parsed.hex);
                colorPickerState.alpha = parsed.alpha;
                textColorInput.value = parsed.hex;
                if (textColorTrigger) textColorTrigger.dataset.alpha = String(parsed.alpha);
                syncColorTrigger();
            }
            syncFontListSelection(el.dataset.font);
            syncTextToolbarFromElement(el);
            pushUndoState();
            var textToolbarHiddenForDrag = false;
            const onMove = (e) => {
                if (!textToolbarHiddenForDrag) {
                    textToolbarHiddenForDrag = true;
                    closeColorPickerPopover();
                    if (textFloatToolbar) { textFloatToolbar.classList.remove('visible'); textFloatToolbar.style.display = 'none'; }
                }
                var p0 = screenToModel(startX, startY);
                var p1 = screenToModel(e.clientX, e.clientY);
                var dx = p1.x - p0.x;
                var dy = p1.y - p0.y;
                var t = state.overlayTexts[idx];
                var rot = (t && (t.rotation != null ? t.rotation : 0)) || 0;
                var snapLines = getSnapLines(el);
                var finalLeft, finalTop, snapped;
                if (rot !== 0 && startAabb) {
                    snapped = applySnap(startAabb.left + dx, startAabb.top + dy, startAabb.width, startAabb.height, snapLines);
                    var centerX = snapped.left + startAabb.width / 2;
                    var centerY = snapped.top + startAabb.height / 2;
                    var W = el.offsetWidth || 80;
                    var H = el.offsetHeight || 40;
                    finalLeft = centerX - W / 2;
                    finalTop = centerY - H / 2;
                } else {
                    var rawLeft = startLeft + dx;
                    var rawTop = startTop + dy;
                    var w = el.offsetWidth || 80;
                    var h = el.offsetHeight || 40;
                    snapped = applySnap(rawLeft, rawTop, w, h, snapLines);
                    finalLeft = snapped.left;
                    finalTop = snapped.top;
                }
                /* Text can be moved beyond canvas edge, like images */
                el.style.left = finalLeft + 'px';
                el.style.top = finalTop + 'px';
                updateGuidesLayer(snapped.guides);
                if (state.overlayTexts[idx]) {
                    state.overlayTexts[idx].x = finalLeft;
                    state.overlayTexts[idx].y = finalTop;
                }
                updateSelectionFrame();
            };
            const onEnd = () => {
                document.removeEventListener('mousemove', onMove);
                document.removeEventListener('mouseup', onEnd);
                updateGuidesLayer(null);
                updateSelectionFrame();
                updateTextFloatToolbarVisibility();
            };
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onEnd);
        });
    }

    function clearAll() {
        pushUndoState().then(function () {
            var key = getSlotKey(state.network, state.size);
            if (key) stateBySlot[key] = null;
            resetFilters();
            clearBackground(true);
            updateSizeReadyIcons();
            state.overlayImages.forEach((data, i) => {
                if (data) removeImageSlot(i);
            });
            state.overlayImages = [];
            state.nextImageSlot = 0;
            state.visibleImageSlotsCount = 1;
            state.overlayTexts.forEach(t => {
                if (t.el && t.el.parentNode) t.el.parentNode.removeChild(t.el);
            });
            state.overlayTexts = [];
            state.selectedTextId = null;
            state.selectedImageSlot = null;
            state.layersOrder = ['background'];
            updateTextFloatToolbarVisibility();
            updateSelectionFrame();
            updateLayersList();
            updateButtons();
        });
    }

    function updateButtons() {
        var hasContent = !!state.bgUrl || state.overlayImages.some(Boolean) || state.overlayTexts.length > 0;
        var hasAnySlotContent = hasContent || Object.keys(stateBySlot).some(function (k) { var d = stateBySlot[k]; return d && !d.empty; });
        if (clearBtn) clearBtn.disabled = !hasContent;
        if (downloadBtn) downloadBtn.disabled = !hasAnySlotContent;
        updateUndoRedoButtons();
        if (harmonizeBtn) {
            harmonizeBtn.style.display = state.isHarmonized ? 'none' : '';
            var imageCount = state.overlayImages.filter(Boolean).length;
            var canHarmonize = !!state.bgUrl && imageCount === 1;
            harmonizeBtn.disabled = !canHarmonize;
        }
        if (resetFiltersBtn) {
            resetFiltersBtn.style.display = state.isHarmonized ? '' : 'none';
            resetFiltersBtn.disabled = !state.isHarmonized;
            resetFiltersBtn.classList.toggle('harmonize-active', !!state.isHarmonized);
        }
    }

    function harmonizeImages() {
        if (!resultContainer) return;
        state.isHarmonized = true;
        resultContainer.classList.add('harmonized');
        if (harmonizeOverlay) harmonizeOverlay.style.display = 'block';
        updateButtons();
    }

    function resetFilters() {
        state.isHarmonized = false;
        if (resultContainer) resultContainer.classList.remove('harmonized');
        if (harmonizeOverlay) harmonizeOverlay.style.display = 'none';
        updateButtons();
    }

    function getCurrentBackgroundStyle() {
        var containerBg = 'transparent';
        if (!state.bgUrl && resultContainer) {
            var cs = window.getComputedStyle(resultContainer);
            containerBg = cs.backgroundColor || cs.background || '#f4f4f5';
        }
        return {
            containerBackground: containerBg,
            bgLayerBackgroundImage: bgLayer ? bgLayer.style.backgroundImage || '' : '',
            bgLayerBackgroundPosition: bgLayer ? bgLayer.style.backgroundPosition || '' : '',
            bgLayerBackgroundSize: bgLayer ? bgLayer.style.backgroundSize || '' : ''
        };
    }

    function removeExportIgnoreElements(root) {
        if (!root) return;
        var sel = '#safeZonesLayer, #guidesLayer, .harmonize-overlay, .selection-frame-wrapper, .selection-frame, .shape-bezier-handles, .shape-radius-handles, .shape-line-endpoint-handles, .shape-line-arrowhead-dot, [data-export-ignore]';
        root.querySelectorAll(sel).forEach(function (el) { if (el.parentNode) el.parentNode.removeChild(el); });
        var safe = root.querySelector('.safe-zones-layer');
        if (safe && safe.parentNode) safe.parentNode.removeChild(safe);
    }

    function buildExportRoot(key) {
        var info = parseSlotKey(key);
        if (!info) return null;
        var W = info.w;
        var H = info.h;
        var data = stateBySlot[key];
        if (!data || data.empty) return null;
        var saveKey = getSlotKey(state.network, state.size);
        state.network = info.network;
        state.size = { w: W, h: H };
        resultContainer.style.width = W + 'px';
        resultContainer.style.height = H + 'px';
        restoreSlot(data);
        requestViewportUpdate();
        var bgStyle = getCurrentBackgroundStyle();
        var exportRoot = document.createElement('div');
        exportRoot.id = 'exportRoot';
        exportRoot.style.cssText = 'position:fixed;left:-99999px;top:0;width:' + W + 'px;height:' + H + 'px;overflow:hidden;border-radius:0 !important;box-shadow:none !important;background:' + (bgStyle.containerBackground || 'transparent') + ';border:none;';
        var clone = resultContainer.cloneNode(true);
        clone.classList.remove('harmonized');
        clone.style.borderRadius = '0';
        clone.style.border = 'none';
        clone.style.boxShadow = 'none';
        clone.style.width = W + 'px';
        clone.style.height = H + 'px';
        if (bgStyle.bgLayerBackgroundImage) {
            var bgClone = clone.querySelector('.bg-layer');
            if (bgClone) {
                bgClone.style.backgroundImage = bgStyle.bgLayerBackgroundImage;
                bgClone.style.backgroundPosition = bgStyle.bgLayerBackgroundPosition;
                bgClone.style.backgroundSize = bgStyle.bgLayerBackgroundSize;
            }
        }
        removeExportIgnoreElements(clone);
        exportRoot.appendChild(clone);
        document.body.appendChild(exportRoot);
        if (saveKey && stateBySlot[saveKey]) {
            state.network = parseSlotKey(saveKey).network;
            state.size = { w: parseSlotKey(saveKey).w, h: parseSlotKey(saveKey).h };
            resultContainer.style.width = state.size.w + 'px';
            resultContainer.style.height = state.size.h + 'px';
            restoreSlot(stateBySlot[saveKey]);
            requestViewportUpdate();
        }
        return exportRoot;
    }

    function removeExportRoot() {
        var root = document.getElementById('exportRoot');
        if (root && root.parentNode) root.parentNode.removeChild(root);
    }

    function exportCurrentPNG(key, format) {
        format = format || 'png';
        var mime = format === 'jpg' ? 'image/jpeg' : 'image/png';
        var info = parseSlotKey(key);
        if (!info) return Promise.reject(new Error('Invalid key'));
        var w = info.w;
        var h = info.h;
        var exportRoot = buildExportRoot(key);
        if (!exportRoot) return Promise.reject(new Error('No content'));
        return document.fonts.ready.then(function () {
            var opts = {
                scale: 2,
                useCORS: true,
                allowTaint: true,
                width: w,
                height: h,
                windowWidth: w,
                windowHeight: h,
                logging: false,
                imageTimeout: 0,
                backgroundColor: format === 'jpg' ? '#ffffff' : null,
                ignoreElements: function (el) {
                    return el && (el.id === 'safeZonesLayer' || el.classList.contains('selection-frame') || (el.closest && (el.closest('.safe-zones-layer') || el.closest('.selection-frame') || el.closest('.text-float-toolbar') || el.closest('.shape-float-toolbar') || el.closest('.shape-bezier-handles'))));
                }
            };
            return html2canvas(exportRoot, opts);
        }).then(function (canvas) {
            removeExportRoot();
            if (canvas.width !== w || canvas.height !== h) {
                var out = document.createElement('canvas');
                out.width = w;
                out.height = h;
                var outCtx = out.getContext('2d');
                outCtx.imageSmoothingEnabled = true;
                outCtx.imageSmoothingQuality = 'high';
                outCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, w, h);
                return out.toDataURL(mime, format === 'jpg' ? 0.92 : undefined);
            }
            return canvas.toDataURL(mime, format === 'jpg' ? 0.92 : undefined);
        }).catch(function (err) {
            removeExportRoot();
            throw err;
        });
    }

    function captureSlotToCanvas(key, format) {
        return exportCurrentPNG(key, format);
    }

    function showExportToast(message) {
        var toast = document.getElementById('exportToast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'exportToast';
            toast.className = 'export-toast';
            toast.setAttribute('aria-live', 'polite');
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('visible');
        return function hide() {
            toast.classList.remove('visible');
        };
    }

    function getSlotLabel(key) {
        var info = parseSlotKey(key);
        if (!info) return { networkName: '', label: '', sizeStr: '' };
        var cfg = CONFIG[info.network];
        var networkName = (cfg && cfg.name) ? cfg.name : info.network;
        var sizeStr = info.w + '×' + info.h;
        var label = sizeStr;
        if (cfg && cfg.sizes) {
            var s = cfg.sizes.find(function (x) { return x.w === info.w && x.h === info.h; });
            if (s && s.label) label = s.label;
        }
        return { networkName: networkName, label: label, sizeStr: sizeStr };
    }

    function downloadWithFormat(format) {
        if (!resultContainer || !canvasScaler || !canvasWrap) return;
        var currentKey = getSlotKey(state.network, state.size);
        var btn = $('downloadBtn');
        if (btn) btn.disabled = true;
        saveCurrentStateToSlot(currentKey).then(function () {
            var keys = Object.keys(stateBySlot).filter(function (k) {
                var d = stateBySlot[k];
                return d && !d.empty;
            });
            if (keys.length === 0) {
                if (btn) btn.disabled = false;
                return;
            }
            if (format === 'png' || format === 'jpg') {
                var ext = format === 'jpg' ? 'jpg' : 'png';
                var hideToast = showExportToast('Скачивание…');
                if (keys.length === 1) {
                    var k = keys[0];
                    exportCurrentPNG(k, format).then(function (dataUrl) {
                        var a = document.createElement('a');
                        a.download = 'socialframe_' + k + '.' + ext;
                        a.href = dataUrl;
                        a.click();
                        if (currentKey) restoreCurrentSlot(currentKey);
                        hideToast();
                    }).catch(function (err) { console.error('Download failed:', err); }).finally(function () {
                        if (btn) btn.disabled = false;
                    });
                    return;
                }
                var zip = new JSZip();
                var keysByNetwork = {};
                keys.forEach(function (k) {
                    var info = parseSlotKey(k);
                    if (!info) return;
                    var folderName = info.network === 'custom' ? '' : getSlotLabel(k).networkName;
                    if (!keysByNetwork[folderName]) keysByNetwork[folderName] = [];
                    keysByNetwork[folderName].push(k);
                });
                var total = 0;
                Object.keys(keysByNetwork).forEach(function (folderName) {
                    total += keysByNetwork[folderName].length;
                });
                var done = 0;
                var seq = Promise.resolve();
                Object.keys(keysByNetwork).forEach(function (folderName) {
                    var target = folderName ? zip.folder(folderName) : zip;
                    keysByNetwork[folderName].forEach(function (k) {
                        seq = seq.then(function () {
                            return exportCurrentPNG(k, format).then(function (dataUrl) {
                                var name = 'socialframe_' + k + '.' + ext;
                                var mimePrefix = format === 'jpg' ? 'data:image/jpeg;base64,' : 'data:image/png;base64,';
                                var base64 = dataUrl.replace(mimePrefix, '');
                                target.file(name, base64, { base64: true });
                                done++;
                                var toastEl = document.getElementById('exportToast');
                                if (toastEl) toastEl.textContent = 'Скачивание ' + done + '/' + total + '…';
                            });
                        });
                    });
                });
                seq.then(function () {
                    return zip.generateAsync({ type: 'blob' });
                }).then(function (blob) {
                    hideToast();
                    var a = document.createElement('a');
                    a.download = 'socialframe_all.zip';
                    a.href = URL.createObjectURL(blob);
                    a.click();
                    URL.revokeObjectURL(a.href);
                    if (currentKey) restoreCurrentSlot(currentKey);
                }).catch(function (err) { console.error('Download failed:', err); }).finally(function () {
                    hideToast();
                    if (btn) btn.disabled = false;
                });
                return;
            }
            if (format === 'pdf') {
                var hideToast = showExportToast('Скачивание PDF…');
                var seq = Promise.resolve();
                var dataUrls = [];
                keys.forEach(function (k) {
                    seq = seq.then(function () {
                        return exportCurrentPNG(k, 'png').then(function (dataUrl) {
                            var info = parseSlotKey(k);
                            var meta = getSlotLabel(k);
                            dataUrls.push({ dataUrl: dataUrl, w: info.w, h: info.h, key: k, meta: meta });
                        });
                    });
                });
                seq.then(function () {
                    var JsPDFLib = (typeof jspdf !== 'undefined' && jspdf.jsPDF) ? jspdf.jsPDF : (typeof window !== 'undefined' && window.jspdf && window.jspdf.jsPDF ? window.jspdf.jsPDF : null);
                    if (JsPDFLib) {
                        var jsPDF = JsPDFLib;
                        var doc = keys.length === 1
                            ? new jsPDF({ unit: 'pt', format: [dataUrls[0].w * 0.75, dataUrls[0].h * 0.75 + 40], hotfixes: ['px_scaling'] })
                            : new jsPDF({ unit: 'pt', format: 'a4', hotfixes: ['px_scaling'] });
                        dataUrls.forEach(function (item, i) {
                            if (i > 0) doc.addPage();
                            var wPt = item.w * 0.75;
                            var hPt = item.h * 0.75;
                            var m = item.meta;
                            var caption = m.networkName + ' — ' + m.label + ' (' + m.sizeStr + ')';
                            if (keys.length === 1) {
                                doc.setFontSize(10);
                                doc.text(caption, 4, 14);
                                doc.addImage(item.dataUrl, 'PNG', 0, 20, wPt, hPt);
                            } else {
                                var pageW = doc.internal.pageSize.getWidth();
                                var pageH = doc.internal.pageSize.getHeight();
                                doc.setFontSize(9);
                                doc.text(caption, 20, 16);
                                var scale = Math.min((pageW - 40) / wPt, (pageH - 50) / hPt, 1);
                                var imgW = wPt * scale;
                                var imgH = hPt * scale;
                                doc.addImage(item.dataUrl, 'PNG', (pageW - imgW) / 2, 22, imgW, imgH);
                            }
                        });
                        doc.save(keys.length === 1 ? 'socialframe_' + keys[0] + '.pdf' : 'socialframe_all.pdf');
                    }
                    if (currentKey) restoreCurrentSlot(currentKey);
                }).catch(function (err) { console.error('PDF export failed:', err); }).finally(function () {
                    hideToast();
                    if (btn) btn.disabled = false;
                });
                return;
            }
            if (btn) btn.disabled = false;
        });
    }

    function getDownloadableSlotsCount() {
        var keys = Object.keys(stateBySlot).filter(function (k) {
            var d = stateBySlot[k];
            return d && !d.empty;
        });
        var currentKey = getSlotKey(state.network, state.size);
        var currentHasContent = !!state.bgUrl || state.overlayImages.some(Boolean) || state.overlayTexts.length > 0 || state.overlayShapes.length > 0;
        if (currentKey && currentHasContent && keys.indexOf(currentKey) < 0) return keys.length + 1;
        return keys.length;
    }

    function initDownloadMenu() {
        var btn = $('downloadBtn');
        var popover = $('downloadMenuPopover');
        var countPng = $('downloadMenuCountPng');
        var countJpg = $('downloadMenuCountJpg');
        if (!btn || !popover) return;
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var open = popover.classList.toggle('open');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
            if (open && countPng) countPng.textContent = String(getDownloadableSlotsCount());
            if (open && countJpg) countJpg.textContent = String(getDownloadableSlotsCount());
        });
        document.addEventListener('mousedown', function (e) {
            if (popover.classList.contains('open') && !popover.contains(e.target) && !btn.contains(e.target)) {
                popover.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
            }
        });
        popover.querySelectorAll('.download-menu-item').forEach(function (item) {
            item.addEventListener('click', function () {
                var format = this.getAttribute('data-format') || 'png';
                popover.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
                downloadWithFormat(format);
            });
        });
    }

    function applyLoadedData(data) {
        if (!data || typeof data !== 'object') return false;
        window.SOCIAL_CONFIG = data.socialNetworks && typeof data.socialNetworks === 'object' ? data.socialNetworks : DEFAULT_DATA.socialNetworks;
        window.SAFE_ZONES = data.safeZones && typeof data.safeZones === 'object' ? data.safeZones : DEFAULT_DATA.safeZones;
        CONFIG = window.SOCIAL_CONFIG;
        return true;
    }

    function loadDataAndInit() {
        fetch('data.json')
            .then(function (r) {
                if (!r.ok) throw new Error(r.statusText);
                return r.json();
            })
            .then(function (data) {
                if (!applyLoadedData(data)) applyLoadedData(DEFAULT_DATA);
                init();
            })
            .catch(function (err) {
                console.warn('data.json failed to load (use a local server, e.g. npx serve). Using built-in data.', err);
                applyLoadedData(DEFAULT_DATA);
                init();
            });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadDataAndInit);
    } else {
        loadDataAndInit();
    }
})();
