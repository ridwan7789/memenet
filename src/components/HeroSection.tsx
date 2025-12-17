import { motion } from 'framer-motion';
import { useState } from 'react';
import memenetLogo from '@/assets/memenet-logo.jpg';
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

const HeroSection = () => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showEmoji, setShowEmoji] = useState(false);

  const emojis = ['🚀', '💎', '🔥', '⭐', '🎉', '💰', '🌙', '✨'];

  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);
    setShowEmoji(true);
    setTimeout(() => setShowEmoji(false), 1000);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Neural sphere background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(160 92% 51% / 0.3) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Flying emojis on click */}
      {showEmoji && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute text-4xl pointer-events-none z-50"
              initial={{
                opacity: 1,
                scale: 0.5,
                x: 0,
                y: 0
              }}
              animate={{
                opacity: 0,
                scale: 1.5,
                x: (Math.random() - 0.5) * 300,
                y: -200 - Math.random() * 100,
                rotate: Math.random() * 360
              }}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={{
                left: '50%',
                top: '35%',
              }}
            >
              {emojis[i % emojis.length]}
            </motion.span>
          ))}
        </>
      )}

      {/* Logo */}
      <motion.div
        className="relative mb-8 cursor-pointer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        onHoverStart={() => setIsLogoHovered(true)}
        onHoverEnd={() => setIsLogoHovered(false)}
        onClick={handleLogoClick}
      >
        {/* Spinning ring */}
        <motion.div
          className="absolute -inset-4 rounded-full border-4 border-dashed border-neon-green/40"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />

        {/* Pulsing outer ring */}
        <motion.div
          className="absolute -inset-8 rounded-full border-2 border-neon-cyan/30"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute inset-0 rounded-full blur-3xl"
          style={{
            background: 'linear-gradient(135deg, hsl(45 100% 50% / 0.5) 0%, hsl(160 92% 51% / 0.4) 50%, hsl(265 100% 64% / 0.4) 100%)',
          }}
          animate={{
            scale: isLogoHovered ? [1, 1.4, 1.2] : [1, 1.2, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: isLogoHovered ? 0.5 : 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.img
          src={memenetLogo}
          alt="$MEMENET Logo"
          className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full"
          animate={{
            boxShadow: isLogoHovered
              ? '0 0 60px hsl(45 100% 50% / 0.8), 0 0 120px hsl(160 92% 51% / 0.6), 0 0 180px hsl(265 100% 64% / 0.4)'
              : [
                  '0 0 30px hsl(45 100% 50% / 0.5), 0 0 60px hsl(160 92% 51% / 0.3)',
                  '0 0 50px hsl(45 100% 50% / 0.7), 0 0 100px hsl(160 92% 51% / 0.5)',
                  '0 0 30px hsl(45 100% 50% / 0.5), 0 0 60px hsl(160 92% 51% / 0.3)',
                ],
            rotate: isLogoHovered ? [0, -5, 5, -5, 5, 0] : 0,
            scale: isLogoHovered ? 1.1 : 1,
          }}
          transition={{
            duration: isLogoHovered ? 0.5 : 2,
            repeat: isLogoHovered ? 0 : Infinity,
            ease: 'easeInOut',
          }}
          whileTap={{ scale: 0.9, rotate: 360 }}
        />

        {/* Click counter badge */}
        {clickCount > 0 && (
          <motion.div
            className="absolute -top-2 -right-2 bg-neon-green text-cyber-black font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            key={clickCount}
          >
            {clickCount}
          </motion.div>
        )}
      </motion.div>

      {/* Title */}
      <motion.h1
        className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="gradient-text">$MEMENET</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="font-display text-xl md:text-3xl text-neon-cyan neon-text-cyan mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Where Memes Meet AI
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.button
          className="btn-hero rounded-xl glitch-hover"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enter the Meme Network
        </motion.button>
        <motion.button
          className="btn-hero-secondary rounded-xl glitch-hover"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Meme Galaxy
        </motion.button>
      </motion.div>

      {/* Floating Memes Background Elements - Responsive */}
      <motion.img
        src={dogeLogo}
        alt="Doge Meme"
        className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-70"
        style={{ top: '15%', left: '10%' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.img
        src={pepeLogo}
        alt="Pepe Meme"
        className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 opacity-60"
        style={{ top: '25%', right: '15%' }}
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 3, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.img
        src={shibaLogo}
        alt="Shiba Meme"
        className="absolute w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18 opacity-50"
        style={{ bottom: '20%', left: '20%' }}
        animate={{
          y: [0, -25, 0],
          rotate: [0, 4, -4, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.img
        src={bonkLogo}
        alt="Bonk Meme"
        className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 opacity-65"
        style={{ bottom: '30%', right: '25%' }}
        animate={{
          y: [0, 20, 0],
          rotate: [0, -6, 6, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.img
        src={popcatLogo}
        alt="Popcat Meme"
        className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 opacity-40"
        style={{ top: '40%', left: '5%' }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 8, -8, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.img
        src={trumpLogo}
        alt="Trump Meme"
        className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-55"
        style={{ top: '70%', right: '10%' }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, -5, 5, 0]
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Additional Meme Elements Around Content - Responsive */}
      <motion.img
        src={fartLogo}
        alt="Fart Meme"
        className="absolute w-6 h-6 sm:w-8 sm:h-8 md:w-12 lg:w-16 opacity-50"
        style={{ top: '65%', left: '10%' }}
        animate={{
          x: [0, 10, -10, 0],
          y: [0, -10, 10, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.img
        src={wojakLogo}
        alt="Wojak Meme"
        className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-14 lg:w-18 opacity-55"
        style={{ bottom: '15%', right: '10%' }}
        animate={{
          x: [0, -15, 15, 0],
          y: [0, 5, -5, 0],
          rotate: [0, -8, 8, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Decorative meme elements near buttons - Responsive */}
      <motion.img
        src={dogeLogo}
        alt="Doge Meme"
        className="absolute w-5 h-5 sm:w-6 sm:h-6 md:w-8 lg:w-10 opacity-60 hidden sm:block"
        style={{ top: '45%', left: '5%' }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.img
        src={pepeLogo}
        alt="Pepe Meme"
        className="absolute w-5 h-5 sm:w-6 sm:h-6 md:w-8 lg:w-10 opacity-60 hidden sm:block"
        style={{ top: '60%', right: '5%' }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Floating Meme Elements - All Assets in Circular Form - Creating a Galaxy Pattern - Responsive */}
      <motion.img
        src={bomeLogo}
        alt="BOME Meme"
        className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover rounded-full opacity-70"
        style={{ top: '20%', left: '5%' }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.img
        src={myro}
        alt="Myro Meme"
        className="absolute w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 object-cover rounded-full opacity-60"
        style={{ top: '75%', left: '15%' }}
        animate={{
          y: [0, 25, 0],
          rotate: [0, -360]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.img
        src={ponkeLogo}
        alt="Ponke Meme"
        className="absolute w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 object-cover rounded-full opacity-55"
        style={{ top: '10%', right: '20%' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.img
        src={silyLogo}
        alt="Sily Meme"
        className="absolute w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 object-cover rounded-full opacity-65"
        style={{ bottom: '25%', right: '15%' }}
        animate={{
          y: [0, 30, 0],
          rotate: [0, -360]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.img
        src={memenetLogoJpeg}
        alt="MEMENET Logo"
        className="absolute w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-full opacity-50"
        style={{ top: '55%', left: '10%' }}
        animate={{
          y: [0, -35, 0],
          rotate: [0, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.img
        src={fartLogo}
        alt="Fart Meme"
        className="absolute w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 object-cover rounded-full opacity-50"
        style={{ top: '45%', right: '25%' }}
        animate={{
          x: [0, 40, 0, -40, 0],
          y: [0, -40, 0, 40, 0],
          rotate: [0, 360]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.img
        src={wojakLogo}
        alt="Wojak Meme"
        className="absolute w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 object-cover rounded-full opacity-55"
        style={{ bottom: '15%', left: '20%' }}
        animate={{
          x: [0, -35, 0, 35, 0],
          y: [0, 35, 0, -35, 0],
          rotate: [0, -360]
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.img
        src={dogeLogo}
        alt="Doge Meme"
        className="absolute w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 object-cover rounded-full opacity-60"
        style={{ top: '30%', left: '25%' }}
        animate={{
          x: [0, 30, 0, -30, 0],
          y: [0, -30, 0, 30, 0],
          rotate: [0, 360]
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.img
        src={pepeLogo}
        alt="Pepe Meme"
        className="absolute w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 object-cover rounded-full opacity-65"
        style={{ bottom: '40%', right: '30%' }}
        animate={{
          x: [0, -25, 0, 25, 0],
          y: [0, 25, 0, -25, 0],
          rotate: [0, -360]
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.img
        src={shibaLogo}
        alt="Shiba Meme"
        className="absolute w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 object-cover rounded-full opacity-70"
        style={{ top: '65%', right: '5%' }}
        animate={{
          y: [0, -40, 0],
          rotate: [0, 360]
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.img
        src={bonkLogo}
        alt="Bonk Meme"
        className="absolute w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 object-cover rounded-full opacity-60"
        style={{ bottom: '20%', left: '30%' }}
        animate={{
          y: [0, 35, 0],
          rotate: [0, -360]
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.img
        src={popcatLogo}
        alt="Popcat Meme"
        className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover rounded-full opacity-55"
        style={{ top: '70%', right: '20%' }}
        animate={{
          x: [0, 20, 0, -20, 0],
          y: [0, -20, 0, 20, 0],
          rotate: [0, 360]
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.img
        src={trumpLogo}
        alt="Trump Meme"
        className="absolute w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 object-cover rounded-full opacity-50"
        style={{ top: '25%', right: '10%' }}
        animate={{
          y: [0, -25, 0],
          rotate: [0, -360]
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Additional floating meme elements for density - Orbiting Pattern - Responsive */}
      <motion.img
        src={bomeLogo}
        alt="BOME Meme"
        className="absolute w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12 object-cover rounded-full opacity-45"
        style={{ top: '40%', left: '15%' }}
        animate={{
          x: [0, -15, 0, 15, 0],
          y: [0, 15, 0, -15, 0],
          rotate: [0, 360]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.img
        src={myro}
        alt="Myro Meme"
        className="absolute w-4 h-4 sm:w-6 sm:h-6 md:w-10 md:h-10 object-cover rounded-full opacity-50"
        style={{ top: '50%', right: '15%' }}
        animate={{
          x: [0, 20, 0, -20, 0],
          y: [0, -20, 0, 20, 0],
          rotate: [0, -360]
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.img
        src={ponkeLogo}
        alt="Ponke Meme"
        className="absolute w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 object-cover rounded-full opacity-55"
        style={{ bottom: '30%', right: '20%' }}
        animate={{
          x: [0, -25, 0, 25, 0],
          y: [0, 25, 0, -25, 0],
          rotate: [0, 360]
        }}
        transition={{
          duration: 15.5,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.img
        src={silyLogo}
        alt="Sily Meme"
        className="absolute w-4 h-4 sm:w-7 sm:h-7 md:w-11 md:h-11 object-cover rounded-full opacity-60"
        style={{ top: '55%', left: '20%' }}
        animate={{
          x: [0, 15, 0, -15, 0],
          y: [0, -15, 0, 15, 0],
          rotate: [0, -360]
        }}
        transition={{
          duration: 16.5,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.img
        src={memenetLogoJpeg}
        alt="MEMENET Logo"
        className="absolute w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 object-cover rounded-full opacity-40"
        style={{ bottom: '35%', left: '30%' }}
        animate={{
          x: [0, -30, 0, 30, 0],
          y: [0, 30, 0, -30, 0],
          rotate: [0, 360]
        }}
        transition={{
          duration: 17.5,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

    </section>
  );
};

export default HeroSection;
