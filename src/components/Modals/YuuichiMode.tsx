import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const YuuichiMode: React.FC = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 1000),
      setTimeout(() => setStage(2), 3000),
      setTimeout(() => setStage(3), 6000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black pointer-events-none">
      {stage === 0 && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="text-neon-green font-mono text-2xl glitch"
        >
          SYSTEM OVERRIDE INITIATED...
        </motion.div>
      )}
      
      {stage === 1 && (
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          className="text-neon-pink font-bold text-6xl text-center"
        >
          LIMITS ARE AN ILLUSION
        </motion.div>
      )}

      {stage === 2 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white font-mono text-xl"
        >
          Welcome to the next level.
        </motion.div>
      )}
    </div>
  );
};
