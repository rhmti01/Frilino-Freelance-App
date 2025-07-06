import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className=" flex items-center justify-center  w-full h-[100vh] ">
      <div className="flex flex-col justify-center items-center mb-7">
        <img
          className=" scale-[85%] "
          src="assets/images/not-found.png"
          alt="not-found"
        />
        <h1 className=" font-medium text-[21px] text-secondary-900 mt-3 ">
          صفحه مورد نظر شما یافت نشد!
        </h1>
        <a 
        onClick={()=>navigate("/")}
        className="backMainPage__btn ">
          بازگشت به صفحه اصلی
        </a>
      </div>
    </div>
  );
}

export default NotFound;
