import './PaintboxShowcase.css';

const PaintboxShowcase = () => {
    const paintboxes = [
        {
            image: new URL('../assets/Paintbox/Adobe Express - file.png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_blue.png', import.meta.url).href,
            color: '#4A90E2'
        },
        {
            image: new URL('../assets/Paintbox/Adobe Express - file (1).png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_orange.png', import.meta.url).href,
            color: '#F5A623'
        },
        {
            image: new URL('../assets/Paintbox/Adobe Express - file (2).png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_green.png', import.meta.url).href,
            color: '#7ED321'
        },
        {
            image: new URL('../assets/Paintbox/Adobe Express - file (3).png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_pink.png', import.meta.url).href,
            color: '#FF6B9D'
        },
        {
            image: new URL('../assets/Paintbox/Adobe Express - file (4).png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_purple.png', import.meta.url).href,
            color: '#9013FE'
        }
    ];

    const floatingTextures = [
        { icon: new URL('../assets/Paintbox/icon_texture_blue.png', import.meta.url).href, top: '10%', left: '5%', delay: '0s' },
        { icon: new URL('../assets/Paintbox/icon_texture_orange.png', import.meta.url).href, top: '20%', right: '8%', delay: '0.5s' },
        { icon: new URL('../assets/Paintbox/icon_texture_green.png', import.meta.url).href, top: '60%', left: '3%', delay: '1s' },
        { icon: new URL('../assets/Paintbox/icon_texture_pink.png', import.meta.url).href, top: '70%', right: '5%', delay: '1.5s' },
        { icon: new URL('../assets/Paintbox/icon_texture_purple.png', import.meta.url).href, top: '40%', right: '10%', delay: '2s' },
        { icon: new URL('../assets/Paintbox/icon_texture_red.png', import.meta.url).href, top: '80%', left: '8%', delay: '2.5s' }
    ];

    return (
        <section className="paintbox-showcase-section">
            {/* Floating Texture Decorations */}
            <div className="floating-textures">
                {floatingTextures.map((texture, index) => (
                    <div
                        key={index}
                        className="floating-texture"
                        style={{
                            top: texture.top,
                            left: texture.left,
                            right: texture.right,
                            animationDelay: texture.delay
                        }}
                    >
                        <img src={texture.icon} alt="" />
                    </div>
                ))}
            </div>

            <div className="paintbox-showcase-container">
                <div className="showcase-header">
                    <h2 className="showcase-title">
                        Our <span className="gradient-text">Paint Collections</span>
                    </h2>
                    <p className="showcase-subtitle">
                        Discover premium quality paints for every surface and project
                    </p>
                </div>

                <div className="paintbox-carousel">
                    {paintboxes.map((box, index) => (
                        <div
                            key={index}
                            className="paintbox-item"
                            style={{
                                '--box-color': box.color,
                                animationDelay: `${index * 0.1}s`
                            } as React.CSSProperties}
                        >
                            <div className="paintbox-background">
                                <img
                                    src={box.texture}
                                    alt="Texture"
                                    className="texture-pattern"
                                />
                                <div className="color-overlay"></div>
                            </div>
                            <div className="paintbox-content">
                                <img
                                    src={box.image}
                                    alt="Paint Collection"
                                    className="paintbox-image"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PaintboxShowcase;
