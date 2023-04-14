import React, { useEffect, useState } from "react";
import { json, useLoaderData, useParams } from "react-router-dom";

const JobShowMore = () => {
  const jobApply = useLoaderData();
  console.log(jobApply);
  const {
    id,
    company_name,
    logo,
    position,
    salary,
    jobType1,
    jobType2,
    requirements,
    description,
    benefits,
  } = jobApply;
  return (
    <div className="mt-9">
      <div>
        <div className=""></div>
        <div className="p-11 bg-purple-200 rounded-lg w-[350px]">
          <h1 className="mb-3 text-2xl font-extrabold">Job Details</h1>
          <img src={logo} />
          <p className="mt-1 font-semibold">Company name: {company_name}</p>
          <p className="mt-1">Position: {position}</p>
          <p className="mt-1">Salary per year: {salary}</p>
          <p className="mt-1">
            Job Type: {jobType1} & {jobType2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobShowMore;
