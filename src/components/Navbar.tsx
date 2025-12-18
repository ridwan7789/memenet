import { motion } from 'framer-motion';
import { Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import memenetLogo from '@/assets/memenet-logo.jpg';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-background/80 backdrop-blur-lg border-b border-border/30">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <motion.div
            className="relative w-12 h-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Spinning ring */}
            <motion.div
              className="absolute -inset-2 rounded-full border-2 border-dashed border-neon-green/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />

            {/* Pulsing outer ring */}
            <motion.div
              className="absolute -inset-3 rounded-full border border-neon-cyan/30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl"
              style={{
                background: 'linear-gradient(135deg, hsl(45 100% 50% / 0.5) 0%, hsl(160 92% 51% / 0.4) 50%, hsl(265 100% 64% / 0.4) 100%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Logo image */}
            <motion.img
              src={memenetLogo}
              alt="$MEMENET Logo"
              className="relative w-full h-full object-cover rounded-full"
              whileHover={{
                boxShadow: '0 0 30px hsl(45 100% 50% / 0.5), 0 0 60px hsl(160 92% 51% / 0.3)',
              }}
              whileTap={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          <span className="font-display font-black text-xl gradient-text hidden sm:block">
            $MEMENET
          </span>
        </Link>

        {/* Navigation Links and Buttons */}
        <div className="flex items-center space-x-4">
          {/* Buy on pump.fun Button */}
          <motion.a
            href="https://pump.fun/coin/BMh2iThMiKQrjfjQJzU8HKqCGuKGALc1kYaWVRfMpump"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg glass-card text-sm font-medium text-muted-foreground hover:text-neon-green transition-colors relative"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 15px hsl(160 92% 51% / 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 rounded-lg"
              animate={{
                background: [
                  'radial-gradient(circle at 1px 1px, hsl(160 92% 51%) 1px, transparent 0)',
                  'radial-gradient(circle at 2px 2px, hsl(160 92% 51%) 2px, transparent 0)',
                  'radial-gradient(circle at 1px 1px, hsl(160 92% 51%) 1px, transparent 0)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                backgroundSize: '15px 15px',
                opacity: 0.3
              }}
            />
            Buy on pump.fun
          </motion.a>

          {/* X Community Link */}
          <motion.a
            href="https://x.com/i/communities/2001530792145805798"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-neon-green transition-colors relative"
            whileHover={{
              scale: 1.1,
              boxShadow: '0 0 20px hsl(160 92% 51% / 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 rounded-lg"
              animate={{
                background: [
                  'radial-gradient(circle at 1px 1px, hsl(160 92% 51%) 1px, transparent 0)',
                  'radial-gradient(circle at 2px 2px, hsl(160 92% 51%) 2px, transparent 0)',
                  'radial-gradient(circle at 1px 1px, hsl(160 92% 51%) 1px, transparent 0)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                backgroundSize: '15px 15px',
                opacity: 0.3
              }}
            />
            <Twitter size={20} />
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;