import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="grid place-items-center">
      <h1 className="text-center mt-10 text-4xl font-extrabold">
        Page Not Found
      </h1>
      <Link className="my-btn text-center mt-10" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
