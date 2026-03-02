export default function Home() {
  const navItems = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

  const skillGroups = [
    { title: "LANGUAGES", items: ["Python", "C++", "Java"] },
    { title: "FRONTEND", items: ["React.js", "Next.js", "HTML/CSS", "Bootstrap", "Flutter"] },
    { title: "BACKEND", items: ["Ruby on Rails", "Node.js", "Express.js"] },
    {
      title: "DATABASES & CLOUD",
      items: ["MongoDB", "PostgreSQL", "Firebase", "Vercel", "Cloudinary", "Stripe"],
    },
    {
      title: "TOOLS & PRACTICES",
      items: ["Git", "GitHub", "REST APIs", "Agile", "Postman", "Figma", "OpenAI API"],
    },
  ];

  const projects = [
    {
      title: "Smart Stay",
      month: "February 2025",
      description:
        "A full-featured accommodation platform with secure role-based authentication, smart search, dynamic pricing, and safety score features. Built responsive dashboards and automated booking workflows.",
      tags: ["Next.js", "MongoDB", "NextAuth", "Stripe", "Cloudinary"],
      highlight: false,
    },
    {
      title: "DevVerse",
      month: "November 2025",
      description:
        "A MERN-based developer social platform with posts, follows, real-time chat, and notifications. Built 15+ REST APIs, real-time messaging via Socket.io, and responsive UI.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Clerk", "Tailwind CSS"],
      highlight: true,
    },
  ];

  const socialLinks = [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/meghana-manchala-b622152ba/", text: "in" },
    { label: "GitHub", url: "https://github.com/meghanamanchala", text: "gh" },
    { label: "LeetCode", url: "https://leetcode.com/u/meghanamanchal/", text: "</>" },
  ];

  return (
    <div className="min-h-screen text-slate-100">
      <header className="fixed inset-x-0 top-0 z-20 border-b border-slate-800/70 bg-[#030915]/85 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-[1040px] items-center justify-between px-5 sm:px-8">
          <a href="#home" className="text-[34px] font-bold tracking-tight text-amber-500">
            MM
          </a>
          <nav className="hidden gap-7 text-[15px] text-slate-400 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors hover:text-slate-200"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="pb-8">
        <section
          id="home"
          className="mx-auto flex min-h-[98vh] max-w-[1040px] flex-col items-center justify-center px-5 pt-16 text-center sm:px-8"
        >
          <p className="mb-5 text-[13px] font-semibold tracking-[0.2em] text-amber-500">Hi, my name is</p>
          <h1 className="text-5xl font-bold tracking-tight text-slate-100 sm:text-[72px]">Meghana Manchala</h1>
          <h2 className="mt-2 text-[30px] font-semibold text-slate-400 sm:text-[46px]">Full-Stack Developer</h2>
          <p className="mt-8 max-w-[720px] text-base leading-8 text-slate-400">
            I build reliable, production-ready web applications. Currently focused on Rails,
            React, and scalable backend systems — shipping features that make a real difference
            for users.
          </p>

          <div className="mt-9 flex items-center gap-3 text-slate-300">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-700/80 bg-slate-900/40 text-sm transition-colors hover:border-slate-500 hover:text-white"
              >
                {link.text}
              </a>
            ))}
          </div>

          <a
            href="#about"
            className="mt-9 text-2xl text-slate-500 transition-colors hover:text-slate-300"
            aria-label="Scroll to about section"
          >
            ↓
          </a>
        </section>

        <section id="about" className="border-t border-slate-900/80 py-28">
          <div className="mx-auto w-full max-w-[1040px] px-5 sm:px-8">
            <div className="flex items-end gap-3 border-b border-slate-800 pb-3">
              <p className="text-[36px] font-bold leading-none text-amber-500">01.</p>
              <h3 className="text-[48px] font-semibold text-slate-100">About</h3>
            </div>
            <div className="mt-10 max-w-[820px] space-y-5 text-base leading-8 text-slate-400">
              <p>
                I’m Meghana, a full-stack developer passionate about building products that are
                both technically strong and genuinely useful. I enjoy turning ideas into reliable
                experiences with clean interfaces and scalable backend architecture.
              </p>
              <p>
                My focus is on writing maintainable code, designing clear APIs, and shipping
                features that solve real user problems. I value collaboration, thoughtful
                engineering, and continuous learning.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="border-t border-slate-900/80 py-28">
          <div className="mx-auto w-full max-w-[1040px] px-5 sm:px-8">
            <div className="flex items-end gap-3 border-b border-slate-800 pb-3">
              <p className="text-[34px] font-bold leading-none text-amber-500">02.</p>
              <h3 className="text-[48px] font-semibold text-slate-100">Skills</h3>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {skillGroups.map((group) => (
                <article key={group.title} className="rounded-xl border border-slate-800 bg-slate-950/55 p-5">
                  <h4 className="text-[24px] font-semibold tracking-tight text-amber-500">{group.title}</h4>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-sm font-semibold text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="border-t border-slate-900/80 py-28">
          <div className="mx-auto w-full max-w-[1040px] px-5 sm:px-8">
            <div className="flex items-end gap-3 border-b border-slate-800 pb-3">
              <p className="text-[34px] font-bold leading-none text-amber-500">03.</p>
              <h3 className="text-[48px] font-semibold text-slate-100">Experience</h3>
            </div>
            <article className="relative mt-10 pl-9">
              <span className="absolute left-3 top-0 h-full w-px bg-amber-500/65" />
              <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-amber-500/70 bg-slate-900 text-[10px] text-amber-500">
                ⌁
              </span>
              <h4 className="text-[40px] font-semibold text-slate-100">Ruby on Rails Intern</h4>
              <p className="mt-1 text-[24px] font-medium text-amber-500">Zolvit</p>
              <p className="mt-2 text-[16px] text-slate-500">July 2025 – September 2025</p>
              <ul className="mt-7 space-y-4 text-[16px] leading-8 text-slate-400">
                <li>▹ Engineered and scaled a service configuration system supporting 50+ modules weekly, elevating reliability and user experience for over 100 internal users.</li>
                <li>▹ Resolved 5+ BAU issues weekly, reducing backlog by 15% and strengthening feature stability.</li>
                <li>▹ Partnered in Agile sprints using Git, deploying 10+ production fixes that reduced user-reported errors by 15%.</li>
                <li>▹ Streamlined debugging and deployment workflows, reducing issue turnaround time by 20%.</li>
                <li>▹ Recognized by the manager for fast learning, reliability, and consistent delivery.</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="projects" className="border-t border-slate-900/80 py-28">
          <div className="mx-auto w-full max-w-[1040px] px-5 sm:px-8">
            <div className="flex items-end gap-3 border-b border-slate-800 pb-3">
              <p className="text-[34px] font-bold leading-none text-amber-500">04.</p>
              <h3 className="text-[48px] font-semibold text-slate-100">Projects</h3>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={`rounded-xl border p-6 ${
                    project.highlight
                      ? "border-amber-500/70 bg-slate-950/65"
                      : "border-slate-800 bg-slate-950/55"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className={`text-[36px] font-semibold ${project.highlight ? "text-amber-500" : "text-slate-100"}`}>
                        {project.title}
                      </h4>
                      <p className="mt-1 text-[13px] text-slate-500">{project.month}</p>
                    </div>
                    <a
                      href="https://github.com/meghanamanchala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 transition-colors hover:text-slate-300"
                      aria-label={`Open ${project.title} repository`}
                    >
                      gh
                    </a>
                  </div>
                  <p className="mt-5 text-[16px] leading-8 text-slate-400">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-xs font-semibold tracking-wide text-amber-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="border-t border-slate-900/80 py-28">
          <div className="mx-auto w-full max-w-[1040px] px-5 sm:px-8">
            <div className="flex items-end gap-3 border-b border-slate-800 pb-3">
              <p className="text-[34px] font-bold leading-none text-amber-500">05.</p>
              <h3 className="text-[48px] font-semibold text-slate-100">Education</h3>
            </div>
            <article className="mt-10 rounded-xl border border-slate-800 bg-slate-950/55 p-7">
              <h4 className="text-[36px] font-semibold text-slate-100">
                B.Tech in CS (Software Product Engineering)
              </h4>
              <p className="mt-2 text-[20px] font-medium text-amber-500">Kalvium | Apollo Campus, Chittoor</p>
              <p className="mt-2 text-[16px] text-slate-500">2023 – 2027</p>
              <p className="mt-4 text-[17px] text-slate-300">
                Current CGPA: <span className="font-semibold text-slate-100">8.8 / 10</span>
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="border-t border-slate-900/80 py-32">
          <div className="mx-auto w-full max-w-[1040px] px-5 text-center sm:px-8">
            <p className="text-[28px] font-semibold text-amber-500">06. What&apos;s Next?</p>
            <h3 className="mt-2 text-[64px] font-semibold text-slate-100">Get In Touch</h3>
            <p className="mx-auto mt-6 max-w-[760px] text-[18px] leading-9 text-slate-400">
              I&apos;m currently looking for internship opportunities. Whether you have a question or
              just want to say hi, feel free to reach out — I&apos;ll do my best to get back to you!
            </p>
            <a
              href="mailto:meghana.manchala.dev@gmail.com"
              className="mt-10 inline-flex items-center rounded-lg border border-amber-500/70 px-8 py-3 text-[24px] font-medium text-amber-500 transition-colors hover:bg-amber-500/10"
            >
              ✉ Say Hello
            </a>
            <div className="mt-10 flex justify-center gap-6 text-[26px] text-slate-500">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="transition-colors hover:text-slate-300"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900/80 py-7 text-center text-[14px] tracking-wider text-slate-500">
        Designed &amp; Built by Meghana Manchala
      </footer>
    </div>
  );
}
