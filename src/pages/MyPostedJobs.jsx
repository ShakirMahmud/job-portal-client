import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, [user?.email]);

    const handleView = (id) => {
        console.log("Viewing job with ID:", id);
        // Navigate to job details page or show modal
    };

    const handleUpdate = (id) => {
        console.log("Updating job with ID:", id);
        // Add navigation or logic to update the job
    };

    const handleDelete = (id) => {
        console.log("Deleting job with ID:", id);
        // Logic for deleting the job
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">
                My Posted Jobs ({jobs.length})
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-200 px-4 py-2 text-center">Title</th>
                            <th className="border border-gray-200 px-4 py-2 text-center">Job Type</th>
                            <th className="border border-gray-200 px-4 py-2 text-center">Salary</th>
                            <th className="border border-gray-200 px-4 py-2 text-center">Deadline</th>
                            <th className="border border-gray-200 px-4 py-2 text-center">Apply Count</th>
                            <th className="border border-gray-200 px-4 py-2 text-center">View Applications</th>
                            <th className="border border-gray-200 px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job) => (
                            <tr key={job._id} className="hover:bg-gray-50">
                                {/* Job Title */}
                                <td className="border border-gray-200 px-4 py-2">
                                    {job.title}
                                </td>
                                
                                {/* Job Type */}
                                <td className="border border-gray-200 px-4 py-2">
                                    {job.jobType}
                                </td>
                                {/* Salary */}
                                <td className="border border-gray-200 px-4 py-2">
                                    {job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}
                                </td>
                                {/* Application Deadline */}
                                <td className="border border-gray-200 px-4 py-2">
                                    {job.applicationDeadline}
                                </td>
                                {/* Apply Count */}
                                <td className="border border-gray-200 px-4 py-2 text-center">
                                    {job.applicationCount || 0}
                                </td>
                                <td className="border border-gray-200 px-4 py-2 text-center">
                                    <button
                                    onClick={() => navigate(`/viewApplications/${job._id}`)}
                                    className='btn btn-link'>View Applications</button>
                                </td>
                                {/* Actions */}
                                <td className="border border-gray-200 px-4 py-2">
                                    <div className="flex gap-2">
                                        {/* View Button */}
                                        <button
                                            onClick={() => handleView(job._id)}
                                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                        >
                                            View
                                        </button>
                                        {/* Update Button */}
                                        <button
                                            onClick={() => handleUpdate(job._id)}
                                            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                        >
                                            Update
                                        </button>
                                        {/* Delete Button */}
                                        <button
                                            onClick={() => handleDelete(job._id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;
