import { useState, useEffect } from "react";
import api from '../api/api'
const About = () => {
  const [profile, setProfile] = useState(null)

  useEffect(()=>{
    api.get("profile/")
    .then(response =>{
      setProfile(response.data)

    })
    .catch((error)=>{
      console.error(error)
    })
  },[])
  return (
    <section
      id="about"
      className="bg-slate-950 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              About Me
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Building digital experiences
              <span className="text-slate-500"> that matter.</span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-slate-400">
              <p>
                {profile?.about}
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <p className="text-3xl font-bold text-white">
                7+
              </p>

              <p className="mt-2 text-sm text-slate-400">
                University Semesters
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <p className="text-3xl font-bold text-white">
                10+
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Technologies
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <p className="text-3xl font-bold text-white">
                Full-Stack
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Development Focus
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <p className="text-3xl font-bold text-white">
                Open
              </p>

              <p className="mt-2 text-sm text-slate-400">
                To Opportunities
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;