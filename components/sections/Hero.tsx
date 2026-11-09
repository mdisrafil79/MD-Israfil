
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <h1 className="hero-title">
            <span className="gradient-text">
              MERN-Stack
            </span>
            <br />
            Developer
          </h1>

          <p className="hero-description">
            MERN-Stack Web Developer dedicated to helping
            businesses and institutes solve digital
            challenges through responsive web development.
          </p>

          {/* Hero Buttons */}
          <div className="hero-buttons">

            <a
              href="https://www.linkedin.com/in/mdisrafil79/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              LinkedIn
              <span>↗</span>
            </a>

            <a
              href="/resume.pdf"
              download
              className="btn-secondary"
            >
              <span>↓</span>
              Download Resume
            </a>

          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image-wrapper">
          <div className="hero-image-glow"></div>

          <Image
            src="/images/profile.png"
            alt="MD Israfil - MERN Stack Developer"
            width={1074}
            height={1278}
            priority
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}
