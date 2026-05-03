import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

const highlights = [
  "Outlook, Excel, Word & PowerPoint Add-ins",
  "Office.js & Microsoft Graph Expert",
  "Production-Ready Solutions",
];

// Typing Animation Component
const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-orange-400"
      >
        |
      </motion.span>
    </span>
  );
};

// Floating Elements Component
const FloatingElement = ({ 
  children, 
  delay = 0, 
  duration = 3,
  className = "" 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  duration?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ y: 0, rotate: 0 }}
    animate={{ 
      y: [-10, 10, -10], 
      rotate: [-2, 2, -2],
      scale: [1, 1.05, 1]
    }}
    transition={{ 
      duration, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut"
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Enhanced Background Effects */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 hero-gradient"
      />
      
      {/* Animated Glow Background */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] glow-bg opacity-30"
      />
      
      {/* Floating Background Elements */}
      <FloatingElement delay={0} duration={4} className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
      <FloatingElement delay={2} duration={5} className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <FloatingElement delay={1} duration={3.5} className="absolute top-1/3 left-20 w-48 h-48 bg-orange-400/5 rounded-full blur-2xl" />
      <FloatingElement delay={3} duration={4.5} className="absolute bottom-1/3 right-20 w-64 h-64 bg-purple-400/5 rounded-full blur-2xl" />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-2 h-2 bg-orange-400/20 rounded-full blur-sm"
          />
        ))}
      </div>

      <motion.div 
        style={{ y }}
        className="section-container relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Badge with Pulse Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-orange mb-8 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-orange-400"
            />
            <span className="text-sm font-medium bg-gradient-orange bg-clip-text text-transparent">
              Available for new projects
            </span>
            <Sparkles className="w-4 h-4 text-orange-400 group-hover:rotate-12 transition-transform" />
          </motion.div>

          {/* Enhanced Headline with Typing Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading leading-tight mb-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Microsoft Office Add-in
            </motion.div>
            <br />
            <motion.span 
              className="gradient-text-both relative"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
            >
              <TypewriterText text="Development Expert" delay={800} />
              
              {/* Glow Effect Behind Text */}
              <motion.div
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 blur-xl -z-10"
              />
            </motion.span>
          </motion.div>

          {/* Enhanced Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            I build production-ready add-ins that work reliably in real business
            environments. From Outlook to Excel, I solve real productivity problems.
          </motion.p>

          {/* Enhanced Highlights with Stagger Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.2 + index * 0.1,
                  type: "spring",
                  bounce: 0.3
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 122, 24, 0.3)"
                }}
                className="flex items-center gap-2 text-sm text-muted-foreground glass-light px-3 py-2 rounded-lg cursor-pointer group"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  <CheckCircle2 className="w-4 h-4 bg-gradient-orange bg-clip-text text-transparent group-hover:scale-110 transition-transform" />
                </motion.div>
                <span className="group-hover:text-orange-300 transition-colors">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTAs with Advanced Animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="hero" size="xl" asChild className="group relative overflow-hidden">
                <a href="#contact" className="relative z-10">
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Start Your Project
                  </motion.span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2 inline-block"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                  
                  {/* Button Glow Effect */}
                  <motion.div
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 blur-xl"
                  />
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="heroOutline" size="xl" asChild className="group">
                <a href="#portfolio" className="relative overflow-hidden">
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    View My Work
                  </motion.span>
                  <Code className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats with Counter Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.8 + index * 0.1,
                  type: "spring",
                  bounce: 0.3
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold gradient-text-both mb-1 relative"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 2 + index * 0.1,
                    type: "spring",
                    bounce: 0.4
                  }}
                >
                  {stat.value}
                  
                  {/* Stat Glow Effect */}
                  <motion.div
                    animate={{ 
                      opacity: [0, 0.3, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 blur-lg -z-10"
                  />
                </motion.div>
                <motion.div 
                  className="text-sm text-muted-foreground group-hover:text-orange-300 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 2.2 + index * 0.1 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2 cursor-pointer group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-orange-400 to-purple-400 group-hover:from-purple-400 group-hover:to-orange-400 transition-all duration-300"
          />
          
          {/* Scroll Indicator Glow */}
          <motion.div
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-gradient-to-b from-orange-500/20 to-purple-500/20 blur-md"
          />
        </motion.div>
        
        {/* Scroll Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2.7, duration: 0.5 }}
          className="text-xs text-muted-foreground mt-2 text-center"
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
