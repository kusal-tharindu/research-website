import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-teal-900 via-blue-900 to-slate-900 text-white py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Project Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              WATER360
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Autonomous IoT-Based Real-Time Water Quality Monitoring System
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-teal-300">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/domain" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
                  Research Domain
                </NavLink>
              </li>
              <li>
                <NavLink to="/milestones" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
                  Milestones
                </NavLink>
              </li>
              <li>
                <NavLink to="/documents" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
                  Documents
                </NavLink>
              </li>
              <li>
                <NavLink to="/presentations" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
                  Presentations
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact & Connect Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-teal-300">Contact & Connect</h3>
            <div className="space-y-4">
              <a 
                href="mailto:info@dtk2lab.com" 
                className="text-gray-300 hover:text-teal-300 transition-colors duration-300 block"
              >
                info@dtk2lab.com
              </a>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-300 transition-colors duration-300 transform hover:scale-110"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-300 transition-colors duration-300 transform hover:scale-110"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-300 transition-colors duration-300 transform hover:scale-110"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-8 border-t border-teal-800/30 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 WATER360 Research Group. All rights reserved.
          </p>
          <p className="mt-2 text-gray-400 text-sm">
            Designed by{' '}
            <a 
              href="https://dtk2globle.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-300 hover:text-teal-400 transition-colors duration-300"
            >
              DTK2GLOBLE
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}