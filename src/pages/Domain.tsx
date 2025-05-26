import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMicrochip, FaNetworkWired, FaReact, FaPython, FaDocker, FaCloud, FaRobot, FaCogs, FaLock, FaServer, FaKey } from 'react-icons/fa';
import { SiEspressif, SiKubernetes, SiTailwindcss, SiTensorflow, SiMqtt, SiArduino, SiPrometheus, SiGrafana, SiElasticsearch, SiKibana, SiJenkins, SiGitlab } from 'react-icons/si';

// Sample data - replace with actual content
const allLiteratureSurvey = [
  {
    title: "Autonomous Water Quality Monitoring Systems",
    source: "Journal of Environmental Engineering, 2023",
    summary: "Review of current autonomous water monitoring technologies and their limitations in real-time data collection.",
    year: 2023
  },
  {
    title: "IoT Applications in Water Resource Management",
    source: "IEEE Sensors Journal, 2022",
    summary: "Analysis of IoT sensor networks for water quality monitoring and their integration challenges.",
    year: 2022
  },
  {
    title: "Machine Learning in Environmental Monitoring",
    source: "Environmental Science & Technology, 2023",
    summary: "Overview of ML applications in water quality prediction and anomaly detection.",
    year: 2023
  },
  {
    title: "Real-Time IoT Monitoring in Aquatic Systems",
    source: "International Journal of Smart Technologies, 2023",
    summary: "Discusses the deployment of real-time sensor arrays for detecting environmental pollutants in lakes and reservoirs.",
    year: 2023
  },
  {
    title: "UWB Communication in Mobile Ad-Hoc Networks",
    source: "IEEE Communications Magazine, 2022",
    summary: "Evaluates the performance of UWB-based routing protocols in decentralized mobile sensor applications.",
    year: 2022
  },
  {
    title: "Cloud-Native Architecture for Environmental Monitoring",
    source: "Journal of Cloud Computing, 2021",
    summary: "Explores microservice-based cloud systems for scalable ingestion and visualization of environmental sensor data.",
    year: 2021
  }
];

const researchObjectives = [
  "Develop an autonomous water quality monitoring system",
  "Implement real-time data collection and analysis",
  "Create an integrated cloud-based monitoring platform",
  "Validate system performance in real-world conditions"
];

const technologies = [
  "Arduino", "ESP32", "UWB", "Kubernetes", "React", "Tailwind CSS",
  "Python", "TensorFlow", "Docker", "MQTT", "REST API"
];

interface ResearchGapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResearchGapModal: React.FC<ResearchGapModalProps> = ({ isOpen, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">Detailed Research Gap Analysis</h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <section>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">Real-time Data Collection Challenges</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                    <li>Limited bandwidth for continuous data transmission</li>
                    <li>High latency in remote monitoring scenarios</li>
                    <li>Power consumption constraints affecting sampling frequency</li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">Autonomous Operation Limitations</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                    <li>Environmental adaptability in varying water conditions</li>
                    <li>Navigation challenges in complex water bodies</li>
                    <li>Battery life and power management issues</li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">Sensor Integration Complexities</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                    <li>Cross-calibration between different sensor types</li>
                    <li>Data fusion challenges from multiple sources</li>
                    <li>Maintenance and calibration frequency requirements</li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">System Architecture Gaps</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                    <li>Scalability limitations in current solutions</li>
                    <li>Security vulnerabilities in IoT deployments</li>
                    <li>Integration challenges with existing infrastructure</li>
                  </ul>
                </section>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface ResearchProblemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResearchProblemModal: React.FC<ResearchProblemModalProps> = ({ isOpen, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">Detailed Research Problem Analysis</h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-8">
                <section>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 leading-tight">Problem Context</h4>
                  <p className="text-gray-600 leading-relaxed">
                    The challenge of developing an autonomous water quality monitoring system encompasses multiple
                    technical and operational complexities. Current solutions often fail to address the dynamic nature
                    of aquatic environments and the need for continuous, reliable data collection.
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 leading-tight">Technical Challenges</h4>
                  <ul className="list-disc pl-6 space-y-3 text-gray-600 leading-relaxed">
                    <li>Environmental adaptability in varying water conditions and weather patterns</li>
                    <li>Power management and energy efficiency for long-term deployment</li>
                    <li>Real-time data processing and analysis capabilities</li>
                    <li>Secure and reliable wireless communication in challenging environments</li>
                    <li>Integration of multiple sensor types with different sampling requirements</li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 leading-tight">Operational Requirements</h4>
                  <ul className="list-disc pl-6 space-y-3 text-gray-600 leading-relaxed">
                    <li>Minimal human intervention for maintenance and calibration</li>
                    <li>Robust navigation and positioning in complex water bodies</li>
                    <li>Scalable architecture for multiple deployment scenarios</li>
                    <li>Data integrity and security measures</li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 leading-tight">Expected Outcomes</h4>
                  <p className="text-gray-600 leading-relaxed">
                    The successful implementation of this system will provide a comprehensive solution for water quality
                    monitoring, enabling better resource management and environmental protection through continuous,
                    reliable data collection and analysis.
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const objectives = [
  {
    title: "Autonomous Operation",
    description: "Build an autonomous surface vehicle capable of navigating and monitoring without human intervention.",
    icon: "🤖",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Real-Time Water Quality Monitoring",
    description: "Continuously track pH, turbidity, and temperature using onboard sensors with local filtering.",
    icon: "📊",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Cloud-Based Data Integration",
    description: "Securely transmit preprocessed data to a cloud-native backend for analysis and visualization.",
    icon: "☁️",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "UWB-Based Communication",
    description: "Implement a decentralized ad-hoc UWB network with AODV routing for efficient and low-latency data transfer.",
    icon: "📡",
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Secure Data Transmission",
    description: "Apply AES-256 encryption and HTTPS/TLS protocols to safeguard data integrity from sensors to cloud.",
    icon: "🔒",
    color: "from-red-500 to-red-600"
  },
  {
    title: "System Validation in Real Environments",
    description: "Validate performance by deploying the system in natural lakes and assessing sensor accuracy and network resilience.",
    icon: "🌊",
    color: "from-cyan-500 to-cyan-600"
  }
];

const techGroups = [
  {
    label: 'Hardware',
    icon: <FaMicrochip className="text-blue-500 mr-2" />,
    items: [
      { name: 'Arduino' },
      { name: 'ESP32' },
      { name: 'UWB (Ultra-Wideband)' },
    ],
  },
  {
    label: 'Frontend & Styling',
    icon: <FaReact className="text-cyan-500 mr-2" />,
    items: [
      { name: 'React' },
    ],
  },
  {
    label: 'Backend & Cloud',
    icon: <FaCloud className="text-purple-500 mr-2" />,
    items: [
      { name: 'Python' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'Kubeadm' },
    ],
  },
  {
    label: 'Protocols & Integration',
    icon: <FaLock className="text-slate-500 mr-2" />,
    items: [
      { name: 'HTTPS / TLS' },
      { name: 'AES-256' },
      { name: 'REST API' },
    ],
  },
  {
    label: 'Monitoring & CI/CD',
    icon: <FaServer className="text-amber-500 mr-2" />,
    items: [
      { name: 'Prometheus' },
      { name: 'Grafana' },
      { name: 'Elasticsearch' },
      { name: 'Kibana' },
      { name: 'Jenkins' },
      { name: 'ArgoCD' },
      { name: 'GitLab CI/CD' },
    ],
  },
];

type LiteratureCard = {
  title: string;
  source: string;
  summary: string;
  year: number;
};

function LiteratureCarousel({ cards }: { cards: LiteratureCard[] }) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };
  const [cardsView, setCardsView] = useState(getCardsPerView());
  const maxIndex = Math.max(0, cards.length - cardsView);

  useEffect(() => {
    const handleResize = () => setCardsView(getCardsPerView());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll to the correct card
  const scrollToIndex = (i: number) => {
    if (!containerRef.current) return;
    const card = containerRef.current.querySelector(`[data-index="${i}"]`) as HTMLElement | null;
    if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  // Handle arrow navigation
  const handlePrev = () => {
    const newIndex = Math.max(0, index - 1);
    setIndex(newIndex);
    scrollToIndex(newIndex);
  };
  const handleNext = () => {
    const newIndex = Math.min(maxIndex, index + 1);
    setIndex(newIndex);
    scrollToIndex(newIndex);
  };

  useEffect(() => { scrollToIndex(index); }, [index, cardsView]);

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        disabled={index === 0}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/70 hover:bg-blue-100 text-blue-700 shadow-lg flex items-center justify-center transition disabled:opacity-40 disabled:cursor-not-allowed`}
        aria-label="Previous references"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </button>
      {/* Right Arrow */}
      <button
        onClick={handleNext}
        disabled={index === maxIndex}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/70 hover:bg-blue-100 text-blue-700 shadow-lg flex items-center justify-center transition disabled:opacity-40 disabled:cursor-not-allowed`}
        aria-label="Next references"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>
      {/* Cards Container */}
      <div
        ref={containerRef}
        className="overflow-x-auto scroll-smooth flex gap-6 pb-4 px-2 sm:px-6 md:px-8 lg:px-12"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {cards.map((paper, i) => (
          <div
            key={i}
            data-index={i}
            className="min-w-[320px] max-w-xs flex-shrink-0 scroll-snap-center"
            style={{ scrollSnapAlign: 'center' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: 'easeOut' }}
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -20px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col"
            >
              <div className="p-6 border border-gray-100 rounded-xl bg-gradient-to-br from-white to-blue-50/30 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl opacity-70 group-hover:scale-110 transition-transform duration-300">📚</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">{paper.year}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 leading-tight">{paper.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{paper.source}</p>
                <p className="text-gray-600 flex-grow mb-4">{paper.summary}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Domain() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProblemModalOpen, setIsProblemModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero/Header Section */}
      <section className="relative w-full bg-[url('https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg')] bg-cover bg-center text-white py-24 px-6 z-10 overflow-hidden">
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/70 to-blue-900/90 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          {/* Decorative SVG Icon */}
          <div className="flex justify-center mb-8">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="32" cy="32" rx="30" ry="18" fill="#38bdf8" fillOpacity="0.3" />
              <ellipse cx="32" cy="32" rx="22" ry="12" fill="#0ea5e9" fillOpacity="0.5" />
              <ellipse cx="32" cy="32" rx="14" ry="7" fill="#0369a1" fillOpacity="0.7" />
              <circle cx="32" cy="32" r="6" fill="#fff" fillOpacity="0.9" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-snug mb-6 drop-shadow-lg">Research Domain</h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-4 leading-tight drop-shadow">
            An overview of our research background, challenges, and technical approach.
          </h2>
          <p className="text-base md:text-lg text-blue-100/90 mb-8 font-light tracking-wide drop-shadow">
            Dive into our literature, methodologies, and innovations.
          </p>
        </motion.div>
      </section>

      {/* Literature Survey */}
      <section className="mb-16 bg-gradient-to-b from-blue-50 to-white rounded-3xl px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 leading-tight">
            Literature Survey
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive review of relevant studies in IoT-based water monitoring
          </p>
        </div>

        {/* Carousel - now wrapped for alignment */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LiteratureCarousel cards={allLiteratureSurvey} />
        </div>
      </section>

      {/* Research Gap */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 leading-tight">
              Identified Research Gap
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-yellow-300 rounded-full"></div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border border-yellow-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                    <span className="text-2xl">🚧</span>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <p className="text-lg font-medium text-gray-700 mb-4">
                    Based on our literature survey, we identified several limitations in current water monitoring solutions.
                  </p>
                  
                  <div className="bg-white/50 rounded-xl p-6 border border-yellow-100">
                    <p className="text-gray-600 leading-relaxed">
                      Current water quality monitoring systems face significant challenges in real-time data collection,
                      autonomous operation, and multi-sensor integration, limiting their effectiveness in comprehensive
                      water quality assessment.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                      Real-time Data Collection
                    </span>
                    <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                      Autonomous Operation
                    </span>
                    <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                      Sensor Integration
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsModalOpen(true)}
                    className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <span className="mr-2">📚</span>
                    Read Full Research Gap
                    <svg 
                      className="w-4 h-4 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Research Problem */}
      <section id="research-problem" className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 leading-tight">
              Research Problem
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understanding the complexity of autonomous water quality monitoring
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-400 to-rose-300 rounded-full"></div>
            
            <div className="bg-gradient-to-br from-rose-50 to-white rounded-2xl p-8 shadow-lg border border-rose-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                    <span className="text-2xl">❗</span>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="bg-white/50 rounded-xl p-6 border border-rose-100">
                    <p className="text-gray-600 leading-relaxed">
                      Developing a robust, autonomous water quality monitoring system that operates independently
                      in varying aquatic environments and provides real-time, multi-parameter data analysis while
                      minimizing manual intervention.
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-rose-500 mt-1">•</span>
                      <p className="text-gray-600 leading-relaxed">Operate autonomously across varied water bodies</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-rose-500 mt-1">•</span>
                      <p className="text-gray-600 leading-relaxed">Ensure real-time analysis of multiple water quality parameters</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-rose-500 mt-1">•</span>
                      <p className="text-gray-600 leading-relaxed">Support long-term deployment with energy efficiency</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-rose-500 mt-1">•</span>
                      <p className="text-gray-600 leading-relaxed">Maintain secure wireless communication and data integrity</p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsProblemModalOpen(true)}
                    className="mt-6 inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
                  >
                    <span className="mr-2">🔍</span>
                    Read Full Research Problem
                    <svg 
                      className="w-4 h-4 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Research Objectives */}
      <section id="research-objectives" className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 leading-tight">
              Research Objectives
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Key goals we aimed to achieve through the WATER360 research initiative
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -20px rgba(0,0,0,0.1)"
                }}
                className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                     style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                     data-gradient={objective.color}></div>
                
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${objective.color} flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                        {objective.icon}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                        {objective.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {objective.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Methodology */}
      <section id="methodology-overview" className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 font-sans leading-tight">
              Methodology Overview
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
              Understanding our system design, technology stack, and layered architecture
            </p>
          </div>
          <p className="text-slate-700 text-base mb-10 text-center max-w-2xl mx-auto leading-relaxed">
            Our methodology is based on a layered architecture that combines autonomous IoT watercraft, UWB-based ad-hoc networking, real-time edge preprocessing, and cloud-native analytics. The system is designed for scalability, security, and energy efficiency while maintaining autonomy in dynamic aquatic environments.
          </p>

          {/* System Overview Diagram Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white rounded-lg shadow-md border px-6 py-8 mb-10 flex flex-col items-center"
          >
            <img
              src="/images/overall-system-diagram.jpg"
              alt="Overall System Architecture Diagram: boats, base station, UWB links, mapped lake zones"
              className="w-full max-w-xs aspect-square object-contain mb-6 rounded-md border"
            />
            <h3 className="text-xl font-semibold text-slate-800 mb-2 font-sans leading-tight">Overall System Architecture</h3>
            <p className="text-slate-600 text-sm mb-4 text-center max-w-md leading-relaxed">
              A visual layout of boats, base station, UWB links, and mapped lake zones.
            </p>
            <a
              href="/images/overall-system-diagram.jpg"
              download
              className="inline-block mt-2 px-5 py-2 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition-colors"
            >
              Download Full Architecture
            </a>
          </motion.div>

          {/* Cloud-Native Infrastructure Diagram Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md border px-6 py-8 flex flex-col items-center"
          >
            <img
              src="/images/cloud-diagram.png"
              alt="Cloud-Native Architecture Diagram: microservices, Kubernetes, monitoring, CI/CD, data pipeline"
              className="w-full max-w-2xl aspect-[3/2] object-contain mb-6 rounded-md border"
            />
            <h3 className="text-xl font-semibold text-slate-800 mb-2 font-sans leading-tight">Cloud-Native Architecture</h3>
            <p className="text-slate-600 text-sm mb-4 text-center max-w-md leading-relaxed">
              Shows microservices, Kubernetes cluster, monitoring stack, CI/CD integration, and data pipeline.
            </p>
            <a
              href="/images/cloud-diagram.png"
              download
              className="inline-block mt-2 px-5 py-2 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition-colors"
            >
              Download Full Architecture
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Technologies Used */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600">
              Technologies Used
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Key platforms, tools, and frameworks integrated into our WATER360 system
            </p>
          </div>
          <div className="space-y-8">
            {techGroups.map((group) => (
              <div key={group.label} className="flex flex-col sm:flex-row items-start gap-x-4 gap-y-3">
                {/* Left: Category icon + title */}
                <div className="flex items-center min-w-[180px] mb-2 sm:mb-0">
                  {group.icon}
                  <span className="font-semibold text-gray-700 text-base">{group.label}</span>
                </div>
                {/* Right: Tech tags */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
                  {group.items.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-4 py-2 rounded-full text-sm border border-slate-300 bg-white hover:shadow transition cursor-default select-none"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      <ResearchGapModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ResearchProblemModal isOpen={isProblemModalOpen} onClose={() => setIsProblemModalOpen(false)} />
    </div>
  );
}

export default Domain;