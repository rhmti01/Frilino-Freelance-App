import React from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import { Home2} from "iconsax-reactjs";

function NotAccess() {
  const navigate = useNavigate();
  const { data: user } = useUser();
  const name = user?.name.split(" ").at(0);
  console.log(name);

  return (
    <div className=" bg-secondary-0 dark:bg-dark-900  mx-auto max-w-7xl flex flex-col w-full ">
      <div className=" flex items-center justify-center  w-full h-[100vh] ">
        <div className="flex flex-col justify-center items-center mb-7">
          <img
            className=" w-[520px] "
            src="/assets/images/not-access.png"
            alt="not-found"
          />
          <h1 className=" text-center font-medium text-[19px] text-secondary-700 dark:text-secondary-400 mt-3 ">
            <span className=" text-secondary-900 dark:text-secondary-200 ">
              {" "}
              {name} عزیز ,
            </span>
            <br />
            دسترسی شما به این صفحه محدود شده است!
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

export default NotAccess;
