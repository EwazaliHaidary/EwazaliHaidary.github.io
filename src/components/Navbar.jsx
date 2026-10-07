import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  <button
  onClick={toggleTheme}
  aria-label="Toggle theme"
  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-400"
>
  {theme === "dark" ? (
    <Sun size={18} />
  ) : (
    <Moon size={18} />
  )}
</button>

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-bold text-white shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-105">
            EH
          </div>

          <div className="hidden sm:block">
            <h1 className="text-sm font-bold tracking-wider text-white">
              EWAZ HAIDARY
            </h1>

            <p className="text-xs text-slate-400">
              Full-Stack Developer
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white
              after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:rounded-full
              after:bg-cyan-400 after:transition-all after:duration-300
              hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-3 md:flex">

          {/* GitHub */}
          <a
            href="https://GitHub.com/EwazaliHaidary"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2.5 text-slate-400 transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            <span className="font-bold text-sm">GH</span>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="rounded-lg p-2.5 text-slate-400 transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            <span className="font-bold text-sm">in</span>
          </a>

          {/* CV */}
          <a
            href="/Ewaz-Haidary-CV.pdf"
            download
            className="ml-2 flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2.5 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/20 hover:text-cyan-200"
          >
            <Download size={17} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-5">

          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">

            <a
              href="https://GitHub.com/EwazaliHaidary"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2.5 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <span className="font-bold text-sm">GH</span>
              GitHub
            </a>

            <a
              href="#"
              className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2.5 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
             <span className="font-bold text-sm">in</span>
              LinkedIn
            </a>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;