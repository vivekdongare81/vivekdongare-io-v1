const SkillsSection = () => (
  <section className="skills-section" style={{ minHeight: '40vh', background: '#191919', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <h2 style={{ fontSize: 32, marginBottom: 16 }}>Skills</h2>
    <ul style={{ listStyle: 'none', padding: 0, fontSize: 20 }}>
      <li>UI/UX Design</li>
      <li>Web Design</li>
      <li>Front-End Dev</li>
      <li>WordPress Dev</li>
    </ul>
  </section>
);

export default SkillsSection; 