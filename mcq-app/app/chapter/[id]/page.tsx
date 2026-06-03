import Link from "next/link";
import { notFound } from "next/navigation";
import { getChapterById } from "@/data";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ChapterPage({ params }: Props) {
  const { id } = await params;
  const chapter = getChapterById(Number(id));
  if (!chapter) notFound();

  const colorMap: Record<string, {
    bg: string; border: string; badge: string; btn: string;
    headerBg: string; lessonBg: string; lessonBorder: string; progressBg: string;
  }> = {
    blue:   { bg:"bg-blue-950/40", border:"border-blue-700/40", badge:"bg-blue-700/30 text-blue-300", btn:"bg-blue-600 hover:bg-blue-500", headerBg:"from-blue-950 to-slate-950", lessonBg:"bg-blue-950/20", lessonBorder:"border-blue-800/40", progressBg:"bg-blue-600" },
    purple: { bg:"bg-purple-950/40", border:"border-purple-700/40", badge:"bg-purple-700/30 text-purple-300", btn:"bg-purple-600 hover:bg-purple-500", headerBg:"from-purple-950 to-slate-950", lessonBg:"bg-purple-950/20", lessonBorder:"border-purple-800/40", progressBg:"bg-purple-600" },
    green:  { bg:"bg-emerald-950/40", border:"border-emerald-700/40", badge:"bg-emerald-700/30 text-emerald-300", btn:"bg-emerald-600 hover:bg-emerald-500", headerBg:"from-emerald-950 to-slate-950", lessonBg:"bg-emerald-950/20", lessonBorder:"border-emerald-800/40", progressBg:"bg-emerald-600" },
    orange: { bg:"bg-orange-950/40", border:"border-orange-700/40", badge:"bg-orange-700/30 text-orange-300", btn:"bg-orange-600 hover:bg-orange-500", headerBg:"from-orange-950 to-slate-950", lessonBg:"bg-orange-950/20", lessonBorder:"border-orange-800/40", progressBg:"bg-orange-600" },
    red:    { bg:"bg-rose-950/40", border:"border-rose-700/40", badge:"bg-rose-700/30 text-rose-300", btn:"bg-rose-600 hover:bg-rose-500", headerBg:"from-rose-950 to-slate-950", lessonBg:"bg-rose-950/20", lessonBorder:"border-rose-800/40", progressBg:"bg-rose-600" },
    teal:   { bg:"bg-teal-950/40", border:"border-teal-700/40", badge:"bg-teal-700/30 text-teal-300", btn:"bg-teal-600 hover:bg-teal-500", headerBg:"from-teal-950 to-slate-950", lessonBg:"bg-teal-950/20", lessonBorder:"border-teal-800/40", progressBg:"bg-teal-600" },
  };

  const c = colorMap[chapter.color] ?? colorMap.blue;
  const totalMCQs = chapter.lessons.reduce((a, l) => a + l.mcqs.length, 0);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className={`relative overflow-hidden border-b border-slate-800/60 bg-linear-to-br ${c.headerBg}`}>
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-14">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 text-[10px] md:text-sm mb-6 transition-colors group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Chapters
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-[9px] md:text-xs font-bold px-2.5 py-1 rounded-full ${c.badge} uppercase tracking-widest`}>
              Chapter {chapter.id}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">{chapter.title}</h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-400 mb-8 leading-relaxed max-w-2xl">{chapter.description}</p>
          <div className="flex gap-4 md:gap-8 text-[10px] md:text-sm">
            <span className="text-slate-400 flex items-center gap-1.5"><span className="font-bold text-white">{chapter.lessons.length}</span> Lessons</span>
            <span className="text-slate-400 flex items-center gap-1.5"><span className="font-bold text-white">{totalMCQs.toLocaleString()}</span> Questions</span>
          </div>
        </div>
      </div>

      {/* Lessons List */}
      <div className="max-w-4xl mx-auto px-4 py-10 md:py-12">
        <h2 className="text-sm md:text-lg font-semibold text-slate-300 mb-6 uppercase tracking-wider">Choose a Lesson</h2>
        <div className="space-y-3">
          {chapter.lessons.map((lesson, idx) => (
            <Link
              key={lesson.id}
              href={`/quiz/${chapter.id}/${lesson.id}`}
              className={`group flex items-center justify-between rounded-xl border ${c.lessonBg} ${c.lessonBorder} px-4 py-4 md:px-6 md:py-5 transition-all duration-200 hover:bg-white/5 hover:scale-[1.01] hover:shadow-xl`}
            >
              <div className="flex items-center gap-3 md:gap-5 min-w-0">
                <span className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-xs md:text-base font-bold ${c.badge} shrink-0`}>
                  {idx + 1}
                </span>
                <div className="min-w-0">
                  <div className="text-sm md:text-lg font-medium text-slate-100 group-hover:text-white transition-colors truncate pr-2">
                    {lesson.title}
                  </div>
                  <div className="text-[9px] md:text-xs text-slate-500 mt-1 uppercase tracking-widest font-medium">{lesson.mcqs.length} questions</div>
                </div>
              </div>
              <span className={`text-[9px] md:text-xs font-bold px-3 py-2 rounded-lg text-white ${c.btn} transition-all md:opacity-0 md:group-hover:opacity-100 shrink-0 uppercase tracking-wider`}>
                Practice <span className="ml-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
