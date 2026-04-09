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

export default function QuizClient({ chapterId, chapterTitle, chapterColor, lessonId, lessonTitle, mcqs }: Props) {
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

  // Score-based progress bar: green if ≥70%, red if <70%, chapter color if no attempts yet
  const scoreRatio = score.attempted > 0 ? score.correct / score.attempted : -1;
  const progressBarColor = scoreRatio < 0 ? c.progress : scoreRatio >= 0.7 ? "bg-emerald-500" : "bg-rose-500";
  const scorePercent = score.attempted > 0 ? Math.round(scoreRatio * 100) : 0;

  // Timer styling
  const timerColor = timeLeft > 60 ? "text-slate-400" : timeLeft > 20 ? "text-yellow-400 font-semibold" : "text-rose-400 font-bold animate-pulse";
  const timerBg = timeLeft <= 20 ? "bg-rose-500/10 border-rose-500/40" : "bg-slate-800/60 border-slate-700/40";

  // ── Result Screen ──────────────────────────────────────────────────────────
  if (showResult) {
    const { label, color } = getScoreLabel(score.correct, total);
    const passed = total > 0 && (score.correct / total) >= 0.7;
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-slate-950">
        <div className="bg-slate-900 border border-slate-700/50 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl">
          <div className="text-5xl mb-4">{passed ? "🏆" : "📚"}</div>
          <h2 className={`text-2xl font-bold mb-1 ${color}`}>{label}</h2>
          <p className="text-slate-400 text-sm mb-6">{lessonTitle}</p>
          <div className="flex items-end justify-center gap-1 mb-2">
            <span className="text-6xl font-black text-white">{score.correct}</span>
            <span className="text-2xl text-slate-500 mb-2">/{total}</span>
          </div>
          <p className="text-slate-400 text-sm mb-6">{scorePercent}% correct</p>

          {/* Score bar */}
          <div className="h-2 rounded-full bg-slate-800 mb-6 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${passed ? "bg-emerald-500" : "bg-rose-500"}`}
              style={{ width: `${scorePercent}%` }}
            />
          </div>

          {/* Breakdown dots */}
          <div className="flex flex-wrap gap-1.5 justify-center mb-6">
            {mcqs.map((_, idx) => {
              const ans = answered[idx];
              return (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-full ${ans?.correct ? "bg-emerald-500" : ans ? "bg-rose-500" : "bg-slate-700"}`}
                  title={`Q${idx + 1}: ${ans?.correct ? "Correct" : ans ? "Wrong" : "Unanswered"}`}
                />
              );
            })}
          </div>

          {!passed && (
            <div className="mb-4">
              <p className="text-rose-400 text-sm font-semibold mb-3">
                You need 70% or higher to pass. Please re-attempt the exam.
              </p>
              <button
                onClick={resetQuiz}
                className="block w-full py-3 rounded-xl font-semibold text-sm text-white text-center bg-rose-600 hover:bg-rose-500 transition-all mb-2"
              >
                Re-attempt Exam
              </button>
            </div>
          )}

          <Link
            href={`/chapter/${chapterId}`}
            className={`block w-full py-3 rounded-xl font-semibold text-sm text-white text-center ${c.progress} hover:opacity-90 transition-all`}
          >
            ← Back to Chapter
          </Link>
        </div>
      </main>
    );
  }

  // ── Quiz Screen ────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="border-b border-slate-800/60 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link href={`/chapter/${chapterId}`} className={`text-sm ${c.back} transition-colors flex items-center gap-1.5`}>
            ← {chapterTitle}
          </Link>
          <div className="flex items-center gap-3 text-sm">
            {/* Timer */}
            <span className={`text-xs px-2.5 py-1 rounded-full border font-mono ${timerColor} ${timerBg}`}>
              {String(Math.floor(timeLeft / 60)).padStart(1, "0")}:{String(timeLeft % 60).padStart(2, "0")}
            </span>
            <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${c.badge}`}>
              {currentIdx + 1} / {total}
            </span>
            {score.attempted > 0 && (
              <span className={`text-xs font-medium ${scoreRatio >= 0.7 ? "text-emerald-400" : "text-rose-400"}`}>
                {score.correct}/{score.attempted}
              </span>
            )}
          </div>
        </div>
        {/* Progress bar - shown from first attempted question, color based on score % */}
        {score.attempted > 0 && (
          <div className="h-1 bg-slate-800">
            <div className={`h-full ${scoreRatio >= 0.7 ? "bg-emerald-500" : "bg-rose-500"} transition-all duration-500`} style={{ width: `${scorePercent}%` }} />
          </div>
        )}
      </div>

      {/* Quiz Body */}
      <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        <div className="mb-2 text-xs text-slate-500 font-medium tracking-wide uppercase">{lessonTitle}</div>

        {/* Question Card */}
        <div className="bg-slate-900 border border-slate-700/50 rounded-2xl p-6 mb-5 shadow-xl">
          <div className="flex items-start gap-3 mb-1">
            <span className={`text-xs font-bold px-2 py-0.5 rounded ${c.badge} flex-shrink-0 mt-0.5`}>Q{mcq.id}</span>
          </div>
          <p className="text-slate-100 text-base leading-relaxed font-medium">{mcq.question}</p>
        </div>

        {/* Options */}
        <div className="space-y-2.5 mb-6">
          {(["A", "B", "C", "D"] as AnswerKey[]).map((key) => (
            <button key={key} onClick={() => handleSelect(key)} disabled={revealed} className={getOptionStyle(key)}>
              {getOptionIcon(key)}
              <span className="pt-0.5 leading-relaxed">{mcq.options[key]}</span>
            </button>
          ))}
        </div>

        {/* Show Answer Button */}
        {!revealed && (
          <button
            onClick={handleReveal}
            disabled={!selected}
            className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
              selected ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-900/40" : "bg-slate-800 text-slate-500 cursor-not-allowed"
            }`}
          >
            {selected ? "Show Correct Answer" : "Select an option first"}
          </button>
        )}

        {/* Explanation */}
        {revealed && (
          <div className="rounded-xl border border-slate-700/50 bg-slate-900/80 p-5 mb-4 slide-in">
            <div className="flex items-center gap-2 mb-3">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${selected === mcq.correct ? "bg-emerald-600" : "bg-rose-600"} text-white flex-shrink-0`}>
                {selected === mcq.correct ? "✓" : "✗"}
              </span>
              <span className={`text-sm font-semibold ${selected === mcq.correct ? "text-emerald-400" : "text-rose-400"}`}>
                {selected === mcq.correct ? "Correct!" : `Incorrect — Correct answer is ${mcq.correct}`}
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{mcq.explanation}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between gap-3 mt-4">
          <button
            onClick={goPrev}
            disabled={currentIdx === 0}
            className="flex-1 py-3 rounded-xl border border-slate-700/60 bg-slate-800/50 text-slate-300 font-medium text-sm hover:bg-slate-700 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            ← Previous
          </button>

          {isLastQuestion && revealed ? (
            <button
              onClick={() => setShowResult(true)}
              className="flex-1 py-3 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-900/40"
            >
              View Result →
            </button>
          ) : (
            <button
              onClick={goNext}
              disabled={isLastQuestion}
              className={`flex-1 py-3 rounded-xl font-semibold text-sm text-white ${c.progress} hover:opacity-90 transition-all shadow-lg disabled:opacity-40 disabled:cursor-not-allowed`}
            >
              Next →
            </button>
          )}
        </div>

        {/* Quick Nav dots */}
        <div className="mt-6 flex flex-wrap gap-1.5 justify-center">
          {mcqs.map((_, idx) => {
            const ans = answered[idx];
            let cls = "w-2.5 h-2.5 rounded-full transition-all duration-200 ";
            if (idx === currentIdx) cls += `${c.progress} scale-150`;
            else if (ans?.correct) cls += "bg-emerald-600";
            else if (ans && !ans.correct) cls += "bg-rose-600";
            else cls += "bg-slate-700";
            return (
              <button key={idx} onClick={() => navigate(idx)} className={cls} title={`Q${idx + 1}`} />
            );
          })}
        </div>
      </div>
    </main>
  );
}
