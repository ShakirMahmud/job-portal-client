import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyApplications = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/applications?email=${user?.email}`)
            .then((res) => setJobs(res.data));

    }, [user?.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/applications/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your application has been deleted.", "success");
                            const remainingJobs = jobs.filter((job) => job._id !== id);
                            setJobs(remainingJobs);
                        }
                    });
            }
        });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold text-center mb-6">My Applications</h1>

            {jobs.length === 0 ? (
                <p className="text-center text-gray-500">No applications found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead>
                            <tr className="bg-gray-100">
                                <th></th>
                                <th className="py-2 px-4 text-left border-b">Job Title</th>
                                {/* <th></th> */}
                                <th className="py-2 px-4 text-left border-b">Company Name</th>
                                <th className="py-2 px-4 text-left border-b">Current Status</th>

                                <th className="py-2 px-4 text-left border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job) => (
                                <tr key={job._id} className="hover:bg-gray-50 transition">
                                    <td className="py-2 px-4 border-b">
                                        <img
                                            src={job.company_logo}
                                            alt={job.company_name}
                                            className="h-10 w-10 object-contain rounded-full "
                                        />
                                    </td>

                                    <td className="py-2  border-b">{job.job_title}</td>
                                    <td className="py-2 px-4 border-b">{job.company_name}</td>
                                    <td className="py-2 px-4 border-b">{job.status}</td>
                                    <td className="py-2 px-4 border-b flex space-x-2">
                                        <button
                                            onClick={() => navigate(`/jobs/${job.job_id}`)}
                                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                                        >
                                            View Details
                                        </button>
                                        <button
                                            onClick={() => handleDelete(job._id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyApplications;
