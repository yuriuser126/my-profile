const techStacks = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Main Libraries",
    items: [
      "React Hook Form",
      "Zod",
      "Zustand",
      "Tailwind CSS",
      "TanStack Query",
    ],
  },
  {
    title: "Backend (Experience)",
    items: ["Spring Boot", "MySQL", "MongoDB", "Elasticsearch"],
  },
];

type Project = {
  name: string;
  description: string;
  role: string;
  link: string;
  isPrivate?: boolean;
};

const projects: Project[] = [
  {
    name: "ElasticSearch_pj5",
    description: "기술 키워드 기반 오픈 데이터 검색 & 트렌드 분석 플랫폼. MongoDB ↔ Monstache ↔ Elasticsearch 연동을 통한 형태소 분석 기반 검색 시스템.",
    role: "Fullstack (PM)",
    link: "https://github.com/yuriuser126/ElasticSearch_pj5",
  },
  {
    name: "Carrecall_bigdata",
    description: "Spring Boot, React 기반 리콜 정보 조회 사이트. JSP에서 React SPA로 마이그레이션, 공공데이터 연동 및 통계 분석 기능.",
    role: "Fullstack",
    link: "https://github.com/yuriuser126/Carrecall_bigdata",
  },
  {
    name: "ShoFriend_project3",
    description: "Spring Boot 기반 온라인 상품 판매 플랫폼. SNS와 쇼핑몰의 강점을 결합한 소셜 쇼핑 서비스.",
    role: "Fullstack",
    link: "https://github.com/yuriuser126/ShoFriend_project3",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f2ed] via-[#faf8f5] to-[#f0ebe4] text-zinc-900">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#f7c59f]/70 via-[#ffb380]/50 to-[#f7c59f]/70 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute right-0 top-10 h-64 w-64 rounded-full bg-gradient-to-br from-[#9ccfd8]/60 via-[#7bb5c0]/40 to-[#9ccfd8]/60 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="pointer-events-none absolute bottom-20 left-10 h-48 w-48 rounded-full bg-gradient-to-br from-[#d4a5f5]/40 via-[#c88ef0]/30 to-[#d4a5f5]/40 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-20 sm:px-10 lg:px-16">
          <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                Frontend Engineer
              </p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent">
                yuri
              </h1>
              <p className="text-lg leading-relaxed text-zinc-700 sm:text-xl">
                Frontend-focused, fullstack-capable developer who ships fast and
                keeps products clean, scalable, and delightful. ✨
              </p>
              <p className="max-w-xl text-sm leading-7 text-zinc-500">
                I design UI systems, build reliable data flows, and collaborate
                closely with backend teams to deliver end-to-end experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  className="group rounded-full bg-gradient-to-r from-zinc-900 to-zinc-700 px-5 py-2 text-sm font-medium text-white transition-all hover:from-zinc-800 hover:to-zinc-600 hover:shadow-lg hover:scale-105"
                  href="https://github.com/yuriuser126"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
                <a
                  className="rounded-full border border-zinc-300 bg-white/80 px-5 py-2 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 hover:bg-white"
                  href="mailto:syuri5458@naver.com"
                >
                  Email
                </a>
              </div>
            </div>
            <div className="group rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_20px_80px_-60px_rgba(0,0,0,0.6)] backdrop-blur transition-all hover:shadow-[0_25px_100px_-60px_rgba(0,0,0,0.8)] hover:bg-white/80">
              <div className="flex items-center justify-between text-sm text-zinc-500">
                <span>Currently building</span>
                <span className="rounded-full bg-zinc-900 px-2 py-1 text-xs font-semibold text-white">
                  Available
                </span>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-zinc-100 bg-gradient-to-br from-white to-zinc-50/50 p-4 transition-all hover:border-zinc-200 hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                    Focus
                  </p>
                  <p className="mt-2 text-base font-medium text-zinc-800">
                    Design systems, performance tuning, feature delivery
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-100 bg-gradient-to-br from-white to-zinc-50/50 p-4 transition-all hover:border-zinc-200 hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                    Stack Highlights
                  </p>
                  <p className="mt-2 text-base font-medium text-zinc-800">
                    React, Next.js, TypeScript, Tailwind CSS
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-10">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Tech Stack
                </p>
                <h2 className="mt-3 text-2xl font-semibold">
                  Modern, practical, and product-ready.
                </h2>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {techStacks.map((stack) => (
                <div
                  key={stack.title}
                  className="group rounded-2xl border border-white/60 bg-white/70 p-6 backdrop-blur transition-all hover:border-white/80 hover:bg-white/80 hover:shadow-lg hover:scale-[1.02]"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    {stack.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {stack.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-zinc-200 bg-gradient-to-r from-white to-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 transition-all hover:border-zinc-300 hover:shadow-sm hover:scale-105"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                Projects
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                Selected work and product contributions.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.name}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-white/60 bg-white/70 p-6 backdrop-blur transition-all hover:border-white/80 hover:bg-white/80 hover:shadow-xl hover:scale-[1.02]"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold">{project.name}</h3>
                      {project.isPrivate && (
                        <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white">
                          Private / NDA
                        </span>
                      )}
                    </div>
                    {!project.isPrivate && (
                      <p className="text-sm leading-relaxed text-zinc-600">
                        {project.description}
                      </p>
                    )}
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                      Role
                    </p>
                    <p className="text-sm font-medium text-zinc-800">
                      {project.role}
                    </p>
                  </div>
                  {!project.isPrivate && (
                    <a
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-900 transition-all hover:text-zinc-600 hover:gap-3"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/60 bg-gradient-to-br from-white/70 via-white/60 to-white/70 p-8 backdrop-blur transition-all hover:shadow-xl hover:border-white/80">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                  GitHub
                </p>
                <h2 className="mt-3 text-2xl font-semibold">
                  More projects are pinned on my GitHub profile.
                </h2>
              </div>
              <a
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-zinc-900 to-zinc-700 px-6 py-3 text-sm font-medium text-white transition-all hover:from-zinc-800 hover:to-zinc-600 hover:shadow-lg hover:scale-105"
                href="https://github.com/yuriuser126"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit GitHub
              </a>
            </div>
          </section>

          <section className="space-y-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                Contact
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                Let&apos;s build something useful.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-medium text-zinc-700">
              <a
                className="rounded-full border border-zinc-200 bg-white px-5 py-2 transition hover:border-zinc-400 hover:bg-zinc-50"
                href="https://github.com/yuriuser126"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/yuriuser126
              </a>
              <a
                className="rounded-full border border-zinc-200 bg-white px-5 py-2 transition hover:border-zinc-400 hover:bg-zinc-50"
                href="mailto:syuri5458@naver.com"
              >
                syuri5458@naver.com
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
