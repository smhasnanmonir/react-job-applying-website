import React, { useEffect } from "react";

const JobCat = () => {
  return (
    <div className="grid place-items-center mt-10 mb-[45px] text-left">
      <h1 className="text-2xl font-extrabold mb-4">Job Category List</h1>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-4 gap-8 mt-6">
        <div className="p-8 bg-violet-50 rounded-md">
          <img
            className="mb-5"
            src="https://i.ibb.co/Q6WdNy3/budget.png"
            alt=""
          />
          <p>Account & Finance</p>
          <p>300 Jobs Available</p>
        </div>
        <div className="p-8 bg-violet-50">
          <img
            className="mb-5"
            src="https://i.ibb.co/mcZWprv/creativity.png"
            alt=""
          />
          <p>Marketing</p>
          <p>150 Jobs Available</p>
        </div>
        <div className="p-8 bg-violet-50">
          <img className="mb-5" src="https://i.ibb.co/JC499PV/seo.png" alt="" />
          <p>Account & Finance</p>
          <p>300 Jobs Available</p>
        </div>
        <div className="p-8 bg-violet-50">
          <img
            className="mb-5"
            src="https://i.ibb.co/gJj1mp7/hardware.png"
            alt=""
          />
          <p>Engineering Job</p>
          <p>224 Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default JobCat;
