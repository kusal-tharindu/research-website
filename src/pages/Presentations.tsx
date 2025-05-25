import { motion } from 'framer-motion';

export default function Presentations() {
  const presentations = [
    {
      title: 'Proposal Presentation',
      date: 'January 2024',
      description: 'Initial project proposal and methodology overview.',
      downloadUrl: '#',
    },
    {
      title: 'Progress Presentation 1',
      date: 'February 2024',
      description: 'First milestone achievements and preliminary results.',
      downloadUrl: '#',
    },
    {
      title: 'Progress Presentation 2',
      date: 'March 2024',
      description: 'System implementation and testing outcomes.',
      downloadUrl: '#',
    },
    {
      title: 'Final Presentation',
      date: 'April 2024',
      description: 'Complete project overview and results demonstration.',
      downloadUrl: '#',
    },
  ];

  return (
    <div className="py-12">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Presentation Slides
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {presentations.map((presentation, index) => (
            <motion.div
              key={presentation.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {presentation.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">{presentation.date}</p>
              <p className="text-gray-600 mb-4">{presentation.description}</p>
              <a
                href={presentation.downloadUrl}
                className="inline-flex items-center text-primary-600 hover:text-primary-700"
              >
                Download Slides
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}