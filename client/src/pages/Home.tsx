import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Users, 
  GraduationCap, 
  Globe, 
  Book, 
  FileSignature, 
  LifeBuoy, 
  LucideHome as HomeIcon, 
  FileType, 
  Plane as LucidePlane, 
  DollarSign as CurrencyIcon, 
  Target, 
  ClipboardCheck,
  School
} from 'lucide-react';
import { ServiceCard } from '../components/home/ServiceCard';
import { UniversityCard } from '../components/home/UniversityCard';
import { ReviewCard } from '../components/home/ReviewCard';

export function Home() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Emily Johnson",
      message: "Amazing support throughout my study abroad journey to the UK! The consultants made everything so smooth and stress-free.",
      location: "Studied in London, UK",
      socialLinks: {
        instagram: "https://instagram.com/emily_travels",
        linkedin: "https://linkedin.com/in/emilyjohnson",
        twitter: "https://twitter.com/emily_abroad"
      },
      image: "/api/placeholder/200/200"
    },
    {
      id: 2,
      name: "Michael Chen",
      message: "Helped me navigate the complex application process for studying in Canada. Couldn't have done it without their expertise!",
      location: "Studied in Toronto, Canada",
      socialLinks: {
        instagram: "https://instagram.com/michael_explorer",
        linkedin: "https://linkedin.com/in/michaelchen",
        twitter: "https://twitter.com/michael_global"
      },
      image: "/api/placeholder/200/200"
    },
    {
      id: 3,
      name: "Sarah Martinez",
      message: "Professional, caring, and incredibly knowledgeable. They found the perfect university program for my academic goals.",
      location: "Studied in Sydney, Australia",
      socialLinks: {
        instagram: "https://instagram.com/sarah_worldwide",
        linkedin: "https://linkedin.com/in/sarahmartinez",
        twitter: "https://twitter.com/sarah_study_abroad"
      },
      image: "/api/placeholder/200/200"
    }
  ];

  const universities = [
    {
      name: "Harvard University",
      location: "Cambridge, USA",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80",
      programs: "150+ Programs",
      students: "20,000+ Students"
    },
    {
      name: "Oxford University",
      location: "Oxford, UK",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&q=80",
      programs: "350+ Programs",
      students: "25,000+ Students"
    },
    {
      name: "University of Toronto",
      location: "Toronto, Canada",
      image: "https://www.universitymagazine.ca/wp-content/uploads/2022/01/What-is-the-University-of-Toronto-Acceptance-Rate.jpg",
      programs: "200+ Programs",
      students: "30,000+ Students"
    }
  ];

  const services = [
    {
      icon: GraduationCap,
      title: "Profile Evaluation",
      description: "Assess your profile to recommend the best universities based on GPA, test scores, and talents."
    },
    {
      icon: Target,
      title: "Career Counseling",
      description: "Expert advice to explore and choose career paths that align with your aspirations."
    },
    {
      icon: Book,
      title: "Course & Country Selection",
      description: "Guidance to match your expectations with the right courses and destinations."
    },
    {
      icon: School,
      title: "University Selection",
      description: "Direct placements through verified university partnerships, ensuring transparency and affordability."
    },
    {
      icon: ClipboardCheck,
      title: "Application Assistance",
      description: "Streamlined application processes with personalized guidance for interviews and documentation."
    },
    {
      icon: FileType,
      title: "Admission & Scholarship Support",
      description: "Help in securing admissions and scholarships, overcoming financial challenges for talented students."
    },
    {
      icon: FileSignature,
      title: "Visa Assistance",
      description: "Step-by-step support to navigate the visa application process for your chosen country."
    },
    {
      icon: HomeIcon,
      title: "Accommodation Assistance",
      description: "Find safe, affordable housing options and connect with supportive communities."
    },
    {
      icon: LucidePlane,
      title: "Travel & Pre-Departure Support",
      description: "Organized travel plans and thorough pre-departure briefings for a smooth transition."
    },
    {
      icon: LifeBuoy,
      title: "Post-Arrival Support",
      description: "Ongoing support to help you adapt to your new environment and excel in your studies."
    },
    {
      icon: CurrencyIcon,
      title: "Forex Assistance",
      description: "Assistance with foreign exchange and financial planning for your educational journey."
    }
  ];

  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(reviewInterval);
  }, [reviews.length]);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl font-bold mb-6">
              Your Journey to Global Education Starts Here
            </h1>
            <p className="text-xl mb-8">
              Transform your future with world-class education opportunities abroad.
              Expert guidance for your international academic journey.
            </p>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <Users className="w-12 h-12 mb-4" aria-hidden="true" />
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-xl">Happy Students</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <GraduationCap className="w-12 h-12 mb-4" aria-hidden="true" />
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-xl">Partner Universities</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <Globe className="w-12 h-12 mb-4" aria-hidden="true" />
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-xl">Countries</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Universities Section */}
      <div className="bg-gray-50">
        <section className="relative py-20 bg-blue-900 text-white">
          <div className="absolute inset-0" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80"
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-5xl font-bold mb-6">Partner Universities</h2>
              <p className="text-xl max-w-2xl mb-8">
                Explore our network of prestigious universities worldwide.
                Find the perfect institution for your academic journey.
              </p>
              <div className="max-w-2xl relative">
                <input
                  type="text"
                  placeholder="Search universities..."
                  className="w-full px-6 py-4 rounded-lg text-gray-900 pr-12"
                  aria-label="Search Universities"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" aria-hidden="true" />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {universities.map((university, index) => (
                <UniversityCard key={index} {...university} />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Student Success Stories Section */}
      <section className="container mx-auto px-4 py-16 overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Student Success Stories</h2>
        <div className="relative h-96 overflow-hidden">
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.id}
              review={review}
              isActive={index === currentReviewIndex}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
