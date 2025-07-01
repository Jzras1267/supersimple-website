// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;


// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Justin Socrates</h1>
        <div className="space-x-4">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#portfolio" className="hover:text-blue-500">Portfolio</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </nav>
    </header>
  );
}


// src/components/About.jsx
import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hi! I'm Justin Socrates, a Computer Science student at President University. I’m passionate about creating user-friendly web experiences and smart systems in the field of IoT.
        </p>
      </div>
    </section>
  );
}


// src/components/Skills.jsx
import React from "react";

export default function Skills() {
  const skills = [
    { name: "HTML/CSS", level: "Proficient" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Vue.js", level: "Beginner" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "Communication", level: "Excellent" },
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-gray-100 dark:bg-gray-700 p-4 rounded shadow hover:scale-105 transition-transform duration-200"
            >
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// src/components/Portfolio.jsx
import React from "react";

export default function Portfolio() {
  const projects = [
    {
      title: "ProTech Helmet",
      description: "IoT-based smart helmet with fall and gas detection.",
    },
    {
      title: "Sakura Park Hotel Website",
      description: "Fully responsive static hotel site.",
    },
    {
      title: "SCReMS",
      description: "Smart Car Rental Management System.",
    },
  ];

  return (
    <section id="portfolio" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// src/components/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) alert("Message sent!");
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white dark:bg-gray-800">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}


// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 text-center bg-gray-200 dark:bg-gray-900">
      <p>© 2025 Justin Socrates. All rights reserved.</p>
    </footer>
  );
}
