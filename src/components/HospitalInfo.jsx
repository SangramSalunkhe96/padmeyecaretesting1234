import { useTranslation } from "react-i18next";
import "./HospitalInfo.css";

const education_en = [
  "M.B.B.S. – Rural Medical College, Pravranagar (1999–2004)",
  "Internship – KEM Hospital, Parel, Mumbai (2004–2005)",
  "D.O.M.S. – College of Physicians & Surgeons, MBPT Hospital, Mumbai (2007–2009)",
  "DNB (Ophthalmology) – Sankara Eye Hospital, Andhra Pradesh (2010–2012)",
  "Fellowship (Pediatric Ophthalmology) – H.V. Desai Hospital, Pune (2012–2014)"
];

const education_mr = [
  "M.B.B.S. – रुरल मेडिकल कॉलेज, प्रवरानगर (१९९९–२००४)",
  "इंटर्नशिप – के. ई. एम. हॉस्पिटल, परेल, मुंबई (२००४–२००५)",
  "D.O.M.S. – कॉलेज ऑफ फिजिशियन अँड सर्जन, M.B.P.T. हॉस्पिटल, मुंबई (२००७–२००९)",
  "DNB (Ophthalmology) – शंकरा आय हॉस्पिटल, आंध्र प्रदेश (२०१०–२०१२)",
  "Fellowship (Pediatric Ophthalmology) – एच. व्ही. देसाई हॉस्पिटल, पुणे (२०१२–२०१४)"
];

const surgery_en = [
  "More than 20,000 cataract surgeries",
  "More than 4,000 lid and squint surgeries",
  "More than 2,000 pediatric eye surgeries"
];

const surgery_mr = [
  "२० हजार पेक्षा जास्त मोतीबिंदू शस्त्रक्रियांचा अनुभव",
  "४००० पेक्षा जास्त लासूर आणि पापण्यांच्या शस्त्रक्रियांचा अनुभव",
  "२००० पेक्षा जास्त लहान मुलांच्या डोळ्यांच्या शस्त्रक्रियांचा अनुभव"
];

export default function HospitalInfo() {
  const { t, i18n } = useTranslation();
  const isMarathi = i18n.language === "mr";

  return (
    <section className="doctor-section" id="doctor">
      <div className="doctor-container">

        <div className="section-header">
          <h2>{t("doctor_heading")}</h2>
        </div>

        <div className="doctor-card">

          {/* LEFT: AVATAR + BASIC INFO */}
          <div className="doctor-left">
            <div className="doctor-avatar">
              <img src="/gallaryphotoes/PUKT0321.JPG" alt="Dr. Vishal Patil" onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }} />
              <div className="doctor-initials" style={{display:"none"}}>VP</div>
            </div>
            <h3 className="doctor-name">{t("doctor_name")}</h3>
            <p className="doctor-quals">{t("doctor_quals")}</p>
            <div className="doctor-tags">
              <span className="tag">{t("doctor_spec1")}</span>
              <span className="tag">{t("doctor_spec2")}</span>
            </div>
            <div className="doctor-contact-links">
              <a href="tel:7030775791" className="contact-btn phone-btn">📞 7030775791</a>
              <a href="tel:9859853853" className="contact-btn phone-btn">📞 9859853853</a>
              <a href="mailto:padmeyecare@gmail.com" className="contact-btn email-btn">✉ padmeyecare@gmail.com</a>
            </div>
          </div>

          {/* RIGHT: EDUCATION + SURGERY */}
          <div className="doctor-right">

            <div className="info-block">
              <h4>{t("doctor_edu_heading")}</h4>
              <ul>
                {(isMarathi ? education_mr : education_en).map((item, i) => (
                  <li key={i}>
                    <span className="bullet">▶</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="info-block surgery-block">
              <h4>{t("doctor_surgery_heading")}</h4>
              <ul>
                {(isMarathi ? surgery_mr : surgery_en).map((item, i) => (
                  <li key={i}>
                    <span className="bullet-orange">▶</span> {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
