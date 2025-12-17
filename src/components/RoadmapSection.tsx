import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Rocket, Zap, Brain, Globe, Sparkles } from 'lucide-react';
import bomeLogo from '@/assets/bome-logo.png';
import bonkLogo from '@/assets/bonk-logo.png';
import dogeLogo from '@/assets/doge-logo.webp';
import fartLogo from '@/assets/fart-logo.webp';
import memenetLogoJpeg from '@/assets/memenet-logo.jpeg';
import myro from '@/assets/myro.webp';
import pepeLogo from '@/assets/pepe-logo.png';
import ponkeLogo from '@/assets/ponke-logo.png';
import popcatLogo from '@/assets/popcat-logo.png';
import shibaLogo from '@/assets/shiba-logo.png';
import silyLogo from '@/assets/sily-logo.png';
import trumpLogo from '@/assets/trump-logo.jpeg';
import wojakLogo from '@/assets/wojak-logo.png';

const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Genesis',
    icon: Rocket,
    items: ['Brand & website launch', 'Community building', 'Fair launch on Solana (Pump.fun)'],
    color: 'neon-green',
  },
  {
    phase: 'Phase 2',
    title: 'Meme Network',
    icon: Zap,
    items: ['Meme campaigns', 'Solana community partnerships', 'Enhanced website interactivity'],
    color: 'neon-cyan',
  },
  {
    phase: 'Phase 3',
    title: 'AI Integration',
    icon: Brain,
    items: ['AI-powered meme tools', 'Meme intelligence system', 'Dashboard preview'],
    color: 'neon-purple',
  },
  {
    phase: 'Phase 4',
    title: 'Expansion',
    icon: Globe,
    items: ['Creator utilities', 'Ecosystem growth', 'Advanced AI features'],
    color: 'electric-blue',
  },
  {
    phase: 'Phase 5',
    title: 'Memetaverse',
    icon: Sparkles,
    items: ['Fully interactive Meme Galaxy', 'Gamified meme ecosystem', 'Long-term evolution'],
    color: 'neon-green',
  },
];

const RoadmapNode = ({
  phase,
  index,
  isLast
}: {
  phase: typeof roadmapPhases[0];
  index: number;
  isLast: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = phase.icon;

  const colorMap: Record<string, { border: string; glow: string; bg: string }> = {
    'neon-green': {
      border: 'border-neon-green',
      glow: '0 0 30px hsl(160 92% 51% / 0.5)',
      bg: 'bg-neon-green/20',
    },
    'neon-cyan': {
      border: 'border-neon-cyan',
      glow: '0 0 30px hsl(157 100% 50% / 0.5)',
      bg: 'bg-neon-cyan/20',
    },
    'neon-purple': {
      border: 'border-secondary',
      glow: '0 0 30px hsl(265 100% 64% / 0.5)',
      bg: 'bg-secondary/20',
    },
    'electric-blue': {
      border: 'border-accent',
      glow: '0 0 30px hsl(190 100% 51% / 0.5)',
      bg: 'bg-accent/20',
    },
  };

  const colors = colorMap[phase.color];
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className={`flex items-center gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Content Card */}
        <motion.div
          className={`flex-1 glass-card p-6 md:p-8 relative cursor-pointer ${isLeft ? 'md:text-right' : 'md:text-left'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.02 }}
          animate={{
            boxShadow: isHovered ? colors.glow : 'none',
          }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0"
            animate={{
              opacity: isHovered ? [0, 0.1, 0] : 0
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              background: `linear-gradient(45deg, transparent, ${colors.glow.split(' ')[5]}, transparent)`,
            }}
          />

          <span className={`font-display text-sm uppercase tracking-wider ${phase.color === 'neon-green' ? 'text-neon-green' : phase.color === 'neon-cyan' ? 'text-neon-cyan' : phase.color === 'neon-purple' ? 'text-secondary' : 'text-accent'}`}>
            {phase.phase}
          </span>
          <motion.h3
            className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
          >
            {phase.title}
          </motion.h3>
          <ul className={`space-y-2 text-muted-foreground ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
            {phase.items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 + index * 0.1 }}
                className="flex items-center gap-2 relative"
                style={{ justifyContent: isLeft ? 'flex-end' : 'flex-start' }}
              >
                <motion.span
                  className={`w-1.5 h-1.5 rounded-full ${isLeft ? 'mr-2' : 'ml-2'}`}
                  style={{ background: 'hsl(160 92% 51%)' }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.2
                  }}
                />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Node */}
        <div className="relative flex flex-col items-center">
          <motion.div
            className={`w-16 h-16 rounded-full ${colors.border} border-2 ${colors.bg} flex items-center justify-center z-10 relative`}
            animate={{
              boxShadow: isHovered
                ? [colors.glow, `${colors.glow}, 0 0 60px hsl(160 92% 51% / 0.3)`, colors.glow]
                : '0 0 15px hsl(160 92% 51% / 0.2)',
              scale: isHovered ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: isHovered ? 0.5 : 0.3,
              repeat: isHovered ? Infinity : 0,
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full opacity-30"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                background: `conic-gradient(from 0deg, transparent, ${colors.glow.split(' ')[5]}, transparent)`,
              }}
            />
            <Icon className={`w-7 h-7 ${phase.color === 'neon-green' ? 'text-neon-green' : phase.color === 'neon-cyan' ? 'text-neon-cyan' : phase.color === 'neon-purple' ? 'text-secondary' : 'text-accent'}`} />
          </motion.div>

          {/* Connecting line */}
          {!isLast && (
            <motion.div
              className="w-0.5 h-24 md:h-32 bg-gradient-to-b from-neon-green/50 to-neon-purple/50 relative overflow-hidden"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ transformOrigin: 'top' }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: `linear-gradient(to bottom, transparent, ${colors.glow.split(' ')[5]}, transparent)`,
                  y: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
            </motion.div>
          )}
        </div>

        {/* Spacer for alignment */}
        <div className="flex-1 hidden md:block" />
      </div>
    </motion.div>
  );
};

const RoadmapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-neon-green/5 to-electric-blue/5 blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.05, 0.1, 0.05],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-neon-purple/5 to-neon-cyan/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.08, 0.12, 0.08],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Floating Meme Elements - All Assets in Circular Form - Creating a Galaxy Pattern - Responsive */}
      <motion.img
        src={dogeLogo}
        alt="Doge Meme"
        className="absolute w-10 h-10 md:w-14 md:h-14 object-cover rounded-full opacity-60"
        style={{ top: '15%', left: '20%' }}
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
        src={pepeLogo}
        alt="Pepe Meme"
        className="absolute w-8 h-8 md:w-12 md:h-12 object-cover rounded-full opacity-50"
        style={{ top: '60%', left: '10%' }}
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
        src={shibaLogo}
        alt="Shiba Meme"
        className="absolute w-6 h-6 md:w-10 md:h-10 object-cover rounded-full opacity-55"
        style={{ top: '25%', right: '30%' }}
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
        src={bonkLogo}
        alt="Bonk Meme"
        className="absolute w-8 h-8 md:w-12 md:h-12 object-cover rounded-full opacity-65"
        style={{ bottom: '20%', right: '20%' }}
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
        src={popcatLogo}
        alt="Popcat Meme"
        className="absolute w-12 h-12 md:w-16 md:h-16 object-cover rounded-full opacity-50"
        style={{ top: '45%', left: '25%' }}
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
        style={{ bottom: '25%', left: '35%' }}
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
        style={{ top: '30%', right: '15%' }}
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
      <motion.img
        src={bomeLogo}
        alt="BOME Meme"
        className="absolute w-6 h-6 md:w-10 md:h-10 object-cover rounded-full opacity-60"
        style={{ bottom: '35%', right: '35%' }}
        animate={{
          x: [0, 10, -25, 0],
          y: [0, -20, 20, 0],
          rotate: [0, 12, -12, 0]
        }}
        transition={{
          duration: 8.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.img
        src={silyLogo}
        alt="Sily Meme"
        className="absolute w-5 h-5 md:w-9 md:h-9 object-cover rounded-full opacity-60"
        style={{ top: '55%', right: '40%' }}
        animate={{
          x: [0, -15, 10, 0],
          y: [0, 25, -25, 0],
          rotate: [0, -15, 15, 0]
        }}
        transition={{
          duration: 5.8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.img
        src={memenetLogoJpeg}
        alt="MEMENET Logo"
        className="absolute w-10 h-10 md:w-14 md:h-14 object-cover rounded-full opacity-40"
        style={{ bottom: '40%', left: '40%' }}
        animate={{
          x: [0, 25, -20, 0],
          y: [0, -15, 30, 0],
          rotate: [0, 20, -20, 0]
        }}
        transition={{
          duration: 6.8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.img
        src={fartLogo}
        alt="Fart Meme"
        className="absolute w-7 h-7 md:w-11 md:h-11 object-cover rounded-full opacity-55"
        style={{ top: '40%', left: '5%' }}
        animate={{
          x: [0, 10, -15, 0],
          y: [0, -20, 15, 0],
          rotate: [0, 15, -15, 0]
        }}
        transition={{
          duration: 7.8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.img
        src={myro}
        alt="Myro Meme"
        className="absolute w-6 h-6 md:w-10 md:h-10 object-cover rounded-full opacity-55"
        style={{ bottom: '15%', left: '25%' }}
        animate={{
          x: [0, -15, 20, 0],
          y: [0, 15, -10, 0],
          rotate: [0, -20, 20, 0]
        }}
        transition={{
          duration: 8.8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.img
        src={ponkeLogo}
        alt="Ponke Meme"
        className="absolute w-8 h-8 md:w-12 md:h-12 object-cover rounded-full opacity-50"
        style={{ top: '5%', left: '40%' }}
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -15, 25, 0],
          rotate: [0, 25, -25, 0]
        }}
        transition={{
          duration: 6.2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4 gradient-text relative">
            Roadmap
            <motion.div
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-neon-cyan/10 blur-xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 10,
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
            Our journey to revolutionize the meme economy
          </motion.p>
        </motion.div>

        <div className="space-y-0 relative z-10">
          {roadmapPhases.map((phase, index) => (
            <RoadmapNode
              key={phase.phase}
              phase={phase}
              index={index}
              isLast={index === roadmapPhases.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
