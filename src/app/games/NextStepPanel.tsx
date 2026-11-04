'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { trackNavigationClick } from '@/lib/analytics';

// Feature flag: set to false to hide the post-game panel everywhere.
export const SHOW_NEXT_STEP_PANEL = true;

const DISMISS_KEY = 'next_step_panel_dismissed';
const PANEL_LABEL = 'post_game_next_step';

interface NextStepPanelProps {
  otherGameName: string;
  otherGameType: string;
  onPlayOther: () => void;
}

export default function NextStepPanel({ otherGameName, otherGameType, onPlayOther }: NextStepPanelProps) {
  const [dismissed, setDismissed] = useState(true);

  // Read dismissal after mount so it stays dismissed for the rest of the visit
  useEffect(() => {
    try {
      setDismissed(sessionStorage.getItem(DISMISS_KEY) === '1');
    } catch {
      setDismissed(false);
    }
  }, []);

  if (!SHOW_NEXT_STEP_PANEL || dismissed) return null;

  const dismiss = () => {
    setDismissed(true);
    try { sessionStorage.setItem(DISMISS_KEY, '1'); } catch {}
  };

  return (
    <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700 rounded-lg p-4 pr-10">
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        className="absolute top-2 right-3 text-slate-500 hover:text-slate-300 text-lg leading-none"
      >
        ×
      </button>
      <p className="text-slate-300 text-sm mb-3">What next?</p>
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={() => {
            trackNavigationClick({ destination: `games:${otherGameType}`, nav_location: 'inline', link_label: PANEL_LABEL });
            onPlayOther();
          }}
          className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm px-4 py-2 rounded-lg transition"
        >
          Play {otherGameName}
        </button>
        <Link
          href="/stats"
          onClick={() => trackNavigationClick({ destination: '/stats', nav_location: 'inline', link_label: PANEL_LABEL })}
          className="flex-1 text-center bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm px-4 py-2 rounded-lg transition"
        >
          See Paul Skenes&apos; current stats
        </Link>
      </div>
    </div>
  );
}
