
import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";
import javaIcon from "../../assets/java.svg"; // Import Java image from assets

const Skills = () => {
  const skills = [
    { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
    { name: "HTML", icon: <FaHtml5 />, color: "#E34C26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
    { name: "GitHub", icon: <FaGithub />, color: "#181717" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
    { name: "Java", icon: <img src={javaIcon} alt="Java" className="w-12 h-12" />, color: "#5382A1" }, // Java with image
  ];

  return (
    <section className="bg-[rgb(241,233,219)] flex text-center justify-center items-center relative min-h-screen px-10" id="skills">
      <div className="container mx-auto px-4">
        <div className="artifika-regular py-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <h1>My</h1>
          <h1>Amazing</h1>
          <h1>Stacks</h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 py-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white border-2 rounded-lg p-4 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-40 sm:w-48 md:w-56"
              style={{ borderColor: skill.color }}
            >
              <div className="text-5xl mb-3" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <p className="text-lg font-semibold text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

