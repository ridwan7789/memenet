import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import popcatLogo from '@/assets/popcat-logo.png';
import bonkLogo from '@/assets/bonk-logo.png';
import dogeLogo from '@/assets/doge-logo.webp';
import pepeLogo from '@/assets/pepe-logo.png';
import shibaLogo from '@/assets/shiba-logo.png';
import memenetLogo from '@/assets/memenet-logo.jpeg';
import bomeLogo from '@/assets/bome-logo.png';
import fartLogo from '@/assets/fart-logo.webp';
import memenetLogoJpeg from '@/assets/memenet-logo.jpeg';
import myro from '@/assets/myro.webp';
import ponkeLogo from '@/assets/ponke-logo.png';
import silyLogo from '@/assets/sily-logo.png';
import trumpLogo from '@/assets/trump-logo.jpeg';
import wojakLogo from '@/assets/wojak-logo.png';

const orbitingMemes = [
  { src: shibaLogo, name: 'Shiba', orbit: 120, speed: 25, size: 50 },
  { src: pepeLogo, name: 'Pepe', orbit: 180, speed: 35, size: 55 },
  { src: dogeLogo, name: 'Doge', orbit: 240, speed: 45, size: 60 },
  { src: bonkLogo, name: 'Bonk', orbit: 160, speed: 30, size: 48 },
  { src: popcatLogo, name: 'Popcat', orbit: 200, speed: 40, size: 52 },
];

const MemeGalaxySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const parallaxX = useTransform(smoothX, [0, 1], [-15, 15]);
  const parallaxY = useTransform(smoothY, [0, 1], [-15, 15]);

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-neon-green/5 to-neon-purple/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-gradient-to-r from-electric-blue/5 to-neon-cyan/5 blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.08, 0.12, 0.08]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Floating Meme Elements - All Assets in Circular Form - Creating a Galaxy Pattern - Responsive */}
      <motion.img
        src={bomeLogo}
        alt="BOME Meme"
        className="absolute w-10 h-10 md:w-14 md:h-14 object-cover rounded-full opacity-60"
        style={{ top: '25%', left: '15%' }}
        animate={{
          y: [0, -25, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.img
        src={fartLogo}
        alt="Fart Meme"
        className="absolute w-8 h-8 md:w-12 md:h-12 object-cover rounded-full opacity-50"
        style={{ top: '70%', left: '25%' }}
        animate={{
          y: [0, 20, 0],
          rotate: [0, -4, 4, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.img
        src={silyLogo}
        alt="Sily Meme"
        className="absolute w-6 h-6 md:w-10 md:h-10 object-cover rounded-full opacity-55"
        style={{ top: '15%', right: '20%' }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, 6, -6, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.img
        src={myro}
        alt="Myro Meme"
        className="absolute w-8 h-8 md:w-12 md:h-12 object-cover rounded-full opacity-65"
        style={{ bottom: '30%', right: '30%' }}
        animate={{
          y: [0, 25, 0],
          rotate: [0, -3, 3, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.img
        src={ponkeLogo}
        alt="Ponke Meme"
        className="absolute w-12 h-12 md:w-16 md:h-16 object-cover rounded-full opacity-50"
        style={{ top: '60%', left: '30%' }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 7, -7, 0]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.img
        src={trumpLogo}
        alt="Trump Meme"
        className="absolute w-9 h-9 md:w-13 md:h-13 object-cover rounded-full opacity-55"
        style={{ bottom: '20%', left: '35%' }}
        animate={{
          x: [0, 15, -15, 0],
          y: [0, -10, 10, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.img
        src={wojakLogo}
        alt="Wojak Meme"
        className="absolute w-7 h-7 md:w-11 md:h-11 object-cover rounded-full opacity-50"
        style={{ top: '45%', right: '20%' }}
        animate={{
          x: [0, -20, 20, 0],
          y: [0, 15, -15, 0],
          rotate: [0, -8, 8, 0]
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4 gradient-text relative">
            Solana Meme Galaxy
            <motion.div
              className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-neon-purple/10 blur-xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore the interconnected universe of meme culture
          </motion.p>
        </motion.div>

        {/* Galaxy visualization */}
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          {/* Background glow */}
          <motion.div
            className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, hsl(160 92% 51% / 0.15) 0%, hsl(265 100% 64% / 0.1) 40%, transparent 70%)',
              x: parallaxX,
              y: parallaxY,
            }}
          />

          {/* Central core */}
          <motion.div
            className="relative z-10"
            style={{ x: parallaxX, y: parallaxY }}
          >
            <motion.div
              className="absolute inset-0 rounded-full blur-2xl"
              style={{
                background: 'linear-gradient(135deg, hsl(160 92% 51% / 0.5), hsl(265 100% 64% / 0.5))',
                transform: 'scale(1.5)',
              }}
              animate={{
                scale: [1.5, 1.7, 1.5],
                opacity: [0.5, 0.7, 0.5],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.img
              src={memenetLogo}
              alt="MEMENET Core"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
              style={{
                border: '3px solid hsl(160 92% 51% / 0.5)',
                boxShadow: '0 0 40px hsl(160 92% 51% / 0.4), 0 0 80px hsl(265 100% 64% / 0.3)',
              }}
              animate={{
                boxShadow: [
                  '0 0 40px hsl(160 92% 51% / 0.4), 0 0 80px hsl(265 100% 64% / 0.3)',
                  '0 0 60px hsl(160 92% 51% / 0.6), 0 0 120px hsl(265 100% 64% / 0.5)',
                  '0 0 40px hsl(160 92% 51% / 0.4), 0 0 80px hsl(265 100% 64% / 0.3)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* Reduced floating particles for performance */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: `hsl(${160 + i * 10}, 92%, 51%)`,
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 10 - 5, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Orbiting memes - Enhanced animations */}
          {orbitingMemes.map((meme, index) => {
            return (
              <motion.div
                key={meme.name}
                className="absolute"
                style={{
                  width: meme.orbit * 2,
                  height: meme.orbit * 2,
                }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.2 }}
              >
                {/* Orbit ring - enhanced */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-neon-green/10"
                  animate={{
                    rotate: 360
                  }}
                  transition={{
                    duration: 60 + index * 10,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                />

                {/* Orbiting meme - optimized animation */}
                <motion.div
                  className="absolute"
                  style={{
                    width: meme.size,
                    height: meme.size,
                    left: '50%',
                    top: '50%',
                    marginLeft: -meme.size / 2,
                    marginTop: -meme.size / 2,
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: meme.speed,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <motion.div
                    style={{
                      transform: `translateX(${meme.orbit}px)`,
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        duration: meme.speed,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      <motion.img
                        src={meme.src}
                        alt={meme.name}
                        className="w-full h-full object-contain rounded-full"
                        style={{
                          filter: 'drop-shadow(0 0 10px hsl(160 92% 51% / 0.5))',
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Enhanced connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(160 92% 51%)" stopOpacity="0.3" />
                <stop offset="50%" stopColor="hsl(265 100% 64%)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="hsl(190 100% 51%)" stopOpacity="0.1" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {[...Array(12)].map((_, i) => (
              <motion.line
                key={i}
                x1="50%"
                y1="50%"
                x2={`${50 + Math.cos((i * Math.PI) / 6) * 40}%`}
                y2={`${50 + Math.sin((i * Math.PI) / 6) * 40}%`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.6 } : {}}
                transition={{ duration: 1, delay: i * 0.1 }}
                filter="url(#glow)"
              />
            ))}
          </svg>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="font-display text-2xl md:text-4xl font-bold mb-4 text-neon-cyan">
            Ready to Join the Meme Revolution?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't just observe the galaxy - become a part of it! Your favorite memes are waiting for you.
          </p>
          <motion.button
            className="btn-hero rounded-xl glitch-hover px-8 py-4 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Start Meme Journey Now
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MemeGalaxySection;
