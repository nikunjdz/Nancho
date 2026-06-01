import React, { useState } from 'react';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import MainContent from './components/MainContent';
import Search from './pages/Search';
import Allies from './pages/Allies';
import Approaches from './pages/Approaches';
import Study from './pages/Study';
import Assist from './pages/Assist';
import Contact from './pages/Contact';

// Import your space gif
import spaceBg from './assets/images/space4.gif';

function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const renderContent = () => {
    switch (currentPage) {
      case "search":
        return <Search onNavigate={setCurrentPage} />;
      case "allies":
        return <Allies onNavigate={setCurrentPage} />;
      case "approaches":
        return <Approaches onNavigate={setCurrentPage} />;
      case "study":
        return <Study onNavigate={setCurrentPage} />;
      case "assist":
        return <Assist onNavigate={setCurrentPage} />;
      case "contact":
        return <Contact onNavigate={setCurrentPage} />;
      default:
        return <MainContent onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div
      className="flex min-h-screen w-full"
      style={{
        backgroundImage: `url(${spaceBg})`,
        backgroundRepeat: 'repeat',
        backgroundColor: '#000' // Black fallback
      }}
    >
      {/* The sidebars MUST be bg-transparent to see the stars behind them */}
      <LeftSidebar onNavigate={setCurrentPage} />

      {/* The center content MUST be solid to hide the stars behind the text */}
      <main className="flex-1 bg-[#004422] border-x border-gray-800 shadow-2xl overflow-y-auto">
        {renderContent()}
      </main>

      <RightSidebar onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;