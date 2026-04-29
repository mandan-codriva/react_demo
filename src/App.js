
import './App.css';

function App() {
  return (
    <div className="container">
      <img
        src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
        alt="profile"
        className="profile-img"
      />
      <h1>mandan@codriva@gmail.com</h1>
       <h2>Mandan jha</h2>
      <h3>Associate software Developer</h3>
      <p>
        Expert software engineer specializing in React JS, Next JS,
        JavaScript, and scalable frontend architecture.
      </p>
       <div className="experience">
        <span>3+ Years Experience</span>
        <span>40+ Projects Completed</span>
      </div>
        <ul>
        <li>React JS</li>
        <li>Next JS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>GitHub</li>
        <li>Responsive Design</li>
        <li>REST APIs</li>
      </ul>

        <div className="social-links">
        <a href="#">Git</a>
        <a href="#">LinkedIn</a>
        <a href="#">Portfolio</a>
      </div>

      <button onClick={() => alert('Contact: mandan@codriva@gmail.com')}>
        Contact details
      </button>
    </div>
  );
}

export default App;

