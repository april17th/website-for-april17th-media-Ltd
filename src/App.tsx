import { useState } from "react";

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    {diagonal ? (
      <>
        <path d="M7 17 17 7" />
        <path d="M8 7h9v9" />
      </>
    ) : (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    )}
  </svg>
);

const services = [
  {
    number: "01",
    title: "Brand strategy",
    body: "Positioning, audience clarity, and a distinctive point of view built to last.",
  },
  {
    number: "02",
    title: "Creative direction",
    body: "Campaign concepts and visual systems that turn attention into affinity.",
  },
  {
    number: "03",
    title: "Digital experiences",
    body: "High-converting websites and content journeys designed around real behavior.",
  },
  {
    number: "04",
    title: "Growth marketing",
    body: "Channel strategy, paid media, and experimentation that compound over time.",
  },
];

const projects = [
  {
    name: "North / 87",
    type: "Brand platform · Campaign",
    result: "+184% brand search",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1400",
  },
  {
    name: "Common Ground",
    type: "Digital experience · Growth",
    result: "3.2× conversion",
    image:
      "https://images.unsplash.com/photo-1654780345432-79b8bf62def8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1400",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f3ee] text-[#11130f]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f4f3ee]/90 backdrop-blur-md">
        <div className="page-grid flex h-[76px] items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Aster home">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#c8ff00]">
              <span className="h-3 w-3 rounded-full bg-[#11130f]" />
            </span>
            <span className="text-[20px] font-semibold tracking-[-0.05em]">ASTER®</span>
          </a>

          <nav className="hidden items-center gap-8 text-[13px] font-medium md:flex">
            <a className="nav-link" href="#work">
              Work
            </a>
            <a className="nav-link" href="#services">
              Services
            </a>
            <a className="nav-link" href="#about">
              Studio
            </a>
          </nav>

          <a className="button-dark hidden md:flex" href="#contact">
            Start a project <Arrow diagonal />
          </a>

          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-black/20 md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span className="flex w-4 flex-col gap-1.5">
              <span className="h-px w-full bg-black" />
              <span className="h-px w-full bg-black" />
            </span>
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-black/10 bg-[#f4f3ee] px-5 py-7 md:hidden">
            <div className="flex flex-col gap-5 text-2xl font-medium">
              <a href="#work" onClick={closeMenu}>
                Work
              </a>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
              <a href="#about" onClick={closeMenu}>
                Studio
              </a>
              <a href="#contact" onClick={closeMenu} className="mt-2 text-[#5c7900]">
                Start a project ↗
              </a>
            </div>
          </nav>
        )}
      </header>

      <section
        id="top"
        className="relative min-h-[880px] border-b border-black/10 pt-[76px] lg:min-h-screen"
      >
        <div className="hero-lines pointer-events-none absolute inset-0" />
        <div className="page-grid relative z-10 flex min-h-[804px] flex-col justify-between py-10 lg:min-h-[calc(100vh-76px)] lg:py-14">
          <div className="flex items-center justify-between">
            <p className="eyebrow">
              <span className="signal-dot" /> Independent creative agency
            </p>
            <p className="hidden text-right text-[11px] font-semibold uppercase leading-4 tracking-[0.14em] sm:block">
              NYC · London
              <br />
              Working worldwide
            </p>
          </div>

          <div className="relative py-16 text-center lg:py-8">
            <div className="mx-auto max-w-[1120px]">
              <h1 className="hero-title">
                We make brands
                <span className="hero-italic">impossible to ignore.</span>
              </h1>
              <p className="mx-auto mt-7 max-w-[510px] text-[16px] leading-7 text-black/60 sm:text-[18px]">
                Strategy, identity, campaigns, and digital experiences for ambitious brands ready to
                move culture forward.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a className="button-dark" href="#work">
                  Explore our work <Arrow />
                </a>
                <a className="button-light" href="#services">
                  What we do
                </a>
              </div>
            </div>

            <div className="float-card left-card hidden xl:block">
              <span className="mb-8 block text-[10px] font-semibold uppercase tracking-[0.16em]">
                Our belief
              </span>
              <p className="font-display text-2xl leading-[1.05]">
                Safe ideas rarely make history.
              </p>
            </div>

            <div className="float-card right-card hidden xl:block">
              <div className="mb-7 flex -space-x-2">
                {projects.map((project) => (
                  <img
                    key={project.name}
                    src={project.image}
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-white object-cover grayscale"
                  />
                ))}
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-[#c8ff00] text-xs font-bold">
                  24
                </span>
              </div>
              <p className="font-display text-2xl leading-[1.05]">Partners, not passengers.</p>
            </div>
          </div>

          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/45">
                Trusted by teams at
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-bold tracking-[-0.03em] text-black/45 sm:text-base">
                <span>ARCHIVE</span>
                <span>VANTA</span>
                <span>FIELDWORK</span>
                <span>FOLD</span>
              </div>
            </div>
            <a
              href="#services"
              className="hidden h-20 w-20 shrink-0 place-items-center rounded-full border border-black/20 transition hover:rotate-45 hover:bg-[#c8ff00] md:grid"
              aria-label="Scroll to services"
            >
              <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>

      <div className="marquee border-b border-black/10 bg-[#c8ff00] py-4">
        <div className="marquee-track">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex shrink-0 items-center gap-8 pr-8">
              <span>Strategy</span>
              <i>×</i>
              <span>Brand</span>
              <i>×</i>
              <span>Campaigns</span>
              <i>×</i>
              <span>Digital</span>
              <i>×</i>
              <span>Growth</span>
              <i>×</i>
            </div>
          ))}
        </div>
      </div>

      <section id="services" className="bg-[#151713] text-[#f4f3ee]">
        <div className="page-grid py-24 lg:py-36">
          <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="eyebrow text-[#c8ff00]">
                <span className="signal-dot" /> Built for momentum
              </p>
              <h2 className="section-title mt-5 max-w-[700px]">Big thinking. No handoffs.</h2>
            </div>
            <p className="max-w-[520px] text-base leading-7 text-white/55 lg:justify-self-end">
              We connect the whole brand experience—from the first strategic question to the final
              conversion—under one senior, hands-on team.
            </p>
          </div>

          <div className="border-t border-white/20">
            {services.map((service) => (
              <article
                key={service.number}
                className="service-row group grid gap-5 border-b border-white/20 py-7 sm:grid-cols-[70px_1fr_auto] sm:items-center lg:py-9"
              >
                <span className="text-xs text-white/35">{service.number}</span>
                <div className="grid gap-3 lg:grid-cols-[1fr_1fr] lg:items-center">
                  <h3 className="text-[28px] font-medium tracking-[-0.05em] sm:text-[38px]">
                    {service.title}
                  </h3>
                  <p className="max-w-[440px] text-sm leading-6 text-white/45">{service.body}</p>
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/25 transition group-hover:rotate-45 group-hover:border-[#c8ff00] group-hover:bg-[#c8ff00] group-hover:text-black">
                  <Arrow diagonal />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="page-grid py-24 lg:py-36">
        <div className="mb-14 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">
              <span className="signal-dot" /> Selected work
            </p>
            <h2 className="section-title mt-5">Made to move.</h2>
          </div>
          <p className="max-w-[360px] text-sm leading-6 text-black/55">
            A selection of partnerships where clear strategy and brave creativity produced
            measurable change.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.name} className={index === 1 ? "lg:mt-24" : ""}>
              <a href="#contact" className="project-image group block overflow-hidden bg-[#deddd6]">
                <img
                  src={project.image}
                  alt={`Creative work for ${project.name}`}
                  className="h-[430px] w-full object-cover grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0 sm:h-[600px]"
                />
                <span className="absolute right-6 top-6 grid h-14 w-14 translate-y-2 place-items-center rounded-full bg-[#c8ff00] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Arrow diagonal />
                </span>
              </a>
              <div className="mt-5 flex items-start justify-between gap-5 border-t border-black/20 pt-4">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">{project.name}</h3>
                  <p className="mt-1 text-xs text-black/50">{project.type}</p>
                </div>
                <p className="rounded-full border border-black/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em]">
                  {project.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-black/10 bg-white">
        <div className="page-grid grid lg:grid-cols-[1fr_1.05fr]">
          <div className="flex min-h-[520px] flex-col justify-between border-black/10 py-20 lg:border-r lg:pr-16 lg:py-28">
            <p className="eyebrow">
              <span className="signal-dot" /> Small by design
            </p>
            <blockquote className="mt-20 font-display text-[44px] leading-[0.98] tracking-[-0.045em] sm:text-[64px]">
              "They found the sharpest version of who we already were."
            </blockquote>
            <div className="mt-12">
              <p className="text-sm font-semibold">Maya Chen</p>
              <p className="mt-1 text-xs text-black/45">Founder, Common Ground</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-rows-2">
            {[
              ["12", "years independent"],
              ["47", "industry awards"],
              ["28", "markets launched"],
              ["94%", "client referral rate"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="flex min-h-[210px] flex-col justify-between border-l border-t border-black/10 p-6 sm:p-10 lg:first:border-t-0 lg:nth-[2]:border-t-0"
              >
                <span className="font-display text-5xl tracking-[-0.05em] sm:text-7xl">
                  {value}
                </span>
                <span className="max-w-[120px] text-xs uppercase leading-5 tracking-[0.12em] text-black/50">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#c8ff00]">
        <div className="page-grid py-24 lg:py-36">
          <p className="eyebrow">
            <span className="h-2 w-2 rounded-full bg-black" /> Have a challenge?
          </p>
          <div className="mt-8 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <h2 className="max-w-[900px] font-display text-[62px] leading-[0.84] tracking-[-0.06em] sm:text-[96px] lg:text-[130px]">
              Let's make it matter.
            </h2>
            <a
              href="mailto:hello@aster.studio"
              className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-[#11130f] text-white transition hover:rotate-45 sm:h-32 sm:w-32"
              aria-label="Email Aster studio"
            >
              <Arrow diagonal />
            </a>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-8 border-t border-black/25 pt-6 text-sm sm:flex-row sm:items-end">
            <a
              href="mailto:hello@aster.studio"
              className="text-lg font-semibold underline underline-offset-4"
            >
              hello@aster.studio
            </a>
            <div className="flex gap-6 text-xs font-semibold uppercase tracking-[0.12em]">
              <a href="#top">Instagram</a>
              <a href="#top">LinkedIn</a>
              <a href="#top">© 2025 Aster</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
