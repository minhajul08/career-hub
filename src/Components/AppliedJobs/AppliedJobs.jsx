import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData ();

     const [appliedJobs, setAppliedJobs] =useState([])
    useEffect (() => {
        const storedJobIds = getStoredJobApplication ();
        if (jobs.length > 0){
            // const jobApplied = jobs.filter (job => storedJobIds.includes (job.id))
         const jobApplied = [];
         for (const id of storedJobIds){
            const job =jobs.find(job => job.id ===id);
            if (job) {
                jobApplied.push (job)
            }
         }

           setAppliedJobs (jobApplied)
        }
    } ,[])
    return (
        <div>
            <h2 className="text-2xl text-center">Jobs I Applied: {appliedJobs.length}</h2>
            <details className="dropdown">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>All</a></li>
    <li><a>Remote</a></li>
    <li><a>Onsite</a></li>
  </ul>
</details>
           <div>
            {
                appliedJobs.map (job =>  <div key={job.id} className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{job.job_title}</h2>
                  <p>{job.company_name}</p>
                  <div>
            <button className="px-5 py-2 border rounded border-[#7E90FE] font-extrabold mr-4 text-[#7E90FE]">{job.remote_or_onsite}</button>
            <button className="px-5 py-2 border rounded border-[#7E90FE] font-extrabold mr-4 text-[#7E90FE]">{job.job_type}</button>
          </div>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>)
            }
           </div>
        </div>
    );
};

export default AppliedJobs;