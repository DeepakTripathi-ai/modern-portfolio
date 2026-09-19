import './App.css';

function App() {
  const name = "Deepak Tripathi";
  const role = "Aspiring MERN Stack Developer";

  return (
    <div className="container">
      {/* Navbar Section */}
      <header className="navbar">
        <h2 className="logo">MyPortfolio</h2>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Hi, I'm {name}</h1>
          <p>{role}</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        
        <div className="project-grid">
          {/* Travel Blog Card */}
          <div className="project-card">
            <div className="card-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop" 
                alt="Travel Blog" 
              />
            </div>
            <div className="card-body">
              <h3>Travel Blog</h3>
              <p>A travel blog capturing personal travel memories, nature photos, and trekking spots.</p>
              <button className="btn">View Project</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;