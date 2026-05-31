import rxIcon from "@/assets/images/Rx1.gif";
import sapLogoImg from "@/assets/images/SAPlogo.jpg";
import m10LogoImg from "@/assets/images/M10logo.jpg";
import face2Img from "@/assets/images/FACE2.jpg";
import achilletImg from "@/assets/images/ACHILLET.jpg";
import dragonImg from "@/assets/images/bmdragT3.gif";
import snake3Gif from "@/assets/images/SNAKE3.gif";
import bigBodthImg from "@/assets/images/BIGBODTH.jpg";
import mangetImg from "@/assets/images/mangets7.gif";

const links = [
  { image: sapLogoImg, label: "Sacred Animals", sublabel: "Party Site", href: "#" },
  { image: m10LogoImg, label: "Magic 10% Site", sublabel: "", href: "#" },
  { image: face2Img, label: "Excise BIG Personhood,", sublabel: "Neuter Corporate Rulers", href: "https://nikunjdz.github.io/excise-big/" },
  { image: achilletImg, label: "Reinscribe Corporate Codes,", sublabel: "Re-engineer Big DNA", href: "https://nikunjdz.github.io/reinscrive/" },
  { image: snake3Gif, label: "Remasculate Democracy,", sublabel: "The Big T and Sovereignty", href: "https://nikunjdz.github.io/remasculate/" },
  { image: bigBodthImg, label: "Practice Big Med at Home!", sublabel: "The Big Medicine Mailing List", href: "#" },
];

const LeftSidebar = () => {
  return (
    // Increased width from 132px to 180px
    <div className="w-[180px] flex flex-col items-center gap-10 p-4 text-center bg-transparent min-h-screen flex-shrink-0 border-r border-gray-800">

      {/* Header Section */}
      <div className="flex flex-col items-center mb-6">
        {/* Increased logo size from w-14 to w-20 */}
        <img src={rxIcon} alt="Rx" className="w-20 h-auto mb-3" />
        {/* Increased text from 11px to 13px */}
        <p className="text-[13px] font-bold text-[#00FFCC] uppercase tracking-normal leading-tight">
          BIG MEDICINE<br />AT WORK
        </p>
      </div>

      <nav className="flex flex-col items-center space-y-10">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="flex flex-col items-center group no-underline"
            {...(link.href !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {/* Increased image size from w-16 to w-28 */}
            <img
              src={link.image}
              alt={link.label}
              className="w-28 h-auto mb-2 border border-gray-700 group-hover:border-white transition-all shadow-lg"
            />
            {/* Increased text size from 10px to 12px (text-xs) */}
            <span className="text-[12px] font-medium text-[#00FFCC] leading-snug group-hover:text-yellow-200 px-2">
              {link.label}
              {link.sublabel && <><br /><span className="opacity-80 font-normal">{link.sublabel}</span></>}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default LeftSidebar;