import React from "react";
import { useTheme } from "../context/ThemeSwitchContext";

function HomeBody() {
  const { theme } = useTheme();

  if (!theme) return null;

  return (
    <div className="w-full  flex justify-center items-center">
      <div className="  mt-20 max-w-7xl w-full flex justify-between items-center ">
        <div className="flex flex-col gap-y-5 mb-36 pr-9 ">
          <h1 className=" text-secondary-800 dark:text-dark-0 font-black text-[52px]  leading-20">
            ثبت پروژه آسونه، <br /> گرفتنش هیجان‌انگیزتره!
          </h1>
          <p className=" inline-flex font-medium text-secondary-400 dark:text-dark-300 text-[20px] ">
            وقتی پروژه داری یا دنبال کاری، فریلینو بگو، خلاص!
            <img 
            className=" size-7 mr-2 "
            src="/assets/images/smile-emoji.png"
             alt="smile emoji" />
          </p>
        </div>
        <video
          // remount video by theme changes!
          key={theme}
          autoPlay
          loop
          muted
          playsInline
          className="size-[700px] object-cover"
        >
          <source src={`/assets/videos/team-${theme}.mp4`} type="video/mp4" />
          مرورگر شما از ویدیو پشتیبانی نمی‌کند.
        </video>
      </div>
    </div>
  );
}

export default HomeBody;
