import "./App.css";

function App() {
  return (
    <div className="container">
      <img
        src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
        alt="profile"
        className="profile-img"
      />

      <h1>mandan@codriva@gmail.com</h1>
      <h2>Mandan Verma</h2>
      <h3>Associate Software Developer</h3>
      <p>
        Expert in React JS, Next JS, TypeScript, and scalable UI systems.
      </p>

        <div className="experience">
        <span>5+ Years Experience</span>
        <span>50+ Projects Completed</span>
      </div>
   <ul>
        <li>React JS</li>
        <li>Next JS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>GitHub</li>
        <li>CSS3</li>
        <li>Responsive Design</li>
        <li>REST APIs</li>
      </ul>

        <div className="social-links">
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Portfolio</a>
      </div>

      <button onClick={() => alert("Contact: mandan@codriva@gmail.com")}>
        Contact Me
      </button>
    </div>
  );
}

export default App;
