const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div>
          <p className="text-sm font-bold text-white">
            Ewaz Haidary
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Full-Stack Developer
          </p>
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Ewaz Haidary. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;