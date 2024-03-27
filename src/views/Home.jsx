import React from "react";
import Patients from "../components/Patients";

const Home = () => {
  return (
    <div>
      <h1 className="text-blue-800 text-6xl mt-10 font-bold text-center">
        GPITG
      </h1>
      <Patients />
    </div>
  );
};

export default Home;
