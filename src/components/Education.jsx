import React from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { AiOutlinePercentage } from "react-icons/ai";
import { IoBusinessOutline } from "react-icons/io5";

const Education = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-8">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-blue-500 p-2 mr-4">
                <FaSchool className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Class 10th</h3>
                <h4 className="text-sm">Shirdi Urdu High School</h4>
                <div className="flex items-center text-sm">
                  <BiTime className="mr-1" /> 2015
                </div>
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <AiOutlinePercentage className="mr-1" /> 76%
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-blue-500 p-2 mr-4">
                <IoBusinessOutline className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Class 12th (Science)</h3>
                <h4 className="text-sm">
                  Kulbhushan College of Arts & Science
                </h4>
                <div className="flex items-center text-sm">
                  <BiTime className="mr-1" /> 2018
                </div>
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <AiOutlinePercentage className="mr-1" /> 59%
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-blue-500 p-2 mr-4">
                <FaGraduationCap className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">
                  Bachelor's Degree in Computer Science
                </h3>
                <div className="flex items-center text-sm">
                  <BiTime className="mr-1" /> 2020 - Present
                </div>
                <p className="text-sm">
                  Shri Sai Baba College Shirdi, SPPU University
                </p>
              </div>
            </div>
            <div className="text-sm">In Progress</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
