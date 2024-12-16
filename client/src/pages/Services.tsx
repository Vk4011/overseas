import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: BookOpen,
    title: 'Academic Counseling',
    description: 'Get expert guidance on your academic journey',
  },
  {
    icon: GraduationCap,
    title: 'University Admissions',
    description: 'Support with university applications and admissions',
  },
  {
    icon: Users,
    title: 'Career Guidance',
    description: 'Professional career counseling and planning',
  },
  {
    icon: Globe,
    title: 'Study Abroad',
    description: 'Comprehensive support for international education',
  },
];

export function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
        <Link to="/basic">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
        </Link>
      </motion.div>
    </div>
  );
}