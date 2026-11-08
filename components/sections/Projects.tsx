"use client";
import Image from "next/image";

import { useState } from "react";

const projects = [
  {
    name: "Project One",
    description:
      "A modern and responsive web application built to provide a smooth and user-friendly digital experience.",
    image: "/images/projects/project-1.png",
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/",
    live: "https://example.com",
  },
  {
    name: "Project Two",
    description:
      "A full-stack web application featuring dynamic content, interactive functionality, and responsive design.",
    image: "/images/projects/project-2.png",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    github: "https://github.com/",
    live: "https://example.com",
  },
  {
    name: "Project Three",
    description:
      "An intuitive web application designed with modern UI components and optimized user experience.",
    image: "/images/projects/project-3.png",
    technologies: ["React.js", "Express.js", "MongoDB"],
    github: "https://github.com/",
    live: "https://example.com",
  },
  {
    name: "Project Four",
    description:
      "A responsive digital solution developed using modern web technologies and clean coding practices.",
    image: "/images/projects/project-4.png",
    technologies: ["Next.js", "TypeScript", "CSS"],
    github: "https://github.com/",
    live: "https://example.com",
  },
  {
    name: "Project Five",
    description:
      "A user-focused application combining functionality, performance, and a clean modern interface.",
    image: "/images/projects/project-5.png",
    technologies: ["React.js", "Node.js", "MongoDB"],
    github: "https://github.com/",
    live: "https://example.com",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProject = projects[currentIndex];

  const previousProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const nextProject = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">

        {/* Section Heading */}
        <div className="projects-heading">
          <span className="section-label">
            MY WORK
          </span>

          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <p className="section-description">
            Explore some of my recent projects,
            built with modern web technologies.
          </p>
        </div>

        {/* Project Slider */}
        <div className="project-slider">

          <div className="project-content">

            {/* Project Image */}
            <div className="project-image-wrapper">
              <Image
              src={currentProject.image}
                alt={`${currentProject.name} preview`}
                width={800}
                height={500}
                className="project-image"
              />
            </div>

            {/* Project Information */}
            <div className="project-info">

              <span className="project-counter">
                Project {String(currentIndex + 1).padStart(2, "0")} of{" "}
                {String(projects.length).padStart(2, "0")}
              </span>

              <h3 className="project-title">
                {currentProject.name}
              </h3>

              <p className="project-description">
                {currentProject.description}
              </p>

              {/* Technology Badges */}
              <div className="project-technologies">
                {currentProject.technologies.map((technology) => (
                  <span
                    className="project-tech"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="project-actions">

                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-code-btn"
                >
                  <span>⌘</span>
                  Code ↗
                </a>

                <a
                  href={currentProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-live-btn"
                >
                  Live Preview ↗
                </a>

              </div>
            </div>

          </div>

          {/* Slider Navigation */}
          <div className="project-navigation">

            <button
              className="project-nav-btn"
              onClick={previousProject}
              aria-label="Previous project"
            >
              ← Previous
            </button>

            <div className="project-dots">
              {projects.map((project, index) => (
                <button
                  key={project.name}
                  className={`project-dot ${
                    currentIndex === index ? "active" : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to project ${index + 1}`}
                  aria-current={currentIndex === index ? "true" : undefined}
                />
              ))}
            </div>

            <button
              className="project-nav-btn"
              onClick={nextProject}
              aria-label="Next project"
            >
              Next →
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
