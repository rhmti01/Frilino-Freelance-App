import { Home2 } from "iconsax-reactjs";
import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className=" flex items-center justify-center  w-full h-[100vh] 
     bg-secondary-0  dark:bg-dark-800/40">
        <div className="mx-auto max-w-7xl flex flex-col w-full   ">
        <div className="flex flex-col justify-center items-center mb-7">
          <img
            className=" xl:scale-[85%] xg:scale-[80%] vv:scale-[72%]
             xx:scale-[70%] ww:scale-[65%]  mm:scale-[70%]  "
            src="/assets/images/not-found.png"
            alt="not-found"
          />
          <h1 className=" font-medium ww:text-[16.5px] vv:text-[17px] xg:text-lg
           text-secondary-800 dark:text-secondary-300 mt-3 mm:text-base ">
            صفحه مورد نظر شما یافت نشد!
          </h1>
          <button
            onClick={() => navigate("/")}
            className="backMainPage__btn flex items-center
             justify-center xx:gap-x-2.5 mm:gap-x-2 "
          >
            بازگشت به صفحه اصلی
            <Home2
             className="size-6 mb-1 "
             variant="Broken"
             />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
