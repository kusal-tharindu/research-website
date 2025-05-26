import { useState } from 'react';
import { motion } from 'framer-motion';
import { Switch } from '@headlessui/react';
import {
  CalendarIcon,
  PresentationChartLineIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';

// Types
type AssessmentType = 'presentation' | 'report' | 'submission' | 'viva' | 'website' | 'paper' | 'logbook';

interface Milestone {
  id: string;
  name: string;
  marks: number;
  date: string;
  type: AssessmentType;
  description?: string;
}

// Data
const milestones: Milestone[] = [
  {
    id: '1',
    name: 'Proposal Presentation',
    marks: 6,
    date: '5–9 July 2024',
    type: 'presentation',
    description: 'Initial project proposal presentation to the panel'
  },
  {
    id: '2',
    name: 'Proposal Report',
    marks: 6,
    date: '23 August 2024',
    type: 'report',
    description: 'Detailed proposal documentation'
  },
  {
    id: '3',
    name: 'Progress Presentation–1 (50%)',
    marks: 15,
    date: '4–6 December 2024',
    type: 'presentation',
    description: 'Mid-project progress presentation'
  },
  {
    id: '4',
    name: 'Progress Presentation–2 (90%)',
    marks: 18,
    date: '18–20 March 2025',
    type: 'presentation',
    description: 'Near-completion progress presentation'
  },
  {
    id: '5',
    name: 'Final Report',
    marks: 15,
    date: '11 April 2025',
    type: 'report',
    description: 'Individual final project report'
  },
  {
    id: '6',
    name: 'Final Report (Group)',
    marks: 4,
    date: '11 April 2025',
    type: 'report',
    description: 'Group final project report'
  },
  {
    id: '7',
    name: 'Final Presentation',
    marks: 10,
    date: '26–28 May 2025',
    type: 'presentation',
    description: 'Final project presentation'
  },
  {
    id: '8',
    name: 'Viva',
    marks: 10,
    date: '26–28 May 2025',
    type: 'viva',
    description: 'Project defense and Q&A session'
  },
  {
    id: '9',
    name: 'Website',
    marks: 2,
    date: '2 June 2025',
    type: 'website',
    description: 'Project website submission'
  },
  {
    id: '10',
    name: 'Research Paper',
    marks: 10,
    date: '20 March 2025',
    type: 'paper',
    description: 'Research paper submission'
  },
  {
    id: '11',
    name: 'Progress Reports',
    marks: 2,
    date: '4–6 December 2024',
    type: 'report',
    description: 'Regular progress documentation'
  },
  {
    id: '12',
    name: 'Logbook',
    marks: 2,
    date: '9 June 2025',
    type: 'logbook',
    description: 'Project activity logbook'
  },
];

// Helper function to get icon for milestone type
const getMilestoneIcon = (type: AssessmentType) => {
  switch (type) {
    case 'presentation':
      return <PresentationChartLineIcon className="h-6 w-6" />;
    case 'report':
      return <DocumentTextIcon className="h-6 w-6" />;
    case 'viva':
      return <AcademicCapIcon className="h-6 w-6" />;
    case 'website':
      return <GlobeAltIcon className="h-6 w-6" />;
    case 'paper':
      return <DocumentTextIcon className="h-6 w-6" />;
    case 'logbook':
      return <BookOpenIcon className="h-6 w-6" />;
    default:
      return <ClipboardDocumentCheckIcon className="h-6 w-6" />;
  }
};

// Helper function to get color for milestone type
const getMilestoneColor = (type: AssessmentType) => {
  switch (type) {
    case 'presentation':
      return 'bg-blue-100 text-blue-800';
    case 'report':
      return 'bg-green-100 text-green-800';
    case 'viva':
      return 'bg-purple-100 text-purple-800';
    case 'website':
      return 'bg-indigo-100 text-indigo-800';
    case 'paper':
      return 'bg-yellow-100 text-yellow-800';
    case 'logbook':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

function Milestones() {
  const [isTimelineView, setIsTimelineView] = useState(true);
  const [selectedType, setSelectedType] = useState<AssessmentType | 'all'>('all');

  const filteredMilestones = selectedType === 'all'
    ? milestones
    : milestones.filter(m => m.type === selectedType);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Project Milestones</h1>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Table View</span>
            <Switch
              checked={isTimelineView}
              onChange={setIsTimelineView}
              className={`${
                isTimelineView ? 'bg-blue-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            >
              <span
                className={`${
                  isTimelineView ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
            <span className="text-sm font-medium">Timeline View</span>
          </div>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as AssessmentType | 'all')}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">All Types</option>
            <option value="presentation">Presentations</option>
            <option value="report">Reports</option>
            <option value="viva">Viva</option>
            <option value="website">Website</option>
            <option value="paper">Research Paper</option>
            <option value="logbook">Logbook</option>
          </select>
        </div>
      </div>

      {isTimelineView ? (
        <div className="space-y-6">
          {filteredMilestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 pb-8 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-500 -translate-x-1/2" />
              <div className="absolute left-0 top-0 w-0.5 h-full bg-gray-200 -translate-x-1/2" />
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${getMilestoneColor(milestone.type)}`}>
                      {getMilestoneIcon(milestone.type)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{milestone.name}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium">
                      {milestone.marks}%
                    </span>
                    <div className="mt-2 flex items-center text-gray-500">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{milestone.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assessment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Marks
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredMilestones.map((milestone) => (
                <motion.tr
                  key={milestone.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{milestone.name}</div>
                    <div className="text-sm text-gray-500">{milestone.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-lg ${getMilestoneColor(milestone.type)}`}>
                        {getMilestoneIcon(milestone.type)}
                      </div>
                      <span className="ml-2 text-sm text-gray-900 capitalize">{milestone.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium">
                      {milestone.marks}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {milestone.date}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Milestones;