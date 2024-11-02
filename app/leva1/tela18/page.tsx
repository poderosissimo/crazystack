import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export default function FlipWordsDemo() {
  const words = ["unha", "estética","sobrancelha", "tatuagem","barba","cabelo","bigode"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Agende
        <FlipWords words={words} duration={500} /> <br />
        com o belezix
      </div>
    </div>
  );
}
