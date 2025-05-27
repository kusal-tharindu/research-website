import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Home() {
  // Parallax scrolling effect
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Auto-scrolling carousel functionality
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Extended carousel images with more content
  const carouselImages = [
    {
      src: '/images/final-product.jpg',
      caption: 'WATER360 deployed in a lake environment',
      description: 'Our autonomous monitoring system collecting real-time data on water quality parameters'
    },
    {
      src: '/images/3d-photo.gif',
      caption: '3D printed prototype design',
      description: 'Custom-designed hull optimized for stability and sensor placement'
    },
    {
      src: '/images/intro.gif',
      caption: 'Sensor integration system',
      description: 'Advanced modular design allowing for customizable sensor arrays based on research requirements'
    }
  ];

  // Auto-scroll carousel
  useEffect(() => {
    let interval: number | undefined;
    
    if (isAutoPlaying) {
      interval = window.setInterval(() => {
        setCurrentImage((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, carouselImages.length]);

  // Pause auto-scrolling when hovering over carousel
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);
  
  // Features section data with enhanced visuals
  const features = [
    {
      title: "Real-time Water Quality Sensing",
      description: "Advanced sensors providing continuous measurement of pH, temperature, turbidity, and dissolved oxygen",
      icon: "💧",
      bgColor: "from-blue-50 to-cyan-50",
      iconBg: "bg-blue-100"
    },
    {
      title: "Autonomous GPS Navigation",
      description: "Self-navigating system with pre-programmed routes and obstacle avoidance",
      icon: "🛰️",
      bgColor: "from-emerald-50 to-green-50",
      iconBg: "bg-emerald-100"
    },
    {
      title: "Secure UWB Ad-Hoc Communication",
      description: "Ultra-wideband technology ensuring reliable and secure data transmission",
      icon: "🔐",
      bgColor: "from-purple-50 to-indigo-50",
      iconBg: "bg-purple-100"
    },
    {
      title: "Cloud-Native Microservices",
      description: "Scalable architecture for data processing, storage, and analysis",
      icon: "☁️",
      bgColor: "from-sky-50 to-blue-50",
      iconBg: "bg-sky-100" 
    }
  ];

  // Stats section data with enhanced display
  const stats = [
    { value: "97%", label: "Transmission Success", description: "Reliable data transfer in varied environments" },
    { value: "85%", label: "Noise Reduction", description: "Enhanced signal processing algorithms" },
    { value: "100%", label: "Lake Deployment", description: "Successfully tested in real conditions" },
    { value: "24/7", label: "Monitoring Capability", description: "Continuous operation with solar power" }
  ];

  // Function to navigate through carousel
  const nextImage = () => {
    setCurrentImage((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };
  
  // Animated counter for stats section
  const Counter = ({ value }: { value: string }) => {
    const [displayValue, setDisplayValue] = useState('0');
    
    useEffect(() => {
      const isNumeric = /^[0-9]+%?$/.test(value);
      
      if (!isNumeric) {
        setDisplayValue(value);
        return;
      }
      
      const numericValue = parseInt(value.replace('%', ''));
      let start = 0;
      const duration = 2000;
      const step = 30;
      const steps = duration / step;
      const increment = numericValue / steps;
      
      const timer = setInterval(() => {
        start += increment;
        if (start > numericValue) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start) + (value.includes('%') ? '%' : ''));
        }
      }, step);
      
      return () => clearInterval(timer);
    }, [value]);
    
    return <div>{displayValue}</div>;
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section with enhanced parallax and animations */}
      <motion.div
        ref={targetRef}
        style={{ opacity, scale, y }}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden"
      >
        {/* Animated Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}
        />

        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="w-full h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-800/80 to-blue-900/95 z-10" />
            <img
              src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg"
              alt="Ocean background"
              className="w-full h-full object-cover object-center filter brightness-75"
            />
          </motion.div>
        </div>

        {/* Enhanced Content */}
        <div className="relative container mx-auto px-6 sm:px-8 text-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            {/* Main Title with Enhanced Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
            >
              WATER360
            </motion.h1>

            {/* Enhanced Subheading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-blue-200 mb-8 leading-tight"
            >
              Smart Autonomous System for Real-Time Water Quality Monitoring
            </motion.h2>

            {/* Supporting Text with Enhanced Styling */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg lg:text-xl text-blue-100/90 mb-12 font-light tracking-wide leading-relaxed"
            >
              IoT-powered • GPS-guided • UWB-connected • Cloud-integrated
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
            >
              <motion.a
                href="/domain"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Project
              </motion.a>
              <motion.a
                href="#product-showcase"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                View the Boat
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/40 to-transparent z-10" />
      </motion.div>

      {/* Project Overview Section with Enhanced Styling */}
      <section className="relative py-24 bg-gradient-to-b from-sky-50 via-white to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Enhanced Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-10"
              >
                {/* Enhanced Section Title */}
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 leading-snug">
                    About the Project
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
                </div>

                {/* Enhanced Overview Text */}
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <p className="leading-relaxed text-lg">
                    WATER360 represents a significant advancement in environmental monitoring technology. Our research integrates <span className="font-medium text-blue-800">autonomous systems</span> with sophisticated sensor arrays to deliver <span className="font-medium text-blue-800">real-time water quality analysis</span>, enabling proactive environmental protection and data-driven decision making.
                  </p>
                </div>

                {/* Enhanced Technology Stack */}
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Arduino", icon: "🔧" },
                    { name: "UWB", icon: "📡" },
                    { name: "Kubernetes", icon: "☸️" },
                    { name: "Solar Powered", icon: "☀️" }
                  ].map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
                    >
                      <span>{tech.icon}</span>
                      {tech.name}
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced CTA Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.a
                    href="/domain"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Learn More About Our Research
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Right Column - Enhanced Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                  <img
                    src="/images/intro.gif"
                    alt="WATER360 System Visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Enhanced Performance Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
            >
              {[
                {
                  metric: "100%",
                  label: "Autonomous Operation",
                  description: "Self-navigating system with intelligent routing",
                  icon: "🤖"
                },
                {
                  metric: "24/7",
                  label: "Real-time Monitoring",
                  description: "Continuous data collection and analysis",
                  icon: "📊"
                },
                {
                  metric: "IoT",
                  label: "Connected Sensors",
                  description: "Advanced sensor array with secure data transmission",
                  icon: "🔌"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-100 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-3xl font-bold text-blue-800 mb-2">{item.metric}</div>
                  <div className="font-semibold text-gray-900 mb-2">{item.label}</div>
                  <div className="text-gray-600">{item.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section id="product-showcase" className="py-20 bg-gradient-to-b from-sky-50 via-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 leading-snug">
                  Product Showcase
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full" />
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed"
              >
                Real-world deployment of our 3D-printed autonomous water monitoring system
              </motion.p>
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Image Slider */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative bg-white rounded-2xl shadow-xl overflow-hidden group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="aspect-video overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImage}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full h-full"
                    >
                      <img 
                        src={carouselImages[currentImage].src} 
                        alt={`WATER360 prototype ${currentImage + 1}`}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Image Caption */}
                <div className="p-6 bg-white">
                  <h3 className="font-semibold text-xl text-gray-800 mb-2">
                    {carouselImages[currentImage].caption}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{carouselImages[currentImage].description}</p>
                </div>
                
                {/* Navigation Controls */}
                <div className="absolute top-0 inset-x-0 h-full flex items-center justify-between px-4 pointer-events-none">
                  <motion.button 
                    onClick={prevImage}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-800 hover:bg-white transition pointer-events-auto"
                    aria-label="Previous image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                  <motion.button 
                    onClick={nextImage}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-800 hover:bg-white transition pointer-events-auto"
                    aria-label="Next image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                </div>
                
                {/* Pagination Indicators */}
                <div className="absolute bottom-24 inset-x-0 flex justify-center gap-3">
                  {carouselImages.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      whileHover={{ scale: 1.2 }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentImage === index 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
              
              {/* Right Column - Video Display */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl group"
              >
                <div className="relative aspect-video bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/h_4NIc6fJQo?autoplay=1&mute=1&loop=1&controls=1&rel=0"
                    title="WATER360 System Demonstration"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full object-cover rounded-2xl"
                    aria-label="WATER360 System Demonstration Video"
                  />
                </div>
                
                {/* Technical Specifications */}
                <div className="p-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">Technical Specifications</h4>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { label: "Dimensions", value: "45cm × 30cm × 15cm" },
                      { label: "Weight", value: "2.3 kg with sensors" },
                      { label: "Battery Life", value: "12+ hours (solar assisted)" },
                      { label: "Communication", value: "UWB + Mesh Network" }
                    ].map((spec, index) => (
                      <motion.div
                        key={spec.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 group"
                      >
                        <div className="mt-1 text-blue-600 group-hover:scale-110 transition-transform">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">{spec.label}</p>
                          <p className="text-sm text-gray-500">{spec.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Feature Cards Section */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  title: "Design Innovation",
                  description: "Hull optimized through computational fluid dynamics for stability in varied water conditions.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                {
                  title: "Sensor Suite",
                  description: "Multi-parameter array including pH, turbidity, temperature, and dissolved oxygen sensors.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  )
                },
                {
                  title: "Field Testing",
                  description: "Successfully deployed in 5 distinct water bodies with varied environmental conditions.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                }
              ].map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px -20px rgba(0,0,0,0.1)"
                  }}
                  className="bg-blue-50 rounded-2xl border border-gray-100 shadow-lg p-8 group hover:border-blue-100 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Enhanced Styling */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 leading-snug">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our innovative approach combines advanced IoT technology with
              real-time analytics for unprecedented water quality monitoring.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px -20px rgba(0,0,0,0.1)"
                }}
                className={`bg-gradient-to-br ${feature.bgColor} rounded-2xl p-8 text-center h-full flex flex-col transform hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`text-5xl mb-6 ${feature.iconBg} p-4 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto transform hover:rotate-12 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Enhanced Styling */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 leading-snug">
              Research Impact
            </h2>
            <p className="text-xl text-blue-200 leading-relaxed">Key performance indicators from real-world deployments</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white/5 rounded-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-300" />
                <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl transform rotate-0 group-hover:rotate-3 transition-transform duration-300">
                  <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-300">
                    <Counter value={stat.value} />
                  </div>
                  <div className="text-xl font-semibold text-blue-200 mb-2">{stat.label}</div>
                  <p className="text-gray-300 leading-relaxed">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23000000" fill-opacity="1" fill-rule="evenodd"/%3E%3C/svg%3E")',
            backgroundSize: '24px 24px'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 leading-snug">
              Ready to Transform Water Quality Monitoring?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Join us in revolutionizing water quality management with cutting-edge
              IoT technology and real-time monitoring solutions. Together, we can make
              a significant impact on environmental conservation.
            </p>
            <motion.div className="flex flex-wrap justify-center gap-6">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:shadow-xl transition-all duration-300"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-blue-700 group-hover:translate-x-full group-hover:skew-x-12"></span>
                <span className="relative">Get Started Today →</span>
              </motion.a>
              <motion.a
                href="/documents"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium border-2 border-blue-600 text-blue-600 rounded-full hover:text-white transition-all duration-300"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full skew-x-12 bg-blue-600 group-hover:translate-x-0 group-hover:skew-x-0"></span>
                <span className="relative">View Research Paper</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}