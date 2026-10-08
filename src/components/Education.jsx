import { useState, useEffect } from "react";
import api from '../api/api'
import { GraduationCap } from "lucide-react";

const Education = () => {
  const[education, setEducation] = useState(null)
  useEffect(() =>{
    api.get("education/")
    .then(response =>{
      setEducation(response.data)
    })
    .catch((error)=>{
      console.error(error)
    })
  }, [])
  return (
    <section
      id="education"
      className="bg-slate-950 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Education
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Academic background
          </h2>
        </div>
    { education ?
    education.map((e)=>(
       <div className="max-w-3xl"
       key={e.id}
       >
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]">
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                <GraduationCap
                  size={24}
                  className="text-cyan-400"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  {e.field}
                </h3>

                <p className="mt-2 text-sm text-cyan-400">
                  {e.institution}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {e.description}
                </p>

                <p className="mt-4 text-sm text-slate-500 ">
                  Currently in Semester {e.degree}
                </p>
                
                <p className="mt-4 text-sm text-slate-500 float-left">
                start year  {e.start_year}
                </p>
                
                <p className="mt-4 text-sm text-slate-500 float-right">
                 end year: {e.end_year}
                </p>
                
              </div>
            </div>
          </div>
        </div>
    )): "No education yet!"}
       
      </div>
    </section>
  );
};

export default Education;