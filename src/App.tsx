import React from 'react';
import { Terminal } from './components/Terminal/Terminal';
import { Background } from './components/UI/Background';
import { Sidebar } from './components/UI/Sidebar';
import { TerminalProvider, useTerminal } from './hooks/useTerminal';

const AppContent = () => {
  const { processCommand } = useTerminal();
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      <Background />
      <div className="relative z-10">
        <Terminal />
      </div>
      
      <Sidebar onCommand={processCommand} />
    </div>
  );
};

function App() {
  return (
    <TerminalProvider>
      <AppContent />
    </TerminalProvider>
  );
}

export default App;
