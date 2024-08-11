import React from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { AiOutlinePercentage } from "react-icons/ai";
import { LiaSchoolSolid } from "react-icons/lia";
import { IoBusinessOutline } from "react-icons/io5";
import { MdSchool } from "react-icons/md";
import { useTheme } from "../ThemeContext";
import FloatingSVGs from "./SVGPatterns";

const Education = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-500 ${
        isDarkMode
          ? "bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-950 text-gray-100"
          : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-900"
      }`}
    >
      {/* SVG background container */}
      <div className="absolute inset-0">
        <FloatingSVGs isDarkMode={isDarkMode} />
      </div>

      <div className="container mx-auto px-4 py-8 relative">
        <h2 className="text-5xl font-bold mb-12 text-center flex items-center justify-center">
          <LiaSchoolSolid className="mr-3 text-4xl" /> Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Class 10th */}
          <div
            className={`${
              isDarkMode
                ? "bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-950 text-gray-100"
                : "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-900"
            } p-8 rounded-lg shadow-xl transition duration-300 relative`}
          >
            <div className="absolute inset-0">
              <FloatingSVGs isDarkMode={isDarkMode} />
            </div>
            <div className="flex items-center mb-6">
              <div className="rounded-full bg-blue-500 p-3 mr-4">
                <MdSchool className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold flex items-center">
                  <FaSchool className="mr-3 text-xl" /> Class 10th
                </h3>
                <h4 className="text-md font-medium">Shirdi Urdu High School</h4>
                <div className="flex items-center text-md mt-2">
                  <BiTime className="mr-2 text-lg" /> 2015
                </div>
              </div>
            </div>
            <div className="flex items-center text-md mt-4">
              <AiOutlinePercentage className="mr-2 text-lg" /> 76%
            </div>
          </div>

          {/* Class 12th */}
          <div
            className={`${
              isDarkMode
                ? "bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-950 text-gray-100"
                : "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-900"
            } p-8 rounded-lg shadow-xl transition duration-300 relative`}
          >
            <div className="absolute inset-0">
              <FloatingSVGs isDarkMode={isDarkMode} />
            </div>
            <div className="flex items-center mb-6">
              <div className="rounded-full bg-blue-500 p-3 mr-4">
                <IoBusinessOutline className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold flex items-center">
                  <FaSchool className="mr-3 text-xl" /> Class 12th (Science)
                </h3>
                <h4 className="text-md font-medium">
                  Kulbhushan College of Arts & Science
                </h4>
                <div className="flex items-center text-md mt-2">
                  <BiTime className="mr-2 text-lg" /> 2018
                </div>
              </div>
            </div>
            <div className="flex items-center text-md mt-4">
              <AiOutlinePercentage className="mr-2 text-lg" /> 59%
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div
            className={`${
              isDarkMode
                ? "bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-950 text-gray-100"
                : "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-900"
            } p-8 rounded-lg shadow-xl transition duration-300 relative`}
          >
            <div className="absolute inset-0">
              <FloatingSVGs isDarkMode={isDarkMode} />
            </div>
            <div className="flex items-center mb-6">
              <div className="rounded-full bg-blue-500 p-3 mr-4">
                <FaGraduationCap className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold flex items-center">
                  <FaGraduationCap className="mr-3 text-xl" /> Bachelor of
                  Computer Science
                </h3>

                <p className="font-medium text-md mt-2">
                  Shri Sai Baba College Shirdi, SPPU University
                </p>
                <div className="flex items-center text-md mt-2">
                  <BiTime className="mr-2 text-lg" /> 2020 - Present
                </div>
              </div>
            </div>
            <div className="text-md">In Progress</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
