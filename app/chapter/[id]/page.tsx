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
      <div className={`relative overflow-hidden border-b border-slate-800/60 bg-gradient-to-br ${c.headerBg}`}>
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 text-sm mb-6 transition-colors">
            ← Back to Chapters
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.badge}`}>
              Chapter {chapter.id}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">{chapter.title}</h1>
          <p className="text-slate-400 mb-6">{chapter.description}</p>
          <div className="flex gap-6 text-sm">
            <span className="text-slate-300"><span className="font-semibold text-white">{chapter.lessons.length}</span> Lessons</span>
            <span className="text-slate-300"><span className="font-semibold text-white">{totalMCQs.toLocaleString()}</span> Questions</span>
          </div>
        </div>
      </div>

      {/* Lessons List */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-lg font-semibold text-slate-300 mb-6">Choose a Lesson</h2>
        <div className="space-y-3">
          {chapter.lessons.map((lesson, idx) => (
            <Link
              key={lesson.id}
              href={`/quiz/${chapter.id}/${lesson.id}`}
              className={`group flex items-center justify-between rounded-xl border ${c.lessonBg} ${c.lessonBorder} px-5 py-4 transition-all duration-200 hover:scale-[1.005] hover:shadow-lg`}
            >
              <div className="flex items-center gap-4">
                <span className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold ${c.badge}`}>
                  {idx + 1}
                </span>
                <div>
                  <div className="font-medium text-slate-100 group-hover:text-white transition-colors">
                    {lesson.title}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{lesson.mcqs.length} questions</div>
                </div>
              </div>
              <span className={`text-xs font-semibold px-3 py-1.5 rounded-lg text-white ${c.btn} transition-colors opacity-0 group-hover:opacity-100`}>
                Practice →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
