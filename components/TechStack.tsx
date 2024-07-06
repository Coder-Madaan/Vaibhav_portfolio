import React from "react";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3, FaJs, FaFlask, FaDatabase, FaCuttlefish } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const techStackItems = [
  { name: "Typescript", icon: <FaReact size={60} />, id: "typescript" },
  { name: "Python", icon: <FaPython size={60} />, id: "python" },
  { name: "React", icon: <FaReact size={60} />, id: "react" },
  { name: "HTML5", icon: <FaHtml5 size={60} />, id: "html5" },
  { name: "CSS3", icon: <FaCss3 size={60} />, id: "css3" },
  { name: "JavaScript", icon: <FaJs size={60} />, id: "javascript" },
  { name: "Flask", icon: <FaFlask size={60} />, id: "flask" },
  { name: "Express", icon: <SiExpress size={60} />, id: "express" },
  { name: "MongoDB", icon: <SiMongodb size={60} />, id: "mongodb" },
  { name: "C++", icon: <FaCuttlefish size={60} />, id: "cpp" },
  { name: "Node.js", icon: <FaNodeJs size={60} />, id: "nodejs" },
];

const TechStack = () => {
  return (
    <div className="mx-auto relative w-[85vw] overflow-hidden py-6" id="skills">
      <h1 className="text-center text-white text-3xl mb-6 mx-auto font-bold uppercase">Skills</h1>
      <motion.div
        className="flex gap-8 animate-marquee left-0"
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        
      >
        {[...techStackItems, ...techStackItems].map((item, index) => (
          <div key={item.id + index} className="flex flex-col items-center justify-center p-4 bg-slate-800 rounded-lg">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-700 p-2 mb-2">
              {item.icon}
            </div>
            <p className="text-white text-center">{item.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;
