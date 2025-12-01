import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { projects, experience, skills, bio } from '../data/content';

export type CommandType = 'help' | 'about' | 'projects' | 'skills' | 'experience' | 'contact' | 'clear' | 'theme' | 'yuuichi_mode' | 'resume' | 'download-resume' | 'unknown';

export interface TerminalOutput {
  type: 'command' | 'response' | 'error' | 'component';
  content: string | React.ReactNode;
  timestamp: number;
}

interface TerminalContextType {
  history: string[];
  outputs: TerminalOutput[];
  processCommand: (input: string) => void;
  isBooting: boolean;
  clearTerminal: () => void;
}

const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

export const TerminalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [history, setHistory] = useState<string[]>([]);
  const [outputs, setOutputs] = useState<TerminalOutput[]>([]);
  const [isBooting, setIsBooting] = useState(true);

  const addToHistory = (cmd: string) => {
    setHistory(prev => [cmd, ...prev]);
  };

  const addOutput = useCallback((output: TerminalOutput) => {
    setOutputs(prev => [...prev, output]);
  }, []);

  const clearTerminal = () => {
    setOutputs([]);
  };

  const processCommand = async (input: string) => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    addToHistory(trimmedInput);
    addOutput({ type: 'command', content: trimmedInput, timestamp: Date.now() });

    const [cmd, ...args] = trimmedInput.split(' ');
    const command = cmd.toLowerCase();

    switch (command) {
      case 'help':
        addOutput({
          type: 'response',
          content: `Available commands:
  help            - Show this help message
  about           - About me
  projects [id]   - List projects or view details
  skills          - List technical skills
  experience      - Work experience timeline
  contact         - Contact information
  resume          - View resume
  download-resume - Download PDF resume
  clear           - Clear terminal
  theme           - Toggle theme (WIP)`,
          timestamp: Date.now()
        });
        break;

      case 'about':
        addOutput({ type: 'response', content: bio, timestamp: Date.now() });
        break;

      case 'projects':
        if (args.length > 0) {
          const id = args[0];
          const project = projects.find(p => p.id === id);
          if (project) {
            addOutput({
              type: 'component',
              content: `PROJECT_DETAIL:${id}`,
              timestamp: Date.now()
            });
          } else {
            addOutput({ type: 'error', content: `Project with ID ${id} not found.`, timestamp: Date.now() });
          }
        } else {
          const projectList = projects.map(p => `[${p.id}] ${p.title} - ${p.description}`).join('\n');
          addOutput({ type: 'response', content: projectList, timestamp: Date.now() });
        }
        break;

      case 'skills':
        const skillsList = `
Frontend: ${skills.frontend.join(', ')}
Backend:  ${skills.backend.join(', ')}
Tools:    ${skills.tools.join(', ')}
        `;
        addOutput({ type: 'response', content: skillsList, timestamp: Date.now() });
        break;

      case 'experience':
        const expList = experience.map(e => `
${e.date} | ${e.role} @ ${e.company}
${e.description}
        `).join('\n');
        addOutput({ type: 'response', content: expList, timestamp: Date.now() });
        break;

      case 'contact':
        addOutput({
          type: 'response',
          content: `
Email:    hello@example.com
GitHub:   github.com/example
LinkedIn: linkedin.com/in/example
          `,
          timestamp: Date.now()
        });
        break;
      
      case 'resume':
        addOutput({
          type: 'response',
          content: 'Rendering resume...',
          timestamp: Date.now()
        });
        break;

      case 'download-resume':
        addOutput({
          type: 'response',
          content: 'Downloading resume...',
          timestamp: Date.now()
        });
        break;

      case 'clear':
        clearTerminal();
        break;

      case 'yuuichi_mode':
        addOutput({
          type: 'component',
          content: 'YUUICHI_MODE',
          timestamp: Date.now()
        });
        break;

      default:
        addOutput({ type: 'error', content: `Command not found: ${command}. Type 'help' for available commands.`, timestamp: Date.now() });
    }
  };

  useEffect(() => {
    const bootSequence = async () => {
      addOutput({ type: 'response', content: 'Initializing system...', timestamp: Date.now() });
      await new Promise(r => setTimeout(r, 500));
      addOutput({ type: 'response', content: 'Loading modules...', timestamp: Date.now() });
      await new Promise(r => setTimeout(r, 500));
      addOutput({ type: 'response', content: 'System ready.', timestamp: Date.now() });
      addOutput({ type: 'response', content: 'Welcome to the Cyberpunk Terminal. Type "help" to start.', timestamp: Date.now() });
      setIsBooting(false);
    };

    if (isBooting) {
      bootSequence();
    }
  }, []);

  return (
    <TerminalContext.Provider value={{ history, outputs, processCommand, isBooting, clearTerminal }}>
      {children}
    </TerminalContext.Provider>
  );
};

export const useTerminal = () => {
  const context = useContext(TerminalContext);
  if (context === undefined) {
    throw new Error('useTerminal must be used within a TerminalProvider');
  }
  return context;
};
