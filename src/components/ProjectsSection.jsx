const ProjectsSection = () => (
  <section className="projects-section" style={{ minHeight: '60vh', background: '#191919', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <h2 style={{ fontSize: 32, marginBottom: 16 }}>Featured works:</h2>
    <div style={{ display: 'flex', gap: 24 }}>
      <div style={{ background: '#222', padding: 24, borderRadius: 12, minWidth: 180 }}>
        <div style={{ fontWeight: 'bold', fontSize: 20 }}>Toscano Website</div>
        <div style={{ fontSize: 16, opacity: 0.7 }}>View project</div>
      </div>
      <div style={{ background: '#222', padding: 24, borderRadius: 12, minWidth: 180 }}>
        <div style={{ fontWeight: 'bold', fontSize: 20 }}>Look Occhiali Website</div>
        <div style={{ fontSize: 16, opacity: 0.7 }}>View project</div>
      </div>
      <div style={{ background: '#222', padding: 24, borderRadius: 12, minWidth: 180 }}>
        <div style={{ fontWeight: 'bold', fontSize: 20 }}>EmmeArredo Website</div>
        <div style={{ fontSize: 16, opacity: 0.7 }}>View project</div>
      </div>
    </div>
    <div style={{ marginTop: 24, fontSize: 16, opacity: 0.7, textDecoration: 'underline', cursor: 'pointer' }}>See all projects</div>
  </section>
);

export default ProjectsSection; 