import React from "react";

interface StudyProps {
  onNavigate: (page: string) => void;
}

const Study = ({ onNavigate }: StudyProps) => {
  const resourceLinks = [
    { title: "Gospels & Canons", desc: "Foundational essays on corporate structure and pathology", href: "#" },
    { title: "Big Books / Texts", desc: "Seminal publications detailing corporate behavior and history", href: "#" },
    { title: "Big Links & Groups", desc: "Active citizen organizations and coalitions targeting corporate power", href: "#" },
    { title: "Big Movies & Videos", desc: "Documentaries and films illustrating the corporate usurpation of sovereignty", href: "#" },
    { title: "Big Online References", desc: "Databases, archives, and directories for corporate research", href: "#" },
    { title: "Big Terms & Definitions", desc: "Etymological glossary of corporate anthroculture definitions", href: "#" },
    { title: "Nancho Consultations", desc: "Interviews with leading thinkers and meme meisters", href: "#" },
    { title: "Anthroculture Research Hints", desc: "Investigations into systemic childhood stress and docility conditioning", href: "#" },
  ];

  return (
    <div className="px-4 py-8 text-foreground">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl text-primary font-bold mb-2 uppercase tracking-wide">
          Big Body Study Hall
        </h1>
        <h2 className="text-base text-retro-amber italic">
          Where Big Knowledge Finally Promises a Little Power
        </h2>
        <blockquote className="max-w-xl mx-auto my-6 text-sm italic text-muted-foreground leading-relaxed">
          "To advance this campaign or lead one of your own, you will need a few basic facts, 
          a couple days of study, and a single gut-wrenching moment of insight that our strange 
          diagnosis is true — Big Corporate Bodies are indeed alive, in charge and out of control."
        </blockquote>
      </div>

      <div className="max-w-2xl mx-auto bg-card p-6 border border-border rounded shadow-lg">
        <h2 className="text-lg font-bold text-white mb-6 border-b border-border pb-2">
          Study Hall Directory
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resourceLinks.map((item) => (
            <div
              key={item.title}
              className="p-4 border border-border bg-background/30 hover:border-retro-green transition-colors"
            >
              <h3 className="font-bold text-retro-green text-base mb-1">{item.title}</h3>
              <p className="text-xs text-foreground mb-3">{item.desc}</p>
              <button
                onClick={() => alert(`This link points to ${item.title} section in the local archives.`)}
                className="text-xs text-retro-amber hover:underline font-bold"
              >
                Access Section &rarr;
              </button>
            </div>
          ))}
        </div>
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

export default Study;
