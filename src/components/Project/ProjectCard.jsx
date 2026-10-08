import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [description , setDescription] = useState(false)


  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05]">
      
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-slate-900">
        <img
          src={`http://127.0.0.1:8000${project.image}`}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-white">
            {project.title}
          </h3>

          <ArrowUpRight
            size={20}
            className="shrink-0 text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
          />
        </div>

        {description && <p className="mt-4 text-sm leading-7 text-slate-400">
          {project.description}
        </p>}
        {!description && 
         <p className="mt-4 text-sm leading-7 text-slate-400">
          {project.description.slice(0,70)}
          </p>
        }
        <button 
          className={description ? 
            "text-white p-1 rounded-md"
            : " text-cyan-500"
          }
          onClick={()=> setDescription(!description)}
          >
            {!description ? "more...": "less___"}
          
          </button>
        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.skills.map((technology) => (
            <span
              key={technology.id}
              className="rounded-lg border border-white/10 bg-slate-900 px-3 py-1.5 text-xs text-slate-300"
            >
              {technology.name}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center gap-5">
          <a
            href={project.github_url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
           
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
          >
            Live Demo
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;