import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./Hero.css";

export default function Hero() {
  const { t } = useTranslation();
  const carouselImages = [
    "/gallaryphotoes/PUKT0034.JPG",
    "/gallaryphotoes/PUKT0075.JPG",
    "/gallaryphotoes/PUKT0233.JPG",
    "/gallaryphotoes/PUKT0251.JPG",
    "/gallaryphotoes/PUKT0321.JPG",
    "/gallaryphotoes/PUKT0451.JPG",
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4200);

    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <section className="hero" id="discover">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="/eye-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay">
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-badge">{t("hero_badge")}</div>
            <h1>{t("hero_heading")}</h1>
            <p>{t("hero_desc")}</p>
            <div className="hero-points">
              <span><span className="check">✔</span> {t("hero_stat1")}</span>
              <span><span className="check">✔</span> {t("hero_stat2")}</span>
              <span><span className="check">✔</span> {t("hero_stat3")}</span>
            </div>
          </div>

          <div className="hero-gallery" aria-label="Hospital highlights carousel">
            <div className="hero-gallery-frame">
              {carouselImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Hospital highlight ${index + 1}`}
                  className={`hero-slide ${activeSlide === index ? "active" : ""}`}
                />
              ))}

              <div className="doctor-float-card" aria-hidden="true">
                <div className="doctor-mini-figure">
                  <span className="doctor-head" />
                  <span className="doctor-body" />
                  <span className="doctor-stetho" />
                </div>
                <div className="doctor-float-copy">
                  <strong>{t("hero_doctor_title")}</strong>
                  <span>{t("hero_doctor_sub")}</span>
                </div>
              </div>
            </div>
            <div className="hero-dots">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`hero-dot ${activeSlide === index ? "active" : ""}`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
