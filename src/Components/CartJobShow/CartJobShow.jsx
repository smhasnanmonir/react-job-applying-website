import React from "react";
import { Link } from "react-router-dom";

const CartJobShow = ({ job }) => {
  const { id, company_name, logo, position, salary, jobType1, jobType2 } = job;
  return (
    <div className="lg:px-[250px] mb-3">
      <div className="p-9 border-1 bg-red-300 md:w-[550px] rounded-lg">
        <img className="mt-5" src={logo} alt="" srcset="" />
        <p className="font-medium mt-5">{position}</p>
        <p>{company_name}</p>
        <div className="flex gap-3">
          <p>
            Job type: {jobType1} & {jobType2}
          </p>
        </div>
        <p className="mb-2">Salary: {salary}</p>
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          to={`/jobDetails/${id}`}
        >
          Show Details
        </Link>
      </div>
    </div>
  );
};

export default CartJobShow;
