import { motion } from 'framer-motion';
import { Award, Users, Globe, Clock } from 'lucide-react';
import { TeamMember } from '../components/about/TeamMember';

const teamMembers = [
  {
    name: "John Smith",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    name: "Sarah Williams",
    role: "Head of Counseling",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  },
  {
    name: "David Chen",
    role: "Senior Education Consultant",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  }
];

export function About() {
  return (
    <div className="bg-gray-50">
      <section className="relative py-20 bg-blue-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            alt="About Us"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 relative z-10"
        >
          <h1 className="text-5xl font-bold mb-6">About GlobalStudies</h1>
          <p className="text-xl max-w-2xl">
            Helping students achieve their dreams of international education since 1995.
            We're committed to providing expert guidance and support throughout your
            academic journey abroad.
          </p>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1995, GlobalStudies began with a simple mission: to help
                students access quality education worldwide. What started as a small
                consultancy has grown into a trusted name in international education.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've helped thousands of students from diverse
                backgrounds achieve their dreams of studying abroad. Our experienced
                team of counselors brings together decades of expertise in
                international education.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, title: "Excellence", description: "Committed to highest standards" },
                { icon: Users, title: "Experience", description: "25+ years of expertise" },
                { icon: Globe, title: "Global Reach", description: "Partners worldwide" },
                { icon: Clock, title: "Support", description: "24/7 student assistance" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <item.icon className="w-12 h-12 text-blue-900 mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TeamMember {...member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}