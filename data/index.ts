import type { Chapter } from "@/types";
import { chapter12 } from "./chapter12";
import { chapter13 } from "./chapter13";
import { chapter14 } from "./chapter14";
import { chapter15 } from "./chapter15";
import { chapter16 } from "./chapter16";
import { chapter17 } from "./chapter17";
import { chapter56 } from "./chapter56";
import { chapter57 } from "./chapter57";
import { chapter58 } from "./chapter58";
import { chapter59 } from "./chapter59";
import { chapter60 } from "./chapter60";

const chapters: Chapter[] = [chapter12, chapter13, chapter14, chapter15, chapter16, chapter17, chapter56, chapter57, chapter58, chapter59, chapter60];

export function getAllChapters(): Chapter[] {
  return chapters;
}

export function getChapterById(id: number): Chapter | undefined {
  return chapters.find((c) => c.id === id);
}
