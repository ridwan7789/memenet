import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Brain, Users, Coins } from 'lucide-react';
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

const ecosystemItems = [
  {
    icon: Sparkles,
    title: 'Meme Culture',
    description: 'Embracing the power of viral content and community creativity',
    color: 'neon-green',
  },
  {
    icon: Brain,
    title: 'AI Intelligence',
    description: 'Leveraging artificial intelligence to enhance meme creation',
    color: 'neon-purple',
  },
  {
    icon: Users,
    title: 'Community Network',
    description: 'Building a global network of meme enthusiasts and creators',
    color: 'neon-cyan',
  },
  {
    icon: Coins,
    title: 'Digital Value',
    description: 'Transforming creativity into real digital economic value',
    color: 'electric-blue',
  },
];

const EcosystemCard = ({
  item,
  index
}: {
  item: typeof ecosystemItems[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = item.icon;

  const colorMap: Record<string, { border: string; glow: string; text: string }> = {
    'neon-green': {
      border: 'hsl(160 92% 51%)',
      glow: 'hsl(160 92% 51% / 0.3)',
      text: 'text-neon-green',
    },
    'neon-purple': {
      border: 'hsl(265 100% 64%)',
      glow: 'hsl(265 100% 64% / 0.3)',
      text: 'text-secondary',
    },
    'neon-cyan': {
      border: 'hsl(157 100% 50%)',
      glow: 'hsl(157 100% 50% / 0.3)',
      text: 'text-neon-cyan',
    },
    'electric-blue': {
      border: 'hsl(190 100% 51%)',
      glow: 'hsl(190 100% 51% / 0.3)',
      text: 'text-accent',
    },
  };

  const colors = colorMap[item.color];

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <motion.div
        className="glass-card p-6 md:p-8 h-full relative overflow-hidden cursor-pointer"
        whileHover={{
          y: -10,
          transition: { duration: 0.3 }
        }}
        style={{
          borderColor: `${colors.border}33`,
        }}
      >
        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, ${colors.glow}, transparent 70%)`,
          }}
        />

        {/* Animated data lines */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-30 pointer-events-none"
          initial={false}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full"
              style={{
                top: `${20 + i * 20}%`,
                background: `linear-gradient(90deg, transparent, ${colors.border}, transparent)`,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            />
          ))}
        </motion.div>

        {/* Icon */}
        <motion.div
          className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 relative ${colors.text}`}
          style={{
            background: `linear-gradient(135deg, ${colors.border}20, ${colors.border}10)`,
            border: `1px solid ${colors.border}50`,
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Icon size={28} />
          <motion.div
            className="absolute inset-0 rounded-xl"
            style={{ boxShadow: `0 0 20px ${colors.glow}` }}
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Content */}
        <motion.h3
          className={`font-display text-xl md:text-2xl font-bold mb-3 ${colors.text}`}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
        >
          {item.title}
        </motion.h3>
        <motion.p
          className="text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
        >
          {item.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const EcosystemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-neon-green/5 blur-3xl"
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
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-neon-purple/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Floating Meme Elements - All Assets in Circular Form - Creating a Galaxy Pattern - Responsive */}
      <motion.img
        src={dogeLogo}
        alt="Doge Meme"
        className="absolute w-10 h-10 md:w-14 md:h-14 object-cover rounded-full opacity-60"
        style={{ top: '25%', left: '10%' }}
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
        style={{ top: '70%', left: '20%' }}
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
        style={{ top: '10%', right: '15%' }}
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
        style={{ bottom: '30%', right: '25%' }}
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
        style={{ top: '55%', left: '25%' }}
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
        style={{ bottom: '20%', left: '30%' }}
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
        style={{ top: '40%', right: '15%' }}
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
        style={{ bottom: '45%', right: '30%' }}
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
        style={{ top: '65%', right: '35%' }}
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
        style={{ bottom: '40%', left: '35%' }}
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
        style={{ top: '50%', left: '5%' }}
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
        style={{ bottom: '15%', left: '20%' }}
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
        style={{ top: '5%', left: '30%' }}
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

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4 gradient-text relative">
            The Ecosystem
            <motion.div
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-neon-green/10 blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Four pillars powering the future of meme-driven innovation
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
          {ecosystemItems.map((item, index) => (
            <EcosystemCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* Connecting lines between cards */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(160 92% 51%)" stopOpacity="0.2" />
              <stop offset="50%" stopColor="hsl(265 100% 64%)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="hsl(190 100% 51%)" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <motion.line
            x1="25%"
            y1="60%"
            x2="75%"
            y2="60%"
            stroke="url(#connectionGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.line
            x1="25%"
            y1="80%"
            x2="75%"
            y2="40%"
            stroke="url(#connectionGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
          />
        </svg>
      </div>
    </section>
  );
};

export default EcosystemSection;
