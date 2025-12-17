import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
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

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-neon-green/10 blur-xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-20 w-24 h-24 rounded-full bg-neon-purple/10 blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.05, 0.15]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-electric-blue/10 blur-xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Floating Meme Elements - All Assets in Circular Form - Creating a Galaxy Pattern - Responsive */}
      <motion.img
        src={dogeLogo}
        alt="Doge Meme"
        className="absolute w-10 h-10 md:w-14 md:h-14 object-cover rounded-full opacity-60"
        style={{ top: '20%', left: '15%' }}
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
        style={{ top: '65%', left: '10%' }}
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
        style={{ top: '15%', right: '25%' }}
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
        style={{ bottom: '25%', right: '20%' }}
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
        style={{ top: '50%', left: '20%' }}
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
        style={{ bottom: '15%', left: '25%' }}
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
        style={{ top: '35%', right: '10%' }}
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
        style={{ bottom: '40%', right: '25%' }}
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
        style={{ top: '60%', right: '30%' }}
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
        style={{ bottom: '35%', left: '30%' }}
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
        style={{ top: '45%', left: '5%' }}
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
        style={{ bottom: '20%', left: '15%' }}
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
        style={{ top: '10%', left: '25%' }}
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

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="glass-card p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Animated border gradient */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'linear-gradient(90deg, hsl(160 92% 51% / 0.3), hsl(265 100% 64% / 0.3), hsl(190 100% 51% / 0.3), hsl(160 92% 51% / 0.3))',
              backgroundSize: '300% 100%',
              padding: '2px',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'xor',
              WebkitMaskComposite: 'xor',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Floating animated elements inside the card */}
          <motion.div
            className="absolute top-6 left-6 w-8 h-8 rounded-full bg-neon-green/20"
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.div
            className="absolute bottom-8 right-10 w-6 h-6 rounded-full bg-neon-purple/20"
            animate={{
              x: [0, 8, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />

          {/* Content */}
          <motion.h2
            className="font-display text-3xl md:text-5xl font-bold mb-6 gradient-text relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About $MEMENET
            <motion.span
              className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-neon-green"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.span
              className="neon-text-green inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              $MEMENET
            </motion.span> merges meme culture with artificial intelligence
            to create a <motion.span
              className="text-neon-purple inline-block relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              new digital economy
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              />
            </motion.span> where creativity becomes value.
            Built on <motion.span
              className="text-neon-cyan inline-block relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Solana
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
              />
            </motion.span>, we're pioneering the future of
            community-driven innovation through humor, AI, and blockchain technology.
          </motion.p>

          {/* Decorative elements */}
          <motion.div
            className="absolute top-4 right-4 w-20 h-20 opacity-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="10 5" />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(160 92% 51%)" />
                  <stop offset="100%" stopColor="hsl(265 100% 64%)" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
