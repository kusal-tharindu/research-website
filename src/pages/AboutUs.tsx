import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

interface Person {
  name: string;
  position: string;
  institute?: string;
  company?: string;
  email: string;
  image: string;
}

// Data for supervisors and project members
const supervisors: Person[] = [
  {
    name: "Prof. Anuradha Jayakody",
    position: "Head | Department of Computer Systems Engineering",
    institute: "SLIIT",
    email: "anurada.j@sliit.lk",
    image: "/images/new/anradasir.png"
  },
  {
    name: "Mr. Dinith Primal",
    position: "Lecturer",
    institute: "SLIIT",
    email: "dinith.p@sliit.lk",
    image: "/images/new/dinithsir.jpeg"
  }
];

const projectMembers: Person[] = [
  {
    name: "Kusal Tharindu",
    position: "DevOps and Cloud Engineer",
    company: "NeoVizta",
    email: "it21157196@my.sliit.lk",
    image: "/images/new/kusal.jpeg"
  },
  {
    name: "Malitha Abeysinghe",
    position: "Network Engineer",
    company: "MillenniumIT ESP",
    email: "it21038846@my.sliit.lk",
    image: "/images/new/malith.jpeg"
  },
  {
    name: "Kavindu Dilshan",
    position: "System Engineer",
    company: "MillenniumIT ESP",
    email: "it21165634@my.sliit.lk",
    image: "/images/new/kavindu.jpeg"
  },
  {
    name: "Sasindu Karunarathne",
    position: "Network Engineer",
    company: "MillenniumIT ESP",
    email: "it21185984@my.sliit.lk",
    image: "/images/new/sasindu.jpeg"
  }
];

// Card component for both supervisors and project members
const ProfileCard = ({ person, isSupervisor = false }: { person: Person; isSupervisor?: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md border border-gray-100 p-6 transition-all duration-300"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-32 h-32">
          <img
            src={person.image}
            alt={person.name}
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800">{person.name}</h3>
          <p className="text-gray-600 mt-1">{person.position}</p>
          <p className="text-gray-500 text-sm mt-1">
            {isSupervisor ? person.institute : person.company}
          </p>
          <a
            href={`mailto:${person.email}`}
            className="inline-flex items-center mt-3 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Mail className="w-4 h-4 mr-1" />
            <span className="text-sm">{person.email}</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Supervisors Section */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Supervisors
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supervisors.map((supervisor, index) => (
              <ProfileCard key={index} person={supervisor} isSupervisor={true} />
            ))}
          </div>
        </section>

        {/* Project Members Section */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Project Members
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projectMembers.map((member, index) => (
              <ProfileCard key={index} person={member} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}