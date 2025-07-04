const HeroSection = () => (
  <section className="hero-section">
    {/* Vertical grid lines */}
    <div className="vertical-grid">
      <div className="line line1"></div>
      <div className="line line2"></div>
      <div className="line line3"></div>
      <div className="line line4"></div>
    </div>

    {/* Logo */}
    <div className="hero-logo">Bepd</div>

    {/* Social Links */}
    <div className="hero-socials">
      <span>FACEBOOK</span>
      <span>LINKEDIN</span>
      <span>TWITTER</span>
      <span>BEHANCE</span>
      <span>MAIL</span>
    </div>

    {/* Share with */}
    <div className="hero-share">
      <span>Share with ♥</span>
    </div>

    {/* Oversized background text */}
    <div className="hero-bg-text">DESIGN</div>

    {/* Main content */}
    <div className="hero-content">
      <div className="hero-subtitle">
        Front-End Developer <br />
        and Web Designer <br />
        based in Italy
      </div>
      <h1>
        Hello.<span className="hero-dot">.</span>
        <br />
        I am <br />
        Vivek
      </h1>
    </div>

    {/* Geometric shapes */}
    <div className="hero-shape shape1"></div>
    <div className="hero-shape shape2"></div>
    <div className="hero-shape shape3"></div>
  </section>
);

export default HeroSection; 