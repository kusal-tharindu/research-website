import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Water360</h3>
            <p className="text-gray-400">
              Autonomous IoT-Based Water Quality Monitoring System
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/domain" className="text-gray-400 hover:text-white">
                  Research Domain
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 Water360 Research Group. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Designed using GitHub Copilot AI & Bolt.new
          </p>
        </div>
      </div>
    </footer>
  );
}