import React, { useState } from "react";

interface AlliesProps {
  onNavigate: (page: string) => void;
}

const Allies = ({ onNavigate }: AlliesProps) => {
  const [activeCategory, setActiveCategory] = useState("upfront");

  const categories = [
    { id: "upfront", name: "UpFront Allies", desc: "Creative groups directly targeting Big Body power" },
    { id: "media", name: "Media Masters", desc: "Dissident news, culture jammers, and watchdogs" },
    { id: "awakening", name: "Awakening & Latent", desc: "Traditional environmental and activist coalitions" },
    { id: "cleaning", name: "Democracy & Ownership", desc: "Direct democracy, electoral reform, and worker coops" },
    { id: "beyond", name: "Beyond Big Bodies", desc: "Bioregionalism, Schumacher economics, and futures" }
  ];

  const alliesData: { [key: string]: { name: string; url: string; desc: string }[] } = {
    upfront: [
      { name: "International Forum on Globalization", url: "http://www.ifg.org/", desc: "Eloquent anti-globalization coalition pushing public teach-ins and workbook resources." },
      { name: "The Alliance for Democracy", url: "http://ea1.com/alliance/", desc: "National populist alliance fighting political domination by corporate entities." },
      { name: "Program on Corporations, Law and Democracy (POCLAD)", url: "http://www.poclad.org/", desc: "Pioneered the corporate dechartering concept to reclaim popular sovereignty." },
      { name: "Corporate Watch", url: "http://www.corpwatch.org/", desc: "Exposing corporate abuse of power and environmental degradation globally." },
      { name: "Multinational Monitor", url: "http://www.essential.org/monitor/monitor.html", desc: "Nader-affiliated journal tracking corporate activities in the Third World." },
      { name: "RTMARK", url: "http://www.rtmark.com/", desc: "Pioneered activist sabotage of corporate products and intellectual property." },
      { name: "Noam Chomsky Resources", url: "https://chomsky.info/", desc: "Extensive collections of the premier critic of state-corporate power." },
      { name: "Jim Hightower", url: "https://jimhightower.com/", desc: "Premier populist voice of the American West - witty, sharp, and uncompromising." },
    ],
    media: [
      { name: "Adbusters", url: "http://www.adbusters.org/", desc: "Culture Jammers headquarters waging a media war against consumerist conditioning." },
      { name: "Z-Net / Z Magazine", url: "https://znetwork.org/", desc: "In-depth alternative analysis on state, war, media and corporate monopolies." },
      { name: "Dog Eat Dog Films", url: "http://www.dogeatdogfilms.com/", desc: "Cyberlair of Michael Moore's documentaries and corporate-focused exposes." },
      { name: "Paper Tiger Television", url: "http://www.papertiger.org/", desc: "Public access video guerrillas challenging media monopolies since the 1980s." },
      { name: "Mother Jones", url: "http://www.mojones.com/", desc: "Investigative journalism powerhouse showing the corporate underbelly." },
      { name: "Public Media Center", url: "http://www.publicmediacenter.org/", desc: "Nonprofit ad agency dedicated to environmental and social change campaigns." },
      { name: "Common Dreams", url: "http://www.commondreams.org/", desc: "Eminent daily news center for progressive and alternative columns." }
    ],
    awakening: [
      { name: "Earth First!", url: "http://www.enviroweb.org/ef/primer/", desc: "Gaian immune system warriors practicing direct action eco-defense." },
      { name: "Earth Island Institute", url: "http://www.earthisland.org/", desc: "Incubator for grassroots environmental groups founded by David Brower." },
      { name: "Rainforest Action Network", url: "http://www.ran.org/", desc: "Campaigning to protect forests and dismantle corporate logging funding." },
      { name: "Community Environmental Legal Defense Fund (CELDF)", url: "http://www.celdf.org/", desc: "Assisting towns to write ordinances asserting local citizen sovereignty over corporate bodies." },
      { name: "David Suzuki Foundation", url: "http://www.davidsuzuki.org/", desc: "Prophesying ecological sanity and designing post-corporate community models." },
      { name: "Greenpeace", url: "http://www.greenpeace.org/", desc: "The famous direct-action global environmental protector." },
      { name: "Worldwatch Institute", url: "http://www.worldwatch.org/", desc: "Meticulous documentation on ecological and resource limits." }
    ],
    cleaning: [
      { name: "Center for Public Integrity", url: "http://www.publicintegrity.org", desc: "Unveiling political buying of elections and campaign cash flows." },
      { name: "Direct Democracy / Economist", url: "http://www.economist.com/", desc: "Swiss-tested Direct Democracy where the people hold final veto and legislative power." },
      { name: "Vote.org", url: "http://www.vote.org/", desc: "Tech-assisted paradigms for electoral participation and democracy renewal." },
      { name: "Mondragon Co-ops", url: "https://www.mondragon-corporation.com/", desc: "Spain's massive worker-owned cooperative network proving workplace democracy works." },
      { name: "Labor Rights", url: "http://www.laborrights.org/", desc: "Advocating for working class rights against international exploitation." },
      { name: "Greenmoney", url: "http://www.greenmoney.com/", desc: "Socially responsible investing resources for transition out of corporate patholology." }
    ],
    beyond: [
      { name: "Planet Drum Foundation", url: "http://www.planetdrum.org/", desc: "Bioregionalism center mapping watersheds and eco-centric human habitats." },
      { name: "The E.F. Schumacher Society", url: "http://www.schumachersociety.org/", desc: "Advocating for local currencies, land trusts, and 'small is beautiful' economies." },
      { name: "Global Ideas Bank", url: "http://www.globalideasbank.org/", desc: "Massive repository of social inventions and local community concepts." },
      { name: "World Future Society", url: "http://www.wfs.org/", desc: "Speculating on technological and ecological scenarios for a post-corporate future." }
    ]
  };

  return (
    <div className="px-4 py-8 text-foreground">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl text-primary font-bold mb-2 uppercase tracking-wide">
          Anti-Corporate Endgame Allies
        </h1>
        <p className="text-base text-muted-foreground max-w-xl mx-auto italic mt-4">
          "Allies are those who helpfully associate. These groups are actively battling 
          corporate pathology in their own terms and territories. Help spread the word."
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-border pb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 text-base font-bold border transition-all ${
              activeCategory === cat.id
                ? "bg-primary text-white border-primary"
                : "bg-card text-retro-green border-border hover:border-retro-green"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Allies Grid */}
      <div className="max-w-3xl mx-auto">
        <p className="text-retro-amber font-bold text-base mb-6 text-center italic">
          {categories.find((c) => c.id === activeCategory)?.desc}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {alliesData[activeCategory].map((ally) => (
            <div
              key={ally.name}
              className="p-5 border border-border bg-card flex flex-col justify-between hover:border-retro-amber transition-colors"
            >
              <div>
                <h3 className="text-base font-bold text-white mb-2">{ally.name}</h3>
                <p className="text-sm text-foreground mb-4 leading-relaxed">{ally.desc}</p>
              </div>
              <a
                href={ally.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-retro-green hover:text-primary underline text-sm font-bold w-fit"
              >
                Visit Site &rarr;
              </a>
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

export default Allies;
