import type { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
    return <button className="bg-yellow-200">{children}</button>;
};
