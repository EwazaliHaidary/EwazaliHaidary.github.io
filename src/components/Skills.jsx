import { useState, useEffect } from "react";
import api from '../api/api'
const Skills = () => {
  const [skillCategory, setSkillCatogory] = useState([])
  


  useEffect(()=>{
    api.get("skillCategory/")
    .then(response =>{
      setSkillCatogory(response.data)

    })
    .catch((error)=>{
      console.error(error)
    })
  },[])

  // const skillGroups = [
  //   {
  //     title: "Frontend",
  //     skills: [
  //       "React",
  //       "JavaScript",
  //       "HTML5",
  //       "CSS3",
  //       "Tailwind CSS",
  //       "Bootstrap",
  //     ],
  //   },
  //   {
  //     title: "Backend",
  //     skills: [
  //       "Python",
  //       "Django",
  //       "Django REST Framework",
  //       "Laravel",
  //       "PHP",
  //     ],
  //   },
  //   {
  //     title: "Database",
  //     skills: [
  //       "PostgreSQL",
  //       "MySQL",
  //       "SQLite",
  //     ],
  //   },
  //   {
  //     title: "Tools & Technologies",
  //     skills: [
  //       "Git",
  //       "GitHub",
  //       "Docker",
  //       "Linux",
  //       "REST API",
  //     ],
  //   },
  // ];

  return (
    <section
      id="skills"
      className="bg-slate-950 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Skills
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Technologies I work with
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            A collection of technologies and tools I use to build
            modern and reliable web applications.
          </p>
        </div>

       <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
  {skillCategory.length > 0 ? (
    skillCategory.map((group) => (
      <div
        key={group.id}
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
      >
        <h3 className="text-lg font-semibold text-white">
          {group.name}
        </h3>

        <div className="mt-4">
          {group.skills.map((skill) => (
            <div
              key={skill.id}
              className="m-2 rounded-xl bg-cyan-700/10 hover:text-cyan-500 p-2 text-white text-center "
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    ))
  ) : (
    <div className="text-white">No content</div>
  )}
</div>
     

      </div>
    </section>
  );
};

export default Skills;