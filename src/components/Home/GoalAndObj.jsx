import React from "react";
import { motion } from "framer-motion";

const VisionMissionCard = ({ title, description, direction }) => {
  // Animation variants based on direction
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="rounded-2xl p-6 flex flex-col items-center h-full shadow-lg border-2"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-2xl font-bold mb-4 relative">{title}</h2>
      <p className="text-center text-sm">{description}</p>
    </motion.div>
  );
};

const GoalAndObj = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
        <VisionMissionCard
          title="Our Vision"
          description="To pioneer innovative electronic solutions, creating a smarter and more sustainable future for all."
          direction="left"
        />
        <VisionMissionCard
          title="Our Mission"
          description="To design and deliver cutting-edge technologies that empower communities, businesses, and individuals to excel in a connected world."
          direction="right"
        />
        <VisionMissionCard
          title="Our Commitment"
          description="To ensure environmental responsibility through sustainable production practices and energy-efficient products."
          direction="up"
        />
        <VisionMissionCard
          title="Our Values"
          description="Innovation, integrity, and customer-centricity are at the heart of everything we do."
          direction="down"
        />
      </div>
    </div>
  );
};

export default GoalAndObj;
