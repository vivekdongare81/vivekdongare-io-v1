const ContactSection = () => (
  <section className="contact-section" style={{ minHeight: '40vh', background: '#191919', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <h2 style={{ fontSize: 32, marginBottom: 16 }}>Hire me</h2>
    <p style={{ fontSize: 20, textAlign: 'center', opacity: 0.8, maxWidth: 600 }}>
      I'm always interested about cool stuff. Are you minding a project? Let's talk.
    </p>
    <div style={{ marginTop: 16, display: 'flex', gap: 16, fontSize: 20 }}>
      <span>Mail</span>
      <span>Facebook</span>
      <span>Linkedin</span>
      <span>Twitter</span>
      <span>Behance</span>
    </div>
  </section>
);

export default ContactSection; 