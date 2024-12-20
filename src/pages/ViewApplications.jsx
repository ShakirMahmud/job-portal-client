import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
    const applications = useLoaderData();

    const handleContact = (email, phone) => {
        alert(`Contact the applicant via:\nEmail: ${email}\nPhone: ${phone}`);
    };

    const handleViewResume = (resumeLink) => {
        window.open(resumeLink, "_blank");
    };

    const handleStatusUpdate = (e, id) => {
        console.log(e.target.value, id)
        const data = {
            status: e.target.value
        };
        fetch(`https://job-portal-server-shakir.vercel.app/applications/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Status updated successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    })
                }
            })
            .catch((error) => {
                console.error("Error updating status:", error);
            });
    };

    return (
        <div className="container mx-auto p-4">
            {/* Title */}
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Applications ({applications.length})
            </h2>

            {/* Responsive Table */}
            <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse border border-gray-200">
                    {/* Table Header */}
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Phone</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Experience (yrs)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Change status</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {applications.map((app) => (
                            <tr key={app._id} className="hover:bg-gray-50">
                                {/* Applicant Name */}
                                <td className="border border-gray-300 px-4 py-2">
                                    {app.applicant_name}
                                </td>
                                {/* Email */}
                                <td className="border border-gray-300 px-4 py-2">
                                    {app.applicant_email}
                                </td>
                                {/* Phone */}
                                <td className="border border-gray-300 px-4 py-2">
                                    {app.applicant_phone}
                                </td>
                                {/* Experience */}
                                <td className="border border-gray-300 px-4 py-2">
                                    {app.applicant_experience}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <select name="status"
                                    onChange={(e)=>handleStatusUpdate(e, app._id)}
                                    defaultValue={app.status || 'Change Status'}
                                    className="input-field">
                                        <option value="underReview">Change Status</option>
                                        <option value="underReview">Under Review</option>
                                        <option value="setInterview">Set Interview</option>
                                        <option value="hired">Hired</option>
                                        <option value="rejected">Rejected</option>
                                    </select>
                                </td>
                                {/* Actions */}
                                <td className="border border-gray-300 px-4 py-2">
                                    <div className="flex flex-wrap gap-2">
                                        {/* LinkedIn */}
                                        <a
                                            href={app.applicant_linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                        >
                                            LinkedIn
                                        </a>
                                        {/* GitHub */}
                                        <a
                                            href={app.applicant_github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800"
                                        >
                                            GitHub
                                        </a>
                                        {/* View Resume */}
                                        <button
                                            onClick={() => handleViewResume(app.applicant_resume)}
                                            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                        >
                                            View Resume
                                        </button>
                                        {/* Contact */}
                                        <button
                                            onClick={() =>
                                                handleContact(app.applicant_email, app.applicant_phone)
                                            }
                                            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                        >
                                            Contact
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

export default ViewApplications;
