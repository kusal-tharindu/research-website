import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DocumentTextIcon, FolderIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

// Document categories
type DocumentCategory = 'all' | 'proposals' | 'presentations' | 'reports' | 'checklist' | 'logs';

// Document type definition
interface Document {
  id: string;
  title: string;
  category: DocumentCategory;
  description: string;
  downloadUrl: string;
  icon: React.ReactNode;
}

// Document data
const documents: Document[] = [
  {
    id: '1',
    title: 'Project Proposal',
    category: 'proposals',
    description: 'Initial project proposal document outlining objectives, methodology, and expected outcomes.',
    downloadUrl: 'https://drive.google.com/file/d/your-file-id/view',
    icon: <DocumentTextIcon className="h-8 w-8" />
  },
  {
    id: '2',
    title: 'Progress Presentation – 1',
    category: 'presentations',
    description: 'First progress presentation slides showcasing initial milestones and achievements.',
    downloadUrl: 'https://drive.google.com/file/d/your-file-id/view',
    icon: <FolderIcon className="h-8 w-8" />
  },
  {
    id: '3',
    title: 'Progress Presentation – 2',
    category: 'presentations',
    description: 'Second progress presentation with detailed implementation updates and results.',
    downloadUrl: 'https://drive.google.com/file/d/your-file-id/view',
    icon: <FolderIcon className="h-8 w-8" />
  },
  {
    id: '4',
    title: 'Research Paper',
    category: 'reports',
    description: 'Comprehensive research paper detailing methodology, findings, and conclusions.',
    downloadUrl: 'https://drive.google.com/file/d/your-file-id/view',
    icon: <DocumentTextIcon className="h-8 w-8" />
  },
  {
    id: '5',
    title: 'Final Report & Presentation',
    category: 'reports',
    description: 'Complete project documentation and final presentation materials.',
    downloadUrl: 'https://drive.google.com/file/d/your-file-id/view',
    icon: <DocumentTextIcon className="h-8 w-8" />
  },
  {
    id: '6',
    title: 'Check List Documents',
    category: 'checklist',
    description: 'Project checklists and verification documents.',
    downloadUrl: 'https://drive.google.com/file/d/your-file-id/view',
    icon: <DocumentTextIcon className="h-8 w-8" />
  },
  {
    id: '7',
    title: 'Log Book',
    category: 'logs',
    description: 'Detailed project activity logbook and progress tracking.',
    downloadUrl: 'https://drive.google.com/file/d/your-file-id/view',
    icon: <DocumentTextIcon className="h-8 w-8" />
  },
  {
    id: '8',
    title: 'Project Registration Documents',
    category: 'proposals',
    description: 'Initial project registration and approval documents.',
    downloadUrl: 'https://drive.google.com/file/d/your-file-id/view',
    icon: <DocumentTextIcon className="h-8 w-8" />
  }
];

function Documents() {
  const [selectedCategory, setSelectedCategory] = useState<DocumentCategory>('all');

  const filteredDocuments = selectedCategory === 'all'
    ? documents
    : documents.filter(doc => doc.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600">
          Project Documents
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Access all project-related documents, presentations, and reports
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white shadow-sm">
          {(['all', 'proposals', 'presentations', 'reports', 'checklist', 'logs'] as DocumentCategory[]).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDocuments.map((doc, index) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px -20px rgba(0,0,0,0.1)"
            }}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-blue-100 transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                {doc.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{doc.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                <a
                  href={doc.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                  Download
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Documents;