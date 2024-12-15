import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/applications?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setJobs(data));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this application?");
    if (confirmDelete) {
      fetch(`http://localhost:5000/applications/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Application deleted successfully!");
            const remainingJobs = jobs.filter((job) => job._id !== id);
            setJobs(remainingJobs);
          }
        });
    }
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
                <th className="py-2 px-4 text-left border-b">Name</th>
                <th className="py-2 px-4 text-left border-b">Email</th>
                <th className="py-2 px-4 text-left border-b">Phone</th>
                <th className="py-2 px-4 text-left border-b">Experience</th>
                <th className="py-2 px-4 text-left border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job._id} className="hover:bg-gray-50 transition">
                  <td className="py-2 px-4 border-b">{job.applicant_name}</td>
                  <td className="py-2 px-4 border-b">{job.applicant_email}</td>
                  <td className="py-2 px-4 border-b">{job.applicant_phone}</td>
                  <td className="py-2 px-4 border-b">{job.applicant_experience} years</td>
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
