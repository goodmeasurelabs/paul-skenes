'use client'

import Link from 'next/link';
import { trackNavigationClick } from '@/lib/analytics';

const quickLinks = [
  { href: '/stats', title: 'Live stats', description: 'His latest numbers, updated through the season.' },
  { href: '/game-schedule', title: 'Next start / schedule', description: 'When and where he pitches next.' },
  { href: '/games', title: 'Play the games', description: 'Try the pitching challenge or test your trivia.' },
];

export default function QuickLinks() {
  return (
    <nav aria-label="What you can do here" className="w-full max-w-4xl mx-auto px-4">
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {quickLinks.map(({ href, title, description }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={() => trackNavigationClick({ destination: href, nav_location: 'inline' })}
              className="block h-full bg-slate-900 border border-slate-700 hover:border-yellow-500 rounded-lg p-4 transition-colors"
            >
              <span className="block text-yellow-500 font-bold">{title} →</span>
              <span className="block text-slate-400 text-sm mt-1">{description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
