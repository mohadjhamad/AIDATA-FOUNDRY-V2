import React from 'react';
import { motion } from 'framer-motion';

export default function DataBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-red-950/30 to-slate-950" />
      
      {/* Hexagonal grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
              <path d="M50 0L93.3 25v50L50 100 6.7 75V25z" fill="none" stroke="rgba(239, 68, 68, 0.2)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>
      
      {/* Binary code rain */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-red-500 font-mono text-xs"
            style={{
              left: `${(i * 7) % 100}%`,
              top: -20,
            }}
            animate={{
              y: ['0vh', '110vh'],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('\n')}
          </motion.div>
        ))}
      </div>
      
      {/* Glowing data particles */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              background: `rgba(239, 68, 68, ${Math.random() * 0.5 + 0.3})`,
              boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)',
            }}
            animate={{
              y: [0, Math.random() * -100 - 50, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      {/* Circuit board lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {[...Array(30)].map((_, i) => {
          const isHorizontal = Math.random() > 0.5;
          return (
            <motion.line
              key={i}
              x1={isHorizontal ? '0%' : `${Math.random() * 100}%`}
              y1={isHorizontal ? `${Math.random() * 100}%` : '0%'}
              x2={isHorizontal ? '100%' : `${Math.random() * 100}%`}
              y2={isHorizontal ? `${Math.random() * 100}%` : '100%'}
              stroke="rgb(239, 68, 68)"
              strokeWidth="1"
              strokeDasharray="5,10"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 1, 0],
                opacity: [0, 0.5, 0.5, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          );
        })}
      </svg>
      
      {/* Large glowing orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          top: '20%',
          left: '10%',
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          bottom: '20%',
          right: '10%',
        }}
        animate={{
          scale: [1.3, 1, 1.3],
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      
      {/* Data flow streams */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: `${Math.random() * 360}deg`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}