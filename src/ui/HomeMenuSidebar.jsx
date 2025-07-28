import React from "react";
import BrandLogo from "./BrandLogo";
import { IoClose } from "react-icons/io5";
import {
  ChatBubbleBottomCenterTextIcon,
  LightBulbIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import HeaderItem from "./HeaderItem";

function HomeMenuSidebar({onClose}) {
  return (
    <div className="flex flex-col w-full items-start justify-center ">
      <div className="flex justify-between w-full ">
        <BrandLogo scale="scale-60" forceShowText={true} />
        <button onClick={onClose}>
          <IoClose className=" mm:size-7 ww:size-8 text-slate-600 cursor-pointer " />
        </button>
      </div>
      <span className="block w-full h-[2px] bg-secondary-200 dark:bg-dark-600"></span>
      <ul className=" w-full flex flex-col justify-start gap-y-5 mt-7 ">
        <HeaderItem
          title="راهنما"
          icon={
            <ChatBubbleBottomCenterTextIcon className=" size-5 stroke-2 stroke-current/75 mb-0.5" />
          }
        />
        <HeaderItem
          title="درباره ما"
          icon={
            <LightBulbIcon className=" size-5 stroke-2 stroke-current/75 mb-0.5 " />
          }
        />
        <HeaderItem
          title="ارتباط با ما"
          icon={
            <PhoneIcon className=" size-5 stroke-2 stroke-current/75 mb-0.5 " />
          }
        />
      </ul>
    </div>
  );
}

export default HomeMenuSidebar;
