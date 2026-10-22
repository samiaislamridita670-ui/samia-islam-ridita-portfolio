import {
  Code2,
  Database,
  GitBranch,
  Layout,
  Terminal,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    description: "Technologies used to build responsive web interfaces.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Frameworks & Languages",
    icon: Code2,
    description: "Technologies I am learning and applying in projects.",
    skills: ["Next.js", "TypeScript", "C Programming"],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    description: "Tools used in my development workflow.",
    skills: ["VS Code", "Git", "GitHub", "npm"],
  },
  {
    title: "Deployment",
    icon: GitBranch,
    description: "Platforms for publishing and maintaining websites.",
    skills: ["Netlify", "GitHub Pages"],
  },
  {
    title: "Currently Exploring",
    icon: Database,
    description: "Areas I am continuing to study and practice.",
    skills: ["Backend Development", "REST APIs", "Databases"],
  },
  {
    title: "Programming Fundamentals",
    icon: Terminal,
    description: "Core computer science and programming concepts.",
    skills: ["Problem Solving", "Data Structures", "Algorithms"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 bg-[#080B12] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
            What I Work With
          </p>

          <h2
            id="skills-heading"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Technical <span className="text-indigo-400">Skills.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
            A growing collection of technologies, tools, and programming
            concepts I use and continue to explore through academic learning
            and practical projects.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="group rounded-2xl border border-slate-700/60 bg-[#151B2B] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Icon size={26} aria-hidden="true" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {category.title}
                </h3>

                <p className="mb-6 min-h-14 text-sm leading-7 text-slate-400">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-indigo-400/20 bg-indigo-400/10 px-3 py-2 text-sm font-medium text-indigo-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}