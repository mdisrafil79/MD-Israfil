
const expertise = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST API",
];

const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, interactive, and user-friendly interfaces with modern frontend technologies.",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Developing server-side applications, REST APIs, and database-driven solutions.",
  },
  {
    number: "03",
    title: "Full-Stack Development",
    description:
      "Creating complete web applications by connecting frontend, backend, and databases.",
  },
];

const approaches = [
  "Clean & Maintainable Code",
  "Responsive First Design",
  "User-Friendly Experience",
  "Performance & Optimization",
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">

        {/* Section Heading */}
        <div className="about-heading">
          <span className="section-label">
            ABOUT ME
          </span>

          <h2 className="section-title">
            A Little <span className="gradient-text">About Me</span>
          </h2>

          <p className="section-description">
            Get to know my journey, what I do, and how
            I approach building digital experiences.
          </p>
        </div>

        {/* Introduction & Journey */}
        <div className="about-main">

          <div className="about-intro">
            <div className="about-block">
              <span className="about-subtitle">
                WHO I AM
              </span>

              <h3>
                Passionate about building
                <span className="gradient-text">
                  {" "}digital experiences.
                </span>
              </h3>

              <p>
                I am MD Israfil, a MERN-Stack Web Developer
                passionate about creating modern, responsive,
                and user-friendly web applications. I enjoy
                transforming ideas into functional digital
                solutions that help businesses and institutes
                solve real-world challenges.
              </p>
            </div>

            <div className="about-block journey-block">
              <span className="about-subtitle">
                MY JOURNEY
              </span>

              <h3>
                Always learning, always building.
              </h3>

              <p>
                My journey in web development is driven by
                curiosity, creativity, and a passion for
                technology. I continuously explore modern
                web technologies, improve my problem-solving
                skills, and build projects to turn what I
                learn into practical experience.
              </p>
            </div>
          </div>

          {/* What I Do & Working Approach */}
          <div className="about-details">

            <div className="about-card">
              <span className="about-subtitle">
                WHAT I DO
              </span>

              <div className="services-list">
                {services.map((service) => (
                  <div
                    className="service-item"
                    key={service.number}
                  >
                    <span className="service-number">
                      {service.number}
                    </span>

                    <div>
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-card approach-card">
              <span className="about-subtitle">
                WORKING APPROACH
              </span>

              <h3>
                Quality in every line of code.
              </h3>

              <p>
                I believe great websites are built with
                thoughtful planning, clean code, and
                attention to user experience.
              </p>

              <div className="approach-list">
                {approaches.map((item) => (
                  <div className="approach-item" key={item}>
                    <span className="approach-check">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Technical Expertise */}
        <div className="expertise">
          <div className="expertise-heading">
            <span className="about-subtitle">
              TECHNICAL EXPERTISE
            </span>

            <h3>
              Technologies I <span className="gradient-text">
                Work With
              </span>
            </h3>
          </div>

          <div className="expertise-list">
            {expertise.map((skill) => (
              <span className="expertise-tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
