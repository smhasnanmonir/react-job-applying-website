import React from "react";

const Blogs = () => {
  return (
    <div className="px-[250px] mt-[50px] grid place-items-center">
      <div className="blog-css">
        <h1 className="text-2xl font-semibold">When we use Context Api</h1>
        <p>
          Context api can be used instead of props. We have to set props in
          every level to pass the data but if we use context api then we do not
          have to pass it in every level. Context api will pass the data in
          every level for us.
        </p>
      </div>
      <div className="blog-css">
        <h1 className="text-2xl font-semibold">What is useRef</h1>
        <p>
          useRef is a built-in hook that can be used to persist values between
          renders. It can store mutable value and it does not re-render if it
          gets updated. It can access dom element directly.
        </p>
      </div>
      <div className="blog-css">
        <h1 className="text-2xl font-semibold">What is custom react hook?</h1>
        <p>
          Custom react hook is a function that can be used for call other hooks.
          It is reuseable. It starts with "use". When a function needs to be
          used by multiple components then we can use custom hooks to avoid
          repeating code.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
