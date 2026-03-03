"use client";

import { useState } from "react";
import {
  ArrowDown,
  Braces,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

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
      title: "SmartStay",
      month: "Project 01",
      description:
        "SmartStay is a full-stack rental platform (like Airbnb) built with Next.js and MongoDB, supporting Guest, Host, and Admin roles. It includes property listing and booking, Stripe payments, Cloudinary image upload, reviews, notifications, and admin analytics. A key highlight is AI-based smart search that understands natural language and returns filtered property results.",
      tags: ["Next.js", "MongoDB", "Stripe", "Cloudinary", "Role-Based Access", "AI Search"],
      repoUrl: "https://github.com/meghanamanchala/SmartStay.git",
      liveUrl: "https://smart-stay-tan.vercel.app/",
      highlight: true,
    },
    {
      title: "AskArena",
      month: "Project 02",
      description:
        "AskArena is a real-time event Q&A platform built using SvelteKit (TypeScript) and Supabase (PostgreSQL, Realtime, RLS). It enables attendees to submit and upvote questions during live events, while hosts can moderate content securely with role-based access control and instant updates across all connected users.",
      tags: ["SvelteKit", "TypeScript", "Supabase", "PostgreSQL", "Realtime", "RLS"],
      repoUrl: "https://github.com/meghanamanchala/AskArena.git",
      liveUrl: "https://ask-arena-ten.vercel.app/",
      highlight: true,
    },
    {
      title: "DevVerse",
      month: "Project 03",
      description:
        "DevVerse is a MERN-based developer social platform built with React, Node.js, Express, and MongoDB, featuring Clerk authentication, Socket.io real-time chat, and Cloudinary image uploads. It allows users to create posts, like, comment, follow developers, receive notifications, and use a responsive light/dark mode UI.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Clerk", "Socket.io", "Cloudinary"],
      repoUrl: "https://github.com/meghanamanchala/devverse.git",
      liveUrl: "https://devverse-psi.vercel.app/",
      highlight: true,
    },
    {
      title: "Academix",
      month: "Project 04",
      description:
        "Academix is built using TypeScript and Node.js, with a modern frontend framework like React, and uses Docker and Kubernetes for containerized deployment and orchestration. It integrates Google Gemini AI for transcript generation and summaries, supports real-time updates via WebSockets, and follows a complete CI/CD pipeline (Git → Docker → Registry → Kubernetes) for reliable and scalable deployments.",
      tags: ["TypeScript", "Node.js", "React", "Docker", "Kubernetes", "WebSockets", "CI/CD", "Gemini AI"],
      repoUrl: "https://github.com/kalviumcommunity/S61-0226-Thrive-Devops-With-Kubernetes-And-CI-CD-Academix.git",
      highlight: true,
    },
    {
      title: "CerebroAtlas",
      month: "Project 05",
      description:
        "CerebroAtlas is a full-stack digital health records system that uses an Angular frontend, a Rust backend, and PostgreSQL to securely manage and access patient medical records for healthcare staff, especially in rural settings.",
      tags: ["Angular", "Rust", "PostgreSQL", "Healthcare", "Full-Stack", "Security"],
      repoUrl: "https://github.com/kalviumcommunity/S61-0126-Abyss-Angular-And-Rust-CerebroAtlas",
      highlight: true,
    },
    {
      title: "MarketBridge",
      month: "Project 06",
      description:
        "MarketBridge is a Flutter & Firebase mobile app connecting farmers and buyers. Built with Flutter, Dart, and Firebase (Auth & Firestore), it supports secure login, real-time product listings, CRUD operations, responsive UI for phones/tablets, and smooth marketplace navigation.",
      tags: ["Flutter", "Dart", "Firebase Auth", "Firestore", "Mobile UI", "CRUD"],
      repoUrl: "https://github.com/kalviumcommunity/S61-1225-Nexa-Flutter-And-Firebase-Market-Bridge.git",
      highlight: false,
    },
    {
      title: "Mediconnect",
      month: "Project 07",
      description:
        "Mediconnect is a web application that simplifies doctor appointment booking. Built with React (frontend), Node.js & Express (backend), MongoDB (database), and JWT for authentication, it supports user login/logout, CRUD operations for appointments, and smooth frontend-backend integration.",
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST APIs"],
      repoUrl: "https://github.com/meghanamanchala/S61_Meghana_MediConnect_CapstoneProject.git",
      liveUrl: "https://s61-meghana-medi-connect-capstone-p.vercel.app/",
      highlight: true,
    },
  ];

  const handleProjectCardClick = (project: (typeof projects)[number]) => {
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
      return;
    }

    setPopupMessage(
      `${project.title} live deployment is not available right now. Please use the Repository link for code and setup details.`
    );
  };

  const socialLinks = [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/meghana-manchala-b622152ba/", icon: Linkedin },
    { label: "GitHub", url: "https://github.com/meghanamanchala", icon: Github },
    { label: "LeetCode", url: "https://leetcode.com/u/meghanamanchal/", icon: Braces },
  ];

  const sectionShell =
    "mx-auto w-full max-w-[1040px] rounded-2xl border border-slate-800/70 bg-slate-900/30 px-5 py-8 shadow-[0_0_0_1px_rgba(51,65,85,0.15)] sm:px-8";

  return (
    <div className="min-h-screen text-slate-100">
      <header className="fixed inset-x-0 top-0 z-20 border-b border-slate-800/70 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-[1040px] items-center justify-between px-5 sm:px-8">
          <a href="#home" className="text-[28px] font-bold tracking-tight text-cyan-300">
            MM
          </a>
          <nav className="hidden gap-2 text-[13px] text-slate-400 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-md px-3 py-1.5 transition-colors hover:bg-slate-800/70 hover:text-slate-100"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="pb-8">
        <section id="home" className="mx-auto flex min-h-[98vh] max-w-[1040px] flex-col items-center justify-center px-5 pt-16 text-center sm:px-8">
          <p className="mb-5 text-[12px] font-semibold tracking-[0.2em] text-cyan-400">Hi, my name is</p>
          <h1 className="bg-gradient-to-r from-cyan-200 via-slate-100 to-indigo-200 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-[60px]">
            Manchala Meghana
          </h1>
          <h2 className="mt-2 text-[24px] font-semibold text-slate-400 sm:text-[36px]">Full-Stack Developer</h2>
          <p className="mt-8 max-w-[720px] text-base leading-8 text-slate-400">
            I build production-ready products across web and mobile using React, Next.js,
            SvelteKit, Node.js, and MongoDB, with Supabase/Firebase for real-time features.
            I also work with Docker, Kubernetes, and AI integrations to deliver scalable,
            user-focused applications.
          </p>


          <a
            href="#about"
            className="mt-15 text-slate-500 transition-colors hover:text-slate-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} strokeWidth={2} />
          </a>
        </section>

        <section id="about" className="border-t border-slate-900/80 py-24">
          <div className={sectionShell}>
            <div className="flex items-end gap-3 border-b border-slate-800 pb-3">
              <p className="text-[30px] font-bold leading-none text-cyan-400">01.</p>
              <h3 className="text-[40px] font-semibold text-slate-100">About</h3>
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

        <section id="skills" className="border-t border-slate-900/80 py-24">
          <div className={sectionShell}>
            <div className="flex items-end gap-3 border-b border-slate-800 pb-3">
              <p className="text-[30px] font-bold leading-none text-cyan-400">02.</p>
              <h3 className="text-[40px] font-semibold text-slate-100">Skills</h3>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {skillGroups.map((group) => (
                <article key={group.title} className="rounded-xl border border-slate-800 bg-slate-950/55 p-5">
                  <h4 className="text-[20px] font-semibold tracking-tight text-cyan-400">{group.title}</h4>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
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

        <section id="experience" className="border-t border-slate-900/80 py-24">
          <div className={sectionShell}>
            <div className="flex items-end gap-3 border-b border-slate-800 pb-3">
              <p className="text-[30px] font-bold leading-none text-cyan-400">03.</p>
              <h3 className="text-[40px] font-semibold text-slate-100">Experience</h3>
            </div>
            <article className="relative mt-10 pl-9">
              <span className="absolute left-3 top-0 h-full w-px bg-cyan-400/65" />
              <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/70 bg-slate-900 text-[10px] text-cyan-400">
                <Sparkles size={13} strokeWidth={2} />
              </span>
              <h4 className="text-[32px] font-semibold text-slate-100">Ruby on Rails Intern</h4>
              <p className="mt-1 text-[20px] font-medium text-cyan-400">Zolvit</p>
              <p className="mt-2 text-[14px] text-slate-500">July 2025 – September 2025</p>
              <ul className="mt-7 space-y-4 text-[15px] leading-7 text-slate-400">
                <li>▹ Engineered and scaled a service configuration system supporting 50+ modules weekly, elevating reliability and user experience for over 100 internal users.</li>
                <li>▹ Resolved 5+ BAU issues weekly, reducing backlog by 15% and strengthening feature stability.</li>
                <li>▹ Partnered in Agile sprints using Git, deploying 10+ production fixes that reduced user-reported errors by 15%.</li>
                <li>▹ Streamlined debugging and deployment workflows, reducing issue turnaround time by 20%.</li>
                <li>▹ Recognized by the manager for fast learning, reliability, and consistent delivery.</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="projects" className="border-t border-slate-900/80 py-24">
          <div className={sectionShell}>
            <div className="flex items-end gap-3 border-b border-slate-800 pb-3">
              <p className="text-[30px] font-bold leading-none text-cyan-400">04.</p>
              <h3 className="text-[40px] font-semibold text-slate-100">Projects</h3>
            </div>
            <p className="mt-3 text-sm text-slate-400">
              Click a project card to open its live deployment.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {projects.map((project, index) => {
                const isPinned = index < 3;

                return (
                <article
                  key={project.title}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleProjectCardClick(project)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handleProjectCardClick(project);
                    }
                  }}
                  className={`rounded-xl border p-6 transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_-16px_rgba(34,211,238,0.4)] ${
                    isPinned
                      ? "md:col-span-2 border-cyan-300/80 bg-slate-950/80"
                      : project.highlight
                        ? "border-cyan-400/70 bg-slate-950/65"
                        : "border-slate-800 bg-slate-950/55"
                  } cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4
                        className={`font-semibold ${
                          isPinned
                            ? "text-[34px] text-cyan-300"
                            : project.highlight
                              ? "text-[30px] text-cyan-400"
                              : "text-[30px] text-slate-100"
                        }`}
                      >
                        {project.title}
                      </h4>
                      <p className="mt-1 flex items-center gap-2 text-[13px] text-slate-500">
                        <span>{project.month}</span>
                        {isPinned && (
                          <span className="rounded-full border border-cyan-400/50 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                            Pinned
                          </span>
                        )}
                      </p>
                    </div>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[12px] font-semibold uppercase tracking-wider text-cyan-400 transition-colors hover:text-cyan-300"
                      aria-label={`Open ${project.title} repository`}
                    >
                      Repository <ExternalLink size={14} strokeWidth={2} />
                    </a>
                  </div>
                  <p className="mt-5 text-[15px] leading-7 text-slate-400">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-md border px-2.5 py-1 text-xs font-semibold tracking-wide ${
                          isPinned
                            ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-300"
                            : "border-slate-700 bg-slate-800/60 text-cyan-400"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="education" className="border-t border-slate-900/80 py-24">
          <div className={sectionShell}>
            <div className="flex items-end gap-3 border-b border-slate-800 pb-3">
              <p className="text-[30px] font-bold leading-none text-cyan-400">05.</p>
              <h3 className="text-[40px] font-semibold text-slate-100">Education</h3>
            </div>
            <article className="mt-10 rounded-xl border border-slate-800 bg-slate-950/55 p-7">
              <h4 className="text-[30px] font-semibold text-slate-100">
                B.Tech in CS (Software Product Engineering)
              </h4>
              <p className="mt-2 text-[17px] font-medium text-cyan-400">Kalvium | Apollo Campus, Chittoor</p>
              <p className="mt-2 text-[14px] text-slate-500">2023 – 2027</p>
              <p className="mt-4 text-[15px] text-slate-300">
                Current CGPA: <span className="font-semibold text-slate-100">8.8 / 10</span>
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="border-t border-slate-900/80 py-24">
          <div className={`${sectionShell} text-center`}>
            <p className="text-[24px] font-semibold text-cyan-400">06. What&apos;s Next?</p>
            <h3 className="mt-2 text-[48px] font-semibold text-slate-100">Get In Touch</h3>
            <p className="mx-auto mt-6 max-w-[760px] text-[16px] leading-8 text-slate-400">
              I&apos;m currently looking for internship opportunities. Whether you have a question or
              just want to say hi, feel free to reach out — I&apos;ll do my best to get back to you!
            </p>
            <a
              href="mailto:meghanamanchal@gmail.com"
              className="mt-10 inline-flex items-center gap-2 rounded-lg border border-cyan-400/70 px-7 py-2.5 text-[20px] font-medium text-cyan-400 transition-colors hover:bg-cyan-400/10"
            >
              <Mail size={20} strokeWidth={2} />
              <span>meghanamanchal@gmail.com</span>
            </a>
            <div className="mt-10 flex justify-center gap-6 text-slate-500">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="transition-colors hover:text-cyan-300"
                >
                  <link.icon size={24} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900/80 py-7 text-center text-[14px] tracking-wider text-slate-500">
        Designed &amp; Built by Meghana Manchala
      </footer>

      {popupMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4">
          <div className="w-full max-w-md rounded-xl border border-slate-700 bg-slate-900 p-5 shadow-2xl">
            <h4 className="text-lg font-semibold text-slate-100">Live Deployment Not Found</h4>
            <p className="mt-2 text-sm leading-6 text-slate-300">{popupMessage}</p>
            <button
              type="button"
              onClick={() => setPopupMessage(null)}
              className="mt-4 inline-flex rounded-md border border-cyan-400/70 px-4 py-2 text-sm font-semibold text-cyan-300 transition-colors hover:bg-cyan-400/10"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
