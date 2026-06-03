"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import type { MCQ } from "@/types";

interface Props {
  chapterId: number;
  chapterTitle: string;
  chapterColor: string;
  lessonId: number;
  lessonTitle: string;
  mcqs: MCQ[];
}

type AnswerKey = "A" | "B" | "C" | "D";

const COLOR = {
  blue:   { accent: "text-blue-400",   progress: "bg-blue-600",   badge: "bg-blue-700/30 text-blue-300",   back: "text-blue-400 hover:text-blue-200" },
  purple: { accent: "text-purple-400", progress: "bg-purple-600", badge: "bg-purple-700/30 text-purple-300", back: "text-purple-400 hover:text-purple-200" },
  green:  { accent: "text-emerald-400",progress: "bg-emerald-600",badge: "bg-emerald-700/30 text-emerald-300",back: "text-emerald-400 hover:text-emerald-200" },
  orange: { accent: "text-orange-400", progress: "bg-orange-600", badge: "bg-orange-700/30 text-orange-300", back: "text-orange-400 hover:text-orange-200" },
  red:    { accent: "text-rose-400",   progress: "bg-rose-600",   badge: "bg-rose-700/30 text-rose-300",   back: "text-rose-400 hover:text-rose-200" },
  teal:   { accent: "text-teal-400",   progress: "bg-teal-600",   badge: "bg-teal-700/30 text-teal-300",   back: "text-teal-400 hover:text-teal-200" },
} as const;

function getScoreLabel(correct: number, total: number) {
  const pct = total > 0 ? correct / total : 0;
  if (correct === total && total > 0) return { label: "Champion! 🏆", color: "text-yellow-400", emoji: "🏆" };
  if (pct >= 0.9) return { label: "Excellent! ✨", color: "text-emerald-400", emoji: "✨" };
  if (pct >= 0.8) return { label: "Very Good! 👍", color: "text-blue-400", emoji: "👍" };
  if (pct >= 0.7) return { label: "Successful ✓", color: "text-green-400", emoji: "✓" };
  return { label: "Keep Practicing", color: "text-rose-400", emoji: "📚" };
}

export default function QuizClient({ chapterId, chapterTitle, chapterColor, lessonTitle, mcqs }: Props) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<AnswerKey | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState({ correct: 0, attempted: 0 });
  const [answered, setAnswered] = useState<Record<number, { selected: AnswerKey; correct: boolean }>>({});
  const [timeLeft, setTimeLeft] = useState(120);
  const [showResult, setShowResult] = useState(false);

  const resetQuiz = () => {
    setCurrentIdx(0);
    setSelected(null);
    setRevealed(false);
    setScore({ correct: 0, attempted: 0 });
    setAnswered({});
    setTimeLeft(120);
    setShowResult(false);
  };

  const c = COLOR[chapterColor as keyof typeof COLOR] ?? COLOR.blue;
  const mcq = mcqs[currentIdx];
  const total = mcqs.length;
  const progress = ((currentIdx + 1) / total) * 100;
  const isLastQuestion = currentIdx === total - 1;
  const allQuestionsAttempted = score.attempted === total;
  const showResultButton = isLastQuestion && revealed && allQuestionsAttempted;

  // Reset timer on new question
  useEffect(() => {
    setTimeLeft(120);
  }, [currentIdx]);

  // Countdown (stops when revealed or time's up)
  useEffect(() => {
    if (revealed || timeLeft <= 0) return;
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timeLeft, revealed]);

  // Auto-reveal when timer hits 0
  useEffect(() => {
    if (timeLeft === 0 && !revealed) {
      setRevealed(true);
      const isCorrect = selected !== null && selected === mcq.correct;
      setScore((prev) => ({
        correct: prev.correct + (isCorrect ? 1 : 0),
        attempted: prev.attempted + 1,
      }));
      if (selected !== null) {
        setAnswered((prev) => ({ ...prev, [currentIdx]: { selected, correct: isCorrect } }));
      }
    }
  }, [timeLeft, revealed, selected, mcq.correct, currentIdx]);

  const handleSelect = useCallback((key: AnswerKey) => {
    if (revealed) return;
    setSelected(key);
  }, [revealed]);

  const handleReveal = useCallback(() => {
    if (!selected || revealed) return;
    setRevealed(true);
    const isCorrect = selected === mcq.correct;
    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      attempted: prev.attempted + 1,
    }));
    setAnswered((prev) => ({ ...prev, [currentIdx]: { selected, correct: isCorrect } }));
  }, [selected, revealed, mcq.correct, currentIdx]);

  const navigate = useCallback((idx: number) => {
    setCurrentIdx(idx);
    const prev = answered[idx];
    if (prev) { setSelected(prev.selected); setRevealed(true); }
    else { setSelected(null); setRevealed(false); }
  }, [answered]);

  const goNext = useCallback(() => { if (currentIdx < total - 1) navigate(currentIdx + 1); }, [currentIdx, total, navigate]);
  const goPrev = useCallback(() => { if (currentIdx > 0) navigate(currentIdx - 1); }, [currentIdx, navigate]);

  const getOptionStyle = (key: AnswerKey) => {
    const base = "w-full text-left flex items-start gap-3 px-4 py-3.5 rounded-xl border transition-all duration-200 text-sm";
    if (!revealed) {
      if (selected === key) return `${base} border-indigo-500 bg-indigo-500/15 text-white scale-[1.005]`;
      return `${base} border-slate-700/60 bg-slate-800/40 text-slate-300 hover:border-slate-500 hover:bg-slate-800/70 hover:text-white cursor-pointer`;
    }
    if (key === mcq.correct) return `${base} border-emerald-500 bg-emerald-500/15 text-emerald-100 font-medium`;
    if (key === selected && selected !== mcq.correct) return `${base} border-rose-500 bg-rose-500/15 text-rose-200`;
    return `${base} border-slate-700/40 bg-slate-800/20 text-slate-500`;
  };

  const getOptionIcon = (key: AnswerKey) => {
    if (!revealed) return (
      <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors ${selected === key ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-400"}`}>{key}</span>
    );
    if (key === mcq.correct) return <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 bg-emerald-600 text-white">✓</span>;
    if (key === selected && selected !== mcq.correct) return <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 bg-rose-600 text-white">✗</span>;
    return <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 bg-slate-700/50 text-slate-500">{key}</span>;
  };

  // Score = correct / total (not /attempted), done = attempted / total
  const scoreRatio = total > 0 ? score.correct / total : 0;
  const scorePercent = Math.round(scoreRatio * 100);
  const donePercent = total > 0 ? Math.round(score.attempted / total * 100) : 0;

  // Timer styling
  const timerColor = timeLeft > 60 ? "text-slate-400" : timeLeft > 20 ? "text-yellow-400 font-semibold" : "text-rose-400 font-bold animate-pulse";
  const timerBg = timeLeft <= 20 ? "bg-rose-500/10 border-rose-500/40" : "bg-slate-800/60 border-slate-700/40";

  // ── Result Screen ──────────────────────────────────────────────────────────
  if (showResult) {
    const { label, color } = getScoreLabel(score.correct, total);
    const passed = total > 0 && (score.correct / total) >= 0.7;
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-slate-950">
        <div className="bg-slate-900 border border-slate-700/50 rounded-2xl p-6 md:p-10 max-w-sm w-full text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
          
          <div className="text-5xl md:text-6xl mb-6">{passed ? "🏆" : "📚"}</div>
          <h2 className={`text-xl md:text-3xl font-bold mb-2 ${color}`}>{label}</h2>
          <p className="text-slate-400 text-[10px] md:text-sm mb-8 uppercase tracking-widest font-medium px-4 line-clamp-2">{lessonTitle}</p>
          
          <div className="bg-slate-800/40 rounded-2xl p-6 mb-8 border border-slate-700/30">
            <div className="flex items-end justify-center gap-1 mb-2">
              <span className="text-5xl md:text-7xl font-black text-white leading-none">{score.correct}</span>
              <span className="text-xl md:text-3xl text-slate-500 mb-1.5 md:mb-3 font-bold">/{total}</span>
            </div>
            <p className="text-slate-300 text-xs md:text-sm font-semibold tracking-wide">{scorePercent}% Accuracy</p>
          </div>

          {/* Score bar */}
          <div className="h-2 md:h-2.5 rounded-full bg-slate-800 mb-8 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1000 ease-out ${passed ? "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.4)]" : "bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.4)]"}`}
              style={{ width: `${scorePercent}%` }}
            />
          </div>

          {/* Breakdown dots */}
          <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center mb-10">
            {mcqs.map((_, idx) => {
              const ans = answered[idx];
              return (
                <div
                  key={idx}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${ans?.correct ? "bg-emerald-500" : ans ? "bg-rose-500" : "bg-slate-700"} transition-colors`}
                  title={`Q${idx + 1}: ${ans?.correct ? "Correct" : ans ? "Wrong" : "Unanswered"}`}
                />
              );
            })}
          </div>

          {!passed && (
            <div className="mb-6">
              <p className="text-rose-400 text-[10px] md:text-xs font-bold mb-4 uppercase tracking-wider">
                70% required to pass
              </p>
              <button
                onClick={resetQuiz}
                className="block w-full py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-sm text-white text-center bg-rose-600 hover:bg-rose-500 transition-all shadow-lg shadow-rose-900/30 active:scale-[0.98]"
              >
                RE-ATTEMPT EXAM
              </button>
            </div>
          )}

          <Link
            href={`/chapter/${chapterId}`}
            className={`block w-full py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-sm text-white text-center ${c.progress} hover:opacity-90 transition-all shadow-lg active:scale-[0.98] uppercase tracking-wider`}
          >
            {passed ? "BACK TO CHAPTER" : "QUIT PRACTICE"}
          </Link>
        </div>
      </main>
    );
  }

  // ── Quiz Screen ────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen flex flex-col bg-slate-950">
      {/* Top Bar */}
      <div className="border-b border-slate-800/60 bg-slate-900/80 backdrop-blur-xl sticky top-0 z-20">
        <div className="max-w-3xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between gap-3">
          <Link href={`/chapter/${chapterId}`} className={`text-[10px] md:text-sm font-bold uppercase tracking-widest ${c.back} transition-colors flex items-center gap-1.5 shrink-0 group`}>
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span className="hidden sm:inline">Chapter {chapterId}</span>
            <span className="sm:hidden">Exit</span>
          </Link>
          <div className="flex items-center gap-2 md:gap-4">
            {/* Timer */}
            <div className={`px-2.5 py-1 rounded-lg border font-mono text-[10px] md:text-xs flex items-center gap-1.5 ${timerColor} ${timerBg} transition-colors`}>
              <span className="opacity-60 hidden xs:inline">TIME</span>
              {String(Math.floor(timeLeft / 60)).padStart(1, "0")}:{String(timeLeft % 60).padStart(2, "0")}
            </div>
            <div className={`px-2.5 py-1 rounded-lg font-bold text-[10px] md:text-xs ${c.badge} uppercase tracking-wider`}>
              {currentIdx + 1} <span className="opacity-50">/</span> {total}
            </div>
            <div className="hidden xs:flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-emerald-400 uppercase tracking-wider">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
               {score.correct}
            </div>
          </div>
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-slate-800/50">
          <div 
            className={`h-full ${scorePercent >= 70 ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]" : "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.3)]"} transition-all duration-500 ease-out`} 
            style={{ width: `${donePercent}%` }} 
          />
        </div>
      </div>

      {/* Quiz Body */}
      <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-6 md:py-10">
        <div className="mb-3 text-[9px] md:text-[11px] text-slate-500 font-bold tracking-[0.2em] uppercase line-clamp-1 opacity-80">{lessonTitle}</div>

        {/* Question Card */}
        <div className="bg-slate-900 border border-slate-700/40 rounded-2xl p-5 md:p-8 mb-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500/30" />
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-[9px] font-black px-2 py-1 rounded-md ${c.badge} uppercase`}>Question {mcq.id}</span>
          </div>
          <p className="text-slate-100 text-sm md:text-xl leading-relaxed font-semibold">{mcq.question}</p>
        </div>

        {/* Options */}
        <div className="space-y-2.5 md:space-y-3.5 mb-8">
          {(["A", "B", "C", "D"] as AnswerKey[]).map((key) => (
            <button key={key} onClick={() => handleSelect(key)} disabled={revealed} className={getOptionStyle(key)}>
              {getOptionIcon(key)}
              <span className="pt-0.5 leading-relaxed text-xs md:text-base font-medium">{mcq.options[key]}</span>
            </button>
          ))}
        </div>

        {/* Show Answer Button */}
        {!revealed && (
          <button
            onClick={handleReveal}
            disabled={!selected}
            className={`w-full py-4 rounded-2xl font-bold text-xs md:text-sm uppercase tracking-[0.15em] transition-all duration-300 ${
              selected ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-900/40 active:scale-[0.98]" : "bg-slate-800 text-slate-500 cursor-not-allowed opacity-50"
            }`}
          >
            {selected ? "Reveal Correct Answer" : "Select an option"}
          </button>
        )}

        {/* Explanation */}
        {revealed && (
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-5 md:p-6 mb-6 slide-in backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm ${selected === mcq.correct ? "bg-emerald-600 shadow-emerald-900/40" : "bg-rose-600 shadow-rose-900/40"} text-white flex-shrink-0 shadow-lg`}>
                {selected === mcq.correct ? "✓" : "✗"}
              </div>
              <span className={`text-xs md:text-base font-bold uppercase tracking-wider ${selected === mcq.correct ? "text-emerald-400" : "text-rose-400"}`}>
                {selected === mcq.correct ? "Brilliant! Correct" : `Incorrect · Answer is ${mcq.correct}`}
              </span>
            </div>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed border-t border-slate-700/30 pt-4">{mcq.explanation}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between gap-3 md:gap-4 mt-4">
          <button
            onClick={goPrev}
            disabled={currentIdx === 0}
            className="flex-1 py-3.5 md:py-4 rounded-2xl border border-slate-700/60 bg-slate-800/40 text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-slate-700 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all active:scale-[0.97]"
          >
            ← Prev
          </button>

          {isLastQuestion && revealed ? (
            <button
              onClick={() => setShowResult(true)}
              className="flex-1 py-3.5 md:py-4 rounded-2xl font-bold text-[10px] md:text-xs uppercase tracking-widest text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-900/40 active:scale-[0.97]"
            >
              Finish Exam →
            </button>
          ) : (
            <button
              onClick={goNext}
              disabled={isLastQuestion}
              className={`flex-1 py-3.5 md:py-4 rounded-2xl font-bold text-[10px] md:text-xs uppercase tracking-widest text-white bg-violet-600 hover:bg-violet-500 transition-all shadow-xl shadow-violet-900/40 active:scale-[0.97] disabled:opacity-20 disabled:cursor-not-allowed`}
            >
              Next Question →
            </button>
          )}
        </div>

        {/* Quick Nav dots */}
        <div className="mt-10 flex flex-wrap gap-2 justify-center px-4">
          {mcqs.map((_, idx) => {
            const ans = answered[idx];
            let cls = "w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 cursor-pointer ";
            if (idx === currentIdx) cls += `${c.progress} scale-150 ring-4 ring-white/10`;
            else if (ans?.correct) cls += "bg-emerald-600";
            else if (ans && !ans.correct) cls += "bg-rose-600";
            else cls += "bg-slate-800 hover:bg-slate-700";
            return (
              <button key={idx} onClick={() => navigate(idx)} className={cls} title={`Go to Q${idx + 1}`} />
            );
          })}
        </div>
      </div>
    </main>
  );
}
