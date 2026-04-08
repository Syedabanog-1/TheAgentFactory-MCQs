import Link from "next/link";
import { getAllChapters } from "@/data";

export default function HomePage() {
  const chapters = getAllChapters();
  const totalMCQs = chapters.reduce(
    (acc, ch) => acc + ch.lessons.reduce((a, l) => a + l.mcqs.length, 0),
    0
  );
  const totalLessons = chapters.reduce((acc, ch) => acc + ch.lessons.length, 0);

  const colorMap: Record<string, { bg: string; border: string; badge: string; btn: string; glow: string }> = {
    blue:   { bg: "bg-blue-950/40",   border: "border-blue-700/40",   badge: "bg-blue-700/30 text-blue-300",   btn: "bg-blue-600 hover:bg-blue-500", glow: "hover:shadow-blue-900/50" },
    purple: { bg: "bg-purple-950/40", border: "border-purple-700/40", badge: "bg-purple-700/30 text-purple-300", btn: "bg-purple-600 hover:bg-purple-500", glow: "hover:shadow-purple-900/50" },
    green:  { bg: "bg-emerald-950/40",border: "border-emerald-700/40",badge: "bg-emerald-700/30 text-emerald-300",btn: "bg-emerald-600 hover:bg-emerald-500", glow: "hover:shadow-emerald-900/50" },
    orange: { bg: "bg-orange-950/40", border: "border-orange-700/40", badge: "bg-orange-700/30 text-orange-300", btn: "bg-orange-600 hover:bg-orange-500", glow: "hover:shadow-orange-900/50" },
    red:    { bg: "bg-rose-950/40",   border: "border-rose-700/40",   badge: "bg-rose-700/30 text-rose-300",   btn: "bg-rose-600 hover:bg-rose-500", glow: "hover:shadow-rose-900/50" },
    teal:   { bg: "bg-teal-950/40",   border: "border-teal-700/40",   badge: "bg-teal-700/30 text-teal-300",   btn: "bg-teal-600 hover:bg-teal-500", glow: "hover:shadow-teal-900/50" },
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/25 rounded-full px-4 py-1.5 text-sm text-indigo-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse inline-block" />
            Panaversity · General Agents Foundations · Part 1
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-5 text-white tracking-tight">
            AgentFactory{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
              MCQ Prep
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-6 leading-relaxed">
            Ace your exams with{" "}
            <span className="text-white font-semibold">{totalMCQs.toLocaleString()}+</span> questions
            across{" "}
            <span className="text-white font-semibold">{chapters.length} chapters</span> and{" "}
            <span className="text-white font-semibold">{totalLessons} lessons</span>.
          </p>

          {/* Study Material Banner */}
          <div className="flex justify-center mb-10">
            <a
              href="https://agentfactory.panaversity.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 hover:border-indigo-400/50 rounded-2xl px-6 py-4 transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="text-2xl">📚</span>
              <div className="text-left">
                <div className="text-sm font-semibold text-indigo-300 group-hover:text-indigo-200 transition-colors">
                  Study Material — Exam Preparation
                </div>
                <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors mt-0.5">
                  agentfactory.panaversity.org/docs →
                </div>
              </div>
            </a>
          </div>
          <div className="flex justify-center gap-10">
            {[
              { value: chapters.length, label: "Chapters" },
              { value: totalLessons, label: "Lessons" },
              { value: `${totalMCQs.toLocaleString()}+`, label: "MCQs" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-slate-400 text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="max-w-5xl mx-auto px-6 py-14">
        <h2 className="text-xl font-semibold text-slate-300 mb-8">
          Select a Chapter to Begin
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {chapters.map((chapter) => {
            const c = colorMap[chapter.color] ?? colorMap.blue;
            const chMCQs = chapter.lessons.reduce((a, l) => a + l.mcqs.length, 0);
            return (
              <Link
                key={chapter.id}
                href={`/chapter/${chapter.id}`}
                className={`group block rounded-2xl border ${c.bg} ${c.border} p-6 transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl ${c.glow}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.badge} tracking-wide`}>
                    CH {chapter.id}
                  </span>
                  <span className="text-slate-500 text-xs">{chapter.lessons.length} lessons</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {chapter.title}
                </h3>
                <p className="text-sm text-slate-400 mb-5 leading-relaxed line-clamp-2">
                  {chapter.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{chMCQs.toLocaleString()} questions</span>
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-lg text-white ${c.btn} transition-colors`}>
                    Start →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <footer className="border-t border-slate-800/60 py-6 text-center text-slate-600 text-sm">
        Panaversity · AgentFactory MCQ Prep · Chapters 12–17
      </footer>
    </main>
  );
}
