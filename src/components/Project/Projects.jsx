import ProjectCard from "./ProjectCard";
import FuelStation from '../../../public/projects/fuelStation.png'
const projects = [
  {
    title: "Fuel Station Management System",
    description:
      "A full-stack management system designed to manage fuel sales, customers, staff, inventory, lending, finances, and daily business operations.",
    technologies: [
      "React",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
    ],
    image: {FuelStation},
    github: "https://github.com/EwazaliHaidary",
    demo: "#",
  },

  {
    title: "University Management System",
    description:
      "A web-based system for managing university-related information and administrative operations through a structured database.",
    technologies: [
      "React",
      "Django",
      "REST API",
      "PostgreSQL",
    ],
    image: "/projects/university-management.jpg",
    github: "https://github.com/EwazaliHaidary",
    demo: "#",
  },

  {
    title: "Online Library",
    description:
      "A modern online library application for managing books, authors, categories, users, and borrowing records.",
    technologies: [
      "Laravel",
      "React",
      "Tailwind CSS",
      "MySQL",
    ],
    image: "/projects/online-library.jpg",
    github: "https://github.com/EwazaliHaidary",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-950 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Projects
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Some things I've built
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            A selection of projects that demonstrate my experience
            with frontend development, backend systems, APIs, and
            databases.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;