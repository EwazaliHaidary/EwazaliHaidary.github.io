import api from '../api/api'
import {
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { useEffect, useState } from "react";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false)
  const [countDown, setCountDown] = useState(7)
  const [info,setInfo] = useState(
    {
      name:"",
      email: "",
      subject: "",
      message:"",
    }
  );

  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      console.log("FORM DATA:", info);
      console.log("BASE URL:", api.defaults.baseURL);
     
      const response = await api.post("contact",info)
      console.log(response.data)

      setShowAlert(true)
      setCountDown(7)
    } catch (error) {
       console.log("STATUS:", error.response?.status);
       console.log("URL:", error.config?.url);
       console.log("DATA:", error.response?.data);
    }
  }

  useEffect(() =>{
    if(!showAlert) return;
    if(countDown === 0){
      setShowAlert(false);
      return;
    };

    const timer = setTimeout(() =>{
      setCountDown(countDown - 1)
    }, 1000);
    return() => clearTimeout(timer)
  },[countDown, showAlert])

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setInfo({
      ...info,
      [name]: value
    });
  };

  return (
    <>
    {showAlert && (
  <div className="fixed bottom-6 right-6 z-50 w-[350px] overflow-hidden rounded-2xl border border-emerald-400/20 bg-slate-900/95 p-5 shadow-2xl backdrop-blur-md">
    
    <div className="flex items-start gap-4">
      
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400/10">
        <span className="text-xl text-emerald-400">✓</span>
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-white">
          Message Sent!
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Thank you for contacting me. I will get back to you soon.
        </p>

        <p className="mt-2 text-xs text-slate-500">
          Closing in {countDown}s
        </p>
      </div>

    </div>

    <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
      <div
        className="h-full rounded-full bg-emerald-400 transition-all duration-1000"
        style={{
          width: `${(countDown / 7) * 100}%`,
        }}
      />
    </div>

  </div>
)}
    <section
      id="contact"
      className="bg-slate-950 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let's work together
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            Have a project, opportunity, or idea? Feel free to get
            in touch. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <h3 className="text-xl font-bold text-white">
              Get in touch
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Whether you want to discuss a project, a job opportunity,
              or simply connect, you can reach me through the information
              below.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="mailto:your-email@example.com"
                className="flex items-center gap-4 text-slate-400 transition-colors hover:text-cyan-400"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Mail size={19} />
                </span>

                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="mt-1 text-sm text-slate-300">
                    ewazalihaidary5@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-400">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <MapPin size={19} />
                </span>

                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Afghanistan Bamyan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={info.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  value={info.email}
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                name="subject"
                value={info.subject}
                onChange={handleChange}
                placeholder="Project or opportunity"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                value={info.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
              />
            </div>

            <button
              type="submit"
              className="mt-6 flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <Send size={17} />
              Send Message
            </button>
          </form>
        
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;