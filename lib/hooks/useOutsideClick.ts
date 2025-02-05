import { useEffect } from "react";

const useOutsideClick = (
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void
) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, callback]); // Add dependencies to avoid unnecessary re-renders
};

export default useOutsideClick;
