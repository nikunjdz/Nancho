import React, { useState } from "react";
import advline2 from "@/assets/images/Rx1.gif"; // We can use shared styles/gifs

interface SearchProps {
  onNavigate: (page: string) => void;
}

const Search = ({ onNavigate }: SearchProps) => {
  const [query, setQuery] = useState("");

  const topics = [
    { name: "Anthroculture", desc: "Raising little humans to serve corporate ends" },
    { name: "Slime Mold", desc: "The parable of biological superorganisms and corporate behaviour" },
    { name: "Corporate Personhood", desc: "The legal fiction of corporations as natural persons" },
    { name: "Metamedicine", desc: "Treating corporate pathology in GAIA like a system-wide infection" },
    { name: "Sovereignty", desc: "We the Sovereign People vs. Big Corporate Rulers" },
    { name: "Direct Democracy", desc: "The Swiss-tested model for citizen-led lawmaking" },
  ];

  const filteredTopics = topics.filter((t) =>
    t.name.toLowerCase().includes(query.toLowerCase()) ||
    t.desc.toLowerCase().includes(query.toLowerCase())
  );

  const handleExternalSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    const url = `https://www.google.com/search?q=site:nancho.net+${encodeURIComponent(query)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="px-4 py-8 text-foreground">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl text-primary font-bold mb-2 uppercase tracking-wide">
          BIG MEDICINE SEARCH ENGINE
        </h1>
        <p className="text-base text-muted-foreground max-w-xl mx-auto italic mt-4">
          Search here for explanations of new words like "anthroculture" or "immunogentile" 
          or strange ideas like "environmental hormones" or "history in your pants".
        </p>
      </div>

      <div className="max-w-lg mx-auto bg-card p-6 border border-border rounded mb-10 shadow-lg">
        <form onSubmit={handleExternalSearch} className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Type search terms (e.g. slime mold)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-background text-foreground border border-border px-3 py-2 rounded focus:outline-none focus:border-primary text-base"
          />
          <button
            type="submit"
            className="bg-primary hover:bg-red-800 text-white font-bold px-4 py-2 rounded transition-colors text-base"
          >
            Google Search
          </button>
        </form>
        <p className="text-xs text-muted-foreground text-center">
          Press Enter or click "Google Search" to search the live nancho.net site via Google.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <h2 className="text-lg font-bold text-accent mb-4 border-b border-border pb-2">
          Suggested Local Topics
        </h2>
        {filteredTopics.length > 0 ? (
          <div className="space-y-4">
            {filteredTopics.map((t) => (
              <div key={t.name} className="p-4 border border-border bg-card hover:border-primary transition-all">
                <h3 className="font-bold text-retro-amber text-base mb-1">{t.name}</h3>
                <p className="text-sm text-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground text-center py-6">
            No matching local topics found. Try search using Google.
          </p>
        )}
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

export default Search;
