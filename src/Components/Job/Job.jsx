import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
const Job = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,location,job_type,salary} =job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="px-5 py-2 border rounded border-[#7E90FE] font-extrabold mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
            <button className="px-5 py-2 border rounded border-[#7E90FE] font-extrabold mr-4 text-[#7E90FE]">{job_type}</button>
          </div>
          <div className="flex  my-4">
          <h2 className="flex mr-4">< IoLocationSharp className="text-2xl" />{location} </h2>
          <h2 className="flex mr-2"><HiOutlineCurrencyDollar className="text-2xl" />{salary}</h2>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default Job;