import { MapPin, GraduationCap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface UniversityCardProps {
  name: string;
  location: string;
  image: string;
  programs: string;
  students: string;
}

export function UniversityCard({ name, location, image, programs, students }: UniversityCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      role="article"
      aria-label={`Information about ${name}`}
    >
      <img
        src={image}
        alt={`Campus of ${name}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="space-y-2 text-gray-600">
          <p className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" aria-hidden="true" />
            {location}
          </p>
          <p className="flex items-center">
            <GraduationCap className="w-5 h-5 mr-2" aria-hidden="true" />
            {programs}
          </p>
          <p className="flex items-center">
            <Users className="w-5 h-5 mr-2" aria-hidden="true" />
            {students}
          </p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition duration-300"
          aria-label={`Learn more about ${name}`}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
}
