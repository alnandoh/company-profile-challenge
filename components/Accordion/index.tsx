"use client";
import { useState } from "react";
interface AccordionProps {
  title: string;
  content: string;
}

export default function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="flex justify-between items-center gap-5 cursor-pointer"
        onClick={toggleAccordion}
      >
        <p className="flex justify-between items-center gap-5">{title}</p>
        <button aria-label="Toggle FAQ Details" className="focus:outline-none">
          <svg
            className={`h-6 w-6 transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 9l-7 7-7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <>
          <hr />
          <p className="text-sm text-shade-600">{content}</p>
        </>
      )}
    </>
  );
}
