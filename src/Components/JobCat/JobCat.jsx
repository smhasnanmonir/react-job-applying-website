import React, { useEffect } from "react";

const JobCat = () => {
  return (
    <div className="grid place-items-center mt-10 md:mb-[45px] grid-cols-1">
      <div className="px-[25px] mb-[35px] text-center">
        <h1 className="text-2xl font-extrabold mb-4">Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 md:gap-8 md:mt-6 gap-[7px]">
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
