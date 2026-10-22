import Image from "next/image";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080B12] text-white">
      <section
        id="home"
        className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-14 px-6 py-24 lg:flex-row lg:gap-20"
      >
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
              Samia Islam Ridita
            </span>
          </h1>

          <h2 className="mt-7 text-xl font-medium text-slate-200 sm:text-2xl">
            Aspiring Frontend Developer | React & Next.js
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 lg:mx-0">
            I&apos;m a Computer Science and Engineering undergraduate at
            Green University of Bangladesh, passionate about creating modern,
            responsive, and user-friendly web experiences. I enjoy learning
            frontend technologies and building practical projects that
            strengthen my development skills.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="rounded-xl bg-indigo-500 px-7 py-3.5 font-semibold text-white transition hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
            >
              View Projects
            </a>

            <a
              href="mailto:samiaislamridita670@gmail.com"
              className="rounded-xl border border-slate-600 px-7 py-3.5 font-semibold text-slate-200 transition hover:border-indigo-400 hover:text-indigo-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
            >
              Contact Me
            </a>
          </div>

          {/* Availability */}
          <div className="mt-10 flex items-center justify-center gap-3 lg:justify-start">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <p className="text-sm text-slate-400">
              Open to internships and junior developer opportunities
            </p>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="flex flex-1 justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-indigo-500/25 to-sky-500/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-700 bg-[#151B2B] p-3 shadow-2xl">
              <Image
                src="/img.png"
                alt="Samia Islam Ridita"
                width={430}
                height={520}
                priority
                className="h-[360px] w-[300px] rounded-[1.5rem] object-cover sm:h-[450px] sm:w-[370px]"
              />
            </div>
          </div>
        </div>
                 </section>

      <About />
      <Skills />
      <Projects />
    </main>
  );
}
