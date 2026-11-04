import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  // New React Compiler diagnostics stay visible for unchanged legacy effects and game callbacks.
  { files: ["src/app/components/DataDiveFeedback.tsx", "src/app/games/NextStepPanel.tsx", "src/app/games/PitchingGame.tsx"], rules: { "react-hooks/set-state-in-effect": "warn", "react-hooks/immutability": "warn", "react-hooks/preserve-manual-memoization": "warn" } },
  globalIgnores([".next/**", ".open-next/**", ".worker-dry-run/**", "next-env.d.ts"]),
]);
