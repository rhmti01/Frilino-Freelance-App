import React from "react";
import BrandLogo from "../ui/BrandLogo";

function Home() {
  return (
    <div className="mx-auto max-w-7xl flex flex-col w-full ">
      <div className=" flex items-center justify-center  w-full h-[100vh]  ">
        <BrandLogo scale="scale-150" />
      </div>
    </div>
  );
}

export default Home;
