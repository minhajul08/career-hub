import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handelApplyJob = () => {
        saveJobApplication(idInt)
        toast('you have applied successfully');
    }

    return (

        <div>
            <div className="  bg-purple-300">
                <h2 className="text-center text-2xl mb-3">Job Details of: {id}</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-9">
                <div className=" md:col-span-6 space-y-5">
                    <h2 className=""> <span className="font-bold text-xl">Job Description:</span>{job.job_description}</h2>
                    <h2><span className="font-bold text-xl">Responsibility:</span>{job.job_responsibility}</h2>
                    <h2><span className="font-bold text-xl">Educational Requirements:</span>{job.educational_requirements}</h2>
                    <h2><span className="font-bold text-xl">Experiences:</span>{job.experiences}</h2>

                </div>
                <div className="bg-[#9873FF] md:col-span-3">
                    <h2 className="text-2xl">Job Details</h2>
                    <hr />
                    <div className="flex">
                        <h2 className="flex mr-3">< IoLocationSharp className="text-2xl" />{job.location} </h2>
                        <h2 className="flex "><HiOutlineCurrencyDollar className="text-2xl" />{job.salary}</h2>
                    </div>
                    <div className="flex">
                        <h2 className="flex mr-3">< IoLocationSharp className="text-2xl" />{job.location} </h2>
                        <h2 className="flex "><HiOutlineCurrencyDollar className="text-2xl" />{job.salary}</h2>
                    </div>
                    <h1>Contract Info:</h1>
                    <hr />
                    <div className="flex">
                        <h2 className="flex mr-3">< IoLocationSharp className="text-2xl" /> Phone: </h2>
                        <h2 className="flex "><HiOutlineCurrencyDollar className="text-2xl" />{job.contact_information.phone}</h2>
                    </div>
                    <div className="flex">
                        <h2 className="flex mr-3">< IoLocationSharp className="text-2xl" /> Email: </h2>
                        <h2 className="flex "><HiOutlineCurrencyDollar className="text-2xl" />{job.contact_information.email}</h2>
                    </div>
                    <div className="flex">
                        <h2 className="flex mr-3">< IoLocationSharp className="text-2xl" /> Address: </h2>
                        <h2 className="flex "><HiOutlineCurrencyDollar className="text-2xl" />{job.contact_information.address}</h2>
                    </div>
                    <div className=""><button onClick={handelApplyJob} className="btn btn-primary w-full">Apply Now</button></div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;