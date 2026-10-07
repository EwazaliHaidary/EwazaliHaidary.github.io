import { ArrowRight, Download } from "lucide-react";
import profileImage from '../assets/images/my photo.jpeg'
const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-20"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 py-20 lg:grid-cols-2">

        {/* Left Side */}
        <div className="max-w-3xl">

          {/* Small Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Available for opportunities
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ewaz Haidary
            </span>
          </h1>

          {/* Role */}
          <h2 className="mt-6 text-2xl font-semibold text-slate-300 sm:text-3xl">
            Full-Stack Developer
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I build modern, responsive and scalable web applications
            using React, Django, Django REST Framework and PostgreSQL.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">

            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              View My Work

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/Ewaz-Haidary-CV.pdf"
              download
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <Download size={18} />
              Download CV
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-5">

            <a
              href="https://github.com/EwazaliHaidary"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-white"
            >
              GitHub
            </a>

            <span className="h-1 w-1 rounded-full bg-slate-700" />

            <a
              href="#"
              className="text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-white"
            >
              LinkedIn
            </a>

          </div>
        </div>

        {/* Right Side */}
        <div className="relative hidden justify-center lg:flex">

          {/* Outer Glow */}
          <div className="absolute h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

          {/* Profile Card */}
          <div className="relative w-80 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">

            {/* Avatar */}
            <div className="mx-auto flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 shadow-lg shadow-cyan-500/10">
            <img
                src={profileImage}
                alt="Ewaz Haidary"
                className="h-full w-full object-cover"
            />
            </div>

            <div className="mt-7 text-center">

              <h3 className="text-xl font-bold text-white">
                Ewaz Haidary
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Full-Stack Developer
              </p>

            </div>

            {/* Tech Stack */}
            <div className="mt-7 flex flex-wrap justify-center gap-2">

              {["React", "Django", "DRF", "PostgreSQL"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                )
              )}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;