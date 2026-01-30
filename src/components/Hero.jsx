import { useState, useEffect } from 'react';
import './Hero.css';

const COLORS = [
    { name: 'White', value: '#FFFFFF' },
    { name: 'Emerald', value: '#10B981' },
    { name: 'Blue', value: '#3B82F6' },
    { name: 'Purple', value: '#8B5CF6' },
    { name: 'Pink', value: '#EC4899' },
    { name: 'Orange', value: '#F97316' },
];

const LAYOUTS = [
    { name: 'Standard', cols: 17 },
    { name: 'Compact', cols: 21 },
    { name: 'Loose', cols: 13 },
];

const FONTS = ['Thin', 'Light', 'Regular', 'Medium', 'Bold', 'Serif', 'Mono'];
const SHAPES = ['Rounded', 'Circle', 'Square'];
const SIZES = ['Small', 'Medium', 'Large'];

const Hero = () => {
    const [activeColor, setActiveColor] = useState(COLORS[0]);
    const [activeLayout, setActiveLayout] = useState(LAYOUTS[0]);
    const [activeFont, setActiveFont] = useState('Regular');
    const [activeShape, setActiveShape] = useState('Rounded');
    const [activeSize, setActiveSize] = useState('Medium');
    const [customText, setCustomText] = useState('');
    const [showClock, setShowClock] = useState(true);
    const [showStats, setShowStats] = useState(true);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const currentDay = 30;
    const totalDays = 365;
    const daysLeft = totalDays - currentDay;
    const percentage = Math.round((currentDay / totalDays) * 100);

    const cols = activeLayout.cols;
    const rows = Math.ceil(totalDays / cols);

    const getDotSize = () => {
        switch (activeSize) {
            case 'Small': return 5;
            case 'Large': return 9;
            default: return 7;
        }
    };

    const getDotRadius = () => {
        switch (activeShape) {
            case 'Circle': return '50%';
            case 'Square': return '0px';
            default: return '2px';
        }
    };

    const getFontStyle = () => {
        const base = { fontWeight: 400, fontFamily: 'var(--font-display)' };
        switch (activeFont) {
            case 'Thin': return { ...base, fontWeight: 200 };
            case 'Light': return { ...base, fontWeight: 300 };
            case 'Regular': return { ...base, fontWeight: 400 };
            case 'Medium': return { ...base, fontWeight: 500 };
            case 'Bold': return { ...base, fontWeight: 700 };
            case 'Serif': return { ...base, fontFamily: '"Times New Roman", serif' };
            case 'Mono': return { ...base, fontFamily: '"JetBrains Mono", monospace' };
            default: return base;
        }
    };

    const dotSize = getDotSize();
    const dotRadius = getDotRadius();
    const fontStyle = getFontStyle();

    return (
        <section className={`hero ${loaded ? 'loaded' : ''}`}>
            <div className="hero-bg">
                <div className="bg-grid" />
                <div className="bg-noise" />
                <div
                    className="bg-orb bg-orb-1"
                    style={{ background: `radial-gradient(circle, ${activeColor.value}08 0%, transparent 70%)` }}
                />
                <div
                    className="bg-orb bg-orb-2"
                    style={{ background: `radial-gradient(circle, ${activeColor.value}05 0%, transparent 60%)` }}
                />
                <div className="bg-gradient-top" />
                <div className="bg-gradient-bottom" />
                <div className="bg-lines">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="bg-line" style={{ animationDelay: `${i * 0.5}s` }} />
                    ))}
                </div>
            </div>

            <nav className="navbar">
                <div className="nav-brand">
                    <div className="brand-dots">
                        <span className="bd past" />
                        <span className="bd past" />
                        <span className="bd current" style={{ background: activeColor.value, boxShadow: `0 0 12px ${activeColor.value}` }} />
                        <span className="bd" />
                    </div>
                    <span className="brand-name">Year Dots</span>
                    <span className="brand-tag">2026</span>
                </div>

                {/* <div className="nav-links">
                    <a href="#features" className="nav-link">Features</a>
                    <a href="#preview" className="nav-link">Preview</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                </div> */}

                <a href="/year_dots.apk" download className="nav-cta">
                    <span className="cta-glow" style={{ background: activeColor.value }} />
                    <span className="cta-text">Download</span>
                    <span className="cta-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                        </svg>
                    </span>
                </a>
            </nav>

            <div className="hero-main">
                <div className="hero-content">
                    <div className="hero-eyebrow">
                        <div className="eyebrow-line" style={{ background: activeColor.value }} />
                        <span className="eyebrow-text">Live Wallpaper for Android</span>

                    </div>

                    <h1 className="hero-title">
                        <span className="title-line title-line-1">
                            <span className="title-word">Visualize</span>
                        </span>
                        <span className="title-line title-line-2">
                            <span className="title-word">every</span>
                            <span className="title-word title-accent" style={{ color: activeColor.value }}>day</span>
                        </span>
                        <span className="title-line title-line-3">
                            <span className="title-word title-muted">of your year</span>
                        </span>
                    </h1>

                    <p className="hero-desc">
                        A minimal live wallpaper that transforms your lock screen
                        into a beautiful year progress tracker. Watch time flow.
                    </p>

                    <div className="hero-actions">
                        <a href="/year_dots.apk" download className="btn-primary" style={{ '--accent': activeColor.value }}>
                            <span className="btn-bg" />
                            <span className="btn-content">
                                <span>Download Free</span>
                                <span className="btn-badge">APK</span>
                            </span>
                        </a>


                    </div>


                </div>

                <div className="hero-phone">
                    <div className="phone-container">
                        <div className="phone-reflection" />
                        <div className="phone-frame">
                            <div className="phone-notch" />
                            <div className="phone-screen">
                                {showClock ? (
                                    <span className="screen-time">9:41</span>
                                ) : (
                                    <div style={{ height: 60 }} /> /* Spacer to keep layout stable */
                                )}
                                <span className="screen-date">Thursday, January 30</span>

                                <div className="screen-dots">
                                    {Array.from({ length: Math.min(rows, 22) }).map((_, row) => (
                                        <div key={row} className="dots-row" style={{ gap: `${dotSize > 7 ? 4 : 3}px` }}>
                                            {Array.from({ length: cols }).map((_, col) => {
                                                const idx = row * cols + col;
                                                if (idx >= totalDays) return null;
                                                const isPast = idx < currentDay - 1;
                                                const isCurrent = idx === currentDay - 1;
                                                return (
                                                    <span
                                                        key={col}
                                                        className="dot"
                                                        style={{
                                                            width: dotSize,
                                                            height: dotSize,
                                                            borderRadius: dotRadius,
                                                            background: isPast || isCurrent ? activeColor.value : '#333',
                                                            boxShadow: isCurrent ? `0 0 ${dotSize * 2}px ${activeColor.value}60` : 'none',
                                                        }}
                                                    />
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>

                                {showStats && (
                                    <div className="screen-stats" style={fontStyle}>
                                        <span style={{ color: activeColor.value }}>{daysLeft}</span> days left
                                        <span className="stats-sep">·</span>
                                        <span style={{ color: activeColor.value }}>{percentage}%</span>
                                    </div>
                                )}

                                {customText && (
                                    <div className="screen-custom" style={fontStyle}>
                                        {customText}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div
                            className="phone-glow"
                            style={{ background: `radial-gradient(circle, ${activeColor.value}20 0%, transparent 70%)` }}
                        />
                        <div className="phone-shadow" />
                    </div>

                    <div className="floating-badge fb-1" style={{ '--accent': activeColor.value }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                        <span>Live Updates</span>
                    </div>

                    <div className="floating-badge fb-2" style={{ '--accent': activeColor.value }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0110 0v4" />
                        </svg>
                        <span>Privacy First</span>
                    </div>
                </div>

                <div className="sidebar">
                                

                    <div className="ctrl-group">
                        <label className="ctrl-label">Accent Color</label>
                        <div className="color-row">
                            {COLORS.map((color) => (
                                <button
                                    key={color.name}
                                    className={`color-swatch ${activeColor.name === color.name ? 'active' : ''}`}
                                    style={{
                                        background: color.value,
                                        boxShadow: activeColor.name === color.name ? `0 0 0 2px #0a0a0a, 0 0 0 4px ${color.value}` : 'none'
                                    }}
                                    onClick={() => setActiveColor(color)}
                                    title={color.name}
                                >
                                    {activeColor.name === color.name && (
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color.value === '#FFFFFF' ? '#000' : '#FFF'} strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="ctrl-group">
                        <label className="ctrl-label">Grid Layout</label>
                        <div className="btn-row">
                            {LAYOUTS.map((layout) => (
                                <button
                                    key={layout.name}
                                    className={`option-btn ${activeLayout.name === layout.name ? 'active' : ''}`}
                                    onClick={() => setActiveLayout(layout)}
                                    style={activeLayout.name === layout.name ? { borderColor: activeColor.value, color: activeColor.value } : {}}
                                >
                                    {layout.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="ctrl-divider" />

                    <span className="ctrl-heading">More Options</span>

                    <div className="ctrl-group">
                        <label className="ctrl-label">Font Weight</label>
                        <div className="btn-row">
                            {FONTS.map((f) => (
                                <button
                                    key={f}
                                    className={`option-btn ${activeFont === f ? 'active' : ''}`}
                                    onClick={() => setActiveFont(f)}
                                    style={activeFont === f ? { borderColor: activeColor.value, color: activeColor.value } : {}}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="ctrl-group">
                        <label className="ctrl-label">Dot Shape</label>
                        <div className="btn-row">
                            {SHAPES.map((s) => (
                                <button
                                    key={s}
                                    className={`option-btn ${activeShape === s ? 'active' : ''}`}
                                    onClick={() => setActiveShape(s)}
                                    style={activeShape === s ? { borderColor: activeColor.value, color: activeColor.value } : {}}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="ctrl-group">
                        <label className="ctrl-label">Dot Size</label>
                        <div className="btn-row">
                            {SIZES.map((s) => (
                                <button
                                    key={s}
                                    className={`option-btn ${activeSize === s ? 'active' : ''}`}
                                    onClick={() => setActiveSize(s)}
                                    style={activeSize === s ? { borderColor: activeColor.value, color: activeColor.value } : {}}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="ctrl-group">
                        <label className="ctrl-label">Custom Text</label>
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Your message..."
                            value={customText}
                            onChange={(e) => setCustomText(e.target.value)}
                            maxLength={30}
                            style={{ borderColor: customText ? activeColor.value : undefined }}
                        />
                    </div>

                    <div className="ctrl-group">
                        <div className="ctrl-inline" style={{ marginBottom: 12 }}>
                            <div><label className="ctrl-label">Show Clock</label></div>
                            <button
                                className={`toggle ${showClock ? 'on' : ''}`}
                                onClick={() => setShowClock(!showClock)}
                                style={showClock ? { background: activeColor.value } : {}}
                            >
                                <span className="toggle-knob" />
                            </button>
                        </div>
                        <div className="ctrl-inline">
                            <div><label className="ctrl-label">Show Stats</label></div>
                            <button
                                className={`toggle ${showStats ? 'on' : ''}`}
                                onClick={() => setShowStats(!showStats)}
                                style={showStats ? { background: activeColor.value } : {}}
                            >
                                <span className="toggle-knob" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Hero;