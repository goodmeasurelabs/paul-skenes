import CTALink from "../../components/CTALink";

// Feature flag: set to false to hide the next-step links on the Contact page.
export const SHOW_CONTACT_NEXT_STEPS = true;

const CTA_LOCATION = "contact_page_next_step";

export default function NextStepLinks() {
  return (
    <section aria-label="Keep exploring" className="w-full text-left">
      <p className="text-slate-400 text-sm md:text-base mb-3">
        Here for Paul Skenes? Check out his latest numbers or try the game.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <CTALink href="/stats" text="See Paul Skenes' current stats" location={CTA_LOCATION} />
        <CTALink href="/games" text="Play the Pitching Game" location={CTA_LOCATION} />
      </div>
    </section>
  );
}
