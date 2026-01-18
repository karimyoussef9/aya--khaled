
import React, { useState, useEffect } from 'react';
import SelectionScreen from './components/SelectionScreen';
import WeddingContent from './components/WeddingContent';
import { Team } from './types';

const App: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<Team>(null);
  const [showContent, setShowContent] = useState(false);

  const handleSelectTeam = (team: Team) => {
    setSelectedTeam(team);
    // Smooth transition effect
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  if (!showContent) {
    return <SelectionScreen onSelect={handleSelectTeam} selectedTeam={selectedTeam} />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${
      selectedTeam === 'bride' 
        ? 'bg-rose-50' 
        : 'bg-slate-50'
    }`}>
      <WeddingContent team={selectedTeam!} />
    </div>
  );
};

export default App;
