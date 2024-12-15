import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const JobDetails = () => {
  const job = useLoaderData();
  const navigate = useNavigate();

  const {
    title,
    location,
    jobType,
    description,
    company,
    company_logo,
    salaryRange,
    requirements,
    responsibilities,
  } = job;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-gray-50">
      {/* Header */}
      <div className="relative mb-8">
        <img
          src="https://via.placeholder.com/1200x300" // Replace with a hero image
          alt="Hero Background"
          className="w-full h-48 md:h-64 object-cover rounded-lg"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
          <p className="text-sm md:text-lg">{location} • {jobType}</p>
        </div>
        <motion.button
        onClick={() => navigate(`/jobApply/${job._id}`)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-4 right-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
        >
          Apply Now
        </motion.button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Employment Information */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Employment Information</h2>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <p><span className="font-bold">Industry:</span> Software / Tech</p>
              <p><span className="font-bold">Job Level:</span> Experienced</p>
              <p><span className="font-bold">Salary:</span> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
              <p><span className="font-bold">Experience:</span> 2-5 years</p>
              <p><span className="font-bold">Posted On:</span> 10/10/2024</p>
              <p><span className="font-bold">Location:</span> {location}</p>
            </div>
          </div>

          {/* Job Description */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Job Description</h2>
            <p className="text-gray-700 mb-4">{description}</p>

            <h3 className="font-semibold mb-2">Responsibilities:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {responsibilities.map((item, index) => (
                <li key={index} className="mb-1">{item}</li>
              ))}
            </ul>

            <h3 className="font-semibold mt-4 mb-2">Requirements:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {requirements.map((item, index) => (
                <li key={index} className="mb-1">{item}</li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-start gap-4">
            <motion.button
              onClick={() => navigate(`/jobApply/${job._id}`)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Apply Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300"
            >
              Save Job
            </motion.button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Company Info */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Company Information</h3>
            <div className="flex items-center mb-4">
              <img
                src={company_logo}
                alt={`${company} Logo`}
                className="w-12 h-12 rounded-full mr-4"
              />
              <p className="font-semibold text-gray-700">{company}</p>
            </div>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Location:</span> {location}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Contact:</span> info@company.com
            </p>
          </div>

          {/* Similar Jobs */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Similar Jobs</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex justify-between items-center">
                <span>Frontend Developer</span>
                <span className="text-blue-600 font-semibold">$70k</span>
              </li>
              <li className="flex justify-between items-center">
                <span>UI/UX Designer</span>
                <span className="text-blue-600 font-semibold">$50k</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Backend Engineer</span>
                <span className="text-blue-600 font-semibold">$90k</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
