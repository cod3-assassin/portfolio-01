import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import ResumePDF from "../pdf/Resume.pdf"; // Importing the PDF directly

const About = () => {
  const handleAddressClick = () => {
    window.open(
      "https://www.google.com/maps?q=Godavari+wasahat+Sakuri+Tal+Rahata+423109"
    );
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+917066626439";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:lawlitel915@gmail.com";
  };

  const handleDownloadResume = () => {
    const a = document.createElement("a");
    a.href = ResumePDF; // Use the imported PDF directly as href
    a.download = "Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white relative overflow-hidden">
      <div className="container mx-auto px-8 py-12 z-10 relative">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <span className="font-bold">Name:</span>
                <span className="ml-4">Wasim Shah</span>
              </div>
              <div className="mb-6">
                <span className="font-bold">Date of Birth:</span>
                <span className="ml-4">20 June 1999</span>
              </div>
              <div className="mb-6">
                <span className="font-bold">Nationality:</span>
                <span className="ml-4">Indian</span>
              </div>
              <div className="mb-6">
                <span className="font-bold">Languages:</span>
                <span className="ml-4">English, Hindi, Marathi</span>
              </div>
            </div>
            <div>
              <div className="mb-6 cursor-pointer" onClick={handleAddressClick}>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-4" />
                  <span>Godavari wasahat, Sakuri, Tal: Rahata 423109</span>
                </div>
              </div>
              <div className="mb-6 cursor-pointer" onClick={handleEmailClick}>
                <div className="flex items-center">
                  <FaEnvelope className="mr-4" />
                  <span>lawlitel915@gmail.com</span>
                </div>
              </div>
              <div className="mb-6 cursor-pointer" onClick={handlePhoneClick}>
                <div className="flex items-center">
                  <FaPhone className="mr-4" />
                  <span>+917066626439</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none"
              onClick={handleDownloadResume}
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
