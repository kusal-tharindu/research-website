import { motion } from 'framer-motion';

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Project Lead',
      email: 'john.doe@example.com',
      achievements: 'IoT Systems Specialist, Published Researcher',
    },
    {
      name: 'Jane Smith',
      role: 'Software Architect',
      email: 'jane.smith@example.com',
      achievements: 'Full Stack Developer, Cloud Computing Expert',
    },
    {
      name: 'Mike Johnson',
      role: 'Hardware Engineer',
      email: 'mike.johnson@example.com',
      achievements: 'Embedded Systems Developer, Sensor Integration Specialist',
    },
  ];

  return (
    <div className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Research Team</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated researchers and engineers behind the Water360 project,
            working together to revolutionize water quality monitoring through IoT innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-3xl text-gray-600">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-primary-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.email}</p>
              <div className="border-t pt-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Achievements</h4>
                <p className="text-sm text-gray-600">{member.achievements}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Supervision</h2>
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Sarah Wilson</h3>
            <p className="text-primary-600 font-medium mb-2">Research Supervisor</p>
            <p className="text-gray-600">
              Expert in IoT Systems and Water Quality Analysis with over 15 years of
              research experience in environmental monitoring systems.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}