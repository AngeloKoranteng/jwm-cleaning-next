import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main>
      {/* About Section - Why Choose Us */}
      <section id="about" className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src="/home%20picture.jpeg" alt="Schoonmaak team" />
            </div>
            <div className="about-text">
              <h2 style={{ fontSize: '2rem', marginBottom: '15px', color: '#476833', fontWeight: '600' }}>Waarom kiezen voor J.W.M Cleaning?</h2>
              <p style={{ marginBottom: '25px', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                Wij zijn toegewijd aan het leveren van topkwaliteit en betrouwbare schoonmaakdiensten in Eindhoven. Ons ervaren team gebruikt professionele methoden en middelen om ervoor te zorgen dat uw ruimte niet alleen schoon is, maar echt J.W.M schoon!
              </p>
              
              <div className="features">
                <div className="feature-item">
                  <i className="fas fa-user-shield"></i>
                  <span>Betrouwbaar & Professioneel Personeel</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-star"></i>
                  <span>Kwaliteitsservice Gegarandeerd</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-leaf"></i>
                  <span>Milieuvriendelijke Opties</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-clock"></i>
                  <span>Flexibele Planning</span>
                </div>
              </div>
              
              <a href="#contact" className="btn-text" style={{ display: 'inline-block', marginTop: '30px', fontWeight: '600', color: '#476833', textDecoration: 'none' }}>
                Gratis Offerte Aanvragen &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Onze Diensten</h2>
            <p style={{ marginTop: '10px', fontSize: '1.2rem', color: '#666' }}>Professionele reiniging op maat.</p>
          </div>
          <div className="services-grid">
            {/* Service 1: Grondige Algemene Schoonmaak */}
            <div className="service-card">
              <div className="service-image-container">
                 <img src="/carpet-cleaning.jpeg" alt="Grondige Schoonmaak" className="service-img" />
              </div>
              <h3>Grondige Schoonmaak</h3>
              <p>Volledige reiniging van uw woning of bedrijfspand, van vloer tot plafond.</p>
            </div>
            {/* Service 2: Glasbewassing */}
            <div className="service-card">
              <div className="service-image-container">
                  <img src="/glass-cleaning.jpeg" alt="Glasbewassing" className="service-img" />
              </div>
              <h3>Glasbewassing</h3>
              <p>Voor streeploos schone ramen, kozijnen en glasoppervlakken.</p>
            </div>
            {/* Service 3: Opleveringsschoonmaak */}
            <div className="service-card">
              <div className="service-image-container">
                   <img src="/officecleaning.jpeg" alt="Opleveringsschoonmaak" className="service-img" />
              </div>
              <h3>Opleveringsschoonmaak</h3>
              <p>Een frisse start voor uw nieuwe woning of bedrijfslocatie.</p>
            </div>
            {/* Service 4: Tapijt- en Meubelreiniging */}
            <div className="service-card">
              <div className="service-image-container">
                   <img src="/tapijtcleaning.png" alt="Tapijt- en Meubelreiniging" className="service-img" />
              </div>
              <h3>Tapijt- en Meubelreiniging</h3>
              <p>Specialistische reiniging voor het behoud van uw interieur.</p>
            </div>
            {/* Service 5: Zakelijke en Huishoudelijke Ondersteuning */}
            <div className="service-card">
              <div className="service-image-container">
                   <img src="zakelijk-huishoudelijke.png" alt="Zakelijke en Huishoudelijke Ondersteuning" className="service-img" />
              </div>
              <h3>Zakelijke en Huishoudelijke Ondersteuning</h3>
              <p>Ondersteuning op maat voor al uw dagelijkse schoonmaaktaken.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Contact</h2>
            <div className="line"></div>
            <p>Gratis offerte aanvragen? Neem gerust contact met ons op.</p>
          </div>
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <span>info@jwmcleaning.nl</span>
              </div>
                          
              <div className="info-item">
                <i className="fas fa-file-alt"></i>
                <span>KVK: 95365261</span>
              </div>
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <a href="tel:+31686122565">0686122565</a>
              </div>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Nederland</span>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-logo">
            <h2>J.W.M <span>CLEANING SERVICES</span></h2>
          </div>
          <div className="copyright">
            &copy; 2026 J.W.M Cleaning Services. Alle rechten voorbehouden.
          </div>
        </div>
      </footer>
    </main>
  );
}
