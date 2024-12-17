import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleApply = (e) => {
        e.preventDefault();
        const form = e.target;

        // Accessing input values (example)
        const applicantName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        const experience = form.experience.value;
        const about = form.about.value;
        const agree = form.agree.checked;

        const jobApplication = {
            job_id: id,
            applicant_name: applicantName,
            applicant_email: email,
            applicant_phone: phone,
            applicant_linkedin: linkedin,
            applicant_github: github,
            applicant_resume: resume,
            applicant_experience: experience,
            applicant_about: about,
            agree: agree,
        };

        fetch("http://localhost:5000/applications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jobApplication),
        })
            .then((response) => response.json())
            .then((data) => {
                Swal.fire({
                    icon: "success",
                    title: "Application submitted successfully!",
                    showConfirmButton: true,
                    confirmButtonText: "OK",
                    timer: 1500,
                });
                // navigate("/myApplications");
            })
            .catch((error) => {
                console.error("Error submitting job application:", error);

            })

    };

    return (
        <div className="flex justify-center items-center min-h-screen px-4 py-8 bg-gray-50">
            {/* Form Container */}
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-semibold text-gray-800">Apply for the Job</h1>
                    <p className="text-gray-500 mt-1">Provide the necessary details to proceed with your application.</p>
                </div>

                {/* Form */}
                <form onSubmit={handleApply} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                        <h2 className="text-lg font-medium text-gray-700 mb-2">Personal Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    defaultValue={user?.displayName}
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    defaultValue={user?.email}
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-gray-700 mb-1 font-medium">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    placeholder="+123 456 7890"
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Professional Links */}
                    <div>
                        <h2 className="text-lg font-medium text-gray-700 mb-2">Professional Links</h2>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="linkedin" className="block text-gray-700 mb-1 font-medium">
                                    LinkedIn URL
                                </label>
                                <input
                                    type="url"
                                    name="linkedin"
                                    id="linkedin"
                                    placeholder="https://www.linkedin.com/in/your-profile"
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="github" className="block text-gray-700 mb-1 font-medium">
                                    GitHub URL
                                </label>
                                <input
                                    type="url"
                                    name="github"
                                    id="github"
                                    placeholder="https://github.com/your-profile"
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="resume" className="block text-gray-700 mb-1 font-medium">
                                    Resume Link
                                </label>
                                <input
                                    type="url"
                                    name="resume"
                                    id="resume"
                                    placeholder="https://your-resume-link.com"
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Experience */}
                    <div>
                        <label htmlFor="experience" className="block text-gray-700 mb-2 font-medium">
                            Total Experience (in years)
                        </label>
                        <input
                            type="number"
                            name="experience"
                            id="experience"
                            min="0"
                            placeholder="e.g., 3"
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* About Yourself */}
                    <div>
                        <label htmlFor="about" className="block text-gray-700 mb-2 font-medium">
                            About Yourself
                        </label>
                        <textarea
                            name="about"
                            id="about"
                            rows="4"
                            placeholder="Tell us something about yourself..."
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    {/* Agreement Checkboxes */}
                    <div className="space-y-2">
                        <div>
                            <input
                                type="checkbox"
                                name="agree"
                                id="agree"
                                className="mr-2 focus:ring-blue-500"
                                required
                            />
                            <label htmlFor="agree" className="text-gray-700">
                                I agree to the terms and conditions.
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="remote"
                                id="remote"
                                className="mr-2 focus:ring-blue-500"
                            />
                            <label htmlFor="remote" className="text-gray-700">
                                I am open to working remotely.
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApply;
