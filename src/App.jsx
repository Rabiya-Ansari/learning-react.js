import React from "react";
import './App.css';

export default function App() {
  return (
    <>
      {/* Navbar */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <img src="./favicon.svg" alt="" />
          </div>

          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <h1>Welcome to My Website</h1>

            <h3>Learning React</h3>

            <p>
              I am learning React and building modern, responsive websites
              with it.
            </p>

            <button>Get Started</button>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section" id="about">
          <div className="about-content">
            <h2>About Us</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, exercitationem. We are learning React and
              creating simple and beautiful web applications.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section" id="contact">
          <div className="contact-content">
            <h2>Contact Us</h2>

            <p>
              Have any questions? Feel free to contact us.
            </p>

            <form className="contact-form">
              <input
                type="text"
                placeholder="Enter your name"
              />

              <input
                type="email"
                placeholder="Enter your email"
              />

              <textarea
                placeholder="Enter your message"
                rows="5"
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
         Footer
        </p>
      </footer>
    </>
  );
}