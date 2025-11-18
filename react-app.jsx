const { useState, useEffect } = React;

function SkillsCounter() {
  const [skills, setSkills] = useState([
    { name: 'HTML/CSS', level: 0, target: 85 },
    { name: 'JavaScript', level: 0, target: 75 },
    { name: 'React', level: 0, target: 60 },
    { name: 'Web Design', level: 0, target: 80 }
  ]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setSkills(prevSkills =>
        prevSkills.map(skill => ({
          ...skill,
          level: skill.level < skill.target ? skill.level + 1 : skill.target
        }))
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '30px',
        borderRadius: '15px',
        backdropFilter: 'blur(10px)',
        maxWidth: '600px',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease'
      }}
    >
      <h2
        style={{
          color: '#2c1810',
          marginBottom: '20px',
          fontFamily: 'Georgia, serif'
        }}
      >
        My Skills (React Component)
      </h2>

      {skills.map((skill, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '8px',
              color: '#2c1810',
              fontWeight: 'bold'
            }}
          >
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div
            style={{
              width: '100%',
              height: '10px',
              background: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '5px',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                width: `${skill.level}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #FF512F, #DD2476)',
                transition: 'width 0.3s ease',
                borderRadius: '5px'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

const container = document.getElementById('react-root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<SkillsCounter />);
}
