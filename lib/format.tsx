export const highlightText = (text: string, matchText: string) => {
    if (!matchText) return text; // No search, return plain text

    const regex = new RegExp(`(${matchText})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
        regex.test(part) ? <span key={index} className="highlight">{part}</span> : part
    );
};