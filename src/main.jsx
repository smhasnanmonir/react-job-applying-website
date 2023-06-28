import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Blogs from "./Components/Blogs/Blogs";
import Jobs from "./Components/Jobs/Jobs";
import Statistics from "./Components/Statistics/Statistics";
import JobShowMore from "./Components/JobShowMore/JobShowMore";
import { getStoredCart } from "./Utils/fakeDB";
import { loadJobInfo } from "./loader/loadJobInfo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const res = await fetch("/data.json");
          const data = await res.json();
          return data;
        },
      },
      {
        path: "job",
        element: <Jobs></Jobs>,
        loader: loadJobInfo,
      },
      {
        path: "jobDetails/:jobID",
        element: <JobShowMore></JobShowMore>,
        loader: async ({ params }) => {
          const res = await fetch("/data.json");
          const data = await res.json();
          const job = data.find((info) => info.id == params.jobID);
          return job;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
