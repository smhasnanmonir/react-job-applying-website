import React from "react";

const JobData = ({ job }) => {
  const { _id, company_name, logo, position, salary, jobType1, jobType2 } = job;
  return (
    <div className="p-2">
      <div className="bg-purple-50 p-8 rounded-lg h-[205px]">
        <img src={logo} alt="" />
        <h1 className="font-semibold mt-3">{position}</h1>
        <p>{company_name}</p>
        <div className="flex gap-3 mt-3">
          <p className="border-2 p-1 border-purple-700 rounded-md">
            {jobType1}
          </p>
          <p className="border-2 p-1 border-purple-700 rounded-md">
            {jobType2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobData;
