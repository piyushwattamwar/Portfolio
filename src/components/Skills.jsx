// Skills.jsx
import React from "react";
import { FaCode, FaDatabase, FaBook, FaPaintBrush } from "react-icons/fa";

const skills = [
  {
    category: "Languages",
    icon: <FaCode className="text-3xl text-crimson" />,
    items: ["C++","Python(Basics)","HTML", "CSS", "JavaScript", "React", "Express", "Node"],
  },
  {
    category: "Databases",
    icon: <FaDatabase className="text-3xl text-crimson" />,
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Core Subjects",
    icon: <FaBook className="text-3xl text-crimson" />,
    items: ["Computer Networks", "DBMS", "Data Structures", "OS"],
  },
  {
    category: "Responsibilities",
    icon: <FaPaintBrush className="text-3xl text-crimson" />,
    items: ["ISTE Student Chapter Coordinator"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-14">
          Ski<span className="text-crimson">ll</span>s
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg transform hover:-translate-y-2 hover:shadow-xl transition duration-300 ease-in-out"
            >
              <div className="flex flex-col items-center mb-4">
                {skill.icon}
                <h3 className="mt-3 text-xl font-semibold text-gray-800">
                  {skill.category}
                </h3>
              </div>
              <ul className="text-gray-600 space-y-2 text-sm text-left">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-crimson text-base">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
