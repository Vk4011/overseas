import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

interface Review {
  id: number;
  name: string;
  message: string;
  location: string;
  image: string;
  socialLinks: {
    instagram: string;
    linkedin: string;
    twitter: string;
  };
}

interface ReviewCardProps {
  review: Review;
  isActive: boolean;
}

export function ReviewCard({ review, isActive }: ReviewCardProps) {
  return (
    <div
      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
        isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      }`}
      role="group"
      aria-label={`Review by ${review.name}`}
    >
      <div className="bg-white shadow-2xl rounded-xl p-8 flex items-center max-w-4xl mx-auto">
        <div className="w-1/3 mr-8">
          <img 
            src={review.image} 
            alt={`Picture of ${review.name}`} 
            className="rounded-full w-48 h-48 object-cover mx-auto shadow-lg"
          />
        </div>
        <div className="w-2/3">
          <p className="text-xl italic mb-4 text-gray-700">"{review.message}"</p>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-xl text-blue-900">{review.name}</p>
              <p className="text-gray-600">{review.location}</p>
            </div>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ scale: 1.2 }}
                href={review.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`${review.name}'s Instagram`}
                className="text-pink-600 hover:text-pink-800 transition"
              >
                <Instagram size={24} aria-hidden="true" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2 }}
                href={review.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`${review.name}'s LinkedIn`}
                className="text-blue-700 hover:text-blue-900 transition"
              >
                <Linkedin size={24} aria-hidden="true" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2 }}
                href={review.socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`${review.name}'s Twitter`}
                className="text-blue-400 hover:text-blue-600 transition"
              >
                <Twitter size={24} aria-hidden="true" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
