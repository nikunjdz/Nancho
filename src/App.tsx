import React from 'react';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import MainContent from './components/MainContent';
// Import your space gif
import spaceBg from './assets/images/space4.gif';

function App() {
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
      <LeftSidebar />

      {/* The center content MUST be solid to hide the stars behind the text */}
      <main className="flex-1 bg-[#004422] border-x border-gray-800 shadow-2xl">
        <MainContent />
      </main>

      <RightSidebar />
    </div>
  );
}

export default App;