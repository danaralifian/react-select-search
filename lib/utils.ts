import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const highlightText = (text: string, matchText: string) => {
  // Create a case-insensitive regular expression to match the character
  const regex = new RegExp(matchText, "gi");
  // Replace matched characters with bold HTML tags
  return text.replace(
    regex,
    (match) => `<span class="highlight">${match}</span>`
  );
};
