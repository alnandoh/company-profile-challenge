import { ReactNode } from "react";

interface CardProps {
  className?: string;
  children: JSX.Element | ReactNode;
}

export default function Card({ className, children }: CardProps) {
  return (
    <div
      className={`${className} p-6 bg-dark-700 rounded-xl flex flex-col gap-5`}
    >
      {children}
    </div>
  );
}
