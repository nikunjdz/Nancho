import dawnBanner from "@/assets/dawn-banner.jpg";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import MainContent from "@/components/MainContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div className="w-full">
        <img
          src={dawnBanner}
          alt="Dawn Banner"
          className="w-full h-auto object-cover max-h-28"
          width={1920}
          height={512}
        />
      </div>

      {/* Three-column layout */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto border border-border">
        {/* Left Sidebar */}
        <aside className="w-full md:w-44 border-r border-border bg-background flex-shrink-0">
          <LeftSidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <MainContent />
        </main>

        {/* Right Sidebar */}
        <aside className="w-full md:w-44 border-l border-border bg-background flex-shrink-0">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
};

export default Index;
