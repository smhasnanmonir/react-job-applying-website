import React from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../../Utils/fakeDB";
import CartJobShow from "../CartJobShow/CartJobShow";

const Jobs = () => {
  const { initialCart } = useLoaderData();

  console.log(initialCart);
  return (
    <div className="flex min-h-screen justify-start">
      <div className="flex flex-col max-w-3xl p-6 space-y-3">
        <h2>{initialCart.length ? "Added Jobs" : "No job is added"}</h2>

        <div className="grid md:grid-cols-2 grid-cols-1">
          {initialCart.map((job) => (
            <CartJobShow key={job.id} job={job}></CartJobShow>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
