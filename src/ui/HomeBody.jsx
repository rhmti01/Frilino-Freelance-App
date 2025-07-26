import React from "react";
import { useTheme } from "../context/ThemeSwitchContext";
import { useNavigate } from "react-router-dom";
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
    <div className="w-full flex justify-center items-center xg:h-screen ">
      <div
        className=" xg:px-4 xl:px-10 2xl:px-3 pt-10 max-w-7xl w-full flex xg:flex-row mm:flex-col 
         mm:justify-start xg:justify-between items-center xx:pt-36 ww:pt-36 mm:pt-32 xg:pt-0 bg-secondary-100  dark:bg-transparent "
      >
        <div className="flex">
          <div
            className="flex flex-col  items-start  xl:gap-y-4
          xx:gap-y-3 ww:gap-y-4 xg:gap-y-3 xg:pr-12 xg:pb-4 
          mm:w-full xg:w-auto mm:gap-y-3.5  "
          >
            <h1
              className=" text-secondary-800 dark:text-secondary-200 
           font-black xg:text-[clamp(1.25rem,4vw,3.1rem)]  xg:leading-[70px] 
            xl:leading-20 xx:text-[clamp(2.6rem,4vw,3.1rem)] ww:leading-14 
            ww:text-[2.1rem] mm:text-[1.8rem] mm:leading-12 "
            >
              ثبت پروژه آسونه، <br /> گرفتنش هیجان‌انگیزتره!
            </h1>
            <p
              className=" xx:text-[clamp(0.7rem,2vw,1rem)] inline-flex items-center
              font-medium text-secondary-400 dark:text-dark-300 xx:mt-3
              xg:mt-0 ww:mt-5 mm:mt-4 ww:text-base mm:text-[15px] "
            >
              <span className="mm:hidden ww:inline ">
                وقتی پروژه داری یا دنبال کاری، فریلینو بگو، خلاص!
              </span>
              <span className=" text-wrap ww:hidden mm:inline-flex ">
                وقتی پروژه داری یا دنبال کاری، فریلینو بگو، خلاص!
              </span>
              <img
                className=" mm:size-5 xx:size-5.5 xg:size-6 xl:size-7 
                mm:mr-0.5 ww:mr-1 ww:mb-1 mm:mb-1  "
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
        </div>
        <video
          // remount video by theme changes!
          key={theme}
          autoPlay
          loop
          muted
          playsInline
          className=" ss: w-[calc(100vw-3rem)] ww:size-[28rem] xx:size-[32rem] 
          gg:size-[35rem] xg:size-[38rem] xl:size-[41rem] object-cover xg:pt-10 xg:pr-20 "
        >
          <source src={`/assets/videos/Team-${theme}.mp4`} type="video/mp4" />
          مرورگر شما از ویدیو پشتیبانی نمی‌کند.
        </video>
      </div>
    </div>
  );
}

export default HomeBody;
