import dragonLogo from "@/assets/dragon-logo.png";
import earthLights from "@/assets/earth-lights.jpg";

interface NavBarProps {
  onNavigate: (page: string) => void;
}

export const NavBar = ({ onNavigate }: NavBarProps) => (
  <div className="flex justify-center gap-2 text-base py-2 flex-wrap">
    {["Search", "Allies", "Approaches", "Study", "Assist", "Contact"].map((item, i) => (
      <span key={item}>
        {i > 0 && <span className="text-muted-foreground mx-1">|</span>}
        <button
          onClick={() => onNavigate(item.toLowerCase())}
          className="text-retro-green hover:text-primary underline transition-colors font-bold focus:outline-none"
        >
          {item}
        </button>
      </span>
    ))}
  </div>
);

const MainContent = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <div className="flex-1 px-4 py-6">
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <img src={dragonLogo} alt="Big Med Logo" className="w-20 h-20 flex-shrink-0" loading="lazy" width={80} height={80} />
        <div className="text-center flex-1">
          <h1 className="text-3xl md:text-4xl text-foreground mb-2">Big Medicine Central</h1>
          <p className="text-lg text-foreground">
            Dispensing Magic Memes for Corporate Ills
          </p>
          <p className="text-base text-primary">Since the Year '01</p>
          <div className="w-48 mx-auto mt-2 border-b-2 border-retro-amber" />
          <div className="w-32 mx-auto mt-1 border-b border-retro-amber" />
        </div>
      </div>
 
      {/* Notice */}
      <p className="text-accent text-center text-base mb-4 leading-relaxed">
        Big Med is now reformatting itself to undertake some new journalistic and field projects. 
        This site is currently an archive of previous initiatives and perpetually provocative ideas, 
        but will be updated soon to reflect current activities.
      </p>
 
      {/* Areas of Concern */}
      <h2 className="text-accent text-center text-lg font-bold mb-3">
        Big Med's Areas of Continuing Concern
      </h2>
      <ul className="list-disc list-inside text-foreground text-base space-y-1 max-w-lg mx-auto mb-4">
        <li>Escalating Authoritarianism &amp; Corporate Hegemony</li>
        <li>Increasing Inequality and Militarization</li>
        <li>Deteriorating Human and Environmental Health</li>
        <li>Lack of Synergy among Most Single Issue Groups</li>
      </ul>
 
      <div className="border-t border-border my-4" />
      <NavBar onNavigate={onNavigate} />
      <div className="border-t border-border my-4" />

      {/* Main Text */}
      <div className="text-base text-foreground leading-relaxed space-y-4 bg-card p-4 border border-border">
        <p>
          Big Med is a recon, arms and resource center for those battling malignant corporate power, 
          at least those wise enough to explore Big Corporate Bodies as evolving living systems, 
          eco-social pathogens, and/or our morbid rivals for control of the world.
        </p>
        <p>
          There are a few surprisingly simple legal, political, even hormonal reasons why corporate 
          plagues are ravaging our world; why the soil, air and water are ever more toxic to life; 
          why more of our kind are poorer, sicker, and more fearful than any time in memory. We hold 
          the following truths to be self-evident.
        </p>

        <p className="font-bold text-primary">OUR WORKING HYPOTHESES</p>
        <p>Let us just suppose that Big Bodies:</p>

        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>are real superorganisms that dominate, shape and synchronize their members' lives and minds;</li>
          <li>control our education, science and media, and exploit this power to condition us to serve corporate ends;</li>
          <li>generate a monstrous share of the poison, pain and havoc in the world;</li>
          <li>have overtaken humans as Earth's new dominant species and hijacked our evolutionary course;</li>
          <li>may yet be thwarted if the Magic 10% among us - the immune forces of the body politic - wake up, and miniaturize-localize-democratize their premises in time.</li>
        </ul>

        <p>
          We ask you not to debate these assumptions, just briefly pretend they are true. If we presume 
          they are, what kind of contest would we face, what would we have to learn and do?
        </p>

        <p>
          Nader sees our challenge as a "corporate coup d'etat," and talks legal and political. We fear 
          an even grimmer bio-evolutionary doom, and plot in militant medicalese. Big Med thus offers 
          the following aid:
        </p>

        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>
            <a href="#" className="text-retro-green underline hover:text-primary">Diagnostic</a> - facts 
            that illuminate the singular corporatist cause behind most eco-social ills.
          </li>
          <li>
            <a href="#" className="text-retro-amber underline hover:text-primary">Remedial</a> - broad-spectrum 
            tactics to boost popular resistance locally and wither Big Bodies globally.
          </li>
          <li>
            <a href="#" className="text-retro-red underline hover:text-primary">Prognostic</a> - self-fulfilling 
            prescriptions for a spirited, sensual post-corporate world.
          </li>
        </ul>

        <p>
          We seek wise and witty contributions in any of these fields, particularly those that strengthen 
          everyone's hand to belittle BIG's rampant power. In sum, we ask your aid in chronicling and 
          quickening the coming Big Devolution. Grand surprises await once you start to think BIG.
        </p>
      </div>

      {/* Patient of the Year */}
      <div className="text-center mt-8">
        <h2 className="text-lg font-bold text-primary mb-4">BIG MEDICINE'S PATIENT OF THE YEAR</h2>
        <a href="#">
          <img 
            src={earthLights} 
            alt="Earth at night showing corporate hives" 
            className="mx-auto max-w-xs border-2 border-border hover:border-primary transition-colors"
            loading="lazy"
            width={320}
            height={320}
          />
        </a>
        <p className="text-base text-foreground mt-3">
          Bright Areas Show Malignant Spread of Corporate Hives
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          (Where corporate driven consumption threatens the Earth and all mankind.)
        </p>
      </div>

      <div className="border-t border-border my-6" />
      <NavBar onNavigate={onNavigate} />
      <div className="border-t border-border my-4" />

      {/* Footer */}
      <p className="text-sm text-muted-foreground text-center mt-4">
        Nancho.net is named after the brilliant (albeit brief) overthrow of Japan's 14th century military-industrial complex
      </p>
    </div>
  );
};

export default MainContent;
