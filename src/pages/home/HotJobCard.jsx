import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    company,
    company_logo,
    description,
    salaryRange,
    requirements,
  } = job;

  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Animation when hovered
      whileTap={{ scale: 0.95 }} // Animation when clicked
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="border rounded-lg p-6 shadow-lg max-w-sm bg-white font-sans"
    >
      {/* Company Logo and Name */}
      <div className="flex items-center mb-4">
        <img
          src={company_logo}
          alt={`${company} Logo`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{company}</h3>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>

      {/* Job Title */}
      <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>

      {/* Job Type */}
      <p className="text-sm text-gray-600 flex items-center mb-2">
        <span className="mr-2">🕒</span>
        {jobType}
      </p>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {/* Requirements */}
      <div className="flex flex-wrap gap-2 mb-4">
        {requirements.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Salary */}
      <p className="text-lg font-bold text-blue-600 mb-4">
        {salaryRange.min.toLocaleString()} - {salaryRange.max.toLocaleString()}{" "}
        {salaryRange.currency.toUpperCase()}
      </p>

      {/* Apply Now Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
        onClick={() => navigate(`/jobs/${job._id}`)}
      >
        View Details
      </motion.button>
    </motion.div>
  );
};

export default HotJobCard;
