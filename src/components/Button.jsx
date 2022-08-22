import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ styles }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
    >
      Get Started
    </motion.button>
  );
};

export default Button;
