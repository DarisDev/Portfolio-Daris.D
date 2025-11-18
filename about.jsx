const { useState } = React;

function Pill({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`tag ${active ? 'tag-active' : ''}`}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </button>
  );
}

function Stat({ label, value }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.25)',
      borderRadius: 12,
      padding: 16,
      minWidth: 140,
      boxShadow: '0 6px 16px rgba(0,0,0,0.15)'
    }}>
      <div style={{ color: '#2c1810', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>{value}</div>
      <div style={{ opacity: 0.8 }}>{label}</div>
    </div>
  );
}

function AboutTabs() {
  const tabs = ['Bio', 'Skills', 'Hobbies'];
  const [active, setActive] = useState('Bio');

  return (
    <section>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
        {tabs.map(t => (
          <Pill key={t} active={active === t} onClick={() => setActive(t)}>
            {t}
          </Pill>
        ))}
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.25)',
        borderRadius: 16,
        padding: 20,
        boxShadow: '0 10px 24px rgba(0,0,0,0.15)'
      }}>
        {active === 'Bio' && (
          <div>
            <h2 style={{ color: '#2c1810', fontFamily: 'Georgia, serif' }}>Who I Am</h2>
            <p>
              Sophomore at <b>RIT Kosovo</b>, studying <b>CIT</b>. I enjoy crafting
              responsive UIs, learning modern tooling, and collaborating on projects that ship.
            </p>
          </div>
        )}
        {active === 'Skills' && (
          <div>
            <h2 style={{ color: '#2c1810', fontFamily: 'Georgia, serif' }}>Core Skills</h2>
            <ul>
              <li>HTML, modern CSS, responsive design</li>
              <li>JavaScript, React fundamentals, state management</li>
              <li>UI polish: micro-interactions, animations, accessibility basics</li>
            </ul>
          </div>
        )}
        {active === 'Hobbies' && (
          <div>
            <h2 style={{ color: '#2c1810', fontFamily: 'Georgia, serif' }}>Outside Code</h2>
            <p>
              I like design experimenting, learning new frameworks, and staying active outdoors.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <div className="about-section">
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 20 }}>
        <Stat label="Years Coding" value="2+" />
        <Stat label="Projects" value="10+" />
        <Stat label="Focus" value="Frontend" />
      </div>
      <AboutTabs />
    </div>
  );
}

const aboutContainer = document.getElementById('about-root');
if (aboutContainer) {
  const root = ReactDOM.createRoot(aboutContainer);
  root.render(<AboutSection />);
}
