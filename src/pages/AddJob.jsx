import React, { useState } from "react";
import Swal from "sweetalert2";

const AddJob = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData);

        const jobData = {
            title: initialData.title,
            location: initialData.location,
            jobType: initialData.jobType,
            category: initialData.category,
            applicationDeadline: initialData.applicationDeadline,
            salaryRange: {
                min: parseInt(initialData.minSalary, 10),
                max: parseInt(initialData.maxSalary, 10),
                currency: initialData.currency,
            },
            description: initialData.description,
            company: initialData.company,
            requirements: initialData.requirements.split(",").map((req) => req.trim()),
            responsibilities: initialData.responsibilities.split(",").map((res) => res.trim()),
            status: initialData.status,
            hr_email: initialData.hrEmail,
            hr_name: initialData.hrName,
            company_logo: initialData.companyLogo,
        };

        fetch("http://localhost:5000/jobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jobData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Job added successfully",
                        showConfirmButton: true,
                        confirmButtonText: "OK",
                        timer: 1500,
                    });
                }
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen px-4 py-8 my-6 bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-5xl w-full">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-semibold text-gray-800">Add New Job</h1>
                    <p className="text-gray-500 mt-1">Fill out the form to create a new job listing.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Job Title */}
                    <div className="form-control">
                        <label htmlFor="title" className="block mb-2 text-gray-700 font-medium">Job Title</label>
                        <input type="text" name="title" placeholder="e.g., Software Engineer" required className="input-field" />
                    </div>

                    {/* Location */}
                    <div className="form-control">
                        <label htmlFor="location" className="block mb-2 text-gray-700 font-medium">Location</label>
                        <input type="text" name="location" placeholder="e.g., Halishohor, Chittagong" required className="input-field" />
                    </div>

                    {/* Job Type */}
                    <div className="form-control">
                        <label htmlFor="jobType" className="block mb-2 text-gray-700 font-medium">Job Type</label>
                        <select name="jobType" required className="input-field">
                            <option value="">Select Job Type</option>
                            <option value="Onsite">Onsite</option>
                            <option value="Remote">Remote</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>

                    {/* Category */}
                    <div className="form-control">
                        <label htmlFor="category" className="block mb-2 text-gray-700 font-medium">Category</label>
                        <input type="text" name="category" placeholder="e.g., Engineering" required className="input-field" />
                    </div>

                    {/* Application Deadline */}
                    <div className="form-control">
                        <label htmlFor="applicationDeadline" className="block mb-2 text-gray-700 font-medium">Application Deadline</label>
                        <input type="date" name="applicationDeadline" required className="input-field" />
                    </div>

                    {/* Salary Range */}
                    <div className="flex space-x-4">
                        <div className="form-control w-2/5">
                            <label htmlFor="minSalary" className="block mb-2 text-gray-700 font-medium">Min Salary</label>
                            <input type="number" name="minSalary" placeholder="e.g., 40000" required className="input-field" />
                        </div>
                        <div className="form-control w-2/5">
                            <label htmlFor="maxSalary" className="block mb-2 text-gray-700 font-medium">Max Salary</label>
                            <input type="number" name="maxSalary" placeholder="e.g., 60000" required className="input-field" />
                        </div>
                        <div className="form-control w-1/5">
                            <label htmlFor="currency" className="block mb-2 text-gray-700 font-medium">Currency</label>
                            <select name="currency" required className="input-field">
                                <option value="bdt">BDT</option>
                                <option value="usd">USD</option>
                                <option value="inr">INR</option>
                            </select>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="form-control">
                        <label htmlFor="description" className="block mb-2 text-gray-700 font-medium">Description</label>
                        <textarea name="description" rows="4" placeholder="Provide a job description..." required className="input-field"></textarea>
                    </div>

                    {/* Requirements */}
                    <div className="form-control">
                        <label htmlFor="requirements" className="block mb-2 text-gray-700 font-medium">Requirements</label>
                        <input type="text" name="requirements" placeholder="e.g., JavaScript, React, Node.js (comma-separated)" required className="input-field" />
                    </div>

                    {/* Responsibilities */}
                    <div className="form-control">
                        <label htmlFor="responsibilities" className="block mb-2 text-gray-700 font-medium">Responsibilities</label>
                        <input type="text" name="responsibilities" placeholder="e.g., Develop software, Collaborate with team (comma-separated)" required className="input-field" />
                    </div>

                    {/* Status */}
                    <div className="form-control">
                        <label htmlFor="status" className="block mb-2 text-gray-700 font-medium">Status</label>
                        <select name="status" required className="input-field">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>

                    {/* HR Details */}
                    <div className="flex space-x-4">
                        <div className="form-control w-1/2">
                            <label htmlFor="hrName" className="block mb-2 text-gray-700 font-medium">HR Name</label>
                            <input type="text" name="hrName" placeholder="e.g., Farhan Rahman" required className="input-field" />
                        </div>
                        <div className="form-control w-1/2">
                            <label htmlFor="hrEmail" className="block mb-2 text-gray-700 font-medium">HR Email</label>
                            <input type="email" name="hrEmail" placeholder="e.g., hr@company.com" required className="input-field" />
                        </div>
                    </div>

                    {/* Company Name & Logo */}
                    <div className="form-control">
                        <label htmlFor="company" className="block mb-2 text-gray-700 font-medium">Company Name</label>
                        <input type="text" name="company" placeholder="e.g., Favorite IT" required className="input-field" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="companyLogo" className="block mb-2 text-gray-700 font-medium">Company Logo URL</label>
                        <input type="url" name="companyLogo" placeholder="e.g., https://example.com/logo.png" required className="input-field" />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
                        Add Job
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddJob;
