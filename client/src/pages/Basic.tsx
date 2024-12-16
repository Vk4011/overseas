import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, X, BookOpen, Briefcase, Globe, Coins, Plane, Award } from 'lucide-react';

const iconMap = {
  'AGENDA': BookOpen,
  'SERVICES PROVIDED BY BASIC CONSULTANTS': Briefcase,
  'ZERO PROCESSING FEE': Coins,
  'FREE EDUCATION IN EUROPE': Globe,
  'LOW BUDGET COUNTRIES': Coins,
  'NO VISA INTERVIEW COUNTRIES': Plane,
  'GOVERNMENT FUNDED SCHOLARSHIPS FOR ABROAD STUDIES': Award
};

const Basic = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const dashboardItems = [
    { title: 'AGENDA', description: 'Your personalized study plan and timeline.' },
    { title: 'SERVICES PROVIDED BY BASIC CONSULTANTS', description: 'Guidance and support for your academic journey.' },
    { title: 'ZERO PROCESSING FEE', description: 'Processing fee waivers for select countries.' },
    { title: 'FREE EDUCATION IN EUROPE', description: 'Access free education opportunities in Europe.' },
    { title: 'LOW BUDGET COUNTRIES', description: 'Cost-effective study abroad options.' },
    { title: 'NO VISA INTERVIEW COUNTRIES', description: 'Hassle-free visa processes.' },
    { title: 'GOVERNMENT FUNDED SCHOLARSHIPS FOR ABROAD STUDIES', description: 'Fully funded scholarships exploration.' },
    { title: 'CENTRAL GOVERNMENT SCHOLARSHIPS', description: 'Support for deserving students.' },
  ];

  const tooltipContent = {
    'AGENDA': [
      "Services Provided by Basic Consultants",
      "Zero Processing Fee Countries",
      "Free Education in Europe",
      "Low Budget Countries",
      "No Visa Interview Countries",
      "Why Basic Consultants",
      "Government Funded Scholarships"
    ],
    'SERVICES PROVIDED BY BASIC CONSULTANTS': [
      "Study Visa", "Tourist Visa", "Business Visa", 
      "H-1B Visa", "PR Visa", "Investor Visa", "Study Loan"
    ],
    'ZERO PROCESSING FEE': [
      "USA", "UK", "Ireland", "Canada", 
      "Australia", "New Zealand"
    ],
    'FREE EDUCATION IN EUROPE': [
      "Germany", "Luxembourg", "Estonia", 
      "France", "Finland", "Norway", 
      "Austria", "Italy"
    ],
    'LOW BUDGET COUNTRIES': [
      "Latvia", "Lithuania", "Portugal", 
      "Poland", "Slovakia", "Hungary", "Slovenia"
    ],
    'NO VISA INTERVIEW COUNTRIES': [
      "Malta", "Ireland", "Italy", "Sweden", 
      "Luxembourg", "Finland", "Austria", "Canada"
    ],
    'GOVERNMENT FUNDED SCHOLARSHIPS FOR ABROAD STUDIES': [
    "Telangana Government",
    "Telangana Overseas Scholarship Scheme",
    "  Eligibility: Economically weaker sections (EWS).",
    "  Amount: Up to ₹20 Lakhs.",
    "Post Matric Scholarships",
    "  Eligibility: SC, ST, and OBC students.",
    "  Amount: Up to ₹20 Lakhs.",
    "Andhra Pradesh Government Scholarships",
    "Ambedkar Overseas Vidya Nidhi",
    "  Eligibility: SC, ST, and OBC students.",
    "  Amount: Up to ₹15 lakh for the entire course.",
    "Chief Minister’s Overseas Scholarship Scheme",
    "  Eligibility: Economically disadvantaged students.",
    "  Amount: Up to ₹20 lakh."
  ],
  'CENTRAL GOVERNMENT SCHOLARSHIPS': [
    "National Overseas Scholarship Scheme",
    "  Eligibility: SC, ST, and OBC candidates for postgraduate studies.",
    "  Amount: Up to ₹15 lakh for tuition and living expenses.",
    "Central Sector Scheme of Scholarships for College and University Students",
    "  Eligibility: Economically weaker students pursuing higher education.",
    "  Amount: Varies; typically ₹10,000 per annum."
  ]
  };

  const handleItemClick = (title) => {
    setActiveTooltip(activeTooltip === title ? null : title);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-5xl font-extrabold text-blue-800 mb-12 tracking-tight"
      >
        BASIC CONSULTANTS
      </motion.h1>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              delayChildren: 0.2,
              staggerChildren: 0.1 
            }
          }
        }}
        className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {dashboardItems.map((item, index) => {
          const IconComponent = iconMap[item.title] || Info;
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleItemClick(item.title)}
              className="relative p-6 bg-white rounded-2xl shadow-lg cursor-pointer group overflow-hidden"
            >
              <div className="flex items-center mb-4">
                <IconComponent 
                  className="mr-4 text-blue-600 group-hover:text-blue-800 transition-colors"
                  size={32}
                />
                <h2 className="text-xl font-bold text-blue-700">{item.title}</h2>
              </div>
              <p className="text-gray-600">{item.description}</p>
              <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-blue-100 opacity-10 rounded-full group-hover:opacity-20 transition-opacity"></div>
            </motion.div>
          );
        })}
      </motion.div>

      <AnimatePresence>
        {activeTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-white w-11/12 max-w-md rounded-2xl p-8 shadow-2xl relative"
            >
              <button 
                onClick={() => setActiveTooltip(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold text-blue-700 mb-6">
                {activeTooltip}
              </h2>
              <ul className="space-y-3 text-gray-700">
                {tooltipContent[activeTooltip].map((content, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <span className="mr-3 text-blue-500">•</span>
                    {content}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Basic;