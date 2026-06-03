/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import {
  FiArrowUpRight,
  FiAward,
  FiBriefcase,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiZap,
} from "react-icons/fi";

const projects = [
  {
    title: "FlowZen",
    type: "Full-stack Kanban App",
    href: "https://flowzen-azure.vercel.app",
    description:
      "A productivity board for planning work, moving tasks, and keeping project flow visible.",
    tags: ["React", "Full Stack", "Workflow"],
  },
  {
    title: "Campus Connect",
    type: "Full-stack Platform",
    href: "https://campus-connect-five-sage.vercel.app/",
    description:
      "A college-focused connection platform built around useful student interactions.",
    tags: ["React", "Node", "Community"],
  },
  {
    title: "QR App",
    type: "Full-stack Utility",
    href: "https://app-qr-code.vercel.app/",
    description:
      "A practical QR generation experience with a simple, direct interface.",
    tags: ["JavaScript", "API", "Utility"],
  },
  {
    title: "Resume Builder",
    type: "FullStack Tool",
    href: "https://resume-creater.vercel.app/",
    description:
      "A beginner-friendly resume creator focused on quick editing and clear output.",
    tags: ["React", "Forms", "Builder"],
  },
  {
    title: "Weather App",
    type: "FullStack Utility",
    href: "https://mui-site.vercel.app/",
    description:
      "A straightforward weather app that delivers current conditions with a clean design, with data from the OpenWeatherMap API.",
    tags: ["React", "API", "Utility"],
  },
  {
    title: "Todo App",
    type: "FullStack App",
    href: "https://class-based-todo.netlify.app",
    description: "A simple todo app built with a class-based React approach.",
    tags: ["React", "JavaScript", "FullStack", "Material UI"],
  },
];

const skills = [
  "Power-BI",
  "Microsoft Office suites",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Material UI",
  "Node.js",
  "Express",
  "MongoDB",
  "TypeScript",
  "Electrical Systems",
  "EV Platform Training",
  "Substation Operations",
  "Arduino Basics",
];

const experience = [
  {
    role: "Contractual Trainee Engineer",
    org: "Uttarakhand Power Corporation Limited",
    time: "2025 - Present",
    points: [
      "Supported electrical system operations and asset maintenance across distribution and substation infrastructure.",
      "Coordinated with field teams to inspect transformers, switchgear, and protective relays for safer power delivery.",
      "Assisted in compiling technical reports and improving workflow documentation for ongoing site projects.",
    ],
  },
  {
    role: "Diploma Apprentice Trainee",
    org: "Tata Motors, Pantnagar",
    time: "2024 - 2025",
    points: [
      "Worked as a technical trainer for EV platform infrastructure, ECU maintenance, harness connections, sensors, and system explanations.",
      "Trained new and existing employees on mechatronics, electrical systems, hydraulic and pneumatic tools, and Arduino projects.",
      "Built an absence tracker and action-taker workflow to support attendance-based employee tracking.",
    ],
  },
  {
    role: "Summer Trainee",
    org: "33/11KV Electrical Distribution Substation, Sukhatal",
    time: "2023",
    points: [
      "Completed 28 days of practical exposure to substation operations and electrical distribution workflows.",
    ],
  },
];

const education = [
  "Electrical Engineering Diploma, Govt. Polytechnic College - 79%",
  "Frontend Development, Code Yogi Online",
  "Intermediate PCM, Bishop Shaw School",
  "High School, Sanwal School",
];

const certificates = [
  "Code Yogi Frontend Development Certificate",
  "Electrical Apprentice Certificate",
  "NCC C Certificate",
];

const internship = [];

function ExternalLink({ href, children, className = "" }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

function App() {
  useEffect(() => {
    const created = [];
    const siteUrl = window?.location?.origin || "";
    const title =
      "Abhijeet Singh Rana — Electrical Engineer & FullStack Developer";
    const description =
      "Diploma holder in Electrical Engineering with practical EV platform training and NodeJS Fullstack experience. Open to electrical, IT and FullStack roles.";

    document.title = title;

    const createMeta = (attrName, attrValue, content) => {
      const m = document.createElement("meta");
      m.setAttribute(attrName, attrValue);
      m.content = content;
      m.dataset.generatedBy = "seo-script";
      document.head.appendChild(m);
      created.push(m);
      return m;
    };

    // Basic meta
    createMeta("name", "description", description);
    createMeta("name", "robots", "index,follow");
    createMeta(
      "name",
      "keywords",
      "Electrical Engineer, FullStack Developer, React, Tailwind, NodeJS, NextJS, Typescript, MongoDB EV, Substation",
    );

    // Open Graph
    createMeta("property", "og:title", title);
    createMeta("property", "og:description", description);
    createMeta("property", "og:type", "website");
    createMeta("property", "og:url", siteUrl + window.location.pathname);
    createMeta("property", "og:image", siteUrl + "/imgs/profile_2.png");

    // Twitter card
    createMeta("name", "twitter:card", "summary_large_image");
    createMeta("name", "twitter:title", title);
    createMeta("name", "twitter:description", description);

    // canonical link
    const link = document.createElement("link");
    link.rel = "canonical";
    link.href = siteUrl + window.location.pathname;
    link.dataset.generatedBy = "seo-script";
    document.head.appendChild(link);
    created.push(link);

    // JSON-LD structured data (Person + simple workExperience)
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Abhijeet Singh Rana",
      jobTitle: "Electrical Engineer & FullStack Developer",
      url: siteUrl,
      sameAs: [
        "https://linkedin.com/in/abhijeet-singh-rana-178a4623a",
        "https://github.com/abhi-1288",
      ],
      worksFor: {
        "@type": "Organization",
        name:
          internship && internship.length > 0
            ? internship[0].split(" at ")[1] ||
              "Uttarakhand Power Corporation Limited"
            : "Independent",
      },
      description,
      knowsAbout: skills,
      alumniOf: "Govt. Polytechnic College",
      workExperience: experience.map((e) => ({
        "@type": "Role",
        roleName: e.role,
        startDate: e.time,
        employer: { "@type": "Organization", name: e.org },
      })),
    };

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify(jsonLd);
    ld.dataset.generatedBy = "seo-script";
    document.head.appendChild(ld);
    created.push(ld);

    return () => {
      created.forEach((el) => el.remove());
    };
  }, []);
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#17211f]">
      <section className="relative overflow-hidden bg-[#17211f] text-white">
        <div className="absolute inset-x-0 top-0 h-1 bg-[#e04d2f]" />
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <a href="#top" className="font-display text-xl tracking-wide">
            Abhijeet Singh Rana
          </a>
          <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a className="transition hover:text-white" href="#work">
              Work
            </a>
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
          <a
            href="/imgs/abhijeet-profile.pdf"
            download
            className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-[#17211f] transition hover:bg-[#f2c94c]"
          >
            <FiDownload aria-hidden="true" />
            Resume
          </a>
        </nav>

        <div
          id="top"
          className="mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-8 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-20 md:pt-14"
        >
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#54d17a]" />
              Electrical Engineer + FullStack Developer
            </div>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.96] md:text-7xl">
              I build useful digital tools with an engineer&apos;s eye for
              systems.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
              Diploma holder in Electrical Engineering with hands-on Tata Motors
              EV platform training, mechatronics exposure, and React development
              experience. I like turning operational problems into clean,
              practical web products.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#e04d2f] px-6 font-semibold text-white transition hover:bg-[#ff6846]"
              >
                View projects <FiArrowUpRight aria-hidden="true" />
              </a>
              <ExternalLink
                href="mailto:abhijeet.singh.rana@outlook.com"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Contact me <FiMail aria-hidden="true" />
              </ExternalLink>
            </div>
          </div>

          <div className="relative flex flex-col items-center md:block min-h-[580px] md:min-h-[500px]">
            {/* Animated Background Shape */}
            <div
              className="
      absolute bottom-0 right-0
      h-[360px] w-[320px]
      md:h-[430px] md:w-[480px]
      rounded-t-[140px]
      border border-white/10
      overflow-hidden
      bg-[#182320]
      shadow-[0_20px_60px_rgba(0,0,0,0.35)]
    "
            >
              {/* Orange Glow */}
              <div
                className="
        absolute left-10 top-16
        h-40 w-40
        rounded-full
        bg-[#e04d2f]/30
        blur-3xl
        animate-floatSlow
      "
              />

              {/* Green Glow */}
              <div
                className="
        absolute bottom-10 right-10
        h-44 w-44
        rounded-full
        bg-[#54d17a]/20
        blur-3xl
        animate-floatSlowReverse
      "
              />

              {/* Grid Overlay */}
              <div
                className="
        absolute inset-0
        opacity-[0.04]
        bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
        bg-[size:32px_32px]
      "
              />
            </div>

            {/* Floating Card */}
            <div
              className="
    relative z-20
    w-full max-w-[320px]
    mb-6

    rounded-[28px]
    border border-[#17211f]/10
    bg-white
    px-6 py-5
    text-[#17211f]
    shadow-2xl

    md:absolute
    md:left-2
    md:top-8
    md:mb-0
  "
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e04d2f]">
                Currently thinking
              </p>

              <h3 className="mt-3 text-2xl font-bold leading-tight">
                Open to Electrical, IT, and FullStack roles.
              </h3>

              <span className="absolute -bottom-5 right-16 h-6 w-6 rounded-full bg-white shadow-lg" />
              <span className="absolute -bottom-10 right-8 h-3.5 w-3.5 rounded-full bg-white shadow-md" />
            </div>

            {/* Profile Image */}
            <img
              src="/imgs/profile_2.png"
              alt="Abhijeet Singh Rana"
              loading="lazy"
              className="
      absolute bottom-0 right-2 z-10
      h-[360px]
      w-auto max-w-full
      object-contain
      drop-shadow-[0_30px_50px_rgba(0,0,0,0.45)]
      md:right-8 md:h-[430px]
    "
            />
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-[#17211f]/10 bg-white">
        <marquee direction="left" scrollAmount="5" className="py-2">
          <div className="flex items-center">
            {[
              ["1 Year", "Tata Motors apprenticeship"],
              ["79%", "Electrical engineering diploma"],
              ["6+", "Published web projects"],
              ["NCC C", "Leadership certificate"],
            ].map(([value, label], index) => (
              <div key={index} className="mx-10 flex min-w-[220px] flex-col">
                <p className="font-display text-4xl text-[#e04d2f]">{value}</p>

                <p className="mt-1 text-sm font-medium text-[#17211f]/60">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </marquee>
      </section>

      <section
        id="work"
        className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"
      >
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#e04d2f]">
              Experience
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Industrial training meets product thinking.
            </h2>
          </div>
          <div className="space-y-6">
            {experience.map((item) => (
              <article
                key={item.role}
                className="rounded-lg border border-[#17211f]/12 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#17211f]/50">
                      {item.time}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold">{item.role}</h3>
                    <p className="mt-1 text-[#17211f]/65">{item.org}</p>
                  </div>
                  <FiBriefcase
                    className="text-3xl text-[#e04d2f]"
                    aria-hidden="true"
                  />
                </div>
                <ul className="mt-5 space-y-3 text-[#17211f]/72">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#54d17a]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#17211f] px-5 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f2c94c]">
              Skill Set
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Comfortable between code, circuits, and operations.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-white/82"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"
      >
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#e04d2f]">
              Selected Projects
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Apps that show the FullStack side.
            </h2>
          </div>
          <ExternalLink
            href="https://github.com/abhi-1288"
            className="inline-flex h-11 w-fit items-center gap-2 rounded-full border border-[#17211f]/20 px-5 font-semibold transition hover:border-[#17211f] hover:bg-white"
          >
            <FiGithub aria-hidden="true" />
            GitHub
          </ExternalLink>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ExternalLink
              key={project.title}
              href={project.href}
              className="group rounded-lg border border-[#17211f]/12 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#e04d2f]/50 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-5">
                <p className="font-display text-6xl text-[#17211f]/10">
                  0{index + 1}
                </p>
                <FiArrowUpRight
                  className="text-2xl text-[#e04d2f] transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 text-2xl font-bold">{project.title}</h3>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-[#e04d2f]">
                {project.type}
              </p>
              <p className="mt-4 leading-7 text-[#17211f]/68">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f5f1e8] px-3 py-1 text-xs font-bold text-[#17211f]/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ExternalLink>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-8 md:py-24">
        <div
          className={`mx-auto grid max-w-7xl gap-10 ${internship && internship.length > 0 ? "md:grid-cols-3" : "md:grid-cols-2"}`}
        >
          <div className="rounded-lg border border-[#17211f]/12 p-6">
            <FiAward className="text-3xl text-[#e04d2f]" aria-hidden="true" />
            <h2 className="mt-4 font-display text-4xl">Education</h2>
            <ul className="mt-6 list-disc list-inside space-y-3 text-[#17211f]/70 marker:text-blue-500">
              {education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-[#17211f]/12 p-6">
            <FiZap className="text-3xl text-[#e04d2f]" aria-hidden="true" />
            <h2 className="mt-4 font-display text-4xl">Certificates</h2>
            <ul className="mt-6 list-disc list-inside space-y-3 text-[#17211f]/70 marker:text-blue-500">
              {certificates.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          {internship && internship.length > 0 && (
            <div className="rounded-lg border border-[#17211f]/12 p-6">
              <FiBriefcase
                className="text-3xl text-[#e04d2f]"
                aria-hidden="true"
              />
              <h2 className="mt-4 font-display text-4xl">Internship</h2>
              <ul className="mt-6 list-disc list-inside space-y-3 text-[#17211f]/70 marker:text-blue-500">
                {internship.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <footer
        id="contact"
        className="bg-[#17211f] px-5 py-12 text-white md:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">
              Let&apos;s build something useful.
            </h2>
            <p className="mt-4 flex items-center gap-2 text-white/65">
              <FiMapPin aria-hidden="true" /> Nainital, Uttarakhand
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ExternalLink
              href="mailto:abhijeet.singh.rana@outlook.com"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-4 font-semibold text-[#17211f] transition hover:bg-[#f2c94c]"
            >
              <FiMail aria-hidden="true" /> Mail
            </ExternalLink>
            <ExternalLink
              href="tel:+919411387408"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 px-4 font-semibold transition hover:bg-white/10"
            >
              <FiPhone aria-hidden="true" /> Call
            </ExternalLink>
            <ExternalLink
              href="https://linkedin.com/in/abhijeet-singh-rana-178a4623a"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 px-4 font-semibold transition hover:bg-white/10"
            >
              <FiLinkedin aria-hidden="true" /> LinkedIn
            </ExternalLink>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
