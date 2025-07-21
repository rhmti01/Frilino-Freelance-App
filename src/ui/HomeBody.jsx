import React from "react";
import { useTheme } from "../context/ThemeSwitchContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useUser from "../features/authentication/useUser";

function HomeBody() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { data: user } = useUser();

  if (!theme) return null;

  const onHandleCta = () => {
    if (user) {
      navigate(`/${user.role}/dashboard`);
    } else {
      navigate("/auth");
    }
  };

  return (
    <div className="w-full  flex justify-center items-center">
      <div className=" mt-10 max-w-7xl w-full flex justify-between items-center ">
        <div className="flex flex-col items-start  gap-y-2 pr-12 pb-16 ">
          <h1
            className=" text-secondary-800 dark:text-secondary-200 
           font-black text-[50px]  leading-20"
          >
            ثبت پروژه آسونه، <br /> گرفتنش هیجان‌انگیزتره!
          </h1>
          <p className="  inline-flex font-medium text-secondary-400 dark:text-dark-300 text-[18px] ">
            وقتی پروژه داری یا دنبال کاری، فریلینو بگو، خلاص!
            <img
              className=" size-7 mr-2 "
              src="/assets/images/smile-emoji.png"
              alt="smile emoji"
            />
          </p>
          <button onClick={() => onHandleCta()} className=" cta_btn">
            <img
              src="/assets/images/rocket.png"
              alt="start"
              className=" size-5 "
            />
            شروع کن !
          </button>
        </div>
        <video
          // remount video by theme changes!
          key={theme}
          autoPlay
          loop
          muted
          playsInline
          className="size-[650px] object-cover pt-10 "
        >
          <source src={`/assets/videos/Team-${theme}.mp4`} type="video/mp4" />
          مرورگر شما از ویدیو پشتیبانی نمی‌کند.
        </video>
      </div>
    </div>
  );
}

export default HomeBody;
