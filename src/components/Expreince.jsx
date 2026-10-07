const experiences = [
  {
    title: "Full-Stack Web Developer",
    type: "Project-Based",
    period: "2025 — Present",
    description:
      "Developing practical web applications using React, Django, Django REST Framework, and PostgreSQL, with a focus on clean architecture, APIs, and responsive interfaces.",
    technologies: [
      "React",
      "Django",
      "DRF",
      "PostgreSQL",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-950 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Experience
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            My development journey
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            My experience comes from building real-world and
            project-based applications while continuously improving
            my development skills.
          </p>
        </div>

        <div className="relative ml-2 border-l border-white/10 pl-8">
          {experiences.map((experience) => (
            <div key={experience.title} className="relative">
              <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-lg shadow-cyan-400/30" />

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {experience.title}
                    </h3>

                    <p className="mt-1 text-sm text-cyan-400">
                      {experience.type}
                    </p>
                  </div>

                  <span className="text-sm text-slate-500">
                    {experience.period}
                  </span>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400">
                  {experience.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-slate-900 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;