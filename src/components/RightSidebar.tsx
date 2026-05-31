import archivesSignImg from "@/assets/images/arcswing.gif";
import cop10Img from "@/assets/images/cop10.jpg";
import truthImg from "@/assets/images/satyasamT.jpg";
import wbaiImg from "@/assets/images/SAPmiclogo.png";
import chautauquaImg from "@/assets/images/NO$FLAGT.jpg";
import karmaImg from "@/assets/images/JITTOKU1.jpg";
import vprezImg from "@/assets/images/swinglib.gif";
import memeImg from "@/assets/images/ACHILLET.jpg";
import fdlapImg from "@/assets/images/FdlogoS.gif";

const archives = [
  // { image: cop10Img, label: "COP10 Conference", sublabel: "Archive", href: "#" },
  { image: truthImg, label: "Truth Emergency", sublabel: "Archive", href: "https://nikunjdz.github.io/truthemergency/" },
  { image: wbaiImg, label: "Ain't that Good News", sublabel: "WBAI Radio Show Archive", href: "https://nikunjdz.github.io/Aintthatgood/" },
  { image: chautauquaImg, label: "New Chautauqua", sublabel: "Archive", href: "https://nikunjdz.github.io/newchau-/newchau/arc/newindex.html" },
  { image: karmaImg, label: "Index for Original", sublabel: "Big Karma Site", href: "https://nikunjdz.github.io/indexfororg/" },
  { image: vprezImg, label: "Big Med 2000", sublabel: "V-Prez Campaign", href: "https://nikunjdz.github.io/bigmed2000/" },
  { image: memeImg, label: "Meme Works", sublabel: "", href: "https://nikunjdz.github.io/memework/" },
  { image: fdlapImg, label: "Forum of Democratic Leaders", sublabel: "of the Asia-Pacific", href: "https://nikunjdz.github.io/formere/" },
];

const RightSidebar = () => {
  return (
    // Increased width from 132px to 180px and padded the container
    <div className="w-[180px] flex flex-col items-center gap-10 p-4 text-center bg-transparent min-h-screen flex-shrink-0 border-l border-gray-800">

      {/* Header Section */}
      <div className="flex flex-col items-center mb-6">
        {/* Increased logo size from w-14 to w-20 */}
        <img src={archivesSignImg} alt="Archives" className="w-20 h-auto mb-3" />
        {/* Increased text size from 11px to 13px */}
        <p className="text-[13px] font-bold text-white uppercase tracking-widest leading-tight">
          OLD SITE<br />ARCHIVES
        </p>
      </div>

      {/* Navigation Section */}
      <nav className="flex flex-col items-center space-y-10">
        {archives.map((link, i) => (
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
            {/* Increased text size from 10px to 12px */}
            <span className="text-[12px] font-medium text-white leading-snug group-hover:text-yellow-200 px-2">
              {link.label}
              {link.sublabel && <><br /><span className="opacity-80 font-normal">{link.sublabel}</span></>}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default RightSidebar;