import React from 'react';
import { Home, Folder, Mail, FileText, Terminal as TerminalIcon } from 'lucide-react';
import { useTerminal } from '../../hooks/useTerminal';

interface SidebarProps {
  onCommand: (cmd: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onCommand }) => {
  const menuItems = [
    { icon: Home, label: 'Home', command: 'clear' },
    { icon: Folder, label: 'Projects', command: 'projects' },
    { icon: FileText, label: 'Resume', command: 'resume' },
    { icon: Mail, label: 'Contact', command: 'contact' },
  ];

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-50">
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={() => onCommand(item.command)}
          className="group relative p-3 rounded-full bg-black/40 border border-white/10 hover:border-neon-blue/50 hover:bg-neon-blue/10 transition-all duration-300 backdrop-blur-sm"
          aria-label={item.label}
        >
          <item.icon className="w-5 h-5 text-gray-400 group-hover:text-neon-blue transition-colors" />
          
          {/* Tooltip */}
          <span className="absolute left-full ml-4 px-2 py-1 bg-black/80 border border-white/10 rounded text-xs text-neon-blue opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};
