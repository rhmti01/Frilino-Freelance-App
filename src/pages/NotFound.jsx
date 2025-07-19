import { Home2 } from "iconsax-reactjs";
import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-7xl flex flex-col w-full ">
      <div className=" flex items-center justify-center  w-full h-[100vh] ">
        <div className="flex flex-col justify-center items-center mb-7">
          <img
            className=" scale-[80%] "
            src="/assets/images/not-found.png"
            alt="not-found"
          />
          <h1 className=" font-medium text-[20px] text-secondary-900 mt-3 ">
            صفحه مورد نظر شما یافت نشد!
          </h1>
          <a
            onClick={() => navigate("/")}
            className="backMainPage__btn flex items-center justify-center gap-x-2.5 "
          >
            بازگشت به صفحه اصلی
            <Home2
             className="size-6 mb-1 "
             variant="Broken"
             />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
