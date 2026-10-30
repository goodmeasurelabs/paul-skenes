"use client";

import Link from "next/link";
import { trackNavigationClick } from "@/lib/analytics";

const nextStepLinks = [
  { href: "/games", text: "Play the Pitching Game" },
  { href: "/stats", text: "See current stats" },
  { href: "/game-schedule", text: "Game schedule" }
];

export default function NextStepLinks() {
  return (
    <nav aria-label="Keep exploring" className="mx-8 md:mx-24 mb-12 font-serif">
      <h2 className="text-slate-300 text-2xl md:text-3xl mb-4">Keep exploring</h2>
      <ul className="flex flex-col md:flex-row gap-4">
        {nextStepLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={() => trackNavigationClick({ destination: link.href, nav_location: "inline" })}
              className="inline-block text-yellow-500 text-lg md:text-xl px-2 hover:bg-yellow-500 hover:text-slate-950 rounded"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
