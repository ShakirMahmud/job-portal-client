import React from "react";

const AddJob = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-8">
      {/* Form Container */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Add New Job</h1>
          <p className="text-gray-500 mt-1">Fill out the form to create a new job listing.</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Title */}
          <div className="form-control">
            <label htmlFor="title" className="block mb-2 text-gray-700 font-medium">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="e.g.,Software Engineer"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Location */}
          <div className="form-control">
            <label htmlFor="location" className="block mb-2 text-gray-700 font-medium">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="e.g., Halishohor, Chittagong"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Job Type */}
          <div className="form-control">
            <label htmlFor="jobType" className="block mb-2 text-gray-700 font-medium">
              Job Type
            </label>
            <select
              name="jobType"
              id="jobType"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Job Type</option>
              <option value="Onsite">Onsite</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          {/* Category */}
          <div className="form-control">
            <label htmlFor="category" className="block mb-2 text-gray-700 font-medium">
              Category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="e.g., Computer Engineering"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Salary Range */}
          <div className="flex space-x-4">
            <div className="form-control w-1/2">
              <label htmlFor="minSalary" className="block mb-2 text-gray-700 font-medium">
                Min Salary (BDT)
              </label>
              <input
                type="number"
                name="minSalary"
                id="minSalary"
                placeholder="e.g., 40000"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="form-control w-1/2">
              <label htmlFor="maxSalary" className="block mb-2 text-gray-700 font-medium">
                Max Salary (BDT)
              </label>
              <input
                type="number"
                name="maxSalary"
                id="maxSalary"
                placeholder="e.g., 60000"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Application Deadline */}
          <div className="form-control">
            <label htmlFor="applicationDeadline" className="block mb-2 text-gray-700 font-medium">
              Application Deadline
            </label>
            <input
              type="date"
              name="applicationDeadline"
              id="applicationDeadline"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div className="form-control">
            <label htmlFor="description" className="block mb-2 text-gray-700 font-medium">
              Job Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="4"
              placeholder="Describe the job role here..."
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* HR Email */}
          <div className="form-control">
            <label htmlFor="hrEmail" className="block mb-2 text-gray-700 font-medium">
              HR Email
            </label>
            <input
              type="email"
              name="hrEmail"
              id="hrEmail"
              placeholder="e.g., hr@company.com"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* HR Name */}
          <div className="form-control">
            <label htmlFor="hrName" className="block mb-2 text-gray-700 font-medium">
              HR Name
            </label>
            <input
              type="text"
              name="hrName"
              id="hrName"
              placeholder="e.g., Farhan Rahman"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-control">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
