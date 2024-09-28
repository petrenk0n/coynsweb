import React from 'react';
import { motion } from 'framer-motion';
import { AiBrain03Icon, CoinsDollarIcon, ChartLineData01Icon } from "hugeicons-react";

const Welcome: React.FC = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 flex flex-col justify-center items-center p-4 sm:p-8">
        <motion.div 
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/logo.svg" alt="Coyns.AI Logo" className="h-12 sm:h-32 md:h-14 w-auto" />
        </motion.div>
  
        <motion.div
          className="flex items-center justify-center space-x-2 sm:space-x-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <AiBrain03Icon size={32} color="#4B5563" />
          <div className="text-2xl sm:text-3xl font-bold text-gray-600">+</div>
          <CoinsDollarIcon size={32} color="#4B5563" />
          <div className="text-2xl sm:text-3xl font-bold text-gray-600">=</div>
          <ChartLineData01Icon size={32} color="#4B5563" />
        </motion.div>

        <motion.p
          className="text-sm text-gray-500 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Coming soon to revolutionize your personal finance future
        </motion.p>
      </div>
    );
  };

export default Welcome;