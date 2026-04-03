import { notFound } from "next/navigation";
import { getChapterById } from "@/data";
import QuizClient from "@/components/QuizClient";

interface Props {
  params: Promise<{ chapterId: string; lessonId: string }>;
}

export default async function QuizPage({ params }: Props) {
  const { chapterId, lessonId } = await params;
  const chapter = getChapterById(Number(chapterId));
  if (!chapter) notFound();

  const lesson = chapter.lessons.find((l) => l.id === Number(lessonId));
  if (!lesson) notFound();

  return (
    <QuizClient
      chapterId={chapter.id}
      chapterTitle={chapter.title}
      chapterColor={chapter.color}
      lessonId={lesson.id}
      lessonTitle={lesson.title}
      mcqs={lesson.mcqs}
    />
  );
}
