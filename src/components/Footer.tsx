import { motion } from 'framer-motion';
import { Twitter, MessageCircle, Github } from 'lucide-react';
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

const Footer = () => {
  return (
    <footer className="relative py-20 px-4 overflow-hidden">
      {/* Enhanced background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-neon-green/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Animated background glow */}
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-neon-green/5 to-neon-purple/5 blur-3xl"
        animate={{
          y: [-20, 20, -20],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full bg-gradient-to-r from-electric-blue/5 to-neon-cyan/5 blur-3xl"
        animate={{
          y: [20, -20, 20],
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
        src={dogeLogo}
        alt="Doge Meme"
        className="absolute w-10 h-10 md:w-14 md:h-14 object-cover rounded-full opacity-60"
        style={{ top: '10%', left: '15%' }}
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
        style={{ top: '50%', left: '5%' }}
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
        style={{ top: '20%', right: '25%' }}
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
        style={{ bottom: '25%', right: '15%' }}
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
        style={{ top: '40%', left: '20%' }}
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
        style={{ top: '30%', right: '10%' }}
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
        style={{ bottom: '35%', right: '30%' }}
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
        style={{ top: '60%', right: '35%' }}
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
        style={{ top: '50%', left: '2%' }}
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
        style={{ bottom: '10%', left: '20%' }}
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
        style={{ top: '5%', left: '25%' }}
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
        {/* Logo and tagline */}
        <motion.div
          className="text-center mb-12 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-4xl md:text-5xl font-black gradient-text mb-4 relative inline-block">
            $MEMENET
            <motion.div
              className="absolute -top-3 -right-3 w-3 h-3 rounded-full bg-neon-green"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </h3>
          <motion.p
            className="text-muted-foreground text-lg relative inline-block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Where Memes Meet AI
          </motion.p>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Twitter, label: 'X Community', href: 'https://x.com/i/communities/2001530792145805798' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-neon-green transition-colors relative"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 20px hsl(160 92% 51% / 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 rounded-xl"
                animate={{
                  background: [
                    'radial-gradient(circle at 1px 1px, hsl(160 92% 51%) 1px, transparent 0)',
                    'radial-gradient(circle at 2px 2px, hsl(160 92% 51%) 2px, transparent 0)',
                    'radial-gradient(circle at 1px 1px, hsl(160 92% 51%) 1px, transparent 0)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  backgroundSize: '20px 20px',
                  opacity: 0.3
                }}
              />
              <social.icon size={22} />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="pt-8 border-t border-border/30 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              © 2025 $MEMENET. All rights reserved.
            </motion.p>
            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {['Terms', 'Privacy', 'Docs'].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="hover:text-neon-green transition-colors relative"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Animated neon line decoration */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px origin-left"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(160 92% 51% / 0.5), hsl(265 100% 64% / 0.5), transparent)',
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 rounded-full bg-neon-green"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
