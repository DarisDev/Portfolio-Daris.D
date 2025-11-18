const { useMemo, useState } = React;

const SAMPLE_PROJECTS = [
  {
    title: 'Portfolio Site',
    description: 'This website — static HTML enhanced with React widgets.',
    tags: ['React', 'HTML', 'CSS'],
    link: '#'
  },
  {
    title: 'Weather Mini App',
    description: 'Fetches and displays current weather with a clean UI.',
    tags: ['JavaScript', 'API'],
    link: '#'
  },
  {
    title: 'Todo Tracker',
    description: 'Simple todo app with localStorage persistence.',
    tags: ['JavaScript', 'UX'],
    link: '#'
  },
  {
    title: 'Design System Draft',
    description: 'Color tokens and components for consistent theming.',
    tags: ['Design', 'CSS'],
    link: '#'
  }
];

function Tag({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`tag ${active ? 'tag-active' : ''}`}
      style={{ cursor: 'pointer' }}
    >
      {label}
    </button>
  );
}

function ProjectsGrid() {
  const [query, setQuery] = useState('');
  const [activeTags, setActiveTags] = useState([]);

  const allTags = useMemo(() => {
    const set = new Set();
    SAMPLE_PROJECTS.forEach(p => p.tags.forEach(t => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SAMPLE_PROJECTS.filter(p => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q));
      const matchesTags =
        activeTags.length === 0 || activeTags.every(t => p.tags.includes(t));
      return matchesQuery && matchesTags;
    });
  }, [query, activeTags]);

  function toggleTag(tag) {
    setActiveTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  }

  return (
    <section className="projects-section">
      <div className="projects-controls">
        <input
          className="projects-search"
          placeholder="Search projects..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <div className="projects-filters">
          {allTags.map(tag => (
            <Tag
              key={tag}
              label={tag}
              active={activeTags.includes(tag)}
              onClick={() => toggleTag(tag)}
            />
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filtered.map((p, i) => (
          <article key={i} className="project-card">
            <h3>{p.title}</h3>
            <p className="project-desc">{p.description}</p>
            <div className="project-tags">
              {p.tags.map((t, idx) => (
                <span key={idx} className="tag tag-pill">{t}</span>
              ))}
            </div>
            <a className="project-link" href={p.link}>View</a>
          </article>
        ))}
      </div>
    </section>
  );
}

const projectsContainer = document.getElementById('projects-root');
if (projectsContainer) {
  const root = ReactDOM.createRoot(projectsContainer);
  root.render(<ProjectsGrid />);
}
