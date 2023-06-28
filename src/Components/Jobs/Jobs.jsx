import React from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../../Utils/fakeDB";
import CartJobShow from "../CartJobShow/CartJobShow";

const Jobs = () => {
  const { initialCart } = useLoaderData();

  console.log(initialCart);
  return (
    <div className="md:max-w-6xl">
      <h2 className="text-xl my-3 text-center">
        {initialCart.length ? "Added Jobs" : "No job is added"}
      </h2>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
        {initialCart.map((job) => (
          <CartJobShow key={job.id} job={job}></CartJobShow>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
