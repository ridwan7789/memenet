import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  const animationFrameRef = useRef<number | null>(null);
  const idCounter = useRef(0);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // Use requestAnimationFrame for better performance
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        // Update mouse position
        setMousePosition({ x: e.clientX, y: e.clientY });

        // Add trail particle - simplified approach
        const newId = idCounter.current++;
        setTrail(prev => [
          { x: e.clientX, y: e.clientY, id: newId },
          ...prev.slice(0, 4) // Keep only 4 trail particles
        ]);
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('button, a, [role="button"]'));
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Clean old trail periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => prev.slice(0, 4)); // Keep only 4 trail particles
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Trail particles - simplified and optimized */}
      {trail.map((particle, index) => (
        <motion.div
          key={particle.id}
          className="fixed pointer-events-none z-[9998] rounded-full bg-emerald-400"
          style={{
            left: particle.x - 2,
            top: particle.y - 2,
            width: 4,
            height: 4,
            opacity: 0.6 - (index * 0.15), // Fade out older particles
          }}
          initial={{ opacity: 0.6, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 0.3 }}
          transition={{ duration: 0.6 }}
        />
      ))}

      {/* Main cursor - simplified */}
      <motion.div
        className="fixed pointer-events-none z-[9999] text-xl"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          filter: 'drop-shadow(0 0 6px hsl(160 92% 51%))'
        }}
        animate={{
          scale: isHovering ? 1.3 : isClicking ? 0.9 : 1,
        }}
        transition={{
          scale: { duration: 0.2 },
          opacity: { duration: 0.2 }
        }}
      >
        •
      </motion.div>

      {/* Hover effect - simplified */}
      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-[9997] rounded-full border border-emerald-400/50"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
            width: 32,
            height: 32,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </>
  );
};

export default CustomCursor;
