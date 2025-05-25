import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const features = [
    {
      title: "Real-Time Monitoring",
      description: "Continuous water quality assessment with instant alerts and notifications",
      icon: "📊"
    },
    {
      title: "IoT Integration",
      description: "Advanced sensors and IoT devices for comprehensive data collection",
      icon: "🔌"
    },
    {
      title: "Data Analytics",
      description: "Powerful analytics tools for trend analysis and prediction",
      icon: "📈"
    }
  ];

  const stats = [
    { value: "99.9%", label: "Accuracy" },
    { value: "24/7", label: "Monitoring" },
    { value: "10ms", label: "Response Time" },
    { value: "100+", label: "Parameters" }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.div
        ref={targetRef}
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center bg-primary-700"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="w-full h-full"
          >
            <img
              src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg"
              alt="Water background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Water360: The Future of
              <span className="block text-primary-300">Water Quality Monitoring</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Revolutionary IoT-powered system ensuring water safety through real-time
              monitoring and intelligent analysis.
            </p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="/domain"
                className="px-8 py-3 bg-white text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-colors"
              >
                Learn More
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our innovative approach combines advanced IoT technology with
              real-time analytics for unprecedented water quality monitoring.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-xl p-8 text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Water Quality Monitoring?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join us in revolutionizing water quality management with cutting-edge
              IoT technology and real-time monitoring solutions.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors"
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}