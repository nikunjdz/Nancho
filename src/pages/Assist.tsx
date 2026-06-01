import React from "react";

interface AssistProps {
  onNavigate: (page: string) => void;
}

const Assist = ({ onNavigate }: AssistProps) => {
  const talents = [
    "Unusual Art", "Eccentric Ideas", "Trivial Pursuits", "Educative Ardor",
    "Reckless Resources", "Subversive Acquisition", "Alpha Affinity",
    "Salubrious Science", "PR Precocity", "Holistic Hacking",
    "Sex, Drugs & Rock'n'Roll"
  ];

  const needs = [
    "Art Work", "Medical/Scientific Info", "Ideas for Promoting Ideas",
    "Movie \"Quotes\"", "Contagious Music", "Video/CDROM Project Support",
    "Reconnaissance on Current Locations of Sixties Survivors"
  ];

  return (
    <div className="px-4 py-8 text-foreground">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl text-primary font-bold mb-2 uppercase tracking-wide">
          Big Medicine Needs You!
        </h1>
        <p className="text-lg text-retro-amber font-bold uppercase tracking-[0.2em] my-4">
          Cascade! Conspire!
        </p>
        <p className="text-base text-muted-foreground italic max-w-lg mx-auto">
          "We need everything you got! Wit, bile, rage, lust, and bizarre, near-useless talents..."
        </p>
      </div>

      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Talents */}
        <div className="bg-card p-6 border border-border rounded shadow-lg">
          <h2 className="text-base font-bold text-retro-red mb-4 border-b border-border pb-2 uppercase tracking-wider">
            Your Inspiration &amp; Expertise
          </h2>
          <ul className="list-disc list-inside text-sm space-y-2 text-foreground">
            {talents.map((t) => (
              <li key={t} className="hover:text-retro-amber transition-colors cursor-pointer">{t}</li>
            ))}
          </ul>
        </div>

        {/* Needs */}
        <div className="bg-card p-6 border border-border rounded shadow-lg">
          <h2 className="text-base font-bold text-retro-red mb-4 border-b border-border pb-2 uppercase tracking-wider">
            Nancho Needs of the Hour
          </h2>
          <ul className="list-disc list-inside text-sm space-y-2 text-foreground">
            {needs.map((n) => (
              <li key={n} className="hover:text-retro-amber transition-colors cursor-pointer">{n}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-6 border border-border bg-card rounded text-center shadow-lg">
        <h3 className="font-bold text-retro-amber text-base mb-2">Want to associate?</h3>
        <p className="text-sm text-foreground mb-4 leading-relaxed">
          If you have inspiration, angst, or materials to contribute to the devolved future, 
          drop us a line on our contact page.
        </p>
        <button
          onClick={() => onNavigate("contact")}
          className="bg-primary hover:bg-red-800 text-white font-bold px-4 py-2 rounded transition-colors text-sm"
        >
          Go to Contact Page
        </button>
      </div>

      <div className="text-center mt-12 pt-6 border-t border-border">
        <button
          onClick={() => onNavigate("home")}
          className="text-retro-green hover:text-primary font-bold text-base underline"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Assist;
