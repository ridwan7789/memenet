import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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

const GalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Stars
    const stars: { x: number; y: number; radius: number; opacity: number; speed: number }[] = [];
    for (let i = 0; i < 300; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.5 + 0.1,
      });
    }

    // Neural network nodes
    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    for (let i = 0; i < 80; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.fillStyle = 'hsl(220 40% 4%)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw nebula glow
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.3, canvas.height * 0.4, 0,
        canvas.width * 0.3, canvas.height * 0.4, canvas.width * 0.4
      );
      gradient.addColorStop(0, 'hsla(265, 100%, 64%, 0.1)');
      gradient.addColorStop(0.5, 'hsla(160, 92%, 51%, 0.05)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.7, canvas.height * 0.6, 0,
        canvas.width * 0.7, canvas.height * 0.6, canvas.width * 0.3
      );
      gradient2.addColorStop(0, 'hsla(190, 100%, 51%, 0.08)');
      gradient2.addColorStop(0.5, 'hsla(160, 92%, 51%, 0.03)');
      gradient2.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars with enhanced animation
      stars.forEach((star) => {
        star.opacity = 0.3 + Math.sin(time * star.speed * 2) * 0.3 + 0.2;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(180, 100%, 95%, ${star.opacity})`;
        ctx.fill();

        // Add subtle glow to some stars
        if (Math.random() > 0.7) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(
            star.x, star.y, star.radius,
            star.x, star.y, star.radius * 2
          );
          gradient.addColorStop(0, `hsla(180, 100%, 95%, ${star.opacity * 0.5})`);
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });

      // Update and draw neural network
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      // Draw connections with animation
      ctx.strokeStyle = 'hsla(157, 100%, 50%, 0.1)';
      ctx.lineWidth = 1;
      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach((otherNode) => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `hsla(157, 100%, 50%, ${0.15 * (1 - distance / 150)})`;
            ctx.stroke();
          }
        });
      });

      // Draw nodes with enhanced visual
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'hsla(160, 92%, 51%, 0.6)';
        ctx.fill();

        // Add glow effect to nodes
        ctx.beginPath();
        ctx.arc(node.x, node.y, 5, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 2,
          node.x, node.y, 5
        );
        gradient.addColorStop(0, 'hsla(160, 92%, 51%, 0.4)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0"
        style={{ pointerEvents: 'none' }}
      />

      {/* Enhanced floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed rounded-full z-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${100 + Math.random() * 20}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            background: `hsl(${160 + Math.random() * 100}, 92%, 51%)`,
          }}
          animate={{
            y: [0, -window.innerHeight * 1.2],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 15,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: 'linear',
          }}
        />
      ))}

      {/* Animated geometric elements */}
      <motion.div
        className="fixed top-1/4 left-1/4 w-64 h-64 rounded-full border border-neon-green/20 z-0"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
        }}
      />
      <motion.div
        className="fixed bottom-1/3 right-1/3 w-48 h-48 border border-neon-purple/20 z-0"
        animate={{
          rotate: -360,
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          rotate: { duration: 45, repeat: Infinity, ease: 'linear' },
          opacity: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
        }}
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
      />

      {/* Floating Meme Elements - All Assets in Circular Form - Creating a Galaxy Pattern - Responsive */}
      <motion.img
        src={dogeLogo}
        alt="Doge Meme"
        className="fixed w-10 h-10 md:w-14 md:h-14 object-cover rounded-full opacity-60 z-0"
        style={{ top: '15%', left: '10%' }}
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
        className="fixed w-8 h-8 md:w-12 md:h-12 object-cover rounded-full opacity-50 z-0"
        style={{ top: '60%', left: '20%' }}
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
        className="fixed w-6 h-6 md:w-10 md:h-10 object-cover rounded-full opacity-55 z-0"
        style={{ top: '20%', right: '20%' }}
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
        className="fixed w-8 h-8 md:w-12 md:h-12 object-cover rounded-full opacity-65 z-0"
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
        className="fixed w-12 h-12 md:w-16 md:h-16 object-cover rounded-full opacity-50 z-0"
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
        className="fixed w-9 h-9 md:w-13 md:h-13 object-cover rounded-full opacity-55 z-0"
        style={{ bottom: '15%', left: '30%' }}
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
        className="fixed w-7 h-7 md:w-11 md:h-11 object-cover rounded-full opacity-50 z-0"
        style={{ top: '35%', right: '15%' }}
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
        className="fixed w-6 h-6 md:w-10 md:h-10 object-cover rounded-full opacity-60 z-0"
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
        className="fixed w-5 h-5 md:w-9 md:h-9 object-cover rounded-full opacity-60 z-0"
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
        className="fixed w-10 h-10 md:w-14 md:h-14 object-cover rounded-full opacity-40 z-0"
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
        className="fixed w-7 h-7 md:w-11 md:h-11 object-cover rounded-full opacity-55 z-0"
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
        className="fixed w-6 h-6 md:w-10 md:h-10 object-cover rounded-full opacity-55 z-0"
        style={{ bottom: '10%', left: '25%' }}
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
        className="fixed w-8 h-8 md:w-12 md:h-12 object-cover rounded-full opacity-50 z-0"
        style={{ top: '10%', left: '30%' }}
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

      {/* Scanline overlay */}
      <div className="fixed inset-0 z-10 pointer-events-none scanlines opacity-30" />
    </>
  );
};

export default GalaxyBackground;
