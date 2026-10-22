import { ArrowUpRight, BookOpen, Code2, GraduationCap, MapPin } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "CSE Undergraduate",
    description: "Green University of Bangladesh",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Learning and building modern web applications",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Exploring new technologies and development practices",
  },
  {
    icon: MapPin,
    title: "Based in Dhaka",
    description: "Bangladesh",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 bg-[#101522] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
            Get to know me
          </p>

          <h2
            id="about-heading"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            About <span className="text-indigo-400">Me.</span>
          </h2>

          <div className="mt-6 h-1 w-20 rounded-full bg-indigo-500" />
        </div>

        <div className="grid items-start gap-14 lg:grid-cols-2">
          {/* About Content */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold leading-snug text-white sm:text-3xl">
              A CSE undergraduate passionate about building meaningful
              digital experiences.
            </h3>

            <div className="space-y-5 text-base leading-8 text-slate-400">
              <p>
                Hello! I&apos;m{" "}
                <span className="font-semibold text-indigo-300">
                  Samia Islam Ridita
                </span>
                , a Computer Science and Engineering undergraduate at Green
                University of Bangladesh.
              </p>

              <p>
                I&apos;m currently in my third semester, developing my
                programming knowledge and exploring frontend web development.
                I enjoy transforming ideas into responsive, accessible, and
                user-friendly websites.
              </p>

              <p>
                Through academic learning and practical projects, I&apos;m
                strengthening my understanding of web technologies,
                component-based development, and modern UI design.
              </p>

              <p>
                My goal is to grow into a skilled frontend developer and
                contribute to professional development teams through
                internships, junior developer opportunities, and meaningful
                collaborations.
              </p>
            </div>

            <a
              href="https://github.com/samiaislamridita670-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-indigo-400 transition hover:text-indigo-300 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
            >
              Explore My GitHub
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>

          {/* Highlight Cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-700/60 bg-[#151B2B] p-7 transition-colors duration-300 hover:border-indigo-400/50"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Icon size={24} aria-hidden="true" />
                  </div>

                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}