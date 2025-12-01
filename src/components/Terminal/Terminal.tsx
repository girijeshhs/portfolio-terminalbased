import React, { useState, useEffect, useRef } from 'react';
import { useTerminal } from '../../hooks/useTerminal';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

export const Terminal: React.FC = () => {
  const { outputs, processCommand, history, isBooting } = useTerminal();
  const [input, setInput] = useState('');
  const [historyPointer, setHistoryPointer] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [outputs]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      processCommand(input);
      setInput('');
      setHistoryPointer(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyPointer < history.length - 1) {
        const newPointer = historyPointer + 1;
        setHistoryPointer(newPointer);
        setInput(history[newPointer]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyPointer > 0) {
        const newPointer = historyPointer - 1;
        setHistoryPointer(newPointer);
        setInput(history[newPointer]);
      } else if (historyPointer === 0) {
        setHistoryPointer(-1);
        setInput('');
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-mono text-sm md:text-base" onClick={focusInput}>
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-terminal-bg backdrop-blur-md rounded-xl border border-neon-blue/30 shadow-[0_0_30px_rgba(0,243,255,0.15)] overflow-hidden flex flex-col h-[80vh]"
      >
        {/* Header */}
        <div className="bg-terminal-header px-4 py-2 flex items-center justify-between border-b border-white/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="text-terminal-dim text-xs">user@cyber-portfolio:~</div>
          <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Content */}
        <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent font-mono text-terminal-text relative scanlines">
          <AnimatePresence>
            {outputs.map((out, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-2"
              >
                {out.type === 'command' ? (
                  <div className="flex items-center gap-2 text-neon-pink">
                    <span>➜</span>
                    <span className="text-white">~</span>
                    <span>{out.content}</span>
                  </div>
                ) : out.type === 'error' ? (
                  <div className="text-red-400">{out.content}</div>
                ) : (
                  <div className="whitespace-pre-wrap text-neon-blue/90">{out.content}</div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          
          {/* Input Line */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-neon-pink">➜</span>
            <span className="text-neon-blue">~</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none flex-1 text-white caret-neon-green"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </motion.div>
    </div>
  );
};
