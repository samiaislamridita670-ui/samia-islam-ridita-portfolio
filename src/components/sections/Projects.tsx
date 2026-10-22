import Link from "next/link";
import { ArrowUpRight, Code2, ExternalLink, FolderGit2 } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 bg-[#101522] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
            Selected Work
          </p>

          <h2
            id="projects-heading"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Featured <span className="text-indigo-400">Projects.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
            A selection of web development projects created during my
            learning journey. Explore their source code and available
            demonstrations.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700/60 bg-[#151B2B] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50"
            >
              {/* Project Preview Placeholder */}
              <div className="flex h-52 items-center justify-center border-b border-slate-700/60 bg-gradient-to-br from-indigo-500/10 via-[#101522] to-sky-500/10">
                <FolderGit2
                  size={52}
                  className="text-indigo-400/70"
                  aria-hidden="true"
                />
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-7">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <Code2
                    size={20}
                    className="shrink-0 text-indigo-400"
                    aria-hidden="true"
                  />
                </div>

                <p className="mb-6 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                {project.technologies.length > 0 && (
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-indigo-400/10 px-3 py-1.5 text-xs font-medium text-indigo-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Project Links */}
                <div className="mt-auto flex flex-wrap items-center gap-5 border-t border-slate-700/60 pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-indigo-400"
                  >
                    Source Code
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 transition hover:text-indigo-300"
                    >
                      Live Demo
                      <ExternalLink size={16} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-14 text-center">
          <Link
            href="https://github.com/samiaislamridita670-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-7 py-3.5 font-semibold text-white transition hover:border-indigo-400 hover:text-indigo-300"
          >
            Explore More on GitHub
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}