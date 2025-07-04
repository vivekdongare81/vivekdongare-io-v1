const AwardsSection = () => (
  <section className="awards-section" style={{ minHeight: '40vh', background: '#181818', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <h2 style={{ fontSize: 32, marginBottom: 16 }}>Awards:</h2>
    <ul style={{ listStyle: 'none', padding: 0, fontSize: 20 }}>
      <li>Awwwards: 4x Honorable Mention, 3x Mobile Excellence</li>
      <li>CSS Design Awards: 1x Website of the day, 6x Special Kudos, 18x Other awards</li>
      <li>Mindsparkle Mag: 2x Site of the day</li>
    </ul>
  </section>
);

export default AwardsSection; 