import CTALink from "./CTALink";

export default function GamePromoCard() {
  return (
    <div className="mt-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-4 md:p-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-left">
          <h2 className="text-yellow-500 text-xl md:text-2xl font-serif">
            Try the Pitching Game
          </h2>
          <p className="text-slate-300 text-sm mt-1">
            Step on the mound and see if you can throw strikes like Skenes.
          </p>
        </div>
        <CTALink href="/games" text="Play the pitching game →" location="home_game_promo" />
      </div>
    </div>
  );
}
