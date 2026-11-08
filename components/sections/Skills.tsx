
import Image from "next/image";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", level: 95, icon: "html5/html5-original.svg" },
      { name: "CSS3", level: 90, icon: "css3/css3-original.svg" },
      { name: "JavaScript (ES6+)", level: 85, icon: "javascript/javascript-original.svg" },
      { name: "TypeScript", level: 80, icon: "typescript/typescript-original.svg" },
      { name: "React.js", level: 88, icon: "react/react-original.svg" },
      { name: "Next.js", level: 75, icon: "nextjs/nextjs-original.svg" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: 80, icon: "nodejs/nodejs-original.svg" },
      { name: "Express.js", level: 75, icon: "express/express-original.svg" },
      { name: "MongoDB", level: 75, icon: "mongodb/mongodb-original.svg" },
      { name: "Firebase", level: 70, icon: "firebase/firebase-original.svg" },
    ],
  },
  {
    title: "Styling & UI Libraries",
    skills: [
      { name: "Tailwind CSS", level: 85, icon: "tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", level: 80, icon: "bootstrap/bootstrap-original.svg" },
      { name: "Sass", level: 75, icon: "sass/sass-original.svg" },
      { name: "DaisyUI", level: 80, icon: "daisyui/daisyui-original.svg" },
      { name: "Shadcn UI", level: 75, icon: "react/react-original.svg" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 85, icon: "git/git-original.svg" },
      { name: "GitHub", level: 85, icon: "github/github-original.svg" },
      { name: "VS Code", level: 90, icon: "vscode/vscode-original.svg" },
      { name: "Vite", level: 80, icon: "vite/vite-original.svg" },
      { name: "Vercel", level: 75, icon: "vercel/vercel-original.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">

        {/* Section Heading */}
        <div className="skills-heading">
          <span className="section-label">
            MY EXPERTISE
          </span>

          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>

          <p className="section-description">
            Technologies and tools I use to build
            modern, responsive, and scalable web applications.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.title}>

              <h3 className="skill-category-title">
                {category.title}
              </h3>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>

                    <div className="skill-icon">
                      <Image
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                        alt={skill.name}
                        width={25}
                        height={25}
                        unoptimized
                      />
                    </div>

                    <span className="skill-name">
                      {skill.name}
                    </span>

                    <span className="skill-level">
                      {skill.level}%
                    </span>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
