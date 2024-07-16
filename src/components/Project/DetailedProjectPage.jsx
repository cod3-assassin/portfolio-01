// DetailedProjectPage.jsx

import React from "react";

const DetailedProjectPage = ({ project }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-8 text-center">{project.title}</h2>
        <div className="max-w-4xl mx-auto">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg mb-4"
            />
          )}
          <div className="bg-gray-900 p-4 rounded-lg">
            <div className="text-sm text-white mb-4 space-y-2">
              <p>{project.description}</p>
              {project.bullets && (
                <ul className="list-disc list-inside space-y-1">
                  {project.bullets.map((bullet, index) => (
                    <li key={index} className="ml-4">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
              {project.keyFeatures && (
                <div className="space-y-1">
                  <div className="font-bold">Key Features:</div>
                  <ul className="list-disc list-inside space-y-1">
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index} className="ml-4">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {project.usefulFor && (
                <div className="space-y-1">
                  <div className="font-bold">Useful For:</div>
                  <ul className="list-disc list-inside space-y-1">
                    {project.usefulFor.map((use, index) => (
                      <li key={index} className="ml-4">
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedProjectPage;
