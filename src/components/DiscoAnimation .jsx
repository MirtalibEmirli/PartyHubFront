import React from 'react';
import { motion } from 'framer-motion';
import DiscoBall from '../assets/disco.svg';

const DiscoAnimation = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
    style={{ width: 100, height: 100 }}
  >
    <img src={DiscoBall} style={{ width: '100%', height: '100%' }} alt="Disco Ball" />
  </motion.div>
);

export default DiscoAnimation;
